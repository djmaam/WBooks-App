import React, {
  useState,
  useEffect,
  useMemo,
  useReducer,
  createContext,
} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from '../Screens/Splash';
import RootStackScreen from './RootStack';
import {GenerateToken} from '../Utils/GenerateToken';
import * as Service from '../Services';

import {COLORS} from '../Configs/constants';

export const AuthContext = createContext({});

export default function Providers() {
  const [userdata, setUserdata] = useState(null);

  const initialLoginState = {
    isLoading: true,
    user_token: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          user_token: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          user_token: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          user_token: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => {
    return {
      signIn: async (values) => {
        let {first_name, last_name, email, age} = values;
        try {
          const {data} = await Service.SIGN_IN({
            first_name,
            last_name,
            email,
            age,
          });
          console.log('SIGN_IN DATA: ', data);
          let user_token = GenerateToken();
          console.log('USER_TOKEN: ', user_token);
          storeUserData({first_name, last_name, user_token});
          setUserData(first_name, last_name, user_token);
          dispatch({type: 'REGISTER', token: user_token});
        } catch (error) {
          console.log('SIGN_IN ERROR: ', error);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('@first_name');
          await AsyncStorage.removeItem('@last_name');
          await AsyncStorage.removeItem('@user_token');
        } catch (error) {
          console.log('SIGN_OUT ERROR: ', error);
        }
        dispatch({type: 'LOGOUT'});
      },
    };
  }, []);

  const storeUserData = async ({first_name, last_name, user_token}) => {
    try {
      await AsyncStorage.setItem('@first_name', first_name);
      await AsyncStorage.setItem('@last_name', last_name);
      await AsyncStorage.setItem('@user_token', user_token);
    } catch (error) {
      console.error('STORING_DATA ERROR: ', error);
    }
  };

  const setUserData = (first_name, last_name, user_token) => {
    setUserdata({
      first_name: first_name,
      last_name: last_name,
      user_token: user_token,
    });
  };

  useEffect(() => {
    setTimeout(async () => {
      let user_token = null;
      let first_name = null;
      let last_name = null;
      try {
        user_token = await AsyncStorage.getItem('@user_token');
        first_name = await AsyncStorage.getItem('@first_name');
        last_name = await AsyncStorage.getItem('@last_name');
      } catch (error) {
        console.log('RETRIVING_DATA ERROR: ', error);
      }
      setUserData(first_name, last_name, user_token);
      dispatch({type: 'RETRIEVE_TOKEN', token: user_token});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{authContext, userdata}}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} />
        <RootStackScreen user_token={loginState.user_token} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

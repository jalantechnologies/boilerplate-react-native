import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { AuthenticatedStackParamsList, AuthenticatedTabParamsList } from '../../@types/navigation';
import { Spinner } from '../components';
import { useAccountContext, useAuthContext } from '../contexts';
import { Dashboard, RegistrationScreen } from '../screens';

import ProfileStack from './profile';

const Stack = createStackNavigator<AuthenticatedStackParamsList>();
const Tab = createBottomTabNavigator<AuthenticatedTabParamsList>();

const getTabBarIcon = (routeName: string) => {
  return ({ color, size }: { color: string; size: number }) => {
    let iconName: string;
    switch (routeName) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Profile':
        iconName = 'person';
        break;
      default:
        iconName = 'home';
    }
    return <Icon name={iconName} color={color} size={size} />;
  };
};

const AuthenticatedStack = () => {
  const { isNewUser, isAccountLoading, getAccountDetails } = useAccountContext();
  const { logout } = useAuthContext();
  const { colors } = useTheme();

  useEffect(() => {
    getAccountDetails().catch(() => {
      logout();
    });
  }, []);

  if (isAccountLoading) {
    return <Spinner size={'large'} />;
  }

  return isNewUser ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: getTabBarIcon(route.name),
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.muted[400],
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;

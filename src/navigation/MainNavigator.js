// navigation/MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AddTournamentScreen from '../screens/AddTournamentScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import LiveScreen from '../screens/LiveScreen';
import StatsScreen from '../screens/StatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewGameScreen from '../screens/NewGameScreen'
import AddPlayersScreen from '../screens/AddPlayersScreen';
import TossScreen from '../screens/TossScreen';
import OpeningPlayersScreen from '../screens/OpeningPlayersScreen';
import ScoringScreen1 from '../screens/ScoringScreen1';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabIcon = ({ name, focused, color }) => {
  const iconName = focused ? name : `${name}-outline`;
  return <Ionicons name={iconName} size={24} color={color} />;
};

// Tab Navigator Component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      swipeEnabled={true}
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarShowIcon: true,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 0,
        },
        tabBarItemStyle: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 8,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 75,
          paddingBottom: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="home" focused={focused} color={color} />
          ),
        }}
      />
      {/* Uncomment these when you have the components ready */}
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="compass" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="radio" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="analytics" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="person" focused={focused} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main Stack Navigator
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // We'll handle headers within individual screens
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
      />
      <Stack.Screen
        name="AddTournament"
        component={AddTournamentScreen}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
       <Stack.Screen
        name="NewGame"
        component={NewGameScreen}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
      <Stack.Screen
        name="AddPlayers"
        component={AddPlayersScreen}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
       <Stack.Screen
        name="TossScreen"
        component={TossScreen}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
       <Stack.Screen
        name="OpeningPlayersScreen"
        component={OpeningPlayersScreen}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
      <Stack.Screen
        name="ScoringScreen1"
        component={ScoringScreen1}
        options={{
          presentation: 'modal', // This gives a nice modal presentation
        }}
      />
      
    </Stack.Navigator>
  );
};

export default MainNavigator;
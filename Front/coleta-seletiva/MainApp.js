import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mapa from './screens/Mapa';
import Screen3 from './screens/Screen3';
import Regiao from './screens/Regiao';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Mapa') {
            iconName = focused
              ? 'pin'
              : 'pin-outline';
          } else if (route.name === 'Screen3') {
            iconName = focused 
              ? 'menu'
              : 'menu-outline';
          } else if (route.name === 'Regiao') {
            iconName = focused 
            ? 'map'
            : 'map-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'white', // Cor dos ícones e texto ativos
        tabBarInactiveTintColor: 'black', // Cor dos ícones e texto inativos
        tabBarStyle: { backgroundColor: '#73A252', }, // Cor de fundo da barra de navegação
        headerShown: false,

      })}
    >
      <Tab.Screen name="Mapa" component={Mapa} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Regiao" component={Regiao} />
    </Tab.Navigator>
  );
};

export default MainApp;
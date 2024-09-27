import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
    
  )
}

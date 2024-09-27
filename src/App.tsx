import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';
// import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
// import { ProfileScreen } from './presentation/screens/profile/ProfileScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <SideMenuNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
    
  )
}

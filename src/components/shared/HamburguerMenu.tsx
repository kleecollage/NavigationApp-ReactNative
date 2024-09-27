import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  const menu = useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      }
    });
  }, []);
  
  return ( <></> )
}

import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable } from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  const menu = useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name='musical-notes-outline' color='orange' size={25} />
        </Pressable>
      )
    });
  }, []);
  
  return ( <></> )
}

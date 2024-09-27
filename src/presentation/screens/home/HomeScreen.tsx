import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../../components/shared/PrimaryButton'
import type { RootStackParams } from '../../routes/StackNavigator'
import { IonIcon } from '../../../components/shared/IonIcon'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{paddingLeft: 5}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name='cog-sharp' color='purple' size={25} />
        </Pressable>
      )
    })
  }, [])
  

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label='Productos' onPress={() => navigation.navigate('Products')} />
      <PrimaryButton label='Settings' onPress={() => navigation.navigate('Settings')} />
      <PrimaryButton label='Profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

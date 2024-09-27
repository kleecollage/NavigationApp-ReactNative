import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions= {{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
          alignContent: 'flex-end'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          borderColor: 'transparent'
        },
        tabBarStyle:{
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title:'Tab 1', tabBarIcon: () => (<IonIcon name='diamond-sharp' color='red' size={25} />) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title:'Tab 2', tabBarIcon: () => ( <IonIcon name='bug-sharp' color='green' size={25} />) }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{ title:'Tab 3', tabBarIcon: ({ color }) => (<Text style={{ color }}>Stack</Text>) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}
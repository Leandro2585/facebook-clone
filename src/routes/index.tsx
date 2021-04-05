import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

const App = createStackNavigator()

const AppRoute: React.FC = () => {
  return (
  <NavigationContainer>
    <App.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#FFFFFF'
      }
    }}>
      <App.Screen name="Home" component={Home}/>
    </App.Navigator>
  </NavigationContainer>
  )
}

export default AppRoute

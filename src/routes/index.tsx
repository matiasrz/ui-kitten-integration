import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';

import Profile from 'screens/Profile';
import Explore from 'screens/Explore';
import Connect from 'screens/Connect';
import { Container } from 'atoms/Container';
// import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

// export const Navigation = () => {

//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   return (
//     <BottomNavigation
//       selectedIndex={selectedIndex}
//       onSelect={index => setSelectedIndex(index)}
//     >
//       <BottomNavigationTab title='USERS'/>
//       <BottomNavigationTab title='ORDERS'/>
//       <BottomNavigationTab title='TRANSACTIONS'/>
//     </BottomNavigation>
//   );
// };

const Button = styled.TouchableOpacity``

const Tab = createMaterialTopTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'
      tabBarPosition="bottom" tabBar={({ state, navigation }) => {
        return (
          <>
            <Container position='absolute' backgroundColor='transparent' bottom='6%'
              flexDirection='row' justifyContent='space-between' alignItems='center'
              width='100%' paddingTop='5%' paddingRight='5%' paddingBottom='3%' paddingLeft='5%'
              style={{ zIndex: 1 }}
            >
              {state.routes.map((route, index) => (
                <Button onPress={() => navigation.navigate(route.name)} key={`tab-button-${index}`}>
                  <Text style={{ color: 'white' }}>{route.name}</Text>
                </Button>
              ))}
            </Container>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.2)', 'transparent']}
              start={{ x: 0.5, y: 0.1 }}
              style={{ position:'absolute', bottom: '6%', width: '100%', height: '5%', zIndex: 0 }}
            />
          </>
        )
      }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Connect" component={Connect} />
    </Tab.Navigator>
  </NavigationContainer>
);

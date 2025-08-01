import { StyleSheet } from 'react-native';

import MainNavigator from '@/components/MainNavigator';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';


export default function HomeScreen() {
  return (


    <NavigationIndependentTree>
        <NavigationContainer>
          <MainNavigator></MainNavigator>
      </NavigationContainer>
    </NavigationIndependentTree>
    
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

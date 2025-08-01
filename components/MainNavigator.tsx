
import ChatScreen from '@/screens/ChatScreen';
import ImageScreen from '@/screens/ImageScreen';
import SettingScreen from '@/screens/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MainNavigator(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen}  options={
                {
                    tabBarIcon: ({size, color})=> {
                            return (
                            <Entypo name="chat" size={size} color={color} />
                        )   
                    }
                    
                }
            }/>
            <Tab.Screen name="Image" component={ImageScreen} options={
                {
                    tabBarIcon: ({size, color})=> {
                            return (
                            <Entypo name="image" size={size} color={color} />
                        )   
                    }
                    
                }
            }
            />
            <Tab.Screen name="Settings" component={SettingScreen} options={
                {
                    tabBarIcon: ({size, color})=> {
                            return (
                            <Feather name="settings" size={size} color={color} />
                        )   
                    }
                    
                }
            }
            />

        </Tab.Navigator>
    );

}
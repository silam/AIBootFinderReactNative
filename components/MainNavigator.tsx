
import ChatScreen from '@/screens/ChatScreen';
import ImageScreen from '@/screens/ImageScreen';
import SettingScreen from '@/screens/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainNavigator(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Image" component={ImageScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />

        </Tab.Navigator>
    );

}
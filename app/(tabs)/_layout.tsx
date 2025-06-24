import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'


const TabLayout = () => {
  return (
    <Tabs screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}>
<Tabs.Screen name = "index"  options = {{title : 'home', 
    tabBarIcon:({color, focused})=> (
        <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} /> 
    )
}} /> 
<Tabs.Screen name = "about"  options = {{title : 'about', 
tabBarIcon:({color, focused})=> (
        <Ionicons name={focused ? 'information' : 'information-circle-outline'} color={color} size={24} /> 
    )}} /> 
    </Tabs>
)}

export default TabLayout
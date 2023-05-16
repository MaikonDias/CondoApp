import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserHome from "./UserHome";
import NovaReserva from "./novaReserva";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Logout } from '../../actions';
import { BackHandler } from 'react-native';

const Drawer = createDrawerNavigator();

function UserDrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#19547B',
                    opacity: 0.92
                }
            }}
            drawerContent={props => < CustomDrawerContent {...props} />}>
            <Drawer.Screen
             options={{
                headerShown: false, fontWeight: 'bold', drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF', drawerIcon: () => (
                    <FontAwesome5 name="calendar-day" size={25} color={'white'} />
                ),
            }}
            name="Reservas realizadas" 
            component={UserHome} />

            <Drawer.Screen
             options={{
                headerShown: false, fontWeight: 'bold', drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF', drawerIcon: () => (
                    <FontAwesome5 name="plus-circle" size={25} color={'white'} />
                ),
            }}
            name="Solicitar Reserva" 
            component={NovaReserva} />
        </Drawer.Navigator >
    );
}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="logout"
                labelStyle={{ color: '#FFF', fontWeight: 'bold' }}
                icon={() => <FontAwesome5 name="sign-out-alt" size={25} color={'white'} />}
                onPress={() => { Logout();
                    BackHandler.exitApp(); }} />
        </DrawerContentScrollView>
    );
}

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <UserDrawerNavigator />
        </NavigationContainer>
    );
}
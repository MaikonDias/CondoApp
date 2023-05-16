import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AdminHome from './AdminHome';
import novoAmbiente from './NovoAmbiente';
import gerenciarAmbientes from './GerenciarAmbientes';
import listarReservas from './ListarReservas';
import { Logout } from '../../actions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BackHandler } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="logout"
                labelStyle={{ color: '#FFF', fontWeight: 'bold' }}
                icon={() => <FontAwesome5 name="sign-out-alt" size={25} color={'white'} />}
                onPress={() => {
                    Logout();
                    BackHandler.exitApp();
                }} />
        </DrawerContentScrollView>
    );
}

function AdminDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Visualizar Ambientes"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#19547B',
                    opacity: 0.92
                }
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            {/* <Drawer.Screen name="Visualizar Ambientes"
                component={AdminHome}
                options={{
                    headerShown: false, fontWeight: 'bold', drawerActiveTintColor: '#FFF',
                    drawerInactiveTintColor: '#FFF', drawerIcon: () => (
                        <FontAwesome5 name="clipboard-list" size={25} color={'white'} />
                    ),
                }}
            /> */}

            <Drawer.Screen name="Ambientes"
                component={gerenciarAmbientes}
                options={{
                    headerShown: false, drawerActiveTintColor: '#FFF'
                    , drawerInactiveTintColor: '#FFF'
                    , fontWeight: 'bold',
                    drawerIcon: () => (
                        <FontAwesome5 name="building" size={25} color={'white'} />),
                }}
            />

            <Drawer.Screen name="Novo Ambiente"
                component={novoAmbiente}
                options={{
                    headerShown: false, drawerActiveTintColor: '#FFF'
                    , drawerInactiveTintColor: '#FFF'
                    , fontWeight: 'bold',
                    drawerIcon: () => (
                        <FontAwesome5 name="plus-circle" size={25} color={'white'} />),
                }}
            />

            <Drawer.Screen name="Listar Reservas"
                component={listarReservas}
                options={{
                    headerShown: false, drawerActiveTintColor: '#FFF'
                    , drawerInactiveTintColor: '#FFF'
                    , fontWeight: 'bold',
                    drawerIcon: () => (
                        <FontAwesome5 name="list" size={25} color={'white'} />),
                }}
            />

        </Drawer.Navigator>
    );
}

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <AdminDrawerNavigator />
        </NavigationContainer>
    );
}
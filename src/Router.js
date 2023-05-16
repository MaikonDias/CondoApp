import { createAppContainer } from 'react-navigation';
import{ createStackNavigator } from 'react-navigation-stack';
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import UserDrawer from "./pages/User/UserDrawer";
import AdminDrawer from './pages/Admin/AdminDrawer';
import AdminHome from './pages/Admin/AdminHome';
import GerenciarAmbientes from './pages/Admin/GerenciarAmbientes';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: TelaLogin,
    navigationOptions: {
      headerShown: false
    },

  },
  'Cadastro': {
    screen: TelaCadastro,
    navigationOptions: {
      title: "Cadastrar Morador",
    },
  },
    'Admin':{
        screen: AdminDrawer,
        navigationOptions: {
          headerShown: false,
        },
    },'GerenciarAmbientes':{
      screen: GerenciarAmbientes,
    },
    'User': {
        screen: UserDrawer,
        navigationOptions:{
          headerShown: false
        }
    }
}, {
  defaultNavigationOptions:{
    title : "CondoApp",
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#86A4B6'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 22,
    },
  },
});



const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
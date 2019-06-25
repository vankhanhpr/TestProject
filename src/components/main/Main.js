import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

import CL from '../../assets/constants/Constant';

import Detail from '../detail/Detail';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from 'react-native-drawer'
import Home from '../home/Home';
import Setting from '../setting/Setting';
import Profile from '../profile/Profile';
import Cart from '../cart/Cart';
import User from '../drawer/Drawer';


var { height,width } = Dimensions.get('window');
//bottom navigation
const temp = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                </View>),
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'md-settings'} />
                </View>),
        }
    }
    ,
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-albums'} />
                </View>),
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
                </View>),
        }
    },
}, {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
    }
);
const Appcontainer = createAppContainer(temp);

const MainNavigator1 = createStackNavigator({
    Home: {
        screen: temp,
        navigationOptions: {
            header: null,
        },
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            header: null,
        },
    },
});
const MainNavigator = createAppContainer(MainNavigator1);


export default class Main extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    content={<User />}
                    openDrawerOffset={0.4}
                    tapToClose={true}
                    closedDrawerOffset={-3}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ height: height / 10, backgroundColor: '#3BAD87', padding: 10, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                                <Ionicons name={'ios-menu'} size={30} color={CL.COLOR.bg_button} />
                            </TouchableOpacity>

                            <Text style={{ color:CL.COLOR.clwhite , fontSize: 20, paddingLeft: 10,width:width*0.8,textAlign:'center' }}> {CL.T.namepj} </Text>
                            <Image
                                source={require('../../assets/img/ic_logo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        </View>

                        {/* <Appcontainer /> */}
                        <MainNavigator />

                    </View>
                </Drawer>
            </View >
        );
    }
}

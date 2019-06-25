import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
var { height, width } = Dimensions.get('window');
export default class Drawer extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <EvilIcons name={'user'} size={100} color='#333333' style={{ textAlign: "center" }} />
                <View style={{ backgroundColor: '#3BAD87' }}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: "center", width: width * 0.6 }}>Van Khanh Nguyen</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text numberOfLines={2} style={{ color: 'white', fontSize: 14, textAlign: 'center',width: width * 0.6  }}>khanhnv@hcmute.edu.vn</Text>
                    </View>
                </View>
            </View>
        );
    }
}
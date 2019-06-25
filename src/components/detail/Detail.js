import React from 'react';
import {View,Text} from 'react-native';
import STYLE from './Style';

export default class Detail extends React.Component{
    render (){
        return (
            <View style={STYLE.mainf}>
                <Text>Tab detal</Text>
            </View>
        );
    }
}
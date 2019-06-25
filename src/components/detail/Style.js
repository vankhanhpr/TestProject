import {StyleSheet,Dimensions} from 'react-native';
var { height,width } = Dimensions.get('window');
const StyleCommon = StyleSheet.create({
    mainf: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:'white'
    },
    rowname:{
        width: width*0.5,
    }
    
});
export default StyleCommon;
import React from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions, Image, Button } from 'react-native';
import Dialog from "react-native-dialog";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Detail from '../detail/Detail';
import CONSTANTS from '../../assets/constants/Constant';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
var { height, width } = Dimensions.get('window');


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    state = {
        dialogVisible: false
    };
    componentWillMount() {
        this.getMoviesFromApiAsync()
    }

    getMoviesFromApiAsync = () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //dialog
    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleDelete = () => {
        this.setState({ dialogVisible: false });
    };
    //end edialog
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View style={[styles.body]}>
                            <View style={{ width: width * 0.45 }}>
                                <Image
                                    source={require('../../assets/img/ic_coffe.jpg')}
                                    style={styles.imgprd}
                                />
                            </View>
                            <View style={{ width: width * 0.55 }}>
                                <Text style={{ flex: 1, flexDirection: 'row' }}>
                                    {CONSTANTS.T.n_name}
                                    <Text style={[styles.nameit]}>
                                        {item.title}
                                    </Text>
                                </Text>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14 }}>{CONSTANTS.T.n_price}</Text>
                                    <Text style={{ fontWeight: '600', paddingRight: 10, fontSize: 14 }}>
                                        {item.releaseYear}
                                    </Text>
                                    <Text style={styles.oldprice}>
                                        12,000
                                    </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text
                                        style={styles.bnt_detail}
                                        //onPress={this.showDialog}
                                         onPress={() => {navigate('Detail')}}
                                        title='View Detail'>
                                        View Detail
                                    </Text>
                                    <EvilIcons onPress={this.showDialog} name={'cart'} size={30} color={CONSTANTS.COLOR.bg_button} style={styles.ic_cart} />
                                </View>

                            </View>
                        </View>}
                    keyExtractor={({ id }, index) => id}
                    style={{ flex: 1 }}
                />
                {/* //dialog */}
                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Thêm vào giỏ hàng</Dialog.Title>
                    <Dialog.Description>
                        Bạn có muốn thêm sản phẩm này vào giỏ hàng?
                    </Dialog.Description>
                    <Dialog.Button label="Hủy" onPress={this.handleCancel} />
                    <Dialog.Button label="Đồng ý" onPress={this.handleDelete} />
                </Dialog.Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
    },
    body: {
        borderColor: CONSTANTS.COLOR.clblack,
        marginBottom: 10,
        borderRadius: 3,
        borderWidth: 0.2,
        padding: 5,
        width: width,
        textAlign: 'left',
        flexDirection: 'row'
    },
    nameit: {
        fontSize: 14,
        fontWeight: '600',
        paddingLeft: 10,
        textAlign: 'center',
    },
    bnt_detail: {
        width: 120,
        height:32,
        backgroundColor: CONSTANTS.COLOR.bg_button,
        color: CONSTANTS.COLOR.clwhite,
        borderWidth: 0.1,
        borderRadius: 30,
        textAlign: 'center',
        fontSize:14,
        paddingTop:4,
        marginBottom:0
    },
    imgprd: {
        width: 150,
        height: 100,
        borderRadius:3
    },
    oldprice: {
        fontWeight: '300',
        fontSize: 12,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        marginTop: 2
    },
    ic_cart:{
        marginTop:5,
        marginLeft:10,
    }
});

// const App = createAppContainer(MainNavigator);
// export default App;

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { shadow } from '../components/Users';
import { Colors } from '../constants/Colors';
import { Spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const UserScreen = props => {
    const {
        navigation
    } = props;

    const userDetail = navigation.getParam('user', null);

    console.log('userDetail', userDetail);
    
    const _renderHeader = () => {
        return (
            <View
                style={styles.blockHeader}
            >
                <View style={styles.headerBackGround} />
                <View
                    style={styles.userInfo}
                >
                    <View
                        style={styles.blockAvatar}
                    >
                        <Image
                            source={{
                                uri: 'https://i.pravatar.cc/300'
                            }}
                            resizeMode="contain"
                            style={styles.avatar}
                        />
                    </View>
                    <View
                        style={styles.blockUserInfo}
                    >
                        <Text style={styles.username}>{userDetail?.name}</Text>
                        <Text style={styles.email}>{userDetail?.username}</Text>
                        <Text style={styles.email}>{userDetail?.phone}</Text>
                        <Text style={styles.email}>{userDetail?.email}</Text>
                        <Text style={styles.website}>{userDetail?.website}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View
            style={styles.container}
        >
            {_renderHeader()}
            {/* <Text>This is User Details and id is {id}</Text> */}
        </View>
    );
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;

const styles = StyleSheet.create({
    website: {
        textDecorationLine: 'underline',
        color: Colors.info,
        // marginLeft: Spacing.marginBottom,
    },
    labelWebsite: {
        color: Colors.gray700,
        fontSize: 13,
    },
    blockWebsite: {
        flexDirection: 'row',
    },
    email: {
        color: Colors.gray700,
        fontSize: 13,
        marginBottom: 10,
    },
    username: {
        color: Colors.gray700,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 15,
    },
    blockUserInfo: {
        flex: 1,
        marginLeft: 20,
    },
    blockAvatar: {
        width: 100,
        backgroundColor: Colors.white,
        marginLeft: -20,
        borderTopLeftRadius: Spacing.borderRadius,
        borderBottomLeftRadius: Spacing.borderRadius,
    },
    avatar: {
        width: 100,
        height: 100,
        // position: 'absolute',
        top: -20,
        borderRadius: 20,
    },
    userInfo: {
        ...shadow,
        position: 'absolute',
        top: 150,
        width: width - 100,
        marginLeft: 60,
        minHeight: 100,
        backgroundColor: Colors.white,
        borderRadius: 30,
        flexDirection: 'row',
    },
    headerBackGround: {
        backgroundColor: Colors.primary,
        height: 200,
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    blockHeader: {
        backgroundColor: Colors.white,
        height: 250,
        width: '100%',
    }
})
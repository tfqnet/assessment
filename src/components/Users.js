import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../constants/Colors';
import { Spacing } from '../constants/theme';
import { useListUser } from './Hooks';
import User from './User';

const Users = props => {

    const {
        userList,
        _addNewUser,
    } = useListUser();

    console.log('userList', userList);

    const _renderUserItem = ({ item, index}) => {
        return (
            <View
                style={styles.userItem}
            >
            <TouchableOpacity
                    style={styles.blockGoToDetail}
                    onPress={() => {
                        props.navigation.navigate('User', {
                            user: item,
                        })
                    }}
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
                    <View>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.website}>{item.website}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={userList}
                keyExtractor={({ id }) => id.toString()}
                extraData={userList}
                renderItem={_renderUserItem}
            />
            <TouchableOpacity
                style={styles.floatBtnAdd}
                onPress={() => {
                    props.navigation.navigate('Create', {
                        _addNewUser,
                    })
                }}
            >
                <MaterialIcons name="add" size={35} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
};
export default Users;

export const shadow = {
    shadowColor: Colors.shadow,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
}

const styles = StyleSheet.create({
    floatBtnAdd: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: Colors.primary,
        bottom: 70,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blockGoToDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Spacing.marginBottom,
    },
    goDetail: {
        color: Colors.primary,
        marginLeft: 5,
        textAlign: 'center',
    },
    blockFilter: {
        marginTop: Spacing.marginBottom,
        borderBottomColor: Colors.primary50,
        borderBottomWidth: 1.5,
        paddingBottom: Spacing.marginBottom,
    },
    textInfo: {
        marginLeft: 5,
    },
    center: {
        alignItems: 'center',
        marginRight: Spacing.marginBottom,
    },
    website: {
        textDecorationLine: 'underline',
        color: Colors.info,
        // marginLeft: Spacing.marginBottom,
    },
    labelWebsite: {
        color: Colors.gray700,
        fontSize: 13,
    },
    email: {
        color: Colors.gray700,
        fontSize: 13,
    },
    username: {
        color: Colors.gray700,
        fontWeight: 'bold',
        fontSize: 16,
    },
    blockAvatar: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary50,
        paddingTop: Spacing.marginBottom,
    },
    userItem: {
        ...shadow,
        backgroundColor: Colors.white,
        marginBottom: Spacing.marginBottom,
        marginHorizontal: Spacing.marginHorizontal,
        padding: 10,
    }
});

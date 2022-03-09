import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Colors } from '../constants/Colors';
import { shadow } from './Users';

const CreateUserScreen = props => {
    const {
        navigation
    } = props;
    
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [company, seCompany] = useState('');

    const _onSubmit = () => {
        if (!name || !username || !email || !phone || !website || !street || !city || !zipCode || !company) {
            return;
        }
        const _addNewUser = navigation.getParam('_addNewUser', null);
        const body = {
            email,
            id: new Date().getTime(),
            name,
            phone,
            username,
            website,
            address: {
                city,
                geo: {lat: '-37.3159', lng: '81.1496'},
                street,
                suite: "Apt. 556",
                zipcode: zipCode
            },
            company: {
                bs: '',
                catchPhrase: '',
                name: company
            }
        }

        _addNewUser && _addNewUser(body);
        navigation.goBack();
    }

    return (
        <View
            style={styles.container}
        >
            <ScrollView
                style={styles.container}
            >
                <InputWithLabel
                    label="Name"
                    placeholder="Please input your name"
                    onChangeText={(text) => setName(text)}
                />
                <InputWithLabel
                    label="UserName"
                    placeholder="Please input your UserName"
                    onChangeText={(text) => setUsername(text)}
                />
                <InputWithLabel
                    label="Email"
                    placeholder="Please input your email"
                    onChangeText={(text) => setEmail(text)}
                />
                <InputWithLabel
                    label="Phone"
                    placeholder="Please input your phone"
                    onChangeText={(text) => setPhone(text)}
                />
                <InputWithLabel
                    label="Website"
                    placeholder="Please input your website"
                    onChangeText={(text) => setWebsite(text)}
                />
                <InputWithLabel
                    label="Street"
                    placeholder="Please input your street"
                    onChangeText={(text) => setStreet(text)}
                />
                <InputWithLabel
                    label="City"
                    placeholder="Please input your city"
                    onChangeText={(text) => setCity(text)}
                />
                <InputWithLabel
                    label="Zipcode"
                    placeholder="Please input your zipcode"
                    onChangeText={(text) => setZipCode(text)}
                />
                <InputWithLabel
                    label="Company"
                    placeholder="Please input your company"
                    onChangeText={(text) => seCompany(text)}
                />
            </ScrollView>
            <View
                style={styles.blockBtn}
            >
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={_onSubmit}
                >
                    <Text style={styles.textSubmit}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
CreateUserScreen.navigationOptions = {
    title: 'Create new User'
};
export default CreateUserScreen;

const InputWithLabel = (props) => {
    const {
        label = '',
        placeholder,
        onChangeText
    } = props;

    return (
        <View
            style={styles.blockInput}
        >
            <Text style={styles.label}>{label.toUpperCase()}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textSubmit: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 16,
    },
    btnSubmit: {
        width: 120,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 20,
    },
    blockBtn: {
        borderTopColor: Colors.gray,
        borderTopWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 10,
        width: '100%',
        height: 80,
        backgroundColor: Colors.white,
    },
    blockInput: {
        // ...shadow,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 10,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.primary50,
    },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
    },
});

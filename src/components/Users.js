import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import User from './User';

const Users = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return(
        <View style={{ padding: 10 }}>
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={users}
                    keyExtractor={({ id }) => id.toString()}
                    //renderItem={({ item }) => <Text>{item.name}  </Text>}
                    renderItem={({ item }) => <TouchableOpacity onPress={() =>
                        props.navigation.navigate('User', {
                            id: item.id
                        })
                    }><View>
                    <Text>{item.username}</Text>
                    <Text>{item.email}</Text>
                </View></TouchableOpacity>}
                />
            )}
        </View>
    );
};
export default Users;
import React, { useEffect, useState } from "react"
import UserService from "./User.service";

const useListUser = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        UserService.getUserList().then(data => {
            setUserList(data);
        }).finally(() => setLoading(false));
    }, []);

    const _addNewUser = (user) => {
        setUserList(prevValue => {
            return [user].concat(prevValue);
        });
    }

    return {
        userList,
        _addNewUser,
    }
}

export {
    useListUser,
}
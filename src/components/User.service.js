class UserService {
    static getUserList(params) {
        return fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json());
    }
}

export default UserService;

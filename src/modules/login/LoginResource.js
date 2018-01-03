import http from 'axios';
import LoginPage from './pages/LoginPage';

class LoginResource {
    constructor () {
        this.URL = '/api'
    } 

    login = (username, password, email) => {
        console.log('enter')
        console.log(username)
        console.log(`${this.URL}/users`)
        http.post(`${this.URL}/users`, {
            username,
            password,
            email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("Erreur", error);
            });
    }

    logout = () => {}

    refreshToken = () => {}
}

export default LoginResource
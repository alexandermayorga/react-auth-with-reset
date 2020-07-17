import axios from "axios"

class Auth {
    authenticated(){
        // Axios sends a request to authenticate JWTs
        // returns true or false

        return axios.get('api/dashboard')
        // .then(res => {
        //     console.log('Authenticated')
        //     console.log(res)
        //     return true
        // })
        // .catch(err => {
        //     console.log('Not Authenticated')
        //     console.log(err)
        //     return false
        // })
        
    }
    login(){
        //Axios sends info for login
        //Username and Password
    }
    logout() {
        //Axios sends request to logout API
        //on Success redirect to Home Page
    }
}

export default new Auth();
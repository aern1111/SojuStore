import axios from "axios";

let token = ''
if (localStorage.getItem('user')) {
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']
} else {
    token = ''
};

const FrontendService = axios.create({
    // baseURL: "http://soju.local/api/",
    baseURL: "https://soju.ajkit.com/api/",
    
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
    },

});

export default FrontendService;
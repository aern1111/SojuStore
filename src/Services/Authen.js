import axios from "axios";

const authen = axios.create({
    // baseURL:"http://soju.local/api/",
    baseURL:"https://soju.ajkit.com/api/",
    withCredentials : true,
    header: {
        "Content-type":"application/json",
        "Accept":"application/json"

    },

});

export default authen;
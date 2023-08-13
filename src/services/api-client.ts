import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a00d64092fb34851a162e2920d792c62'
    }
})
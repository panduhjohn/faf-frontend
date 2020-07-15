import Axios from './Axios';

const setAuthToken = (token) => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;

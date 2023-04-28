import axios from 'axios';

const baseAppURl = 'http://localhost:4444';

const $host = axios.create({
    baseURL: 'http://localhost:4444/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:4444/'

})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
    baseAppURl
}
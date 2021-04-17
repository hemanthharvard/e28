class Axios {
    axios;

    constructor() {
        this.axios = require('axios').create({
            baseURL: process.env.VUE_APP_API_URL || 'http://localhost:8080/data',
            responseType: 'json'
        })
    }

    async get(endpointName) {
        try {
            const response = await this.axios.get(endpointName);
            if (response.status && response.status >= 300) {
                throw ({
                    status: response.status,
                    statusCode: response.statusCode
                })
            }
            return response;
        } catch (error) {
            console.error('Axios get failed: ', error);
            return {};
        }

    }
}

export default new Axios();
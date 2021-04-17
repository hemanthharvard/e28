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

    async put(endpointName, data) {
        try {
            const response = await this.axios.put(endpointName, data);
            if (response.status && response.status >= 300) {
                throw ({
                    status: response.status,
                    statusCode: response.statusCode
                })
            }
            return response;
        } catch (error) {
            console.error('Axios put failed: ', error);
            return {};
        }

    }

    async post(endpointName, data) {
        try {
            const response = await this.axios.post(endpointName, data);
            if (response.status && response.status >= 300) {
                throw ({
                    status: response.status,
                    statusCode: response.statusCode
                })
            }
            return response;
        } catch (error) {
            console.error('Axios post failed: ', error);
            return {};
        }
    }

    async delete(endpointName) {
        try {
            const response = await this.axios.delete(endpointName);
            if (response.status && response.status >= 300) {
                throw ({
                    status: response.status,
                    statusCode: response.statusCode
                })
            }
            return response;
        } catch (error) {
            console.error('Axios delete failed: ', error);
            return {};
        }

    }
}

export default new Axios();
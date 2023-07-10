const  configDotenv = require("dotenv");
configDotenv.config()

class Axios {
    static async request(config) {
        try {
            const response = await fetch(config.url, {
                method: config.method || 'GET',
                headers: config.headers || {},
                body: JSON.stringify(config.data)
            });

            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error.message);
            throw error;
        }
    }

    static get(url, config = {}) {
        return Axios.request({ ...config, method: 'GET', url });
    }

    static post(url, data = {}, config = {}) {
        return Axios.request({ ...config, method: 'POST', url, data });
    }
}
// console.log(process.env.URL);
// console.log("https://fakestoreapi.com/products");

// // Example usage
// const url = 'https://example.com/api'; // Replace with your desired URL
// const requestBody = {
//     // Replace with your request body
//     key1: 'value1',
//     key2: 'value2'
// };

// async function makeRequest() {
//     try {
//         const response = await Axios.post(url, requestBody);
//         console.log('Response:', response);
//         // Do something with the response data
//     } catch (error) {
//         // Handle the error
//         console.error('An error occurred:', error);
//     }
// }

// makeRequest();

module.exports =Axios
// const requestHandler = new RequestHandler('https://fakestoreapi.com/products')
// console.log(requestHandler.getData());

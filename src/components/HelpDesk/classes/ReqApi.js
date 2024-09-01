const port = process.env.PORT || 8686;

export default class ReqApi {
    constructor() {
        this.port = port;
        this.requestUrl = `http://localhost:${port}/ticket`;

        
    }

    async sendRequest(urlParams, method="GET", body=false) {
        const url = this.requestUrl;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }

        if(body) {
            options.body = JSON.stringify(body);
        }
        
        return await fetch(url + urlParams, options);
    }
}
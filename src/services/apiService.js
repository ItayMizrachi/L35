import axios from "axios";

export const API_URL = "http://localhost:3001";

export const TOKEN_KEY = "videos_token";

export const doApiGet = async (url) => {
    try {
        const response = await axios({
            url: url,
            headers: {
                "x-api-key": localStorage[TOKEN_KEY]
            }
        })
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export const doApiMethod = async (_url, _method, _body = {}) => {
    try {
        const response = await axios({
            url: _url,
            method: _method,
            data: _body,
            headers: {
                "x-api-key": localStorage[TOKEN_KEY]
            }
        })
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

import { Axios } from "axios";

class HttpService {
    static axios: Axios | null = null;
    static baseUrl = "http://103.157.218.115/Tinhte/hs/Social/v1";
    constructor() {
        if (HttpService.axios == null) {
            HttpService.axios = new Axios();
            HttpService.axios.defaults.baseURL = HttpService.baseUrl;
        }
    }

    static async get(path: string, options?: { params?: Object },) {
        const { params } = options ?? {};
        return await this.axios?.get(path, { params: params });
    }
    static async post(path: string, options?: { params?: Object, body?: Object }) {
        const { params, body } = options??{};
        return await this.axios?.post(path, { params, body });
    }
}

export default HttpService;
import axios from "axios";
const url = "/show/page/5";
// import store from '@/store/store'

export default class API {
    static async showPageNumber() {
        const res = await axios.get(url);
        return res.data;
    }
}
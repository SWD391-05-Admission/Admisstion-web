import axios from "axios"
import { baseService } from './baseService'
import { ACCESS_TOKEN, DOMAIN } from '../Utils/setting'

export class UserService extends baseService {


    dangNhap = (token) => {
        axios.get(`${DOMAIN}/api/Login`, {
            headers: {
                token: token
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    layDuLieuDangNhap = (token) => {
        return axios({
            url: `${DOMAIN}/api/Login/Post`,
            data: '',
            method: 'POST',
            headers: {
                // 'token': token
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
    }

}

export const userManager = new UserService();

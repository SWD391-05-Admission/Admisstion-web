import axios from "axios"
import {baseService} from './baseService'
import { DOMAIN } from '../Utils/setting'


export class UserService extends baseService {
    
    dangNhap = (token) =>{
        return axios({
            url: `${DOMAIN}/api/Login`,
            data: '',
            method: 'GET',
            headers: {
                'token': token
            }
        })
    }
    layDuLieuDangNhap = () => {
        return axios({
            url: `${DOMAIN}/api/Login/GetValue`,
            method: 'GET',
            headers: {
                // 'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

}

export const userManager = new UserService();

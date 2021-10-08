import { React } from 'react'
import { NavLink } from 'react-router-dom';
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../Utils/setting';
import { firebase } from './../Service/firebase'
import { history } from './../App'
import axios from 'axios'

function Login() {

    const authLogin = async (token) => {
        await axios({
            url: `${DOMAIN}/api/login/getJWT`,
            method: 'POST',
            data: {
                "firebaseToken": token,
                "app": "Admin"
            }
        })
            .then(function (response) {
                const accessToken = response.data.token;
                if (accessToken !== null) {
                    localStorage.setItem(ACCESS_TOKEN, accessToken);
                    console.log('access:', accessToken)
                    history.push('/admin');
                    window.location.reload();
                }
                // axios({
                //     url: `${DOMAIN}/api/user/getProfileUser`,
                //     method: 'POST',
                //     headers: {
                //         "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
                //     }
                // })
                //     .then((result) => {
                //         console.log(result.data)
                //         localStorage.setItem(USER_LOGIN, result.data);
                //         // history.push('/admin');
                //         // window.location.reload();
                //     })
                //     .catch((error) => {
                //         console.log(error);
                //     })
            })
            .catch(function (error) {
                console.log('lỗi', error);
            });
    }

    const SignInWithfirebase = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((result) => {
                firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                    console.log('uiToken', idToken);
                    // localStorage.setItem(ACCESS_TOKEN, idToken);
                    authLogin(idToken);


                }).catch(function (error) {
                    console.log(error.error);
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="bg-dark" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '740px' }}>

            <form className="p-5  bg-white" style={{ width: '500px' }}>
                <h1 className="text-center p-3">Admisstion</h1>
                <h3 className="text-center p-2">Admin manager login</h3>
                <div className="form-group">
                    <div className="form-group">
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="tài khoản" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="mật khẩu" />
                    </div>
                    <div className="form-group">
                        <NavLink className="nav-link btn btn-success" to="/admin">đăng nhập</NavLink>
                    </div>
                    <div className="login-buttons">
                        <button type="button" className="btn btn-danger btn-block" onClick={SignInWithfirebase}>
                            <i className="fab fa-google-plus-g"></i>Login with google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;

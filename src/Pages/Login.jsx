import { React } from 'react'
import { NavLink } from 'react-router-dom';
import { ACCESS_TOKEN } from '../Utils/setting';
import { firebase } from './../Service/firebase'
import { history } from './../App'
import { userManager } from './../Service/UserService';

function Login() {

    const SignInWithfirebase = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        console.log(google_provider)
        firebase.auth().signInWithPopup(google_provider)
            .then((result) => {
                // console.log(result)
                localStorage.setItem(ACCESS_TOKEN, result.credential.accessToken);
                firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                    // console.log(idToken);
                    userManager.dangNhap(idToken);
                    const duLieu = userManager.layDuLieuDangNhap();
                    console.log(duLieu);
                }).catch(function (error) {
                    console.log(error.error);
                });
                history.push('/admin');
                window.location.reload();
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
                    <div class="form-group">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="tài khoản" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="mật khẩu" />
                    </div>
                    <div class="form-group">
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

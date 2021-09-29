import { React } from 'react'
import { NavLink } from 'react-router-dom';

function Login() {


    return (
        <div className="bg-dark" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '740px' }}>
            <form className="p-5  bg-white" style={{ width: '500px' }}>
                <div class="form-group">
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="tài khoản" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="mật khẩu" />
                </div>
                <div class="form-group">
                    <NavLink className="nav-link btn btn-success" to="/admin">đăng nhập</NavLink>
                </div>
                <div className="form-group">
                    <div className="login-buttons">
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;

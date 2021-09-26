import React from 'react'

export default function Login() {
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
                    <a className="btn btn-success btn-block" href="/admin">đăng nhập</a>
                </div>
                <div className="form-group">
                    
                </div>
            </form>
        </div>
    )
}

import React from 'react'

export default function QuanLiNguoiDung() {
    return (
        <div style={{marginRight:'10rem'}}>
            <h1 className="text-center pb-3">Quản lí người dùng</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tên Người dùng</th>
                        <th>trạng thái</th>
                        <th>quyền</th>
                        <th>chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>nguyễn văn A</td>
                        <td>
                            <select name="" id="">
                                <option value="true">hoạt động</option>
                                <option value="false">ngưng hoạt động</option>
                            </select>
                        </td>
                        <td>
                            <select name="" id="">
                                <option value="true">admin</option>
                                <option value="false">user</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-warning">sửa</button>
                            <button className="btn btn-danger">xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>nguyễn văn b</td>
                        <td>
                            <select name="" id="">
                                <option value="true">hoạt động</option>
                                <option value="false">ngưng hoạt động</option>
                            </select>
                        </td>
                        <td>
                            <select name="" id="">
                                <option value="true">admin</option>
                                <option value="false">user</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-warning">sửa</button>
                            <button className="btn btn-danger">xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

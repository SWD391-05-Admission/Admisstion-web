import React, { isValidElement, useState } from 'react'
import { NavLink } from 'react-router-dom';
import UpdateNguoiDung from './UpdateNguoiDung';

export default function QuanLiNguoiDung() {

    const listNguoi = [
        {id:1, ten: 'nguyễn văn A', trangThai: 'ngưng hoạt động', quyen: 'tư vấn viên' },
        {id:2, ten: 'nguyễn văn B', trangThai: 'hoạt động', quyen: 'tư vấn viên' },
        {id:3, ten: 'nguyễn văn C', trangThai: 'ngưng hoạt động', quyen: 'tư vấn viên' },
        {id:4, ten: 'nguyễn văn D', trangThai: 'hoạt động', quyen: 'admin' },
        {id:5, ten: 'nguyễn văn E', trangThai: 'ngưng hoạt động', quyen: 'tư vấn viên' },
        {id:6, ten: 'nguyễn văn F', trangThai: 'hoạt động', quyen: 'học sinh' },
    ]

    const [nguoi, setNguoi] = useState(listNguoi)
    console.log('1', nguoi);
    
    const deleteNguoi = (id)=>{
        const nguoiUpdate = nguoi.filter((user)=>{
            return user.id !== id;
        });

        setNguoi(nguoiUpdate);
        console.log(nguoiUpdate);
    }

    const renderList = () => {
        return nguoi.map((nguoi, index) => {
            return <tr key={index}>
                <td>{nguoi.ten}</td>
                <td>{nguoi.trangThai}</td>
                <td>{nguoi.quyen}</td>
                <td>
                    <NavLink to={"/admin/updateNguoiDung/" + nguoi.id} className="btn btn-outline-warning mr-2">
                    <i className="fa fa-wrench"></i>
                    </NavLink>
                    <button className="btn btn-outline-danger ml-2" onClick={(index) => {
                        if(window.confirm('bạn có chắc muốn xóa người này'))
                        deleteNguoi(nguoi.id)
                    }}><i className="fa fa-trash-alt"></i></button>
                </td>
            </tr>
        })
    }

    return (
        <div style={{ marginRight: '10rem' }}>
            <h1 className="text-center pb-3">Quản lí người dùng</h1>
            <table className="table text-center">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Tên Người dùng</th>
                        <th>Trạng thái</th>
                        <th>Vai Trò</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

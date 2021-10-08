import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function QuanLiTruongHoc() {

    const listTruong = [
        {
            maTruong: 'FPT1', tenTruong: 'Đại Học FPT', diaChi: 'abc xyz Hồ Chí Minh city',
            moTa: 'Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.'
        },
        { maTruong: 'FPT2', tenTruong: 'Đại Học FPT', diaChi: 'abc xyz Hồ Chí Minh city', moTa: 'Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' },
        { maTruong: 'FPT3', tenTruong: 'Đại Học FPT', diaChi: 'abc xyz Hồ Chí Minh city', moTa: 'Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' },
    ]

    const [stateTruong, setStateTruong] = useState(listTruong);
    const deleteTruong = (maTruong) => {
        const truongUpdate = stateTruong.filter((truong) => {
            return truong.maTruong !== maTruong;
        });
        setStateTruong(truongUpdate);
        console.log(truongUpdate);
    }

    const rederTruong = () => {
        return stateTruong.map((truong, index) => {
            return <tr key={index}>
                <td>{truong.maTruong}</td>
                <td>{truong.tenTruong}</td>
                <td>{truong.diaChi}</td>
                <td>{truong.moTa}</td>
                <td className="text-center">
                    <NavLink to={"/admin/updateTruongHoc/" + truong.maTruong} className="btn btn-outline-warning mr-2">
                    <i className="fa fa-wrench"></i>
                    </NavLink>
                    <button className="btn btn-outline-danger ml-2" onClick={(index) => {
                        if(window.confirm('bạn có chắc muốn xóa trường này ra khỏi danh sách'))
                        deleteTruong(truong.maTruong)
                    }}><i className="fa fa-trash-alt"></i></button>
                </td>
            </tr>
        })
    }

    return (
        <div style={{ marginRight: '7rem' }}>
            <h1 className="text-center pb-3">Quản lí trường học</h1>
            <table className="table" style={{ border: '1px solid grey', borderRadius: '20px' }}>
                <thead className="bg-dark text-white">
                    <tr>
                        <th style={{ width: '10%' }}>mã trường</th>
                        <th style={{ width: '15%' }}>Tên trường</th>
                        <th style={{ width: '20%' }} className="text-center">địa chỉ</th>
                        <th style={{ width: '40%' }} className="text-center">mô tả</th>
                        <th style={{ width: '15%' }} className="text-center">chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {rederTruong()}
                </tbody>
            </table>
        </div>
    )
}

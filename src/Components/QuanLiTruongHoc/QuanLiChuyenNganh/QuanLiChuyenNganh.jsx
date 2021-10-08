import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function QuanLiChuyenNganh() {

    const listChuyenNganh = [
        { maCN: 'SE1', tenCN: 'kĩ thuật phần mềm', moTa: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' },
        { maCN: 'SE2', tenCN: 'kĩ thuật phần mềm', moTa: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' },
        { maCN: 'SE3', tenCN: 'kĩ thuật phần mềm', moTa: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' },
        { maCN: 'SE4', tenCN: 'kĩ thuật phần mềm', moTa: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.Quản lí trường học Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum nulla ad provident consequatur? Repellendus sapiente similique qui nesciunt exercitationem nobis vel ut suscipit quis praesentium. Velit accusantium fugit excepturi.' }
    ]

    const [chuyenNganh, setChuyenNganh] = useState(listChuyenNganh)

    const deleteCN = (maCN)=>{
        const chuyenNganhUpdate = chuyenNganh.filter((cn)=>{
            return cn.maCN !== maCN;
        });

        setChuyenNganh(chuyenNganhUpdate);
        console.log(chuyenNganhUpdate);
    }

    const renderCN = () => {
        return chuyenNganh.map((CN, index) => {
            return <tr key={index}>
                <td>{CN.maCN}</td>
                <td>{CN.tenCN}</td>
                <td className="text-left">{CN.moTa}</td>
                <td>
                    <NavLink to={"/admin/updateChuyenNganh/" + CN.maCN} className="btn btn-outline-warning mr-2">
                    <i className="fa fa-wrench"></i>
                    </NavLink>
                    <button className="btn btn-outline-danger ml-2" onClick={(index) => {
                        if(window.confirm('bạn có chắc muốn xóa chuyên ngành này'))
                        deleteCN(CN.maCN)
                    }}><i class="fa fa-trash-alt"></i></button>
                </td>
            </tr>
        })
    }

    return (
        <div style={{ marginRight: '7rem' }}>
            <h1 className="text-center pb-3">Quản lí chuyên ngành</h1>
            <table className="table text-center">
                <thead className="bg-dark text-white">
                    <tr>
                        <th style={{ width: '15%' }}>mã chuyên ngành</th>
                        <th style={{ width: '20%' }}>tên chuyên ngành</th>
                        <th style={{ width: '50%' }}>mô tả</th>
                        <th style={{ width: '15%' }}>chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCN()}
                </tbody>
            </table>
        </div>
    )
}

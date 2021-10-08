import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function UpdateNguoiDung(props) {

    const ndID = useParams().ngID;


    return (
        <div style={{ marginRight: '7rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



            <form action="" className="border" >
                
                <div className="p-5">
                <h1 className="text-center p-3">sửa thông tin người dùng</h1>
                    <div class="form-group">
                  <label for="">Tên người dùng</label>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" value={ndID} disabled/>
                   
                </div>
                    <div class="form-group">
                        <label for="">hoạt động</label>
                        <select type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                            <option>hoạt động</option>
                            <option>ngưng hoạt động</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">vai trò</label>
                        <select type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                            <option>quản trị viên</option>
                            <option>học sinh</option>
                            <option>tư vấn viên</option>
                        </select>
                    </div>
                    <div className="form-group text-right mt-5">
                        <button className="btn btn-outline-success">cập nhật</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

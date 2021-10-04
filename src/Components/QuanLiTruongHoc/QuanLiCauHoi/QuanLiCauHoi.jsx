import React from 'react'

export default function QuanLiCauHoi() {
    return (
        <div style={{marginRight: '10rem'}}>
            <h1 className="text-center p-3">Câu hỏi thường gặp</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>câu hỏi</th>
                        <th>câu câu trả lời</th>
                        <th>chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1+1</td>
                        <td>2</td>
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

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ThemChuyenNganh() {
    const formik = useFormik({
        initialValues: {
            truong: [],
            tenChuyenNganh: '',
            moTa: ''
            
        },
        validationSchema: Yup.object().shape({
            tenChuyenNganh: Yup.string()
                .required('Không được bỏ trống')
                .min(10, 'Tên chuyên ngành quá ngắn'),
            moTa: Yup.string()
                .min(10, "Mô tả cho chuyên ngành quá ngắn")

        }),
        onSubmit: (values) => {
            console.log('Submit: ', values)

        }
    })

    return (
        <div className="container">
            <h3> Thêm chuyên ngành </h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Chuyên ngành</p>
                    <input className="form-control" type="text" name="tenChuyenNganh" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.tenChuyenNganh && formik.touched.tenChuyenNganh ?
                        (<div className="text text-danger">{formik.errors.tenChuyenNganh}</div>) : null}
                </div>
                <div className="form-group">
                    <p>Mô tả</p>
                    <textarea className="form-control" type="text" name="moTa" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.moTa && formik.touched.moTa ?
                        (<div className="text text-danger">{formik.errors.moTa}</div>) : null}
                </div>
                <div className="table-container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Trường Đại Học/Cao Đẳng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" name="truong" value="idTruong1" onChange={formik.handleChange}/>
                                                <label class ="custom-control-label" for="customCheck1" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học FPT</td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" name="truong" value="idTruong2" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck2"></label>
                                            </div>
                                        </td>
                                        <td>Đại học Rmit</td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" name="truong" value="idTruong3" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck3" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học sư phạm kĩ thuật</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" name="truong" value="idTruong4" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck4" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học Hutech</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck5" name="truong" value="idTruong4" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck5" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học kinh tế quốc dân</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck6" name="truong" value="idTruong6" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck6" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học hồng bàng</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck7" name="truong" value="idTruong3" onChange={formik.handleChange}/>
                                                <label className ="custom-control-label" for="customCheck7" ></label>
                                            </div>
                                        </td>
                                        <td>Đại học văn lang</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success" type="submit">Thêm chuyên ngành</button>
                </div>
            </form>
        </div>
    )
}

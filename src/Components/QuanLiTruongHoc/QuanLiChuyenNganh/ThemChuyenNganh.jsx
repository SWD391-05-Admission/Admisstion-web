import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ThemChuyenNganh() {
    const formik = useFormik({
        initialValues: {
            maChuyenNganh:'',
            tenChuyenNganh: '',
            moTa: ''
        },
        validationSchema: Yup.object().shape({
            maChuyenNganh: Yup.string()
            .required('Mã chuyên ngành Không được bỏ trống'),
            tenChuyenNganh: Yup.string()
                .required('Tên chuyên ngành Không được bỏ trống')
                .min(10, 'Tên chuyên ngành quá ngắn'),
            moTa: Yup.string()
                .required('Mô tả Không được bỏ trống')
                .min(10, "Mô tả cho chuyên ngành quá ngắn")
        }),
        onSubmit: (values) => {
            console.log('Submit: ', values)

        }
    })

    return (
        <div style={{ marginRight: '7rem' }}>
            <div className="container-fluid" >
                
                <form onSubmit={formik.handleSubmit} className="border">
                    <div className="p-5">
                    <h3 className="text-center"> Thêm chuyên ngành </h3>
                    <div className="form-group">
                            <p>Mã chuyên ngành</p>
                            <input className="form-control" type="text" name="maChuyenNganh" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.maChuyenNganh && formik.touched.maChuyenNganh ?
                                (<div className="text text-danger">{formik.errors.maChuyenNganh}</div>) : null}
                        </div>
                        <div className="form-group">
                            <p>Chuyên ngành</p>
                            <input className="form-control" type="text" name="tenChuyenNganh" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.tenChuyenNganh && formik.touched.tenChuyenNganh ?
                                (<div className="text text-danger">{formik.errors.tenChuyenNganh}</div>) : null}
                        </div>
                        <div className="form-group">
                            <p>Mô tả</p>
                            <input className="form-control" type="text" name="moTa" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.moTa && formik.touched.moTa ?
                                (<div className="text text-danger">{formik.errors.moTa}</div>) : null}
                        </div>
                        <div className="text-right mt-5">
                            <button className="btn btn-outline-success" type="submit">Thêm chuyên ngành</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

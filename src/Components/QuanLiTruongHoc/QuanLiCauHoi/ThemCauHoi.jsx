import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ThemCauHoi() {
    const formik = useFormik({
        initialValues: {
            cauHoi: '',
            traLoi: ''
        },
        validationSchema: Yup.object().shape({
            cauHoi: Yup.string()
                .required('Không được bỏ trống')
                .min(10, 'Câu hỏi quá ngắn'),
            traLoi: Yup.string()
                .required('Không được bỏ trống')
        }),
        onSubmit: (values) => {
            console.log('Submit: ', values)

        }
    })

    return (
        <div className="container">
            <h3> Thêm câu hỏi </h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <p>Câu hỏi</p>
                    <input className="form-control" type="text" name="cauHoi" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.cauHoi && formik.touched.cauHoi ?
                        (<div className="text text-danger">{formik.errors.cauHoi}</div>) : null}
                </div>
                <div className="form-group">
                    <p>Trả lời</p>
                    <input className="form-control" type="text" name="traLoi" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    {formik.errors.traLoi && formik.touched.traLoi ?
                        (<div className="text text-danger">{formik.errors.traLoi}</div>) : null}
                </div>
                
                <div>
                    <button className="btn btn-outline-success" type="submit">Thêm câu hỏi</button>
                </div>
            </form>
        </div>
    )
}

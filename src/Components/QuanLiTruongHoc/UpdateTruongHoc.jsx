import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router'

export default function UpdateTruongHoc(props) {

    const maTruong = useParams().maTruong;

    const formik = useFormik({
        initialValues: {
            tenTruong: '',
            maTruong: '',
            diaChi: '',
            moTa: '',
            diem: '',
            minFee: '',
            maxFee: '',
            sdt: '',
            website: '',
            email: '',
            facebook: ''

        },
        validationSchema: Yup.object().shape({
            tenTruong: Yup.string()
                .required('Không được bỏ trống')
                .min(10, 'Tên trường quá ngắn'),
            maTruong: Yup.string()
                .required('Không được bỏ trống')
                .min(1, 'Mã trường không hợp lệ'),
            diaChi: Yup.string()
                .required('Không được bỏ trống'),
            diem: Yup.string()
                .required('Không được bỏ trống'),
            minFee: Yup.string()
                .required('Không được bỏ trống'),
            maxFee: Yup.string()
                .required('Không được bỏ trống'),
            sdt: Yup.string()
                .required('Không được bỏ trống')
                .matches(/(84|028|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
            website: Yup.string()
                .required('Không được bỏ trống')
                .matches(/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'Địa chỉ trang web này không hợp lệ'),
            email: Yup.string()
                .required('Không được bỏ trống')
                .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
            facebook: Yup.string()
                .required('Không được bỏ trống')
                .matches(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/, 'Link Fanpage không hợp lệ')
        }),
        onSubmit: (values) => {
            console.log('values', values)
        }
    })

    return (
        <div style={{ marginRight: '7rem' }}>
            <div className="container-flute">
                <h1 style={{ textAlign: 'center' }}>Sửa thông tin trường học {maTruong}</h1>
                <form onSubmit={formik.handleSubmit} className="mt-5 mb-5">
                    <h3 className="title" style={{ margin: '20px 0' }}>Thông tin trường</h3>
                    <div className="form-row" style={{ marginTop: '10px' }}>
                        <div className="form-group col-md-6">
                            <label>Tên trường</label>
                            <input type="text" className="form-control" name="tenTruong" placeholder="Tên Trường" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.tenTruong && formik.touched.tenTruong ?
                                (<div className="text text-danger">{formik.errors.tenTruong}</div>) : null}
                        </div>
                        <div className="form-group col-md-2">
                            <label>Mã trường</label>
                            <input type="text" className="form-control" name="maTruong" placeholder="Mã trường" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.maTruong && formik.touched.maTruong ?
                                (<div className="text text-danger">{formik.errors.maTruong}</div>) : null}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Địa chỉ</label>
                            <input type="text" className="form-control" name="diaChi" placeholder="Địa chỉ" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.diaChi && formik.touched.diaChi ?
                                (<div className="text text-danger">{formik.errors.diaChi}</div>) : null}
                        </div>
                        <div className="form-group col-md-2">
                            <label>Quận</label>
                            <select className="form-control">
                                <option value="Quận 1" selected>Quận 1</option>
                                <option value="Quận 2">Quận 2</option>
                                <option value="Quận 3">Quận 3</option>
                                <option value="Quận 4">Quận 4</option>
                                <option value="Quận 5">Quận 5</option>
                                <option value="Quận 6">Quận 6</option>
                                <option value="Quận 7">Quận 7</option>
                                <option value="Quận 8">Quận 8</option>
                                <option value="Quận 9">Quận 9</option>
                                <option value="Quận 10">Quận 10</option>
                                <option value="Quận 11">Quận 11</option>
                                <option value="Quận 12">Quận 12</option>
                                <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                                <option value="Quận Tân Bình">Quận Tân Bình</option>
                                <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                <option value="Quận Bình Tân">Quận Bình Tân</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <textarea type="text" className="form-control" name="moTa" placeholder="Mô tả" />
                    </div>
                    <h3 className="tilte" style={{ margin: '20px 0' }}>Thông tin tuyển sinh</h3>
                    <div className="form-group">
                        <label>Phương thức tuyển sinh </label>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >Nộp học bạ</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >Tuyển sinh trực tiếp</label>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Thi đánh giá</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Điểm chuẩn năm ngoái</label>
                            <input type="number" className="form-control" name="diem" min="1" max="32" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.diem && formik.touched.diem ?
                                (<div className="text text-danger">{formik.errors.diem}</div>) : null}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Mức học phí cơ bản</label>
                            <input type="number" className="form-control" name="minFee" placeholder="" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.minFee && formik.touched.minFee ?
                                (<div className="text text-danger">{formik.errors.minFee}</div>) : null}
                        </div>
                        <div className="form-group col-md-4">
                            <label>Mức học phí tối đa</label>
                            <input type="number" className="form-control" name="maxFee" placeholder="" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.maxFee && formik.touched.maxFee ?
                                (<div className="text text-danger">{formik.errors.maxFee}</div>) : null}
                        </div>
                    </div>
                    <h3 className="title" style={{ margin: '20px 0' }}>Thông tin liên lạc</h3>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" className="form-control" name="sdt" placeholder="Số điện thoại" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        {formik.errors.sdt && formik.touched.sdt ?
                            (<div className="text text-danger">{formik.errors.sdt}</div>) : null}
                    </div>
                    <div className="form-group">
                        <label>Trang chủ chính thức</label>
                        <input type="text" className="form-control" name="website" placeholder="Link trang chủ" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        {formik.errors.website && formik.touched.website ?
                            (<div className="text text-danger">{formik.errors.website}</div>) : null}
                    </div>
                    <div className="form-group">
                        <label>Email liên lạc</label>
                        <input type="text" className="form-control" name="email" placeholder="Email" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email ?
                            (<div className="text text-danger">{formik.errors.email}</div>) : null}
                    </div>
                    <div className="form-group">
                        <label>Fanpage trên Facebook</label>
                        <input type="text" className="form-control" name="facebook" placeholder="Link Fanpage" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                        {formik.errors.facebook && formik.touched.facebook ?
                            (<div className="text text-danger">{formik.errors.facebook}</div>) : null}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-success btn-lg" >Sửa thông tin Trường</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
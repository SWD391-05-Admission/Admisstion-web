import React, { useState } from 'react'
import { Field, FieldArray, Formik, useFormik, Form } from 'formik'
import * as Yup from 'yup'
import 'react-datepicker/dist/react-datepicker.css';
import { imageService } from '../../Service/ImageService';
import ReactDatePicker from 'react-datepicker';


export default function ThemNguoidung() {


    // const [imgSrc, setImgSrc] = useState('')
    // //const dispatch = useDispatch();
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         hoTen: '',
    //         sdt: [],
    //         avt: ''
    //     },
    //     validationSchema: Yup.object().shape({
    //         email: Yup.string()
    //             .required('Không được bỏ trống')
    //             .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
    //         hoTen: Yup.string()
    //             .required('Không được bỏ trống'),
    //         sdt: Yup.string().matches(/(84|028|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')

    //     }), onSubmit: (values) => {
    //         console.log('values', values)
    //         let frmData = new FormData();
    //         for (let key in values) {
    //             if (key !== 'avt') {
    //                 frmData.append(key, values[key]);
    //             } else {
    //                 if (values.avt) {
    //                     frmData.append('file', values.avt);
    //                     frmData.append('upload_preset', UPLOAD_PRESENT);
    //                     imageService.uploadHinh(frmData);
    //                 }
    //             }
    //             //log dữ liệu của đối tượng formData ra
    //             console.log(key, frmData.get(key));
    //         }

    //     }
    // })

    // const handleChangeInputFile = async (event) => {
    //     //Lấy ra dữ liệu file người dùng chọn
    //     if (event.target.files.length > 0) {
    //         let file = event.target.files[0];
    //         console.log(file)
    //         //set value cho cho formik qua trường hình ảnh
    //         await formik.setFieldValue('avt', file);
    //         //đọc file load ảnh ra giao diện
    //         let reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = async (e) => {
    //             //   console.log(e.target.result);
    //             await setImgSrc(e.target.result);//Hình base 64
    //         }
    //     }



    // return (
    //     <div style={{ marginRight: '7rem' }}>
    //         <div className="container">
    //             <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Thêm người dùng mới</h1>
    //             <form onSubmit={formik.handleSubmit}>
    //                 <div className="form-group">
    //                     <label>Email</label>
    //                     <input type="text" className="form-control" name="email" placeholder="Email" onBlur={formik.handleBlur} onChange={formik.handleChange} />
    //                     {formik.errors.email && formik.touched.email ?
    //                         (<div className="text text-danger">{formik.errors.email}</div>) : null}
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Họ và tên</label>
    //                     <input type="text" className="form-control" name="hoTen" placeholder="Họ và tên" onBlur={formik.handleBlur} onChange={formik.handleChange} />
    //                     {formik.errors.hoTen && formik.touched.hoTen ?
    //                         (<div className="text text-danger">{formik.errors.hoTen}</div>) : null}
    //                 </div>
    //                 {inputList.map((sodienthoai, i) => {
    //                     const sdtTouched = formik.touched.inputList?.length && formik.touched.sodienthoai || {};
    //                     const sdtError = formik.errors.inputList?.length && formik.errors.sodienthoai || {};
    //                     return (
    //                         <div className="form-group" key={i}>
    //                             <label>Số điện thoại</label>
    //                             <input type="text" className="form-control" name={`inputList.${i}.sdt`} placeholder="Số điện thoại" onBlur={formik.handleBlur} onChange={handleInputChange} />
    //                             {sdtError.sdt && sdtTouched.sdt ?
    //                                 (<div className="text text-danger">{`inputList.${i}.sdt`} </div>) : null}
    //                             <div className="btn-box">
    //                                 {inputList.length !== 1 && <button
    //                                     className="mr10"
    //                                     onClick={() => handleRemoveClick(i)}>Remove</button>}
    //                                 {inputList.length - 1 === i && <button onClick={handleAddNewField}>Add</button>}
    //                             </div>
    //                         </div>

    //                     );
    //                 })
    //                 }
    //                 {/* <div className="form-group">
    //                     <label>Số điện thoại</label>
    //                     <input type="text" className="form-control" name="sdt" placeholder="Số điện thoại" onBlur={formik.handleBlur} onChange={formik.handleChange} />
    //                     {formik.errors.sdt && formik.touched.sdt ?
    //                         (<div className="text text-danger">{formik.errors.sdt}</div>) : null}
    //                 </div> */}
    //                 <div className="form-row">
    //                     <div className="form-group col-4">
    //                         <label>Avatar</label>
    //                         {/* <input type="file" className="form-control" name="avt" accept="image/png, image/gif, image/jpeg" /> */}
    //                         <input type="file" className="form-control" name="avt" accept="image/png, image/gif, image/jpeg" onChange={handleChangeInputFile} />
    //                     </div>
    //                     <div className="form-group col-6">
    //                         <img width={200} src={imgSrc} alt="..." />
    //                     </div>
    //                 </div>
    //                 <div className="text-center">
    //                     <button type="submit" className="btn btn-outline-success btn-lg" >Thêm Người dùng</button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // )
    return (
        <div style={{ marginRight: '7rem' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Thêm học sinh mới</h1>
                <Formik initialValues={{
                    email: '',
                    hoTen: '',
                    gioiTinh:'',
                    sdt: '',
                    ngaySinh: '',
                    diaChi: '',
                    truongTHPT: '',
                    avt: ''
                }} validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .required('Không được bỏ trống')
                        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
                    hoTen: Yup.string()
                        .required('Không được bỏ trống'),
                    sdt: Yup.string().matches(/(84|028|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
                    ngaySinh: Yup.string().required("Không được bỏ trống")
                })}
                    onSubmit={values => {
                        console.log('values', values)
                        let frmData = new FormData();
                        // for (let key in values) {
                        //     if (key !== 'avt') {
                        //         frmData.append(key, values[key]);
                        //     } else {
                        //         if (values.avt) {
                        //             frmData.append('file', values.avt);
                        //             frmData.append('upload_preset', UPLOAD_PRESENT);
                        //             imageService.uploadHinh(frmData);
                        //         }
                        //     }
                        //     //log dữ liệu của đối tượng formData ra
                        //     console.log(key, frmData.get(key));
                        // }
                    }}
                >
                    {formikProps => {
                        const { values, errors, touched, handleBlur, handleChange, setFieldValue } = formikProps;
                        return (
                            <Form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field type="text" className="form-control" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} />
                                    {errors.email && touched.email ?
                                        (<div className="text text-danger">{errors.email}</div>) : null}
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-8">
                                        <label>Họ và tên</label>
                                        <Field type="text" className="form-control" name="hoTen" placeholder="Họ và tên" onBlur={handleBlur} onChange={handleChange} />
                                        {errors.hoTen && touched.hoTen ?
                                            (<div className="text text-danger">{errors.hoTen}</div>) : null}
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>Giới tính</label>
                                        <Field as="select" type="text" className="form-control" name="gioiTinh" placeholder="Giới tính" onBlur={handleBlur} onChange={handleChange}>
                                            <option value="1">Nam </option>
                                            <option value="2">Nữ </option>
                                        </Field>
                                        {errors.gioiTinh && touched.gioiTinh ?
                                            (<div className="text text-danger">{errors.gioiTinh}</div>) : null}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-8">
                                        <label>Số điện thoại</label>
                                        <Field type="text" className="form-control" name="sdt" placeholder="Số điện thoại" onBlur={handleBlur} onChange={handleChange} />
                                        {errors.sdt && touched.sdt ?
                                            (<div className="text text-danger">{errors.sdt}</div>) : null}
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Ngày sinh</label>
                                        <ReactDatePicker className="form-control" name="ngaySinh" selected={values.ngaySinh} maxDate={new Date()} showMonthDropdown showYearDropdown dropdownMode="select"
                                         onBlur={handleBlur} onChange={(date) => setFieldValue('ngaySinh', date)} placeholderText="Ngày/Tháng/Năm" dateFormat="dd/MM/yyyy" > </ReactDatePicker>
                                        {errors.ngaySinh && touched.ngaySinh ?
                                            (<div className="text text-danger">{errors.ngaySinh}</div>) : null}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Địa Chỉ</label>
                                    <Field type="text" className="form-control" name="diaChi" placeholder="Địa Chỉ" onBlur={handleBlur} onChange={handleChange} />
                                    {errors.diaChi && touched.diaChi ?
                                        (<div className="text text-danger">{errors.diaChi}</div>) : null}
                                </div>
                                <div className="form-group">
                                    <label>Trường THPT hiện tại</label>
                                    <Field type="text" className="form-control" name="truongTHPT" placeholder="Trường THPT" onBlur={handleBlur} onChange={handleChange} />
                                    {errors.truongTHPT && touched.truongTHPT ?
                                        (<div className="text text-danger">{errors.truongTHPT}</div>) : null}
                                </div>
                                {/* <div className="form-row">
                                    <div className="form-group col-4">
                                        <label>Avatar</label>
                                        <input type="file" className="form-control" name="avt" accept="image/png, image/gif, image/jpeg" />
                                        <Field type="file" className="form-control" name="avt" accept="image/png, image/gif, image/jpeg" onChange={handleChangeInputFile} />
                                    </div>
                                    <div className="form-group col-6">
                                        <img width={200} src={imgSrc} alt="..." />
                                    </div>
                                </div> */}
                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-success btn-lg" >Thêm Người dùng</button>
                                </div>
                            </Form>
                        )
                    }
                    }

                </Formik>
            </div>
        </div>
    )
}

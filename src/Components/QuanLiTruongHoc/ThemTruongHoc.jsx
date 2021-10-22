import React, { useState } from 'react'
import { Field, FieldArray, Formik, useFormik, getIn, Form } from 'formik'
import * as Yup from 'yup'

export default function ThemTruongHoc(props) {
  const [selectedImage, setSelectedImage] = useState([])

  class SoDiaChi {
    constructor() {
      this.diaChi = "";
      this.quan = "";
    }
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Thêm trường học mới</h1>
      <Formik initialValues={{
        tenTruong: '',
        maTruong: '',
        soDiaChi: [{ diaChi: '', quan: '' }],
        moTa: '',
        diem: '',
        minFee: '',
        maxFee: '',
        sdt: '',
        website: '',
        email: '',
        facebook: '',
        tuyenSinh: [],
        nganh: []
        //quan: []
      }} validationSchema={Yup.object().shape({
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
          .matches(/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/, 'Link Fanpage không hợp lệ'),
        soDiaChi: Yup.array().of(
          Yup.object().shape({
            diaChi: Yup.string().required('Nhập'),
            quan: Yup.string().required('Nhập')
          })
        )
      })}
        onSubmit={values =>
          console.log('values', values)
        }
      >
        {formikProps => {
          const { values, errors, touched, setFieldValue } = formikProps;
          return (
            <Form>
              <h3 className="title" style={{ margin: '20px 0' }}>Thông tin trường</h3>
              <div className="form-row" style={{ marginTop: '10px' }}>
                <div className="form-group col-md-6">
                  <label>Tên trường</label>
                  <Field type="text" className="form-control" name="tenTruong" placeholder="Tên Trường" />
                  {errors.tenTruong && touched.tenTruong ?
                    (<div className="text text-danger">{errors.tenTruong}</div>) : null}
                </div>
                <div className="form-group col-md-2">
                  <label>Mã trường</label>
                  <Field type="text" className="form-control" name="maTruong" placeholder="Mã trường" />
                  {errors.maTruong && touched.maTruong ?
                    (<div className="text text-danger">{errors.maTruong}</div>) : null}
                </div>
              </div>
              <FieldArray name="soDiaChi"
                render={({ insert, remove, push }) => (

                  values.soDiaChi.map((dc, i) => {
                    return (
                      <div className="form-row" key={i}>
                        <div className="form-group col-md-6">
                          <label>Địa chỉ</label>
                          <Field type="text" className="form-control" name={`soDiaChi.${i}.diaChi`} placeholder="Địa chỉ" />
                          {errors &&
                            errors.soDiaChi &&
                            errors.soDiaChi[i] &&
                            errors.soDiaChi[i].diaChi &&
                            touched &&
                            touched.soDiaChi &&
                            touched.soDiaChi[i] &&
                            touched.soDiaChi[i].diaChi &&
                            (
                              <div className="text text-danger">
                                {errors.soDiaChi[i].diaChi}
                              </div>
                            )}
                        </div>
                        <div className="form-group col-md-2">
                          <label>Quận</label>
                          <Field as="select" className="form-control" name={`soDiaChi.${i}.quan`} >
                            <option value="Quận 1" defaultValue>Quận 1</option>
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
                          </Field>
                        </div>
                        <div className="form-group col-md-2">
                          {values.soDiaChi.length !== 1 &&
                            <button type="button" className="btn btn-danger" onClick={() => remove(i)} style={{ marginTop: '31px', marginRight: '10px' }}>-</button>}
                          <button type="button" className="btn btn-danger" onClick={() => push(new SoDiaChi)} style={{ marginTop: '31px' }}>+</button>
                        </div>
                      </div>
                    )
                  })
                )}
              />
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Mức học phí cơ bản</label>
                  <Field type="number" className="form-control" name="minFee" placeholder="" />
                  {errors.minFee && touched.minFee ?
                    (<div className="text text-danger">{errors.minFee}</div>) : null}
                </div>
                <div className="form-group col-md-4">
                  <label>Mức học phí tối đa</label>
                  <Field type="number" className="form-control" name="maxFee" placeholder="" />
                  {errors.maxFee && touched.maxFee ?
                    (<div className="text text-danger">{errors.maxFee}</div>) : null}
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
                  <Field type="checkbox" className="form-check-input" name="tuyenSinh" value="1" />
                  <label className="form-check-label" >Nộp học bạ</label>
                </div>
                <div className="form-group form-check">
                  <Field type="checkbox" className="form-check-input" name="tuyenSinh" value="2" />
                  <label className="form-check-label" >Tuyển sinh trực tiếp</label>
                </div>
                <div className="form-group form-check">
                  <Field type="checkbox" className="form-check-input" name="tuyenSinh" value="3" />
                  <label className="form-check-label">Thi đánh giá</label>
                </div>
              </div>
              <div className="form-group">
                <label>Điểm chuẩn năm ngoái</label>
                <Field type="number" className="form-control" name="diem" min="1" max="32" />
                {errors.diem && touched.diem ?
                  (<div className="text text-danger">{errors.diem}</div>) : null}
              </div>
              <h3 className="title" style={{ margin: '20px 0' }}>Thông tin liên lạc</h3>
              <div className="form-group">
                <label>Số điện thoại</label>
                <Field type="text" className="form-control" name="sdt" placeholder="Số điện thoại" />
                {errors.sdt && touched.sdt ?
                  (<div className="text text-danger">{errors.sdt}</div>) : null}
              </div>
              <div className="form-group">
                <label>Trang chủ chính thức</label>
                <Field type="text" className="form-control" name="website" placeholder="Link trang chủ" />
                {errors.website && touched.website ?
                  (<div className="text text-danger">{errors.website}</div>) : null}
              </div>
              <div className="form-group">
                <label>Email liên lạc</label>
                <Field type="text" className="form-control" name="email" placeholder="Email" />
                {errors.email && touched.email ?
                  (<div className="text text-danger">{errors.email}</div>) : null}
              </div>
              <div className="form-group">
                <label>Fanpage trên Facebook</label>
                <Field type="text" className="form-control" name="facebook" placeholder="Link Fanpage" />
                {errors.facebook && touched.facebook ?
                  (<div className="text text-danger">{errors.facebook}</div>) : null}
              </div>
              <label>Chuyên ngành</label>
              <div className="table-container">
                <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Chuyên ngành</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <Field type="checkbox" className="custom-control-input" id="customCheck1" name="nganh" value="idNganh1" />
                              <label className="custom-control-label" for="customCheck1" ></label>
                            </div>
                          </td>
                          <td>Kĩ thuật phần mềm</td>

                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <Field type="checkbox" className="custom-control-input" id="customCheck2" name="nganh" value="idNganh2" />
                              <label className="custom-control-label" for="customCheck2"></label>
                            </div>
                          </td>
                          <td>An toàn thông tin</td>

                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <Field type="checkbox" class="custom-control-input" id="customCheck3" name="nganh" value="idNganh3" />
                              <label className="custom-control-label" for="customCheck3" ></label>
                            </div>
                          </td>
                          <td>Kinh doanh quốc tế</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <Field type="checkbox" className="custom-control-input" id="customCheck4" name="nganh" value="idNganh4" />
                              <label className="custom-control-label" for="customCheck4" ></label>
                            </div>
                          </td>
                          <td>Quản trị du lịch</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <Field type="checkbox" className="custom-control-input" id="customCheck5" name="nganh" value="idTruong5" />
                              <label className="custom-control-label" for="customCheck5" ></label>
                            </div>
                          </td>
                          <td>Quản trị khách sạn</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-success" type="submit">Thêm chuyên ngành</button>
              </div>
            </Form>
          )
        }
      }
      </Formik>
    </div>
  )
}

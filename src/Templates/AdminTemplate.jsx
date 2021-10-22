import React from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { history } from '../App';
import { ACCESS_TOKEN } from '../Utils/setting';
import {firebase} from './../Service/firebase';

export default function AdminTemplate(props) {
    return <Route exact path={props.path} render={(propsRoute) => {
        return (
            localStorage.getItem(ACCESS_TOKEN) ? <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-3 p-0">
                        <ProSidebar style={{ position: 'fixed', width: 'auto', height: '100%', overflowX: 'hidden', overflowY: 'auto', zIndex: '101' }}>
                            <SidebarHeader>
                                <h3 className="text-center pt-2 pb-2">ADMISSTION</h3>
                            </SidebarHeader>
                            <SidebarContent>
                                <Menu iconShape="square">
                                    <SubMenu title="Quản lí Trường học">
                                        <MenuItem><NavLink to="/admin/quanLiTruongHoc">Xem danh sách trường</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin/themTruongHoc">Thêm trường học</NavLink></MenuItem>
                                        <SubMenu title="Quản lí chuyên ngành">
                                            <MenuItem><NavLink to="/admin/xemDanhSachChuyenNganh">xem danh sách Chuyên Ngành</NavLink></MenuItem>
                                            <MenuItem><NavLink to="/admin/themChuyenNganh">Thêm Chuyên Ngành</NavLink></MenuItem>
                                        </SubMenu>
                                        <SubMenu title="Quản lí câu hỏi thường gặp">
                                            <MenuItem><NavLink to="/admin/xemCauHoi">xem câu hỏi thường gặp</NavLink></MenuItem>
                                            <MenuItem><NavLink to="/admin/themCauHoi">Thêm câu hỏi thường gặp</NavLink></MenuItem>
                                            
                                        </SubMenu>
                                    </SubMenu>

                                </Menu>
                                <Menu iconShape="square">
                                    <SubMenu title="Quản lí người tư vấn">
                                        <MenuItem><NavLink to="/admin/quanLiNguoiDung">Danh sách nguoi dùng</NavLink></MenuItem>
                                        {/* <MenuItem>Component 2</MenuItem> */}
                                        <MenuItem><NavLink to="/admin/themNguoiDung">Thêm người dùng</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin/themHocSinh">Thêm Học Sinh</NavLink></MenuItem>
                                    </SubMenu>
                                </Menu>
                            </SidebarContent>
                            <SidebarFooter className="text-center">
                                <NavLink to="/" onClick={()=>{
                                    localStorage.removeItem(ACCESS_TOKEN);
                                    firebase.auth().signOut();
                                    history.push('/');
                                    window.location.reload();
                                }} className="btn btn-outline-light m-3">Logout</NavLink>
                            </SidebarFooter>
                        </ProSidebar>
                    </div>

                    <div className="col-9 p-0 mt-5">
                        <props.component {...propsRoute} />
                    </div>
                </div>

            </div> : <Redirect to='/login' />
        )
    }} />
}

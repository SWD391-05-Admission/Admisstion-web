
import React from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Route, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ACCESS_TOKEN, USER_LOGIN } from '../Utils/setting';
import { firebase } from './../Service/firebase';

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
                                    <SubMenu title="Quản lí người dùng">
                                        <MenuItem><NavLink to="/admin/quanLiNguoidung">Danh sách người dùng</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin/themNguoiDUng">Thêm Người dùng</NavLink></MenuItem>
                                    </SubMenu>
                                </Menu>
                                <Menu>
                                    <SubMenu title="Quản lí chuyên ngành">
                                        <MenuItem><NavLink to="/admin/xemDanhSachChuyenNganh">Danh sách Chuyên Ngành</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin/themChuyenNganh">Thêm Chuyên Ngành</NavLink></MenuItem>
                                    </SubMenu>
                                </Menu>
                                <Menu iconShape="square">
                                    <SubMenu title="Quản lí Trường học">
                                        <MenuItem><NavLink to="/admin/quanLiTruongHoc">Danh sách trường</NavLink></MenuItem>
                                        <MenuItem><NavLink to="/admin/themTruongHoc">Thêm trường học</NavLink></MenuItem>

                                    </SubMenu>

                                </Menu>

                            </SidebarContent>
                            <SidebarFooter className="text-center">
                                <NavLink to="/" onClick={() => {
                                    localStorage.setItem(ACCESS_TOKEN, "");
                                    localStorage.setItem(USER_LOGIN, '');
                                    firebase.auth().signOut();
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
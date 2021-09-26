import React from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { RiCopyrightLine } from "react-icons/ri";

export default function AdminTemplate() {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">
                <div className="col-3 p-0">
                    <ProSidebar style={{ position: 'fixed', height: '100%', overflowX: 'hidden', overflowY: 'auto', zIndex: '101' }}>
                        <SidebarHeader>
                            <h3 className="text-center pt-2 pb-2">ADMISSTION</h3>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square">
                                <SubMenu title="Quản lí Trường học">
                                    <SubMenu title="Quản lí chuyên ngành">
                                        <MenuItem>Component 1</MenuItem>
                                        <MenuItem>Component 2</MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Quản lí câu hỏi thường gặp">
                                        <MenuItem>Component 1</MenuItem>
                                        <MenuItem>Component 2</MenuItem>
                                    </SubMenu>
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>

                            </Menu>
                            <Menu iconShape="square">
                                <SubMenu title="Quản lí người tư vấn">
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                            </Menu>
                            <Menu iconShape="square">
                                <SubMenu title="Quản lí học sinh">
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                            </Menu>
                        </SidebarContent>
                        <SidebarFooter className="text-center">
                            <button className="btn btn-outline-light m-3">Logout</button>
                        </SidebarFooter>
                    </ProSidebar>
                </div>

                <div className="col-9 p-0">
                    ạdnjkasdnj
                </div>
            </div>

        </div>
    )
}

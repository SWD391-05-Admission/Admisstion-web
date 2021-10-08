
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AdminTemplate from './Templates/AdminTemplate';
import LoginTemplate from './Templates/LoginTemplate';
import Login from './Pages/Login';

import QuanLiTruongHoc from './Components/QuanLiTruongHoc/QuanLiTruongHoc';
import QuanLiChuyenNganh from './Components/QuanLiTruongHoc/QuanLiChuyenNganh/QuanLiChuyenNganh';
import ThemChuyenNganh from './Components/QuanLiTruongHoc/QuanLiChuyenNganh/ThemChuyenNganh';
import ThemTruongHoc from './Components/QuanLiTruongHoc/ThemTruongHoc';
import QuanLiNguoiDung from './Components/QuanLiNguoiDung/QuanLiNguoiDung';
import ThemNguoidung from './Components/QuanLiNguoiDung/ThemNguoidung';
import UpdateNguoiDung from './Components/QuanLiNguoiDung/UpdateNguoiDung';
import UpdateChuyenNganh from './Components/QuanLiTruongHoc/QuanLiChuyenNganh/UpdateChuyenNganh';
import UpdateTruongHoc from './Components/QuanLiTruongHoc/UpdateTruongHoc';

export const history = createBrowserHistory();

function App() {
  return (

    <Router history={createBrowserHistory}>
      <Switch>

        <AdminTemplate path="/admin/updateNguoiDung/:ngID" component={UpdateNguoiDung} />
        <AdminTemplate path="/admin/updateChuyenNganh/:maCN" component={UpdateChuyenNganh} />
        <AdminTemplate path="/admin/updateTruongHoc/:maTruong" component={UpdateTruongHoc} />
        <AdminTemplate path="/admin/quanLiTruongHoc" component={QuanLiTruongHoc} />
        <AdminTemplate path="/admin/themTruongHoc" component={ThemTruongHoc} />
        <AdminTemplate path="/admin/xemDanhSachChuyenNganh" component={QuanLiChuyenNganh} />
        <AdminTemplate path="/admin/themChuyenNganh" component={ThemChuyenNganh} />
        <AdminTemplate path="/admin/quanLiNguoiDung" component={QuanLiNguoiDung} />
        <AdminTemplate path="/admin/ThemNguoiDung" component={ThemNguoidung} />
        <AdminTemplate path="/admin" component={QuanLiNguoiDung} />



        <LoginTemplate path="/login" component={Login} />
        <LoginTemplate path="/" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;

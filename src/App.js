
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AdminTemplate from './Templates/AdminTemplate';
import LoginTemplate from './Templates/LoginTemplate';
import Login from './Pages/Login';

import QuanLiCauHoi from './Components/QuanLiTruongHoc/QuanLiCauHoi/QuanLiCauHoi';
import QuanLiTruongHoc from './Components/QuanLiTruongHoc/QuanLiTruongHoc';
import ThemCauHoi from './Components/QuanLiTruongHoc/QuanLiCauHoi/ThemCauHoi';
import QuanLiChuyenNganh from './Components/QuanLiTruongHoc/QuanLiChuyenNganh/QuanLiChuyenNganh';
import ThemChuyenNganh from './Components/QuanLiTruongHoc/QuanLiChuyenNganh/ThemChuyenNganh';
import ThemTruongHoc from './Components/QuanLiTruongHoc/ThemTruongHoc';
import QuanLiNguoiTuVan from './Components/QuanLiNguoiTuVan/QuanLiNguoiTuVan';
import QuanLiHocSinh from './Components/QuanLiHocSinh/QuanLiHocSinh'
// import QuanLiTruongHoc from './Component/QuanLiTruongHoc/QuanLiTruongHoc';
// import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>

        <AdminTemplate path="/admin/quanLiTruongHoc" component={QuanLiTruongHoc} />
        <AdminTemplate path="/admin/themTruongHoc" component={ThemTruongHoc} />
        <AdminTemplate path="/admin/xemCauHoi" component={QuanLiCauHoi} />
        <AdminTemplate path="/admin/themCauHoi" component={ThemCauHoi} />
        <AdminTemplate path="/admin/xemDanhSachChuyenNganh" component={QuanLiChuyenNganh} />
        <AdminTemplate path="/admin/themChuyenNganh" component={ThemChuyenNganh} />
        <AdminTemplate path="/admin/quanLiNguoiTuVan" component={QuanLiNguoiTuVan} />
        <AdminTemplate path="/admin/quanLiHocSinh" component={QuanLiHocSinh} />
        <AdminTemplate path="/admin" component={QuanLiTruongHoc} />


        <LoginTemplate path="/login" component={Login} />
        <LoginTemplate path="/" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;

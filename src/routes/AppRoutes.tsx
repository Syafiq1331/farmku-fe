import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { PrivateRoutes, PublicRoutes } from './Routes';
import { Home, Detail, Login } from '../pages/Pages';
import Logout from '../components/Logout';
import ManageField from '../pages/Features/ManageField/ManageField__index';
import AddField from '../pages/Features/ManageField/ManageField__create';
import ManageUser from '../pages/Features/ManageUser/ManageUser__index';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/manage-field" element={<ManageField />} />
        <Route path="/manage-field/add" element={<AddField />} />
        <Route path="/manage-user" element={<ManageUser />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes

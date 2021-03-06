import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomeComponents/Home/Home";
import Header from "./pages/SharedComponents/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/SharedComponents/NotFound/NotFound";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import RequireAuth from "./pages/User/RequireAuth/RequireAuth";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Blogs from "./pages/Blogs/Blogs";
import ToolDetail from "./pages/HomeComponents/ToolDetail/ToolDetail";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders/ManageAllOrders";
import AddAProduct from "./pages/Dashboard/AddAProduct/AddAProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard">
          <Route
            path="orders"
            element={
              <RequireAuth>
                <MyOrders></MyOrders>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="reviews"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <MyProfile></MyProfile>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageallorders"
            element={
              <RequireAuth>
                <ManageAllOrders></ManageAllOrders>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addaproduct"
            element={
              <RequireAuth>
                <AddAProduct></AddAProduct>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAuth>
                <MakeAdmin></MakeAdmin>
              </RequireAuth>
              // <RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAuth>
                <ManageProducts></ManageProducts>
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="/tools/:id" element={<RequireAuth><ToolDetail></ToolDetail></RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

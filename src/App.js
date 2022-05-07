import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import ManageInventory from "./components/Inventory/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import AddItems from "./components/AddItems/AddItems";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Privete from "./components/Hooks/Privete";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/manageinventory"
          element={
            <Privete>
              <ManageInventory></ManageInventory>
            </Privete>
          }
        />
        <Route
          path="/myitems"
          element={
            <Privete>
              <MyItems />
            </Privete>
          }
        />
        <Route
          path="/additem"
          element={
            <Privete>
              <AddItems />
            </Privete>
          }
        />

        <Route path="/blog" element={<Blog />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

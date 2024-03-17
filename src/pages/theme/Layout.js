import Body from "./Main";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";



const Layout = () => {

  const pageTitle = 'Home page';
  return (


    //         <div class="container">
    // <header class="header">
    // <Header />
    // </header>

    // <aside class="sidebar">
    //     <Sidebar/>
    // </aside>

    // <main class="body">
    //     <Body/>
    // </main>

    // <footer class="footer">
    //     <Footer/>
    //     </footer>
    <div>
      <div class="header">
        <Header />
      </div>

      <div class="sidebar">
        <Sidebar />
      </div>

      <div class="main">
        <Outlet />
      </div>

      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
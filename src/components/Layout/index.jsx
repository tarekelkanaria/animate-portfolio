import './index.scss';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';

const Layout = () => {
  return (
    <main className="App">
      <SideBar />
      <section className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;html&gt;</span>
        </span>
      </section>
    </main>
  );
};
export default Layout;

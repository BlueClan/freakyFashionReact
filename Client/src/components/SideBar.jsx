import { Link } from 'react-router-dom';
import '../styles/admin.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/admin/products">Produkter</Link></li>
          <li><Link to="/admin/products/new">Ny produkt</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
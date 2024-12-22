// components/AdminNav.js
import Link from "next/link";

const AdminNav = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <ul className="flex items-center justify-center space-x-6">
        <li>
          <Link href="/admin">
            <span className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link href="/admin/products">
            <span className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Manage Products
            </span>
          </Link>
        </li>
        <li>
          <Link href="/admin/products/create">
            <span className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Create Product
            </span>
          </Link>
        </li>
        <li>
          <Link href="/admin/checkout">
            <span className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Order List
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;

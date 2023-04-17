// import Navbar from "react-bootstrap/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { getUser, logout } from "../../services/auth-service";

export default function Header(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Needed to refresh the header on login
  const isLogged = props.isLogged;
  const setIsLogged = props.setIsLogged;

  const navigate = useNavigate();

  const user = getUser();
  const mineCars = isLogged ? `/cars/mine/${user.id}` : "";
  const rentNewCars = isLogged ? `/cars/rent/${user.id}` : "";
  const editUser = isLogged ? `/user/${user.id}` : "";
  const userRentals = isLogged ? `/user/rentals/${user.id}` : "";

  const loggingOut = (e) => {
    e.preventDefault();

    logout();
    setIsLogged(false);
    navigate("/");
  };

  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Rent U Need
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              {isLogged && (
                <Fragment>
                  <li class="nav-item">
                    <Link class="nav-link" to="/cars/all">
                      สินค้าทั้งหมด
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                    >
                      สินค้า
                    </a>
                    <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                      <li className="dropdown-item">
                        <Link to={rentNewCars}>เช่าสินค้าใหม่</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to={userRentals}>สินค้าที่เช่า</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to={mineCars}>สินค้าของฉัน</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to="/cars/create">สร้างสินค้า</Link>
                      </li>
                    </ul>
                  </li>
                  {user.isAdmin && (
                    <li class="nav-item">
                      <Link class="nav-link" to="/users">
                        จัดการบัญชีผู้ใช้
                      </Link>
                    </li>
                  )}
                </Fragment>
              )}
              {!isLogged && (
                <Fragment>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      เข้าสู่ระบบ
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/register">
                      สมัครสมาชิก
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
            {isLogged && (
              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                  <Link class="nav-link" to={editUser}>
                    {user.name}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/" onClick={loggingOut}>
                    ออกจากระบบ
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
            }
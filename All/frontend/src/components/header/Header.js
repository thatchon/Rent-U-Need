// import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { getUser, logout } from "../../services/auth-service";

export default function Header(props) {
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
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rent U Need
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {isLogged && (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cars/all">
                      สินค้าทั้งหมด
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      สินค้า
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to={rentNewCars}>
                          เช่าสินค้าใหม่
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={userRentals}>
                          สินค้าที่เช่า
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={mineCars}>
                          สินค้าของฉัน
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/cars/create">
                          สร้างสินค้า
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {user.isAdmin && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/users">
                        จัดการบัญชีผู้ใช้
                      </Link>
                    </li>
                  )}
                </Fragment>
              )}
              {!isLogged && (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      เข้าสู่ระบบ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      สมัครสมาชิก
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
            {isLogged && (
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to={editUser}>
                    {user.name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={loggingOut}>
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
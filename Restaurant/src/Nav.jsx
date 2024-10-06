import React from "react";
import { NavLink ,Link} from "react-router-dom";
import {FaHeart,FaHome } from 'react-icons/fa';
import { useSelector } from "react-redux";


export default function Nav() {
  const res = useSelector(state=> state.resData.liked)
  return (
    <>
      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <span class="navbar-brand h1 text-center fw-bold fs-2 ms-5">
                recipesTalk
              </span>{" "}
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
           <NavLink to={'/'}> <li className="px-3 pb-2 pt-2 "><FaHome/></li></NavLink>
           <NavLink to={'/wishlist'}> <li className="px-3 pb-2 pt-2"><FaHeart/><span className="bg-danger relen rounded ps-1 pe-1 text-light">{res.length}</span></li></NavLink>
            <a class="nav-link disabled " aria-disabled="true">Chief</a>
            
          </ul>
          <div className="col-md-3 text-end">
            
           <Link to={'/auth'}><button type="button" className="btn l text-light me-2">
              Login
            </button></Link>
            <Link to={'/auth'}><button type="button" className="btn l text-light">
              Sign-up
            </button></Link>
          </div>
        </header>
      </div>
    </>
  );
}

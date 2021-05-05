import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center w-25 d-inline-flex">
      <img className="card-img-top" src={avatar_url} alt={login} />
      <div className="card-body">
        <small className="text-muted">نام کاربری و مشخصات</small>
        <h5 className="card-title">{login}</h5>
        <p className="card-text"></p>
        <p className="card-text">
          <small className="text-muted">
            <Link className="btn btn-block btn-secondary btn-sm" to={`/user/${login}`}>
              نمایش پروفایل و جزئیات
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: propTypes.object.isRequired,
};
export default UserItem;

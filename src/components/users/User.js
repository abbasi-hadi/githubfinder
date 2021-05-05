import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "./repos/Repos";

const User = ({ user, repos, getUserRepos, getUser, loading, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const {
    name,
    login,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    hireable,
    public_repos,
    public_gists,
  } = user;
  if (loading === true) return <Spinner />;
  return (
    <Fragment>
      <div className="card text-center">
        <div className="card-header">
          <Link to="/" className="btn btn-dark pull-right">
            <i className="fa fa-chevron-right"></i> بازگشت به لیست کاربران
          </Link>

          <div className="pull-left" style={{ marginTop: "10px" }}>
            {"  "}
            قابل استخدام{" "}
            {hireable ? (
              <i className="fa fa-check text-success" />
            ) : (
              <i className="fa fa-times-circle text-danger" />
            )}
          </div>
        </div>
        <div className="card-body text-justify">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                alt={name}
                src={avatar_url}
                style={{ width: "100%" }}
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-8">
              <h4 className="card-title mt-2">{name}</h4>
              {location && (
                <Fragment>
                  <p className="card-text">
                    <small className="text-muted">
                      منطقه مکانی : {location}
                    </small>
                  </p>
                </Fragment>
              )}
              {bio && (
                <Fragment>
                  <h6 className="card-title">بیوگرافی کاربر : </h6>
                  <p className="card-text">{bio}</p>
                </Fragment>
              )}
              <a
                className="btn btn-primary btn-sm"
                href={html_url}
                target="__blank"
              >
                نمایش پروفایل گیت هاب
              </a>
              <hr />
              <ul>
                {login && (
                  <Fragment>
                    <li>
                      <strong>نام کاربری : </strong> {login}
                    </li>
                  </Fragment>
                )}
                {company && (
                  <Fragment>
                    <li>
                      <strong>شرکت / کمپانی : </strong>
                      {company}
                    </li>
                  </Fragment>
                )}
                {blog && (
                  <Fragment>
                    <li>
                      <strong>وب سایت : </strong>
                      {blog}
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted ">
          <p class="badge bg-primary text-white m-1 p-2">
            دنبال کننده : {(" ", followers)}
          </p>
          <p class="badge bg-success text-white m-1 p-2">
            دنبال شده :‌ {(" ", following)}
          </p>
          <p class="badge bg-danger text-white m-1 p-2">
            مخازن عمومی : {(" ", public_repos)}
          </p>
          <p class="badge bg-warning text-dark text-white m-1 p-2">
            نکات عمومی : {(" ", public_gists)}
          </p>
        </div>
      </div>
      <div class="list-group mt-2">
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};
export default User;

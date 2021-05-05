import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <a href={repo.html_url} className="list-group-item list-group-item-action">
     <strong>نام مخزن : </strong> {repo.name}
    </a>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;

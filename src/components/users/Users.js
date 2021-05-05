import React from "react";
import UserItem from "./UserItem";
import Spinner from '../layouts/Spinner';
import propTypes from 'prop-types';

const Users = ({ loading, users }) => {
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="mt-3">
              {users.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          );
    }
};
Users.propTypes = {
    users:propTypes.array.isRequired,
    loading : propTypes.bool.isRequired
}

export default Users;

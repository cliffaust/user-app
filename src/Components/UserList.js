import React, { useEffect } from "react";
import UserItem from "./UserItem";
import { allUsers } from "../actions/userActions";

import { connect } from "react-redux";

function Userlist(props) {
  useEffect(() => {
    props.allUsers();
  }, []);
  return (
    <div>
      {props.usersData.map((user) => (
        <UserItem
          updateUser={props.updateUser}
          delete={props.delete}
          user={user}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return { usersData: state.users };
}

const mapDispatchToProps = {
  allUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlist);

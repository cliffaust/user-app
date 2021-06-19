import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";

function EditUserForm(props) {
  const [state, setState] = useState({
    username: props.user.username,
    email: props.user.email,
    country: props.user.country,
    password: props.user.password,
  });

  function handleonChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleonSubmit() {
    let user = { ...state, id: props.user.id };
    props.updateNewUser(user);
    props.hideModal();
  }
  return (
    <div>
      <div>
        <label className="">Username</label>
        <br></br>
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleonChange}
        ></input>
      </div>

      <div>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={handleonChange}
        ></input>
      </div>

      <div>
        <label>Country</label>
        <br></br>
        <input
          type="text"
          value={state.country}
          name="country"
          onChange={handleonChange}
        ></input>
      </div>

      <div>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          value={state.password}
          name="Password"
          onChange={handleonChange}
        ></input>
      </div>

      <button type="button" onClick={handleonSubmit}>
        Update User
      </button>
    </div>
  );
}

const mapDispatchToProps = { updateNewUser: updateUser };

export default connect(null, mapDispatchToProps)(EditUserForm);

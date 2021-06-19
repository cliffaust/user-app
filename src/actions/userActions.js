export function addUser(newUser) {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("users")
      .add(newUser)
      .then((res) => {
        dispatch({
          type: "ADD_USER",
          payload: newUser,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function allUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();

    db.collection("users")
      .get()
      .then((res) => {
        let users = [];
        res.forEach((doc) => {
          // console.log(doc.id, doc.data());
          users.push(doc.data());
        });

        dispatch({
          type: "ALL_USERS",
          payload: users,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function updateUser(newUser) {
  return { type: "UPDATE_USER", payload: newUser };
}

export function deleteUser(newUser) {
  return { type: "DELETE_USER", payload: newUser };
}

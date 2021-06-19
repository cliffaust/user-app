const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload);
      return { ...state, users: [...state.users, action.payload] };

    case "ALL_USERS":
      const users = action.payload;
      return { users: users };

    case "DELETE_USER":
      let id = action.payload.id;
      let userAfterDelete = state.users.filter((user) => user.id !== id);

      return { users: userAfterDelete };

    case "UPDATE_USER":
      let update_id = action.payload.id;
      const updatedUserInfo = action.payload;
      const userAfterUpdate = state.users.map((user) => {
        if (user.id === update_id) {
          return updatedUserInfo;
        }

        return user;
      });

      return { users: userAfterUpdate };

    default:
      return state;
  }
};

export default usersReducer;

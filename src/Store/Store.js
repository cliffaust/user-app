import { createStore, compose, applyMiddleware } from "redux";
import userReducers from "../Reducers/usersReducer";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import fbConfig from "../firebase/config";
import firebase from "firebase/app";

import thunk from "redux-thunk";

export const store = createStore(
  userReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(fbConfig),
    reduxFirestore(fbConfig)
  )
);

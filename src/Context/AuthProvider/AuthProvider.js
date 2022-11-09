import React, { Children, createContext } from "react";
import App from "../../App";
import app from "../../Firebase/Firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
const authInfo = {};

const AuthProvider = () => {
  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { useState } from "react";
import firebaseAuthService from "./FirebaseAuthService";
// import firebase from "./FirebaseConfig";
import LoginForm from "./components/LoginForm";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipes</h1>
        <LoginForm existingUser={user} />
      </div>
    </div>
  );
};

export default App;

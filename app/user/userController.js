"use strict";

const User = require("./user");
const { admin, auth } = require("../../config/config");

class UserController {
  constructor() {
    this.activeUser;
    this.authStatus;
    this.allUsers = [];
  }

  signUp(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userRecord => {
        this.activeUser = userRecord.email;
        this.authStatus = "Successful SignUp as " + this.activeUser;
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    return this.authStatus;
  }

  signIn(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userRecord => {
        this.activeUser = userRecord.email;
        this.authStatus = "Successful SignIn as " + this.activeUser;
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    return this.authStatus;
  }

  signOut() {
    auth
      .signOut()
      .then(() => {
        this.authStatus = "Successful SignOut " + this.activeUser;
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    return this.authStatus;
  }

  getAll() {
    admin
      .auth()
      .listUsers()
      .then(listUsersResult => {
        listUsersResult.users.forEach(userRecord => {
          let duplicate = this.allUsers.indexOf(userRecord.email);
          if (duplicate == -1) {
            this.allUsers.push(userRecord.email);
          }
          this.authStatus = "";
        });
      })
      .catch(err => {
        this.authStatus = err;
      });
    if (this.authStatus === "") {
      return this.allUsers;
    } else {
      return this.authStatus;
    }
  }
}

const userController = new UserController();

module.exports = userController;

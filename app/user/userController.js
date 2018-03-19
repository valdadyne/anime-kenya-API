"use strict";

const User = require("./user");
const { admin, auth } = require("../../config/config");

class UserController {
  constructor() {
    this.activeUser;
    this.authStatus;
    this.user;
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
        this.activeUser = "";
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    return this.authStatus;
  }

  getAll() {
    if (this.activeUser != "") {
      admin
        .auth()
        .listUsers()
        .then(listUsersResult => {
          listUsersResult.users.forEach(userRecord => {
            let duplicate = this.allUsers.indexOf(userRecord.uid);
            if (duplicate == -1) {
              this.allUsers.push([userRecord.uid, userRecord.email]);
            }
            this.authStatus = "";
          });
        })
        .catch(err => {
          this.authStatus = err.message;
        });
      if (this.authStatus === "") {
        return this.allUsers;
      } else {
        return this.authStatus;
      }
    } else {
      this.authStatus = "SignIn/SignUp first mate !!";
      return this.authStatus;
    }
  }

  getById(uid) {
    admin
      .auth()
      .getUser(uid)
      .then(userRecord => {
        this.user = [userRecord.uid, userRecord.email];
        this.authStatus = "";
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    if (this.authStatus === "") {
      return "This user exists " + this.user;
    } else {
      return this.authStatus;
    }
  }

  getByEmail(email) {
    admin
      .auth()
      .getUserByEmail(email)
      .then(userRecord => {
        this.user = [userRecord.uid, userRecord.email];
        this.authStatus = "";
      })
      .catch(err => {
        this.authStatus = err.message;
      });
    if (this.authStatus === "") {
      return "This user exists " + this.user;
    } else {
      return this.authStatus;
    }
  }
}

const userController = new UserController();

module.exports = userController;

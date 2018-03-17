"use strict";

const User = require("./user");
const { auth } = require("../../config/config");

class UserController {
  constructor() {
    this.authError = "";
    this.activeUser;
  }

  signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password).catch(error => {
      if (error) {
        this.authError = error.message;
        return this.authError;
      }
    });
    return (this.authError = "");
  }

  signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      if (error) {
        this.authError = error.message;
        return this.authError;
      }
    });
    return (this.authError = "");
  }
}

const userController = new UserController();

module.exports = userController;

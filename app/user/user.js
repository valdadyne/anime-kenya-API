"use strict";

class User {
  constructor(id, email, password, fullname, role) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.role = role;
  }
}

module.exports = User;

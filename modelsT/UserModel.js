const { BaseEntity } = require("typeorm");

class UserModel extends BaseEntity {
    constructor(_id, email, password, firstName, lastName) {
        super();
        this._id = _id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
module.exports = UserModel;
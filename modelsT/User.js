const { EntitySchema }  = require("typeorm");
const UserModel = require("./UserModel");
module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    target: UserModel,
    columns: {
        _id: {
            primary: true,
            type: "int",
            generated: true,
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar"
        },
    }
});
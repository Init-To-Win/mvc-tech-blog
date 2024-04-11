const { User } = require("../models");

const userData = [
  {
    username: "CoolCoder",
    email: "CC@abc.com",
    password: "password01",
  },
  {
    username: "SQLSquirrel",
    email: "SQLS@abc.com",
    password: "password02",
  },
  {
    username: "HandleBarMoustache",
    email: "HBM@abc.com",
    password: "password03",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

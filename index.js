/* 
Challenge

Create a user object. Decide on what key value pairs make sense for user. I want at least 1 nested object.

After you've initialized your object, add a key value pair where the key is the user's favorite programming language and the value is a string representation of that language.

Delete 1 property from your objects.
*/

const user = {
  firstName: "John",
  lastName: "Ipson",
  userName: "darthcircuit",
  password: "nunyabusiness",
  favorites: {
    color: "blue",
    band: "Radiohead",
  },
};

user.favorites.language = "Python";

delete user.password;
console.log(user);

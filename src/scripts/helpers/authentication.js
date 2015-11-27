module.exports = {
    signup: function(username, email, password) {
        // TODO (Gigabyte Giant): Write logic to be used when signing up
    },
    login: function(username, password) {
        Parse.User.logIn(username, password);
    }
};
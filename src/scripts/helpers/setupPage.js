var authentication = require("./authentication.js");

module.exports = function() {
    // NOTE: This **has** to go at the very top of this function,
    //  otherwise we can't use the Parse JS SDK.
    Parse.initialize(
        "F4jHkOZFPQTGPZ23D1CqaNxmbLqoAUAxBzcnlWQn",
        "Zt177eOpCUI12dvHbBaIAaf8MZdXqkjsZYlagRul"
    );

    // Fetch the currently logged in user, and store them in a variable
    //  called "currentUser".
    let currentUser = Parse.User.current();

    // If the user isn't logged in, we'll display some buttons that allow
    //  them to sign up or login.
    // 
    // If the user is logged in, then we'll display a welcome message.
    // 
    if (currentUser === null) {
        $("body").append(
            $("<button>")
                .text("Sign in")
                .on("click", () => {
                    // TODO (Gigabyte Giant): Show a sign-in form
                    console.log("The user wants to log in");
                })
        ).append(
            $("<button>")
                .text("Sign up")
                .on("click", () => {
                    // TODO (Gigabyte Giant): Show a sign-up form
                    console.log("The user wants to create an account");
                })
        );
    } else {
        // TODOgi
    }
};
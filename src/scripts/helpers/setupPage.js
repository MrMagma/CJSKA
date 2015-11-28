var authentication = require("./authentication.js");

var createLoginForm = function() {
    return $("<div>")
    .append(
        $("<div>").addClass("alert alert-danger hidden")
            .attr("id", "loginFailed")
            .text("An error occurred. Try again in a few minutes.")
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "username").text("Username")
        )
        .append(
            $("<input>")
                .attr("type", "text")
                .attr("name", "username")
                .addClass("form-control")
        )
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "password").text("Password")
        )
        .append(
            $("<input>")
                .attr("type", "password")
                .attr("name", "password")
                .addClass("form-control")
        )
    );
};

var createSignupForm = function() {
    return $("<div>")
    .append(
        $("<div>").addClass("alert alert-danger hidden")
            .attr("id", "signupError")
            .text("An error occurred. Try again in a few minutes.")
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "username").text("Username")
        )
        .append(
            $("<input>")
                .attr("type", "text")
                .attr("name", "username")
                .addClass("form-control")
        )
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "email").text("Email Address")
        )
        .append(
            $("<input>")
                .attr("type", "email")
                .attr("name", "email")
                .addClass("form-control")
        )
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "password").text("Password")
        )
        .append(
            $("<input>")
                .attr("type", "password")
                .attr("name", "password")
                .addClass("form-control")
        )
    )
    .append(
        $("<div>").addClass("form-group")
        .append(
            $("<label>").attr("for", "confpass").text("Confirm Password")
        )
        .append(
            $("<input>")
                .attr("type", "password")
                .attr("name", "confpass")
                .addClass("form-control")
        )
    );
};

var setupModals = function() {
    // Login Modal
    $("body").append(
        $("<div>").addClass("modal fade").attr("role", "dialog")
        .attr("id", "loginModal")
        .append(
            $("<div>").addClass("modal-dialog")
            .append(
                $("<div>").addClass("modal-content")
                .append(
                    // Start Modal Header
                    $("<div>").addClass("modal-header")
                    .append(
                        $("<button>").addClass("close")
                            .attr("data-dismiss", "modal")
                            .attr("aria-label", "Close")
                            .append(
                                $("<span>")
                                    .attr("aria-hidden", "true")
                                    .html("&times;")
                            )
                    )
                    .append(
                        $("<h4>").addClass("modal-title").text("Log In")
                    )
                    // End Modal Header
                )
                .append(
                    // Start Modal Body
                    $("<div>").addClass("modal-body")
                    .append(
                        createLoginForm()
                    )
                    // End Modal Body
                )
                .append(
                    // Start Modal Footer
                    $("<div>").addClass("modal-footer")
                        .append(
                            $("<div>").addClass("form-group")
                            .append(
                                $("<button>")
                                    .addClass("btn btn-success")
                                    .text("Submit")
                                    .on("click", () => {
                                        authentication.login();
                                    })
                            )
                        )
                    // End Modal Footer
                )
            )
        )
    );

    // Sign up Modal
    $("body").append(
        $("<div>").addClass("modal fade").attr("role", "dialog")
        .attr("id", "signupModal")
        .append(
            $("<div>").addClass("modal-dialog")
            .append(
                $("<div>").addClass("modal-content")
                .append(
                    // Start Modal Header
                    $("<div>").addClass("modal-header")
                    .append(
                        $("<button>").addClass("close")
                            .attr("data-dismiss", "modal")
                            .attr("aria-label", "Close")
                            .append(
                                $("<span>")
                                    .attr("aria-hidden", "true")
                                    .html("&times;")
                            )
                    )
                    .append(
                        $("<h4>").addClass("modal-title").text("Sign Up")
                    )
                    // End Modal Header
                )
                .append(
                    // Start Modal Body
                    $("<div>").addClass("modal-body")
                    .append(
                        createSignupForm()
                    )
                    // End Modal Body
                )
                .append(
                    // Start Modal Footer
                    $("<div>").addClass("modal-footer")
                        .append(
                            $("<div>").addClass("form-group")
                            .append(
                                $("<button>")
                                    .addClass("btn btn-success")
                                    .text("Sign Up")
                                    .on("click", () => {
                                        authentication.signup();
                                    })
                            )
                        )
                    // End Modal Footer
                )
            )
        )
    );
};

module.exports = function() {
    // NOTE: This **has** to go at the very top of this function,
    //  otherwise we can't use the Parse JS SDK.
    Parse.initialize(
        "F4jHkOZFPQTGPZ23D1CqaNxmbLqoAUAxBzcnlWQn",
        "Zt177eOpCUI12dvHbBaIAaf8MZdXqkjsZYlagRul"
    );

    // Setup any modals that we might need on the page
    setupModals();

    // Fetch the currently logged in user, and store them in a variable
    //  called "currentUser".
    let currentUser = Parse.User.current();

    // If the user isn't logged in, we'll display some buttons that allow
    //  them to sign up or login.
    // 
    // If the user is logged in, then we'll display a welcome message.
    // 
    if (currentUser === null) {
        $("body")
            .append(
                $("<button>")
                    .text("Sign in")
                    .on("click", () => {
                        $("#loginModal").modal();
                    })
            )
            .append(
                $("<button>")
                    .text("Sign up")
                    .on("click", () => {
                        $("#signupModal").modal();
                    })
            );
    } else {
        var query = (new Parse.Query(Parse.User)).equalTo("objectId", currentUser.id).limit(1);
        query.find({
            success: function(data) {
                let username = (data[0].attributes.username);

                $(".container-fluid")
                .append(
                    $("<h3>").text("Welcome, " + username)
                )
                .append(
                    $("<button>")
                        .addClass("btn btn-danger")
                        .text("Logout")
                        .on("click", () => {
                            Parse.User.logOut();
                            window.location.reload();
                        })
                );
            }
        });
    }
};
var authentication = require("../helpers/authentication.js");

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

module.exports = function() {
    // Login Modal
    $("[data-area=main]").append(
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
                        $("<h4>").addClass("modal-title").text("Sign In")
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
                                    .addClass("btn btn-primary")
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
    $("[data-area=main]").append(
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
                                    .addClass("btn btn-primary")
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
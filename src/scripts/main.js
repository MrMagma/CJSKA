var helpers = require("./helpers/helpers.js");

helpers.setupPage();

if (Parse.User.current() !== null) {
    // TODO (Gigabyte Giant): Redirect to logged in page.
    // TODO (Joshua Gammage): Auto redirects are annoying so find another way.
    window.location.href = "client/";
}

$("[name=signInBtn]").on("click", () => {
    $("#loginModal").modal();
});

$("[name=signUpBtn]").on("click", () => {
    $("#signupModal").modal();
});

module.exports = {
    signup: function() {
        $("#signupError").addClass("hidden");

        let _user = $("#signupModal [name=username]").val();
        let _mail = $("#signupModal [name=email]")   .val();
        let _pass = $("#signupModal [name=password]").val();
        let _conf = $("#signupModal [name=confpass]").val();

        if (_pass !== _conf) {
            $("#signupError").removeClass("hidden");
        } else {
            var newUser = new Parse.User();

            newUser.set("username", _user);
            newUser.set("password", _conf);
            newUser.set("email"   , _mail);

            newUser.signUp(null, {
                success: function() {
                    Parse.User.logIn(_user, _conf, {
                        success: function() {
                            window.location.reload();
                        }
                    });
                },
                error: function(data, error) {
                    $("#signupError").removeClass("hidden");

                    console.error(error);
                }
            });
        }
    },
    login: function() {
        let _name = $("#loginModal [name=username]").val();
        let _pass = $("#loginModal [name=password]").val();

        console.log(_name, _pass);

        Parse.User.logIn(_name, _pass, {
            success: function() {
                window.location.reload();
            },
            error: function(data, error) {
                $("#loginFailed")
                    .removeClass("hidden");

                console.error(error);
            }
        });
    }
};
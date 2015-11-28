(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {
    signup: function signup() {
        $("#signupError").addClass("hidden");

        var _user = $("#signupModal [name=username]").val();
        var _mail = $("#signupModal [name=email]").val();
        var _pass = $("#signupModal [name=password]").val();
        var _conf = $("#signupModal [name=confpass]").val();

        if (_pass !== _conf) {
            $("#signupError").removeClass("hidden");
        } else {
            var newUser = new Parse.User();

            newUser.set("username", _user);
            newUser.set("password", _conf);
            newUser.set("email", _mail);

            newUser.signUp(null, {
                success: function success() {
                    Parse.User.logIn(_user, _conf, {
                        success: function success() {
                            window.location.reload();
                        }
                    });
                },
                error: function error(data, _error) {
                    $("#signupError").removeClass("hidden");

                    console.error(_error);
                }
            });
        }
    },
    login: function login() {
        var _name = $("#loginModal [name=username]").val();
        var _pass = $("#loginModal [name=password]").val();

        console.log(_name, _pass);

        Parse.User.logIn(_name, _pass, {
            success: function success() {
                window.location.reload();
            },
            error: function error(data, _error2) {
                $("#loginFailed").removeClass("hidden");

                console.error(_error2);
            }
        });
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2F1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsVUFBTSxFQUFFLGtCQUFXO0FBQ2YsU0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFckMsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUksR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O0FBRXBELFlBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNqQixhQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDLE1BQU07QUFDSCxnQkFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRS9CLG1CQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFLLEtBQUssQ0FBQyxDQUFDOztBQUUvQixtQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDakIsdUJBQU8sRUFBRSxtQkFBVztBQUNoQix5QkFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQiwrQkFBTyxFQUFFLG1CQUFXO0FBQ2hCLGtDQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUM1QjtxQkFDSixDQUFDLENBQUM7aUJBQ047QUFDRCxxQkFBSyxFQUFFLGVBQVMsSUFBSSxFQUFFLE1BQUssRUFBRTtBQUN6QixxQkFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFeEMsMkJBQU8sQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0osQ0FBQyxDQUFDO1NBQ047S0FDSjtBQUNELFNBQUssRUFBRSxpQkFBVztBQUNkLFlBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25ELFlBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOztBQUVuRCxlQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFMUIsYUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQixtQkFBTyxFQUFFLG1CQUFXO0FBQ2hCLHNCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzVCO0FBQ0QsaUJBQUssRUFBRSxlQUFTLElBQUksRUFBRSxPQUFLLEVBQUU7QUFDekIsaUJBQUMsQ0FBQyxjQUFjLENBQUMsQ0FDWixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTNCLHVCQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0osQ0FBQyxDQUFDO0tBQ047Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNpZ251cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjc2lnbnVwRXJyb3JcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgbGV0IF91c2VyID0gJChcIiNzaWdudXBNb2RhbCBbbmFtZT11c2VybmFtZV1cIikudmFsKCk7XG4gICAgICAgIGxldCBfbWFpbCA9ICQoXCIjc2lnbnVwTW9kYWwgW25hbWU9ZW1haWxdXCIpICAgLnZhbCgpO1xuICAgICAgICBsZXQgX3Bhc3MgPSAkKFwiI3NpZ251cE1vZGFsIFtuYW1lPXBhc3N3b3JkXVwiKS52YWwoKTtcbiAgICAgICAgbGV0IF9jb25mID0gJChcIiNzaWdudXBNb2RhbCBbbmFtZT1jb25mcGFzc11cIikudmFsKCk7XG5cbiAgICAgICAgaWYgKF9wYXNzICE9PSBfY29uZikge1xuICAgICAgICAgICAgJChcIiNzaWdudXBFcnJvclwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdVc2VyID0gbmV3IFBhcnNlLlVzZXIoKTtcblxuICAgICAgICAgICAgbmV3VXNlci5zZXQoXCJ1c2VybmFtZVwiLCBfdXNlcik7XG4gICAgICAgICAgICBuZXdVc2VyLnNldChcInBhc3N3b3JkXCIsIF9jb25mKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0KFwiZW1haWxcIiAgICwgX21haWwpO1xuXG4gICAgICAgICAgICBuZXdVc2VyLnNpZ25VcChudWxsLCB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlLlVzZXIubG9nSW4oX3VzZXIsIF9jb25mLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2lnbnVwRXJyb3JcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvZ2luOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IF9uYW1lID0gJChcIiNsb2dpbk1vZGFsIFtuYW1lPXVzZXJuYW1lXVwiKS52YWwoKTtcbiAgICAgICAgbGV0IF9wYXNzID0gJChcIiNsb2dpbk1vZGFsIFtuYW1lPXBhc3N3b3JkXVwiKS52YWwoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhfbmFtZSwgX3Bhc3MpO1xuXG4gICAgICAgIFBhcnNlLlVzZXIubG9nSW4oX25hbWUsIF9wYXNzLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNsb2dpbkZhaWxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTsiXX0=

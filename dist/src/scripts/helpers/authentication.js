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
                success: function success(data) {
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
            success: function success(data) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2F1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsVUFBTSxFQUFFLGtCQUFXO0FBQ2YsU0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFckMsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUksR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O0FBRXBELFlBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNqQixhQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDLE1BQU07QUFDSCxnQkFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRS9CLG1CQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFLLEtBQUssQ0FBQyxDQUFDOztBQUUvQixtQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDakIsdUJBQU8sRUFBRSxpQkFBUyxJQUFJLEVBQUU7QUFDcEIseUJBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDM0IsK0JBQU8sRUFBRSxtQkFBVztBQUNoQixrQ0FBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt5QkFDNUI7cUJBQ0osQ0FBQyxDQUFDO2lCQUNOO0FBQ0QscUJBQUssRUFBRSxlQUFTLElBQUksRUFBRSxNQUFLLEVBQUU7QUFDekIscUJBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXhDLDJCQUFPLENBQUMsS0FBSyxDQUFDLE1BQUssQ0FBQyxDQUFDO2lCQUN4QjthQUNKLENBQUMsQ0FBQztTQUNOO0tBQ0o7QUFDRCxTQUFLLEVBQUUsaUJBQVc7QUFDZCxZQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNuRCxZQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkQsZUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTFCLGFBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDM0IsbUJBQU8sRUFBRSxpQkFBUyxJQUFJLEVBQUU7QUFDcEIsc0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDNUI7QUFDRCxpQkFBSyxFQUFFLGVBQVMsSUFBSSxFQUFFLE9BQUssRUFBRTtBQUN6QixpQkFBQyxDQUFDLGNBQWMsQ0FBQyxDQUNaLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0IsdUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7YUFDeEI7U0FDSixDQUFDLENBQUM7S0FDTjtDQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2lnbnVwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNzaWdudXBFcnJvclwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcblxuICAgICAgICBsZXQgX3VzZXIgPSAkKFwiI3NpZ251cE1vZGFsIFtuYW1lPXVzZXJuYW1lXVwiKS52YWwoKTtcbiAgICAgICAgbGV0IF9tYWlsID0gJChcIiNzaWdudXBNb2RhbCBbbmFtZT1lbWFpbF1cIikgICAudmFsKCk7XG4gICAgICAgIGxldCBfcGFzcyA9ICQoXCIjc2lnbnVwTW9kYWwgW25hbWU9cGFzc3dvcmRdXCIpLnZhbCgpO1xuICAgICAgICBsZXQgX2NvbmYgPSAkKFwiI3NpZ251cE1vZGFsIFtuYW1lPWNvbmZwYXNzXVwiKS52YWwoKTtcblxuICAgICAgICBpZiAoX3Bhc3MgIT09IF9jb25mKSB7XG4gICAgICAgICAgICAkKFwiI3NpZ251cEVycm9yXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1VzZXIgPSBuZXcgUGFyc2UuVXNlcigpO1xuXG4gICAgICAgICAgICBuZXdVc2VyLnNldChcInVzZXJuYW1lXCIsIF91c2VyKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0KFwicGFzc3dvcmRcIiwgX2NvbmYpO1xuICAgICAgICAgICAgbmV3VXNlci5zZXQoXCJlbWFpbFwiICAgLCBfbWFpbCk7XG5cbiAgICAgICAgICAgIG5ld1VzZXIuc2lnblVwKG51bGwsIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlLlVzZXIubG9nSW4oX3VzZXIsIF9jb25mLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2lnbnVwRXJyb3JcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvZ2luOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IF9uYW1lID0gJChcIiNsb2dpbk1vZGFsIFtuYW1lPXVzZXJuYW1lXVwiKS52YWwoKTtcbiAgICAgICAgbGV0IF9wYXNzID0gJChcIiNsb2dpbk1vZGFsIFtuYW1lPXBhc3N3b3JkXVwiKS52YWwoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhfbmFtZSwgX3Bhc3MpO1xuXG4gICAgICAgIFBhcnNlLlVzZXIubG9nSW4oX25hbWUsIF9wYXNzLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjbG9naW5GYWlsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07Il19

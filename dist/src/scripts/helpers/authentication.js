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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjOi9Vc2Vycy9Pd25lci9EZXNrdG9wL1Byb2plY3RzL0NKU0tBMy9zcmMvc2NyaXB0cy9oZWxwZXJzL2F1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsVUFBTSxFQUFFLGtCQUFXO0FBQ2YsU0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFckMsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUksR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsWUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O0FBRXBELFlBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtBQUNqQixhQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDLE1BQU07QUFDSCxnQkFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBRS9CLG1CQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFLLEtBQUssQ0FBQyxDQUFDOztBQUUvQixtQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDakIsdUJBQU8sRUFBRSxtQkFBVztBQUNoQix5QkFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUMzQiwrQkFBTyxFQUFFLG1CQUFXO0FBQ2hCLGtDQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUM1QjtxQkFDSixDQUFDLENBQUM7aUJBQ047QUFDRCxxQkFBSyxFQUFFLGVBQVMsSUFBSSxFQUFFLE1BQUssRUFBRTtBQUN6QixxQkFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFeEMsMkJBQU8sQ0FBQyxLQUFLLENBQUMsTUFBSyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0osQ0FBQyxDQUFDO1NBQ047S0FDSjtBQUNELFNBQUssRUFBRSxpQkFBVztBQUNkLFlBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25ELFlBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOztBQUVuRCxhQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLG1CQUFPLEVBQUUsbUJBQVc7QUFDaEIsc0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDNUI7QUFDRCxpQkFBSyxFQUFFLGVBQVMsSUFBSSxFQUFFLE9BQUssRUFBRTtBQUN6QixpQkFBQyxDQUFDLGNBQWMsQ0FBQyxDQUNaLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0IsdUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7YUFDeEI7U0FDSixDQUFDLENBQUM7S0FDTjtDQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2lnbnVwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNzaWdudXBFcnJvclwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcblxuICAgICAgICBsZXQgX3VzZXIgPSAkKFwiI3NpZ251cE1vZGFsIFtuYW1lPXVzZXJuYW1lXVwiKS52YWwoKTtcbiAgICAgICAgbGV0IF9tYWlsID0gJChcIiNzaWdudXBNb2RhbCBbbmFtZT1lbWFpbF1cIikgICAudmFsKCk7XG4gICAgICAgIGxldCBfcGFzcyA9ICQoXCIjc2lnbnVwTW9kYWwgW25hbWU9cGFzc3dvcmRdXCIpLnZhbCgpO1xuICAgICAgICBsZXQgX2NvbmYgPSAkKFwiI3NpZ251cE1vZGFsIFtuYW1lPWNvbmZwYXNzXVwiKS52YWwoKTtcblxuICAgICAgICBpZiAoX3Bhc3MgIT09IF9jb25mKSB7XG4gICAgICAgICAgICAkKFwiI3NpZ251cEVycm9yXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld1VzZXIgPSBuZXcgUGFyc2UuVXNlcigpO1xuXG4gICAgICAgICAgICBuZXdVc2VyLnNldChcInVzZXJuYW1lXCIsIF91c2VyKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0KFwicGFzc3dvcmRcIiwgX2NvbmYpO1xuICAgICAgICAgICAgbmV3VXNlci5zZXQoXCJlbWFpbFwiICAgLCBfbWFpbCk7XG5cbiAgICAgICAgICAgIG5ld1VzZXIuc2lnblVwKG51bGwsIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgUGFyc2UuVXNlci5sb2dJbihfdXNlciwgX2NvbmYsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzaWdudXBFcnJvclwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9naW46IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgX25hbWUgPSAkKFwiI2xvZ2luTW9kYWwgW25hbWU9dXNlcm5hbWVdXCIpLnZhbCgpO1xuICAgICAgICBsZXQgX3Bhc3MgPSAkKFwiI2xvZ2luTW9kYWwgW25hbWU9cGFzc3dvcmRdXCIpLnZhbCgpO1xuXG4gICAgICAgIFBhcnNlLlVzZXIubG9nSW4oX25hbWUsIF9wYXNzLCB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGRhdGEsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNsb2dpbkZhaWxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTsiXX0=

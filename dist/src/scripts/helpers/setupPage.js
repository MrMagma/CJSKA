(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {
    signup: function signup(username, email, password) {
        // TODO (Gigabyte Giant): Write logic to be used when signing up
    },
    login: function login(username, password) {
        Parse.User.logIn(username, password);
    }
};

},{}],2:[function(require,module,exports){
"use strict";

var authentication = require("./authentication.js");

module.exports = function () {
    // NOTE: This **has** to go at the very top of this function,
    //  otherwise we can't use the Parse JS SDK.
    Parse.initialize("F4jHkOZFPQTGPZ23D1CqaNxmbLqoAUAxBzcnlWQn", "Zt177eOpCUI12dvHbBaIAaf8MZdXqkjsZYlagRul");

    // Fetch the currently logged in user, and store them in a variable
    //  called "currentUser".
    var currentUser = Parse.User.current();

    // If the user isn't logged in, we'll display some buttons that allow
    //  them to sign up or login.
    //
    // If the user is logged in, then we'll display a welcome message.
    //
    if (currentUser === null) {
        $("body").append($("<button>").text("Sign in").on("click", function () {
            // TODO (Gigabyte Giant): Show a sign-in form
            console.log("The user wants to log in");
        })).append($("<button>").text("Sign up").on("click", function () {
            // TODO (Gigabyte Giant): Show a sign-up form
            console.log("The user wants to create an account");
        }));
    } else {
        // TODOgi
    }
};

},{"./authentication.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2F1dGhlbnRpY2F0aW9uLmpzIiwiL1VzZXJzL0JyeW5kZW4vc3BhcmsvY2pza2Evc3JjL3NjcmlwdHMvaGVscGVycy9zZXR1cFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixVQUFNLEVBQUUsZ0JBQVMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7O0tBRTNDO0FBQ0QsU0FBSyxFQUFFLGVBQVMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUNoQyxhQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDeEM7Q0FDSixDQUFDOzs7OztBQ1BGLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUVwRCxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVc7OztBQUd4QixTQUFLLENBQUMsVUFBVSxDQUNaLDBDQUEwQyxFQUMxQywwQ0FBMEMsQ0FDN0MsQ0FBQzs7OztBQUlGLFFBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7Ozs7QUFPdkMsUUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO0FBQ3RCLFNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQ1osQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDZixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07O0FBRWYsbUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQ1QsQ0FBQyxNQUFNLENBQ0osQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDZixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07O0FBRWYsbUJBQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN0RCxDQUFDLENBQ1QsQ0FBQztLQUNMLE1BQU07O0tBRU47Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNpZ251cDogZnVuY3Rpb24odXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICAvLyBUT0RPIChHaWdhYnl0ZSBHaWFudCk6IFdyaXRlIGxvZ2ljIHRvIGJlIHVzZWQgd2hlbiBzaWduaW5nIHVwXG4gICAgfSxcbiAgICBsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIFBhcnNlLlVzZXIubG9nSW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICB9XG59OyIsInZhciBhdXRoZW50aWNhdGlvbiA9IHJlcXVpcmUoXCIuL2F1dGhlbnRpY2F0aW9uLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgKipoYXMqKiB0byBnbyBhdCB0aGUgdmVyeSB0b3Agb2YgdGhpcyBmdW5jdGlvbixcbiAgICAvLyAgb3RoZXJ3aXNlIHdlIGNhbid0IHVzZSB0aGUgUGFyc2UgSlMgU0RLLlxuICAgIFBhcnNlLmluaXRpYWxpemUoXG4gICAgICAgIFwiRjRqSGtPWkZQUVRHUFoyM0QxQ3FhTnhtYkxxb0FVQXhCemNubFdRblwiLFxuICAgICAgICBcIlp0MTc3ZU9wQ1VJMTJkdkhiQmFJQWFmOE1aZFhxa2pzWllsYWdSdWxcIlxuICAgICk7XG5cbiAgICAvLyBGZXRjaCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyLCBhbmQgc3RvcmUgdGhlbSBpbiBhIHZhcmlhYmxlXG4gICAgLy8gIGNhbGxlZCBcImN1cnJlbnRVc2VyXCIuXG4gICAgbGV0IGN1cnJlbnRVc2VyID0gUGFyc2UuVXNlci5jdXJyZW50KCk7XG5cbiAgICAvLyBJZiB0aGUgdXNlciBpc24ndCBsb2dnZWQgaW4sIHdlJ2xsIGRpc3BsYXkgc29tZSBidXR0b25zIHRoYXQgYWxsb3dcbiAgICAvLyAgdGhlbSB0byBzaWduIHVwIG9yIGxvZ2luLlxuICAgIC8vIFxuICAgIC8vIElmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiwgdGhlbiB3ZSdsbCBkaXNwbGF5IGEgd2VsY29tZSBtZXNzYWdlLlxuICAgIC8vIFxuICAgIGlmIChjdXJyZW50VXNlciA9PT0gbnVsbCkge1xuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoXG4gICAgICAgICAgICAkKFwiPGJ1dHRvbj5cIilcbiAgICAgICAgICAgICAgICAudGV4dChcIlNpZ24gaW5cIilcbiAgICAgICAgICAgICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKEdpZ2FieXRlIEdpYW50KTogU2hvdyBhIHNpZ24taW4gZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIHdhbnRzIHRvIGxvZyBpblwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApLmFwcGVuZChcbiAgICAgICAgICAgICQoXCI8YnV0dG9uPlwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiU2lnbiB1cFwiKVxuICAgICAgICAgICAgICAgIC5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoR2lnYWJ5dGUgR2lhbnQpOiBTaG93IGEgc2lnbi11cCBmb3JtXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgd2FudHMgdG8gY3JlYXRlIGFuIGFjY291bnRcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPZ2lcbiAgICB9XG59OyJdfQ==

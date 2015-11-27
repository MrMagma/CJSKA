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

module.exports = (function (deps) {
    var lostDeps = [];

    for (var depInd = 0; depInd < deps.length; depInd++) {
        if (!window.hasOwnProperty(deps[depInd])) {
            lostDeps.push(deps[depInd]);
        }
    }

    if (lostDeps.length > 0) {
        console.error("Unable to find all required dependencies! Exiting.");
        console.log("Dependencies not found:", lostDeps.join(","));

        return {};
    }

    return {
        setupPage: require("./setupPage.js")
    };
})(["jQuery", "Parse"]);

},{"./setupPage.js":3}],3:[function(require,module,exports){
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

},{"./authentication.js":1}],4:[function(require,module,exports){
"use strict";

var helpers = require("./helpers/helpers.js");

$(function () {
    helpers.setupPage();
});

},{"./helpers/helpers.js":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2F1dGhlbnRpY2F0aW9uLmpzIiwiL1VzZXJzL0JyeW5kZW4vc3BhcmsvY2pza2Evc3JjL3NjcmlwdHMvaGVscGVycy9oZWxwZXJzLmpzIiwiL1VzZXJzL0JyeW5kZW4vc3BhcmsvY2pza2Evc3JjL3NjcmlwdHMvaGVscGVycy9zZXR1cFBhZ2UuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsVUFBTSxFQUFFLGdCQUFTLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOztLQUUzQztBQUNELFNBQUssRUFBRSxlQUFTLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDaEMsYUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3hDO0NBQ0osQ0FBQzs7Ozs7QUNQRixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDN0IsUUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVsQixTQUFLLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtBQUNqRCxZQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUN0QyxvQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMvQjtLQUNKOztBQUVELFFBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDckIsZUFBTyxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQ3BFLGVBQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUUzRCxlQUFPLEVBQUcsQ0FBQztLQUNkOztBQUVELFdBQU87QUFDSCxpQkFBUyxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN2QyxDQUFDO0NBQ0wsQ0FBQSxDQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7O0FDbkJ4QixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7QUFFcEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFXOzs7QUFHeEIsU0FBSyxDQUFDLFVBQVUsQ0FDWiwwQ0FBMEMsRUFDMUMsMENBQTBDLENBQzdDLENBQUM7Ozs7QUFJRixRQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7O0FBT3ZDLFFBQUksV0FBVyxLQUFLLElBQUksRUFBRTtBQUN0QixTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUNaLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDUixJQUFJLENBQUMsU0FBUyxDQUFDLENBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNOztBQUVmLG1CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUNULENBQUMsTUFBTSxDQUNKLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDUixJQUFJLENBQUMsU0FBUyxDQUFDLENBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNOztBQUVmLG1CQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUNULENBQUM7S0FDTCxNQUFNOztLQUVOO0NBQ0osQ0FBQzs7Ozs7QUN0Q0YsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRTlDLENBQUMsQ0FBQyxZQUFXO0FBQ1QsV0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaWdudXA6IGZ1bmN0aW9uKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy8gVE9ETyAoR2lnYWJ5dGUgR2lhbnQpOiBXcml0ZSBsb2dpYyB0byBiZSB1c2VkIHdoZW4gc2lnbmluZyB1cFxuICAgIH0sXG4gICAgbG9naW46IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBQYXJzZS5Vc2VyLmxvZ0luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbihkZXBzKSB7XG4gICAgdmFyIGxvc3REZXBzID0gW107XG5cbiAgICBmb3IgKGxldCBkZXBJbmQgPSAwOyBkZXBJbmQgPCBkZXBzLmxlbmd0aDsgZGVwSW5kKyspIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaGFzT3duUHJvcGVydHkoZGVwc1tkZXBJbmRdKSkge1xuICAgICAgICAgICAgbG9zdERlcHMucHVzaChkZXBzW2RlcEluZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvc3REZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmaW5kIGFsbCByZXF1aXJlZCBkZXBlbmRlbmNpZXMhIEV4aXRpbmcuXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcGVuZGVuY2llcyBub3QgZm91bmQ6XCIsIGxvc3REZXBzLmpvaW4oXCIsXCIpKTtcblxuICAgICAgICByZXR1cm4geyB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldHVwUGFnZTogcmVxdWlyZShcIi4vc2V0dXBQYWdlLmpzXCIpXG4gICAgfTtcbn0pKFtcImpRdWVyeVwiLCBcIlBhcnNlXCJdKTsiLCJ2YXIgYXV0aGVudGljYXRpb24gPSByZXF1aXJlKFwiLi9hdXRoZW50aWNhdGlvbi5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBOT1RFOiBUaGlzICoqaGFzKiogdG8gZ28gYXQgdGhlIHZlcnkgdG9wIG9mIHRoaXMgZnVuY3Rpb24sXG4gICAgLy8gIG90aGVyd2lzZSB3ZSBjYW4ndCB1c2UgdGhlIFBhcnNlIEpTIFNESy5cbiAgICBQYXJzZS5pbml0aWFsaXplKFxuICAgICAgICBcIkY0akhrT1pGUFFUR1BaMjNEMUNxYU54bWJMcW9BVUF4QnpjbmxXUW5cIixcbiAgICAgICAgXCJadDE3N2VPcENVSTEyZHZIYkJhSUFhZjhNWmRYcWtqc1pZbGFnUnVsXCJcbiAgICApO1xuXG4gICAgLy8gRmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlciwgYW5kIHN0b3JlIHRoZW0gaW4gYSB2YXJpYWJsZVxuICAgIC8vICBjYWxsZWQgXCJjdXJyZW50VXNlclwiLlxuICAgIGxldCBjdXJyZW50VXNlciA9IFBhcnNlLlVzZXIuY3VycmVudCgpO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgaXNuJ3QgbG9nZ2VkIGluLCB3ZSdsbCBkaXNwbGF5IHNvbWUgYnV0dG9ucyB0aGF0IGFsbG93XG4gICAgLy8gIHRoZW0gdG8gc2lnbiB1cCBvciBsb2dpbi5cbiAgICAvLyBcbiAgICAvLyBJZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4sIHRoZW4gd2UnbGwgZGlzcGxheSBhIHdlbGNvbWUgbWVzc2FnZS5cbiAgICAvLyBcbiAgICBpZiAoY3VycmVudFVzZXIgPT09IG51bGwpIHtcbiAgICAgICAgJChcImJvZHlcIikuYXBwZW5kKFxuICAgICAgICAgICAgJChcIjxidXR0b24+XCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJTaWduIGluXCIpXG4gICAgICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIChHaWdhYnl0ZSBHaWFudCk6IFNob3cgYSBzaWduLWluIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdXNlciB3YW50cyB0byBsb2cgaW5cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKS5hcHBlbmQoXG4gICAgICAgICAgICAkKFwiPGJ1dHRvbj5cIilcbiAgICAgICAgICAgICAgICAudGV4dChcIlNpZ24gdXBcIilcbiAgICAgICAgICAgICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKEdpZ2FieXRlIEdpYW50KTogU2hvdyBhIHNpZ24tdXAgZm9ybVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBhbiBhY2NvdW50XCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ET2dpXG4gICAgfVxufTsiLCJ2YXIgaGVscGVycyA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvaGVscGVycy5qc1wiKTtcblxuJChmdW5jdGlvbigpIHtcbiAgICBoZWxwZXJzLnNldHVwUGFnZSgpO1xufSk7Il19

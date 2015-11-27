(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./setupPage.js":2}],2:[function(require,module,exports){
"use strict";

module.exports = function () {
    Parse.initialize("F4jHkOZFPQTGPZ23D1CqaNxmbLqoAUAxBzcnlWQn", "Zt177eOpCUI12dvHbBaIAaf8MZdXqkjsZYlagRul");
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2hlbHBlcnMuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL3NldHVwUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVMsSUFBSSxFQUFFO0FBQzdCLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsU0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7QUFDakQsWUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDdEMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDSjs7QUFFRCxRQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLGVBQU8sQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUNwRSxlQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFM0QsZUFBTyxFQUFHLENBQUM7S0FDZDs7QUFFRCxXQUFPO0FBQ0gsaUJBQVMsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDdkMsQ0FBQztDQUNMLENBQUEsQ0FBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7OztBQ25CeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFXO0FBQ3hCLFNBQUssQ0FBQyxVQUFVLENBQ1osMENBQTBDLEVBQzFDLDBDQUEwQyxDQUM3QyxDQUFDO0NBQ0wsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbihkZXBzKSB7XG4gICAgdmFyIGxvc3REZXBzID0gW107XG5cbiAgICBmb3IgKGxldCBkZXBJbmQgPSAwOyBkZXBJbmQgPCBkZXBzLmxlbmd0aDsgZGVwSW5kKyspIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaGFzT3duUHJvcGVydHkoZGVwc1tkZXBJbmRdKSkge1xuICAgICAgICAgICAgbG9zdERlcHMucHVzaChkZXBzW2RlcEluZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvc3REZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmaW5kIGFsbCByZXF1aXJlZCBkZXBlbmRlbmNpZXMhIEV4aXRpbmcuXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcGVuZGVuY2llcyBub3QgZm91bmQ6XCIsIGxvc3REZXBzLmpvaW4oXCIsXCIpKTtcblxuICAgICAgICByZXR1cm4geyB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldHVwUGFnZTogcmVxdWlyZShcIi4vc2V0dXBQYWdlLmpzXCIpXG4gICAgfTtcbn0pKFtcImpRdWVyeVwiLCBcIlBhcnNlXCJdKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIFBhcnNlLmluaXRpYWxpemUoXG4gICAgICAgIFwiRjRqSGtPWkZQUVRHUFoyM0QxQ3FhTnhtYkxxb0FVQXhCemNubFdRblwiLFxuICAgICAgICBcIlp0MTc3ZU9wQ1VJMTJkdkhiQmFJQWFmOE1aZFhxa2pzWllsYWdSdWxcIlxuICAgICk7XG59OyJdfQ==

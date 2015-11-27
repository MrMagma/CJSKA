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

},{}],3:[function(require,module,exports){
"use strict";

var helpers = require("./helpers/helpers.js");

$(function () {
    helpers.setupPage();
});

},{"./helpers/helpers.js":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL2hlbHBlcnMuanMiLCIvVXNlcnMvQnJ5bmRlbi9zcGFyay9janNrYS9zcmMvc2NyaXB0cy9oZWxwZXJzL3NldHVwUGFnZS5qcyIsIi9Vc2Vycy9CcnluZGVuL3NwYXJrL2Nqc2thL3NyYy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBRTtBQUM3QixRQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRWxCLFNBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0FBQ2pELFlBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7O0FBRUQsUUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNyQixlQUFPLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7QUFDcEUsZUFBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTNELGVBQU8sRUFBRyxDQUFDO0tBQ2Q7O0FBRUQsV0FBTztBQUNILGlCQUFTLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3ZDLENBQUM7Q0FDTCxDQUFBLENBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7QUNuQnhCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBVztBQUN4QixTQUFLLENBQUMsVUFBVSxDQUNaLDBDQUEwQyxFQUMxQywwQ0FBMEMsQ0FDN0MsQ0FBQztDQUNMLENBQUM7Ozs7O0FDTEYsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRTlDLENBQUMsQ0FBQyxZQUFXO0FBQ1QsV0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbihkZXBzKSB7XG4gICAgdmFyIGxvc3REZXBzID0gW107XG5cbiAgICBmb3IgKGxldCBkZXBJbmQgPSAwOyBkZXBJbmQgPCBkZXBzLmxlbmd0aDsgZGVwSW5kKyspIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuaGFzT3duUHJvcGVydHkoZGVwc1tkZXBJbmRdKSkge1xuICAgICAgICAgICAgbG9zdERlcHMucHVzaChkZXBzW2RlcEluZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvc3REZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmaW5kIGFsbCByZXF1aXJlZCBkZXBlbmRlbmNpZXMhIEV4aXRpbmcuXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcGVuZGVuY2llcyBub3QgZm91bmQ6XCIsIGxvc3REZXBzLmpvaW4oXCIsXCIpKTtcblxuICAgICAgICByZXR1cm4geyB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldHVwUGFnZTogcmVxdWlyZShcIi4vc2V0dXBQYWdlLmpzXCIpXG4gICAgfTtcbn0pKFtcImpRdWVyeVwiLCBcIlBhcnNlXCJdKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIFBhcnNlLmluaXRpYWxpemUoXG4gICAgICAgIFwiRjRqSGtPWkZQUVRHUFoyM0QxQ3FhTnhtYkxxb0FVQXhCemNubFdRblwiLFxuICAgICAgICBcIlp0MTc3ZU9wQ1VJMTJkdkhiQmFJQWFmOE1aZFhxa2pzWllsYWdSdWxcIlxuICAgICk7XG59OyIsInZhciBoZWxwZXJzID0gcmVxdWlyZShcIi4vaGVscGVycy9oZWxwZXJzLmpzXCIpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGhlbHBlcnMuc2V0dXBQYWdlKCk7XG59KTsiXX0=

module.exports = (function(deps) {
    var lostDeps = [];

    for (let depInd = 0; depInd < deps.length; depInd++) {
        if (!window.hasOwnProperty(deps[depInd])) {
            lostDeps.push(deps[depInd]);
        }
    }

    if (lostDeps.length > 0) {
        console.error("Unable to find all required dependencies! Exiting.");
        console.log("Dependencies not found:", lostDeps.join(","));

        return { };
    }

    return {
        setupPage: require("./setupPage.js")
    };
})(["jQuery", "Parse"]);
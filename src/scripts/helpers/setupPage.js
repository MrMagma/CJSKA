var components = require("../components/components.js");

module.exports = function() {
    // NOTE: This **has** to go at the very top of this function,
    //  otherwise we can't use the Parse JS SDK.
    Parse.initialize(
        "F4jHkOZFPQTGPZ23D1CqaNxmbLqoAUAxBzcnlWQn",
        "Zt177eOpCUI12dvHbBaIAaf8MZdXqkjsZYlagRul"
    );

    components.authModals();
    components.footer();
};
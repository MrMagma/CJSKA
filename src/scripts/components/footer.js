module.exports = function() {
    $("body").append(
        $("<footer>")
        .append(
            $("<div>").addClass("container text-center")
            .append(
                $("<p>").addClass("text-muted")
                    .text("Made by ")
                    .append(
                        $("<a>").attr("href", "https://github.com/sparkstudios/CJSKA/graphs/contributors")
                            .text("all these great folks")
                    )
            )
        )
    );
};
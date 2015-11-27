var gulp       = require("gulp");
var sass       = require("gulp-sass");
var jshint     = require("gulp-jshint");
var browserify = require("browserify");
var babelify   = require("babelify");
var source     = require("vinyl-source-stream");

var buildDir = "./dist";

gulp.task("styles", function() {
    gulp.src("./src/styles/**/*.scss")
        .pipe(
            sass().on("error", sass.logError)
        )
        .pipe(
            gulp.dest(buildDir + "/css/")
        );
});

gulp.task("scripts", function() {
    var scripts = require("./src/build.json").scripts;

    for (var i = 0; i < scripts.length; i++) {
        var filePath = "./src/scripts/" + scripts[i];

        browserify(filePath, { debug: true })
            .transform(babelify)
            .bundle()
                .on("error", function(err) {
                    console.log(err.message);
                })
            .pipe(source(filePath))
            .pipe(gulp.dest(buildDir));
    }

    return gulp.src("./src/scripts/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("default", function() {
    var scripts = gulp.watch("./src/scripts/**/*.js", [
        "scripts"
    ]);

    var styles = gulp.watch("./src/styles/**/*.scss", [
        "styles"
    ]);
});
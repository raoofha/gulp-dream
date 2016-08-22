gulp plugin for [dream-lang](https://www.npmjs.com/package/dream-lang)

copied from [gulp-coffee](https://github.com/contra/gulp-coffee)

```
npm i -D gulp-dream
```

```
dream = require("gulp-dream")

gulp.task "default", ->
  watch([ "src/**/*.dream" ])
    .pipe(dream())
    .pipe(gulp.dest("./dist"))
```

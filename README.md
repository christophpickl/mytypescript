# mytypescript

play around with spring boot + typescript

# Todos

* enable auto reload: just edit file (JS/TS) and automatically changes visible in browser (no keystroke needed)
* use yarn to manage dependencies
* use webpack to create bundle (use import statement in JS files)

# enable auto reload

* add `spring-boot-devtools` dependency

* package file ... always works, but have to do for each changed file :-/
* synchronize file ... only first time :-/

## in intellij settings

* (?) enable "Synchronize files on frame or editor tab activation" (enabled by default) 
* (?) enable "Build project automatically" (disabled by default)
* (?) enable "compiler.automake.allow.when.app.running" in registry
* (?) run configuration -> "on update" -> update resources
* !!! run configuration -> "on frame deactivation" (editor loses focus) -> update resources

## for typescript

* !!! in preferences / language & frameworks / typescript -> enable "recompile on changes"

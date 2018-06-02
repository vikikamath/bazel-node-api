workspace(name = "api")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.8.0", # check for the latest tag when you install
)
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

# Install a hermetic version of node.
# After this is run, these labels will be available:
# - NodeJS:
#   @nodejs//:node
# - NPM:
#   @nodejs//:npm
# - The yarn package manager:
#   @nodejs//:yarn
node_repositories(
    package_json = ["//:package.json"], 
    node_version = "8.11.1")

# load("@build_bazel_rules_nodejs//:defs.bzl", "npm_install")

# npm_install(
#     name = "foo",
#     package_json = "//:package.json",
#     package_lock_json = "//:package-lock.json",
# )
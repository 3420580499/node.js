function get(callback) {
    callback(3)
}
get(function (n) {
    console.log(n)
})
function num_of_digits(num) {
    var len = Math.ceil(Math.log(num + 1) / Math.LN10);
    console.log(len)
}
num_of_digits(1000)
num_of_digits(12)

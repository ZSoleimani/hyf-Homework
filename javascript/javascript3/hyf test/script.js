// First exercise:
for (var x=1; x <= 100; x++) {
    var skip = 0;
    if (x % 5 && 3 == 0) {
        document.write('Jackpot');
        skip = 1;
    }
    if (x % 3 == 0) {
        document.write('This is divisible by 3');
        skip = 1;
    }
    if (x % 5 == 0) {
        document.write('This is divisible by 5');
        skip = 1;
    }
    if (!skip) {
        document.write(x);
    }
    document.write('<br>'); //line breaks to enhance output readability
}
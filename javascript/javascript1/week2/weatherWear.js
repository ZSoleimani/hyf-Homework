function clothesToWear(temp){
    if (temp<0) {
        return 'Wear winter jacket';
    } else if (temp<18) {
        return 'You might need a summer jacket as Denmark is windy';
    } else if (temp >25) {
        return 'You do not need any clothes in CapdAgde city';
    }
}
console.log(clothesToWear(26));
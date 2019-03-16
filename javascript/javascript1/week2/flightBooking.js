function getFullname(firstname, surname, useFormalName) {
    let Fullname = firstname + " " + surname;
    if (useFormalName) {
        Fullname = "Lord " + Fullname;
        return Fullname;
    }
    else {
        Fullname;
        return Fullname;
    }
}
console.log(getFullname("Benjamin", "Hughes"));
console.log(getFullname("Benjamin", "Hughes", true));
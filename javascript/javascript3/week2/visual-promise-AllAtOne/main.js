function translateAllAtOnce() {
    let greenCircle = moveElement(document.querySelectorAll('li')[0], {x: 20, y: 300});
    let redCircle = moveElement(document.querySelectorAll('li')[1], {x: 400, y: 300});
    let blueCircle = moveElement(document.querySelectorAll('li')[2], {x: 400, y: 20});

    Promise.all([greenCircle, redCircle, blueCircle]).then(() => {
        console.log('All circles have been moved');
    });
}
translateAllAtOnce();
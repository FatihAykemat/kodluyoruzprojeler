const arguments = process.argv.slice(2);

function areaOfCircle(r) {
    let area;
    area = 3.14*r**2
    console.log(`Yarıçapı ${r} olan dairenin alanı ${area} dır.`)
}

areaOfCircle(arguments[0]*1);
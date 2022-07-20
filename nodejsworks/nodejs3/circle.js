function circleArea(r) {
    let area;
    area = 3.14*r**2;
    console.log(area);
};

function circleCircumference(r) {
    let circumference;
    circumference = 2*3.14*r;
    console.log(circumference);
};

module.exports = {
    circleArea,
    circleCircumference
}
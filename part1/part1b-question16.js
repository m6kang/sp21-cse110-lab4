let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var prop in statistics) {
    if (prop.substring(0,1) == 'r' || statistics[prop] % 2 != 0) {
        console.log(prop);
    }
}



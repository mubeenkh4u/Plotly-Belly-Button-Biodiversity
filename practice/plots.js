// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
// var topFiveCities = sortedCities.slice(0,5);
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames.slice(0,5),
    y: topFiveCityGrowths.slice(0,5),
    type: "bar"
};
var data = [trace]
var layout = {
    title: "5 Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot1", data, layout);

// var topSevenCities = sortedCities.slice(0,7);
var topSevenCityNames = cityGrowths.map(city => city.City);
var topSevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topSevenCityNames.slice(0,7),
    y: topSevenCityGrowths.slice(0,7),
    type: "bar"
};
var data = [trace]
var layout = {
    title: "7 Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot2", data, layout);
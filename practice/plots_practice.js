// Plot #1 - Line Graph
Plotly.newPlot("plotArea1", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plot #2 - Bar graph with Title and Trace variable with being in Array
var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Luncheon Survey"
}

Plotly.newPlot("plotArea2", trace, layout);

// Plot #3 - Bar graph with Title and Trace variable without being in Array
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey"
}

Plotly.newPlot("plotArea3", [trace], layout);


// Plot #4 - Bar graph with title, trace variable and layout modifications
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea4", [trace], layout);

// Plot #5 - Bar graph with Layout titles and drinks
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
Plotly.newPlot("plotArea5", data, layout);

// Plot #6 - Pie chart based on Plot #5
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea6", [trace], layout);

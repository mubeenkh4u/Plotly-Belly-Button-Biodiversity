const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(recievedData => console.log(recievedData));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Accessing data from Samples.json.
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Accessing the "Washing Frequency" value from the Samples.json.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sorting the "Washing Frequency" values in ascending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Deleting "Null" Values from the sorted values.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// Creating a Key Value pair from two arrays.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
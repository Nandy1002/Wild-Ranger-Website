
var tigerKilled = [
    { year: 2022, kill: 121 },
    { year: 2021, kill: 127 },
    { year: 2020, kill: 106 },
    { year: 2019, kill: 96 },
    { year: 2018, kill: 101 },
    { year: 2017, kill: 117 },
    { year: 2016, kill: 121 },
    { year: 2015, kill: 82 },
    { year: 2014, kill: 78 },
    { year: 2013, kill: 68 },
    { year: 2012, kill: 88 }
]

var lionKilled = [
    { year: 2022, kill: 92 },
    { year: 2021, kill: 102 },
    { year: 2020, kill: 55 },
    { year: 2019, kill: 78 },
    { year: 2018, kill: 71 },
    { year: 2017, kill: 67 },
    { year: 2016, kill: 72 },
    { year: 2015, kill: 110 },
    { year: 2014, kill: 122 },
    { year: 2013, kill: 89 },
    { year: 2012, kill: 118 }
]

var rhinoKilled = [
    { year: 2022, kill: 52 },
    { year: 2021, kill: 68 },
    { year: 2020, kill: 35 },
    { year: 2019, kill: 45 },
    { year: 2018, kill: 71 },
    { year: 2017, kill: 79 },
    { year: 2016, kill: 81 },
    { year: 2015, kill: 63 },
    { year: 2014, kill: 49 },
    { year: 2013, kill: 56 },
    { year: 2012, kill: 68 }
]


// set up demensions and margin for the chart
const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const height = 800 - margin.left - margin.right
const width = 1200 - margin.top - margin.bottom;

// set up x and y scaling

const x = d3.scaleLinear()
    .range([0, width]);
const y = d3.scaleLinear()
    .range([height, 0]);

var svg = d3.select("#chart")
    .append("svg")
    .attr("height", height + margin.top + margin.bottom)
    .attr("width", width + margin.left + margin.right)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)

x.domain(d3.extent(tigerKilled, d => d.year))
y.domain([0, d3.max(tigerKilled, d => d.kill)])

var color = d3.scaleLinear()
    .domain([0, 60])
    .range(["red", "blue"]);

svg.append("g")
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))

svg.append("g")
    //.attr('transform',`translate(${width},0)`)
    .call(d3.axisLeft(y))

const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.kill))


svg.append("path")
    .datum(tigerKilled)
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 3)
    .attr("d", line)

svg.append("path")
    .datum(lionKilled)
    .attr("fill", "none")
    .attr("stroke", "deeppink")
    .attr("stroke-width", 3)
    .attr("d", line)

svg.append("path")
    .datum(rhinoKilled)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 3)
    .attr("d", line)

svg.append("g")
    .selectAll("dot")
    .data(tigerKilled)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d.year) })
    .attr("cy", function (d) { return y(d.kill) })
    .attr("r", 5)
    .style("fill", "red")

svg.append("g")
    .selectAll("dot")
    .data(lionKilled)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d.year) })
    .attr("cy", function (d) { return y(d.kill) })
    .attr("r", 5)
    .style("fill", "brown")

    svg.append("g")
    .selectAll("dot")
    .data(rhinoKilled)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d.year) })
    .attr("cy", function (d) { return y(d.kill) })
    .attr("r", 5)
    .style("fill", "skyblue")


// var bars = svg.selectAll("rect")
//                 .data(tigerKilled)
//                 .enter()
//                     .append("rect")
//                     .attr("width",function(d){return d.kill})
//                     .attr("height",50)
//                     .attr("y",function(d,i){return i*60})
//                     .attr("fill",function(d){return color(d.kill)})
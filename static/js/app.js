const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

d3.json(url).then(function(data){
let samples = data.samples;

let samples_values = samples.map(object => object.samples_values);
// console.log(samples_values);

let sortedsamples_values = samples_values.map(samples => samples_values.score);
console.log(sortedsamples_values);


 } );


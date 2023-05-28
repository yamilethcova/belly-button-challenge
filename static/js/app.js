function metadata(sample){
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let metadata = data.metadata;
      let resultArray = metadata.filter(metadataObj => metadataObj.id == sample);
      let result = resultArray[0];
      let metadatasample = d3.select("#sample-metadata");
      metadatasample.html("");
      for (portion in result){
        metadata.append("h6").text(`${portion.toUpperCase()}: ${result[portion]}`);
      };
})};

function buildCharts(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let samples = data.metadata;
      let resultArray = samples.filter(metadataObj => metadataObj.id == sample);
      let result = resultArray[0];
      
      console.log(resultArray);
      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;
  
      // Prepare data for the Bar Chart
      let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      let barData = [
        {
          y: yticks,
          x: sample_values.slice(0, 10).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];
  
      let barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };
  
      // Generate the Bar Chart using Plotly
      Plotly.newPlot("bar", barData, barLayout);
  
      // Build a Bubble Chart
      let bubbleLayout = {
        title: "Bacteria Cultures Per Sample",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30 }
      };
      let bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          }
        }
      ];
  
      // Generate the Bubble Chart using Plotly
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
  }
  
  // let metadataPanel = d3.select("data.sample");
  // metadataPanel.html(""); // Clear existing metadata

  // Object.entries(result).forEach(([key, value]) => {
  // metadataPanel.append("p").text(`${key}: ${value}`);
  // });
function init(){ 
  let patient = d3.select("#patient-info");
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => { 
    
    let firstdata = data.names;
    buildCharts(firstdata)
});
}
  init()
  
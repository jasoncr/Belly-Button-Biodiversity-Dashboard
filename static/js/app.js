// Use D3 to fetch and read the JSON file
// The data from the JSON file is arbitrarily named data as the argument
d3.json("../samples.json").then((data) => {
    var names = data.names;
    var metadata = data.metadata;
    var samples = data.samples

    buildBarPlot("940")

    buildMetadata("940")


    // Create function that inputs the test subject number as name
    function buildBarPlot(name){
        var otu_ids = [];
        var sample_values = [];
        var otu_labels = [];
        // Loop through the samples to find the subject name's data
        for (i=0; i<samples.length; i++){
            // If the test subject's id is the same as name
            if (samples[i].id === name){
                // Loop through the json file to create 3 arrays with the information needed for the bar
                for (j = 0; j<samples[i].otu_ids.length; j++){
                    otu_ids.push(samples[i].otu_ids[j]);
                    sample_values.push(samples[i].sample_values[j]);
                    otu_labels.push(samples[i].otu_labels[j]);
                }
            }
        }
        // slice the 3 arrays to find the top 10 
        ids = otu_ids.slice(0,10)
        values = sample_values.slice(0,10)
        labels = otu_labels.slice(0,10)

        // adjust ids so the values are strings and add 'OTU' to the beginning of the ids
        ids = ids.map(String)
        var ids2 = []
        for (i=0; i<ids.length; i++){
            ids2.push('OTU ' + ids[i])
        }
        
        // Reverse the arrays so they are in decending order
        rev_ids = ids2.reverse()
        rev_values = values.reverse()
        rev_labels = labels.reverse()

        // ************is this possible?*************
        //var sortedData = data.sort((a,b) => b.sample_values - a.sample_values)
        // var slicedData = sortedData.slice(0,10)
        // var reversedData = slicedData.reverse()
        // console.log(reversedData)

        // Trace1 for the bacteria data
        var trace1 = {
            x : rev_values,
            y : rev_ids,
            text : rev_labels,
            type : "bar",
            orientation : "h"
        }

        // Apply layout
        var layout = {
            showlegend : false
        }

        // Data
        var data = [trace1]

        // Render the plot to the div tag 'bar'
        Plotly.newPlot("bar", data, layout)
    }

    function buildMetadata(name) {
        for (i = 0; i < metadata.length; i++){
            //console.log(metadata[i].id)
            if (metadata[i].id === parseInt(name)){
                console.log(metadata[i])
            }
        }
    }
})


// // Create horizontal bar chart
// ​
// // Make bubble chart
// ​
// // Display sample metadata
// ​
// // Display each key-value pair from the metadata JSON object sommewhere
// ​
// // Update all plots when one is selected
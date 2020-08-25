d3.json("../samples.json").then((data) => {
    var names = data.names;
    var metadata = data.metadata;
    var samples = data.samples
    //console.log(metadata);

    function barname(name){
        //console.log(samples)
        var otu_ids = [];
        var sample_values = [];
        var otu_labels = [];
        for (i=0;i<samples.length;i++){
            if (samples[i].id === name){
                //console.log(samples[i]);
                for (j = 0; j<samples[i].otu_ids.length; j++){
                    otu_ids.push(samples[i].otu_ids[j]);
                    sample_values.push(samples[i].sample_values[j]);
                    otu_labels.push(samples[i].otu_labels[j]);
                }
            }
        }
        data = {
            "otu_ids" : otu_ids,
            "sample_values" : sample_values,
            "otu_labels" : otu_labels
        }
        //console.log(data)

        
        var slicedData = data.slice(0,10)
        var reversedData = slicedData.reverse()
        console.log(reversedData)

        var trace = {
            x : reversedData.map(object => object.sample_values),
            y : reversedData.map(object => object.otu_ids),
            text : reversedData.map(object => object.otu_labels),
            type : "bar",
            orientation : "h"
        }

        var layout = {
            xaxis : {
                type : 'string'
            },
            showlegend : false
        }

        var data = [trace]

        Plotly.newPlot("bar", data, layout)
    }
    barname("940")
})

//         var layout = {
            
//         }
//         Plotly.newPlot("bar", [trace1])
//     }
// ​
// // Create horizontal bar chart
// ​
// // Make bubble chart
// ​
// // Display sample metadata
// ​
// // Display each key-value pair from the metadata JSON object sommewhere
// ​
// // Update all plots when one is selected
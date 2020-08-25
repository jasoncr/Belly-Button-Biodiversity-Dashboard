// Use 
d3.json("../samples.json").then((data) => {
    var names = data.names;
    var metadata = data.metadata;
    var samples = data.samples

    function barname(name){
        var otu_ids = [];
        var sample_values = [];
        var otu_labels = [];
        for (i=0;i<samples.length;i++){
            if (samples[i].id === name){
                for (j = 0; j<samples[i].otu_ids.length; j++){
                    otu_ids.push(samples[i].otu_ids[j]);
                    sample_values.push(samples[i].sample_values[j]);
                    otu_labels.push(samples[i].otu_labels[j]);
                }
            }
        }
        ids = otu_ids.slice(0,10)
        values = sample_values.slice(0,10)
        labels = otu_labels.slice(0,10)
        ids = ids.map(String)
        var ids2 = []
        for (i=0; i<ids.length; i++){
            ids2.push('OTU ' + ids[i])
        }
        console.log(ids2)
        rev_ids = ids2.reverse()
        rev_values = values.reverse()
        rev_labels = labels.reverse()

        //var sortedData = data.sort((a,b) => b.sample_values - a.sample_values)
        // var slicedData = sortedData.slice(0,10)
        // var reversedData = slicedData.reverse()
        // console.log(reversedData)

        var trace = {
            x : rev_values,
            y : rev_ids,
            text : rev_labels,
            type : "bar",
            orientation : "h"
        }

        var layout = {
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
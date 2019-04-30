//Team Telepathic Twinsies- Daniel Gelfand & Damian Wasilewicz 
//SoftDev2 Pd6
//K #21: Onions, Bell Peppers, and Celery, Oh My!
//2019-05-30

//Open csv file using d3 magic
d3.csv("2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv").then(function(data){

    //console.log(data)

    // filter out row entries that represent school PS20
    var PS20 = data.filter(function(n){
        return (n["DBN"]=="01M020");
    })
    console.log(PS20)

    // number enrolled in that school for each year
    var num_enrolled = PS20.map(function(n){
        return parseInt(n["total_enrollment"])
    });

    console.log(num_enrolled)

    var num_third = PS20.map(function(n){
        return parseInt(n["grade3"])
    });
    console.log(num_third)

    //Get sum of number of third graders for all years of PS20 rows
    var sum_third = num_third.reduce(function(a,b){
        return a+b;
    });
    console.log(sum_third)
});


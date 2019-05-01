//Team Telepathic Twinsies- Daniel Gelfand & Damian Wasilewicz
//SoftDev2 Pd6
//K #21: Onions, Bell Peppers, and Celery, Oh My!
//2019-05-30

var data;
var num = document.getElementById("num");
var nthree = document.getElementById("numthree");
var sumthree = document.getElementById("sumthree");

d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AFRFQK7N644MC7AUI4U22J242DI26", function(error, d) {
    data = d;
      //console.log(data)
    // filter out row entries that represent school PS034
    var PS034 = data.filter(function(n){
        return (n["DBN"]=="01M034");
    })
    console.log(PS034)

    // number enrolled in that school for each year
    var num_enrolled = PS034.map(function(n){
        return parseInt(n["total_enrollment"])
    });

    num.innerHTML = num_enrolled
    console.log(num_enrolled)

    var num_third = PS034.map(function(n){
        return parseInt(n["grade3"])
      });
      nthree.innerHTML = num_third
      console.log(num_third)


    //Get sum of number of third graders for all years of PS034 rows
    var sum_third = num_third.reduce(function(a,b){
        return a+b;
    });

    sumthree.innerHTML = sum_third
    console.log(sum_third)

});
let url = "http://127.0.0.1:5000/api/v1.0/alldata";

let pmd = d3.json(url);

pmd.then(function(data){
    let asiaEx = [];
    let asiaEx00 = [];
    let eEurope = [];
    let northAfrica = [];
    let SSAfrica = [];
    let latinAm = [];
    let CWI = [];
    let oceania = [];
    let wEurope = [];
    let nearEast = [];
    let northAm = [];
    let baltics = [];

    console.log(data);
    

    for (let elt of data) {
        if (elt.Region === "ASIA (EX. NEAR EAST)") {
            asiaEx.push(elt);
            
            for (let elt of data) {
                if (elt.Year === 2000) {
                    asiaEx00.push(elt.MMR);
                } 
            }
        } else if (elt.Region === "EASTERN EUROPE") {
            eEurope.push(elt.MMR);
        } else if (elt.Region === "NORTHERN AFRICA") {
            northAfrica.push(elt.MMR);
        } else if (elt.Region === "SUB-SAHARAN AFRICA") {
            SSAfrica.push(elt.MMR);
        } else if (elt.Region === "LATIN AMER. & CARIB") {
            latinAm.push(elt.MMR);
        } else if (elt.Region === "C.W. OF IND. STATES") {
            CWI.push(elt.MMR);
        } else if (elt.Region === "OCEANIA") {
            oceania.push(elt.MMR);
        } else if (elt.Region === "WESTERN EUROPE") {
            wEurope.push(elt.MMR);
        } else if (elt.Region === "NEAR EAST") {
            nearEast.push(elt.MMR);
        } else if (elt.Region === "NORTHERN AMERICA") {
            northAm.push(elt.MMR);
        } else {
            baltics.push(elt.MMR);
        }

 };
 console.log(asiaEx00);

    function sum_reducer(accumulator, currentValue) {
        return (accumulator + currentValue);
    };
    
        let asiaEx00avg = asiaEx00.reduce(sum_reducer) / asiaEx00.length;

    let myLineChart = new Chart(document.getElementById("myLineChart"), {
        type: 'line',
        data: {
            labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
            datasets: [{
                data: [asiaEx00avg, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                label: "Africa",
                borderColor: "#3E95CD",
                fill: false
            }]
            },
        options: {
        title: {
        display: true,
        text: 'Average MMR per Region from 2000-2017'
      }
    }
  });
});
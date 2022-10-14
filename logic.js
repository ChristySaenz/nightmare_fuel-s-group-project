
let url = "http://127.0.0.1:5000/api/v1.0/alldata";

let pmd = d3.json(url).then(function(data) {
console.log(data);
return(data);
});

let allData = Promise.all(pmd);

// ASIA (EX. NEAR EAST)
// EASTERN EUROPE
// NORTHERN AFRICA
// SUB-SAHARAN AFRICA
// LATIN AMER. & CARIB
// C.W. OF IND. STATES
// OCEANIA
// WESTERN EUROPE
// NEAR EAST
// NORTHERN AMERICA
// BALTICS

let asiaEx = [];
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


for (let i = 0; i < pmd.length; i++) {
    let country = pmd[i];

    if (pmd.Region === "ASIA (EX. NEAR EAST)") {
        asiaEx.push(country);
    } else if (pmd.Region === "EASTERN EUROPE") {
        eEurope.push(country);
    } else if (pmd.Region === "NORTHERN AFRICA") {
        northAfrica.push(country);
    } else if (pmd.Region === "SUB-SAHARAN AFRICA") {
        SSAfrica.push(country);
    } else if (pmd.Region === "LATIN AMER. & CARIB") {
        latinAm.push(country);
    } else if (pmd.Region === "C.W. OF IND. STATES") {
        CWI.push(country);
    } else if (pmd.Region === "OCEANIA") {
        oceania.push(country);
    } else if (pmd.Region === "WESTERN EUROPE") {
        wEurope.push(country);
    } else if (pmd.Region === "NEAR EAST") {
        nearEast.push(country);
    } else if (pmd.Region === "NORTHERN AMERICA") {
        northAm.push(country);
    } else {
        baltics.push(country);
    } 
 };

let myLineChart = new Chart(document.getElementById("myLineChart"), {
    type: 'line',
    data: {

    },
    options: {
      title: {
        display: true,
        text: 'Average MMR per Region from 2000-2017'
      }
    }
  });
let url = "http://127.0.0.1:5000/api/v1.0/alldata";

let pmd = d3.json(url);

pmd.then(function(data){
    let asiaEx = [];
    let asiaEx00 = [];
    let asiaEx01 = [];
    let asiaEx02 = [];
    let asiaEx03 = [];
    let asiaEx04 = [];
    let asiaEx05 = [];
    let asiaEx06 = [];
    let asiaEx07 = [];
    let asiaEx08 = [];
    let asiaEx09 = [];
    let asiaEx10 = [];
    let asiaEx11 = [];
    let asiaEx12 = [];
    let asiaEx13 = [];
    let asiaEx14 = [];
    let asiaEx15 = [];
    let asiaEx16 = [];
    let asiaEx17 = [];


    let eEurope = [];
    let eEurope00 = [];
    let eEurope01 = [];
    let eEurope02 = [];
    let eEurope03 = [];
    let eEurope04 = [];
    let eEurope05 = [];
    let eEurope06 = [];
    let eEurope07 = [];
    let eEurope08 = [];
    let eEurope09 = [];
    let eEurope10 = [];
    let eEurope11 = [];
    let eEurope12 = [];
    let eEurope13 = [];
    let eEurope14 = [];
    let eEurope15 = [];
    let eEurope16 = [];
    let eEurope17 = [];

    let northAfrica = [];
    let northAfrica00 = [];
    let northAfrica01 = [];
    let northAfrica02 = [];
    let northAfrica03 = [];
    let northAfrica04 = [];
    let northAfrica05 = [];
    let northAfrica06 = [];
    let northAfrica07 = [];
    let northAfrica08 = [];
    let northAfrica09 = [];
    let northAfrica10 = [];
    let northAfrica11 = [];
    let northAfrica12 = [];
    let northAfrica13 = [];
    let northAfrica14 = [];
    let northAfrica15 = [];
    let northAfrica16 = [];
    let northAfrica17 = [];

    let SSAfrica = [];
    let SSAfrica00 = [];
    let SSAfrica01 = [];
    let SSAfrica02 = [];
    let SSAfrica03 = [];
    let SSAfrica04 = [];
    let SSAfrica05 = [];
    let SSAfrica06 = [];
    let SSAfrica07 = [];
    let SSAfrica08 = [];
    let SSAfrica09 = [];
    let SSAfrica10 = [];
    let SSAfrica11 = [];
    let SSAfrica12 = [];
    let SSAfrica13 = [];
    let SSAfrica14 = [];
    let SSAfrica15 = [];
    let SSAfrica16 = [];
    let SSAfrica17 = [];

    let latinAm = [];
    let latinAm00 = [];
    let latinAm01 = [];
    let latinAm02 = [];
    let latinAm03 = [];
    let latinAm04 = [];
    let latinAm05 = [];
    let latinAm06 = [];
    let latinAm07 = [];
    let latinAm08 = [];
    let latinAm09 = [];
    let latinAm10 = [];
    let latinAm11 = [];
    let latinAm12 = [];
    let latinAm13 = [];
    let latinAm14 = [];
    let latinAm15 = [];
    let latinAm16 = [];
    let latinAm17 = [];

    let CWI = [];
    let CWI00 = [];
    let CWI01 = [];
    let CWI02 = [];
    let CWI03 = [];
    let CWI04 = [];
    let CWI05 = [];
    let CWI06 = [];
    let CWI07 = [];
    let CWI08 = [];
    let CWI09 = [];
    let CWI10 = [];
    let CWI11 = [];
    let CWI12 = [];
    let CWI13 = [];
    let CWI14 = [];
    let CWI15 = [];
    let CWI16 = [];
    let CWI17 = [];

    let oceania = [];
    let oceania00 = [];
    let oceania01 = [];
    let oceania02 = [];
    let oceania03 = [];
    let oceania04 = [];
    let oceania05 = [];
    let oceania06 = [];
    let oceania07 = [];
    let oceania08 = [];
    let oceania09 = [];
    let oceania10 = [];
    let oceania11 = [];
    let oceania12 = [];
    let oceania13 = [];
    let oceania14 = [];
    let oceania15 = [];
    let oceania16 = [];
    let oceania17 = [];

    let wEurope = [];
    let wEurope00 = [];
    let wEurope01 = [];
    let wEurope02 = [];
    let wEurope03 = [];
    let wEurope04 = [];
    let wEurope05 = [];
    let wEurope06 = [];
    let wEurope07 = [];
    let wEurope08 = [];
    let wEurope09 = [];
    let wEurope10 = [];
    let wEurope11 = [];
    let wEurope12 = [];
    let wEurope13 = [];
    let wEurope14 = [];
    let wEurope15 = [];
    let wEurope16 = [];
    let wEurope17 = [];

    let nearEast = [];
    let nearEast00 = [];
    let nearEast01 = [];
    let nearEast02 = [];
    let nearEast03 = [];
    let nearEast04 = [];
    let nearEast05 = [];
    let nearEast06 = [];
    let nearEast07 = [];
    let nearEast08 = [];
    let nearEast09 = [];
    let nearEast10 = [];
    let nearEast11 = [];
    let nearEast12 = [];
    let nearEast13 = [];
    let nearEast14 = [];
    let nearEast15 = [];
    let nearEast16 = [];
    let nearEast17 = [];

    let northAm = [];
    let northAm00 = [];
    let northAm01 = [];
    let northAm02 = [];
    let northAm03 = [];
    let northAm04 = [];
    let northAm05 = [];
    let northAm06 = [];
    let northAm07 = [];
    let northAm08 = [];
    let northAm09 = [];
    let northAm10 = [];
    let northAm11 = [];
    let northAm12 = [];
    let northAm13 = [];
    let northAm14 = [];
    let northAm15 = [];
    let northAm16 = [];
    let northAm17 = [];

    let baltics = [];
    let baltics00 = [];
    let baltics01 = [];
    let baltics02 = [];
    let baltics03 = [];
    let baltics04 = [];
    let baltics05 = [];
    let baltics06 = [];
    let baltics07 = [];
    let baltics08 = [];
    let baltics09 = [];
    let baltics10 = [];
    let baltics11 = [];
    let baltics12 = [];
    let baltics13 = [];
    let baltics14 = [];
    let baltics15 = [];
    let baltics16 = [];
    let baltics17 = [];

    console.log(data);
    

    for (let elt of data) {
        if (elt.Region === "ASIA (EX. NEAR EAST)") {
            asiaEx.push(elt);
        } else if (elt.Region === "EASTERN EUROPE") {
            eEurope.push(elt);
        } else if (elt.Region === "NORTHERN AFRICA") {
            northAfrica.push(elt);
        } else if (elt.Region === "SUB-SAHARAN AFRICA") {
            SSAfrica.push(elt);
        } else if (elt.Region === "LATIN AMER. & CARIB") {
            latinAm.push(elt);
        } else if (elt.Region === "C.W. OF IND. STATES") {
            CWI.push(elt);
        } else if (elt.Region === "OCEANIA") {
            oceania.push(elt);
        } else if (elt.Region === "WESTERN EUROPE") {
            wEurope.push(elt);
        } else if (elt.Region === "NEAR EAST") {
            nearEast.push(elt);
        } else if (elt.Region === "NORTHERN AMERICA") {
            northAm.push(elt);
        } else {
            baltics.push(elt);
        }

    };
 
    for (let elt of asiaEx) {
        if (elt.Year === 2000) {
            asiaEx00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            asiaEx01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            asiaEx02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            asiaEx03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            asiaEx04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            asiaEx05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            asiaEx06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            asiaEx07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            asiaEx08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            asiaEx09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            asiaEx10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            asiaEx11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            asiaEx12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            asiaEx13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            asiaEx14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            asiaEx15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            asiaEx16.push(elt.MMR);
        } else {
            asiaEx17.push(elt.MMR);
        }
    };

    console.log(asiaEx00);

    function sum_reducer(accumulator, currentValue) {
        return (accumulator + currentValue);
    };
    
        let asiaEx00avg = asiaEx00.reduce(sum_reducer) / asiaEx00.length;
        let asiaEx01avg = asiaEx01.reduce(sum_reducer) / asiaEx01.length;
        let asiaEx02avg = asiaEx02.reduce(sum_reducer) / asiaEx02.length;
        let asiaEx03avg = asiaEx03.reduce(sum_reducer) / asiaEx03.length;
        let asiaEx04avg = asiaEx04.reduce(sum_reducer) / asiaEx04.length;
        let asiaEx05avg = asiaEx05.reduce(sum_reducer) / asiaEx05.length;
        let asiaEx06avg = asiaEx06.reduce(sum_reducer) / asiaEx06.length;
        let asiaEx07avg = asiaEx07.reduce(sum_reducer) / asiaEx07.length;
        let asiaEx08avg = asiaEx08.reduce(sum_reducer) / asiaEx08.length;
        let asiaEx09avg = asiaEx09.reduce(sum_reducer) / asiaEx09.length;
        let asiaEx10avg = asiaEx10.reduce(sum_reducer) / asiaEx10.length;
        let asiaEx11avg = asiaEx11.reduce(sum_reducer) / asiaEx11.length;
        let asiaEx12avg = asiaEx12.reduce(sum_reducer) / asiaEx12.length;
        let asiaEx13avg = asiaEx13.reduce(sum_reducer) / asiaEx13.length;
        let asiaEx14avg = asiaEx14.reduce(sum_reducer) / asiaEx14.length;
        let asiaEx15avg = asiaEx15.reduce(sum_reducer) / asiaEx15.length;
        let asiaEx16avg = asiaEx16.reduce(sum_reducer) / asiaEx16.length;
        let asiaEx17avg = asiaEx17.reduce(sum_reducer) / asiaEx17.length;


    let myLineChart = new Chart(document.getElementById("myLineChart"), {
        type: 'line',
        data: {
            labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
            datasets: [{
                data: [asiaEx00avg, asiaEx01avg, asiaEx02avg, asiaEx03avg, asiaEx04avg, asiaEx05avg,
                     asiaEx06avg, asiaEx07avg, asiaEx08avg, asiaEx09avg, asiaEx10avg, asiaEx11avg, asiaEx12avg,
                     asiaEx13avg, asiaEx14avg, asiaEx15avg, asiaEx16avg, asiaEx17avg],
                label: "ASIA (EX. NEAR EAST)",
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
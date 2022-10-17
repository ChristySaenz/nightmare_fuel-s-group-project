// let url = "http://127.0.0.1:5000/api/v1.0/alldata";

// let pmd = d3.json(url);

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

    for (let elt of eEurope) {
        if (elt.Year === 2000) {
            eEurope00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            eEurope01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            eEurope02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            eEurope03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            eEurope04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            eEurope05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            eEurope06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            eEurope07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            eEurope08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            eEurope09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            eEurope10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            eEurope11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            eEurope12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            eEurope13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            eEurope14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            eEurope15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            eEurope16.push(elt.MMR);
        } else {
            eEurope17.push(elt.MMR);
        }
    };

    for (let elt of northAfrica) {
        if (elt.Year === 2000) {
            northAfrica00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            northAfrica01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            northAfrica02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            northAfrica03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            northAfrica04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            northAfrica05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            northAfrica06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            northAfrica07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            northAfrica08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            northAfrica09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            northAfrica10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            northAfrica11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            northAfrica12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            northAfrica13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            northAfrica14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            northAfrica15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            northAfrica16.push(elt.MMR);
        } else {
            northAfrica17.push(elt.MMR);
        }
    };

    for (let elt of SSAfrica) {
        if (elt.Year === 2000) {
            SSAfrica00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            SSAfrica01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            SSAfrica02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            SSAfrica03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            SSAfrica04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            SSAfrica05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            SSAfrica06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            SSAfrica07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            SSAfrica08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            SSAfrica09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            SSAfrica10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            SSAfrica11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            SSAfrica12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            SSAfrica13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            SSAfrica14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            SSAfrica15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            SSAfrica16.push(elt.MMR);
        } else {
            SSAfrica17.push(elt.MMR);
        }
    };

    for (let elt of latinAm) {
        if (elt.Year === 2000) {
            latinAm00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            latinAm01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            latinAm02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            latinAm03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            latinAm04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            latinAm05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            latinAm06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            latinAm07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            latinAm08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            latinAm09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            latinAm10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            latinAm11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            latinAm12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            latinAm13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            latinAm14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            latinAm15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            latinAm16.push(elt.MMR);
        } else {
            latinAm17.push(elt.MMR);
        }
    };

    for (let elt of CWI) {
        if (elt.Year === 2000) {
            CWI00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            CWI01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            CWI02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            CWI03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            CWI04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            CWI05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            CWI06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            CWI07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            CWI08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            CWI09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            CWI10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            CWI11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            CWI12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            CWI13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            CWI14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            CWI15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            CWI16.push(elt.MMR);
        } else {
            CWI17.push(elt.MMR);
        }
    };

    for (let elt of oceania) {
        if (elt.Year === 2000) {
            oceania00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            oceania01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            oceania02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            oceania03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            oceania04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            oceania05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            oceania06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            oceania07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            oceania08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            oceania09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            oceania10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            oceania11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            oceania12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            oceania13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            oceania14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            oceania15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            oceania16.push(elt.MMR);
        } else {
            oceania17.push(elt.MMR);
        }
    };

    for (let elt of wEurope) {
        if (elt.Year === 2000) {
            wEurope00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            wEurope01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            wEurope02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            wEurope03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            wEurope04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            wEurope05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            wEurope06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            wEurope07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            wEurope08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            wEurope09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            wEurope10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            wEurope11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            wEurope12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            wEurope13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            wEurope14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            wEurope15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            wEurope16.push(elt.MMR);
        } else {
            wEurope17.push(elt.MMR);
        }
    };

    for (let elt of nearEast) {
        if (elt.Year === 2000) {
            nearEast00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            nearEast01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            nearEast02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            nearEast03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            nearEast04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            nearEast05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            nearEast06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            nearEast07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            nearEast08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            nearEast09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            nearEast10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            nearEast11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            nearEast12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            nearEast13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            nearEast14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            nearEast15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            nearEast16.push(elt.MMR);
        } else {
            nearEast17.push(elt.MMR);
        }
    };

    for (let elt of northAm) {
        if (elt.Year === 2000) {
            northAm00.push(elt.MMR);
        } else if (elt.Year === 2001) {
            northAm01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            northAm02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            northAm03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            northAm04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            northAm05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            northAm06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            northAm07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            northAm08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            northAm09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            northAm10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            northAm11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            northAm12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            northAm13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            northAm14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            northAm15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            northAm16.push(elt.MMR);
        } else {
            northAm17.push(elt.MMR);
        }
    }; 

    for (let elt of baltics) {
        if (elt.Year === 2000) {
            baltics00.push(elt.MMR);
        }else if (elt.Year === 2001) {
            baltics01.push(elt.MMR);
        } else if (elt.Year === 2002) {
            baltics02.push(elt.MMR);
        } else if (elt.Year === 2003) {
            baltics03.push(elt.MMR);
        } else if (elt.Year === 2004) {
            baltics04.push(elt.MMR);
        } else if (elt.Year === 2005) {
            baltics05.push(elt.MMR);
        } else if (elt.Year === 2006) {
            baltics06.push(elt.MMR);
        } else if (elt.Year === 2007) {
            baltics07.push(elt.MMR);
        } else if (elt.Year === 2008) {
            baltics08.push(elt.MMR);
        } else if (elt.Year === 2009) {
            baltics09.push(elt.MMR);
        } else if (elt.Year === 2010) {
            baltics10.push(elt.MMR);
        } else if (elt.Year === 2011) {
            baltics11.push(elt.MMR);
        } else if (elt.Year === 2012) {
            baltics12.push(elt.MMR);
        } else if (elt.Year === 2013) {
            baltics13.push(elt.MMR);
        } else if (elt.Year === 2014) {
            baltics14.push(elt.MMR);
        } else if (elt.Year === 2015) {
            baltics15.push(elt.MMR);
        } else if (elt.Year === 2016) {
            baltics16.push(elt.MMR);
        } else {
            baltics17.push(elt.MMR);
        }
    };


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

    let eEurope00avg = eEurope00.reduce(sum_reducer) / eEurope00.length;
    let eEurope01avg = eEurope01.reduce(sum_reducer) / eEurope01.length;
    let eEurope02avg = eEurope02.reduce(sum_reducer) / eEurope02.length;
    let eEurope03avg = eEurope03.reduce(sum_reducer) / eEurope03.length;
    let eEurope04avg = eEurope04.reduce(sum_reducer) / eEurope04.length;
    let eEurope05avg = eEurope05.reduce(sum_reducer) / eEurope05.length;
    let eEurope06avg = eEurope06.reduce(sum_reducer) / eEurope06.length;
    let eEurope07avg = eEurope07.reduce(sum_reducer) / eEurope07.length;
    let eEurope08avg = eEurope08.reduce(sum_reducer) / eEurope08.length;
    let eEurope09avg = eEurope09.reduce(sum_reducer) / eEurope09.length;
    let eEurope10avg = eEurope10.reduce(sum_reducer) / eEurope10.length;
    let eEurope11avg = eEurope11.reduce(sum_reducer) / eEurope11.length;
    let eEurope12avg = eEurope12.reduce(sum_reducer) / eEurope12.length;
    let eEurope13avg = eEurope13.reduce(sum_reducer) / eEurope13.length;
    let eEurope14avg = eEurope14.reduce(sum_reducer) / eEurope14.length;
    let eEurope15avg = eEurope15.reduce(sum_reducer) / eEurope15.length;
    let eEurope16avg = eEurope16.reduce(sum_reducer) / eEurope16.length;
    let eEurope17avg = eEurope17.reduce(sum_reducer) / eEurope17.length;
    
    let northAfrica00avg = northAfrica00.reduce(sum_reducer) / northAfrica00.length;
    let northAfrica01avg = northAfrica01.reduce(sum_reducer) / northAfrica01.length;
    let northAfrica02avg = northAfrica02.reduce(sum_reducer) / northAfrica02.length;
    let northAfrica03avg = northAfrica03.reduce(sum_reducer) / northAfrica03.length;
    let northAfrica04avg = northAfrica04.reduce(sum_reducer) / northAfrica04.length;
    let northAfrica05avg = northAfrica05.reduce(sum_reducer) / northAfrica05.length;
    let northAfrica06avg = northAfrica06.reduce(sum_reducer) / northAfrica06.length;
    let northAfrica07avg = northAfrica07.reduce(sum_reducer) / northAfrica07.length;
    let northAfrica08avg = northAfrica08.reduce(sum_reducer) / northAfrica08.length;
    let northAfrica09avg = northAfrica09.reduce(sum_reducer) / northAfrica09.length;
    let northAfrica10avg = northAfrica10.reduce(sum_reducer) / northAfrica10.length;
    let northAfrica11avg = northAfrica11.reduce(sum_reducer) / northAfrica11.length;
    let northAfrica12avg = northAfrica12.reduce(sum_reducer) / northAfrica12.length;
    let northAfrica13avg = northAfrica13.reduce(sum_reducer) / northAfrica13.length;
    let northAfrica14avg = northAfrica14.reduce(sum_reducer) / northAfrica14.length;
    let northAfrica15avg = northAfrica15.reduce(sum_reducer) / northAfrica15.length;
    let northAfrica16avg = northAfrica16.reduce(sum_reducer) / northAfrica16.length;
    let northAfrica17avg = northAfrica17.reduce(sum_reducer) / northAfrica17.length;
    
    let SSAfrica00avg = SSAfrica00.reduce(sum_reducer) / SSAfrica00.length;
    let SSAfrica01avg = SSAfrica01.reduce(sum_reducer) / SSAfrica01.length;
    let SSAfrica02avg = SSAfrica02.reduce(sum_reducer) / SSAfrica02.length;
    let SSAfrica03avg = SSAfrica03.reduce(sum_reducer) / SSAfrica03.length;
    let SSAfrica04avg = SSAfrica04.reduce(sum_reducer) / SSAfrica04.length;
    let SSAfrica05avg = SSAfrica05.reduce(sum_reducer) / SSAfrica05.length;
    let SSAfrica06avg = SSAfrica06.reduce(sum_reducer) / SSAfrica06.length;
    let SSAfrica07avg = SSAfrica07.reduce(sum_reducer) / SSAfrica07.length;
    let SSAfrica08avg = SSAfrica08.reduce(sum_reducer) / SSAfrica08.length;
    let SSAfrica09avg = SSAfrica09.reduce(sum_reducer) / SSAfrica09.length;
    let SSAfrica10avg = SSAfrica10.reduce(sum_reducer) / SSAfrica10.length;
    let SSAfrica11avg = SSAfrica11.reduce(sum_reducer) / SSAfrica11.length;
    let SSAfrica12avg = SSAfrica12.reduce(sum_reducer) / SSAfrica12.length;
    let SSAfrica13avg = SSAfrica13.reduce(sum_reducer) / SSAfrica13.length;
    let SSAfrica14avg = SSAfrica14.reduce(sum_reducer) / SSAfrica14.length;
    let SSAfrica15avg = SSAfrica15.reduce(sum_reducer) / SSAfrica15.length;
    let SSAfrica16avg = SSAfrica16.reduce(sum_reducer) / SSAfrica16.length;
    let SSAfrica17avg = SSAfrica17.reduce(sum_reducer) / SSAfrica17.length;
    
    let latinAm00avg = latinAm00.reduce(sum_reducer) / latinAm00.length;
    let latinAm01avg = latinAm01.reduce(sum_reducer) / latinAm01.length;
    let latinAm02avg = latinAm02.reduce(sum_reducer) / latinAm02.length;
    let latinAm03avg = latinAm03.reduce(sum_reducer) / latinAm03.length;
    let latinAm04avg = latinAm04.reduce(sum_reducer) / latinAm04.length;
    let latinAm05avg = latinAm05.reduce(sum_reducer) / latinAm05.length;
    let latinAm06avg = latinAm06.reduce(sum_reducer) / latinAm06.length;
    let latinAm07avg = latinAm07.reduce(sum_reducer) / latinAm07.length;
    let latinAm08avg = latinAm08.reduce(sum_reducer) / latinAm08.length;
    let latinAm09avg = latinAm09.reduce(sum_reducer) / latinAm09.length;
    let latinAm10avg = latinAm10.reduce(sum_reducer) / latinAm10.length;
    let latinAm11avg = latinAm11.reduce(sum_reducer) / latinAm11.length;
    let latinAm12avg = latinAm12.reduce(sum_reducer) / latinAm12.length;
    let latinAm13avg = latinAm13.reduce(sum_reducer) / latinAm13.length;
    let latinAm14avg = latinAm14.reduce(sum_reducer) / latinAm14.length;
    let latinAm15avg = latinAm15.reduce(sum_reducer) / latinAm15.length;
    let latinAm16avg = latinAm16.reduce(sum_reducer) / latinAm16.length;
    let latinAm17avg = latinAm17.reduce(sum_reducer) / latinAm17.length;
    
    let CWI00avg = CWI00.reduce(sum_reducer) / CWI00.length;
    let CWI01avg = CWI01.reduce(sum_reducer) / CWI01.length;
    let CWI02avg = CWI02.reduce(sum_reducer) / CWI02.length;
    let CWI03avg = CWI03.reduce(sum_reducer) / CWI03.length;
    let CWI04avg = CWI04.reduce(sum_reducer) / CWI04.length;
    let CWI05avg = CWI05.reduce(sum_reducer) / CWI05.length;
    let CWI06avg = CWI06.reduce(sum_reducer) / CWI06.length;
    let CWI07avg = CWI07.reduce(sum_reducer) / CWI07.length;
    let CWI08avg = CWI08.reduce(sum_reducer) / CWI08.length;
    let CWI09avg = CWI09.reduce(sum_reducer) / CWI09.length;
    let CWI10avg = CWI10.reduce(sum_reducer) / CWI10.length;
    let CWI11avg = CWI11.reduce(sum_reducer) / CWI11.length;
    let CWI12avg = CWI12.reduce(sum_reducer) / CWI12.length;
    let CWI13avg = CWI13.reduce(sum_reducer) / CWI13.length;
    let CWI14avg = CWI14.reduce(sum_reducer) / CWI14.length;
    let CWI15avg = CWI15.reduce(sum_reducer) / CWI15.length;
    let CWI16avg = CWI16.reduce(sum_reducer) / CWI16.length;
    let CWI17avg = CWI17.reduce(sum_reducer) / CWI17.length;
    
    let oceania00avg = oceania00.reduce(sum_reducer) / oceania00.length;
    let oceania01avg = oceania01.reduce(sum_reducer) / oceania01.length;
    let oceania02avg = oceania02.reduce(sum_reducer) / oceania02.length;
    let oceania03avg = oceania03.reduce(sum_reducer) / oceania03.length;
    let oceania04avg = oceania04.reduce(sum_reducer) / oceania04.length;
    let oceania05avg = oceania05.reduce(sum_reducer) / oceania05.length;
    let oceania06avg = oceania06.reduce(sum_reducer) / oceania06.length;
    let oceania07avg = oceania07.reduce(sum_reducer) / oceania07.length;
    let oceania08avg = oceania08.reduce(sum_reducer) / oceania08.length;
    let oceania09avg = oceania09.reduce(sum_reducer) / oceania09.length;
    let oceania10avg = oceania10.reduce(sum_reducer) / oceania10.length;
    let oceania11avg = oceania11.reduce(sum_reducer) / oceania11.length;
    let oceania12avg = oceania12.reduce(sum_reducer) / oceania12.length;
    let oceania13avg = oceania13.reduce(sum_reducer) / oceania13.length;
    let oceania14avg = oceania14.reduce(sum_reducer) / oceania14.length;
    let oceania15avg = oceania15.reduce(sum_reducer) / oceania15.length;
    let oceania16avg = oceania16.reduce(sum_reducer) / oceania16.length;
    let oceania17avg = oceania17.reduce(sum_reducer) / oceania17.length;
    
    let wEurope00avg = wEurope00.reduce(sum_reducer) / wEurope00.length;
    let wEurope01avg = wEurope01.reduce(sum_reducer) / wEurope01.length;
    let wEurope02avg = wEurope02.reduce(sum_reducer) / wEurope02.length;
    let wEurope03avg = wEurope03.reduce(sum_reducer) / wEurope03.length;
    let wEurope04avg = wEurope04.reduce(sum_reducer) / wEurope04.length;
    let wEurope05avg = wEurope05.reduce(sum_reducer) / wEurope05.length;
    let wEurope06avg = wEurope06.reduce(sum_reducer) / wEurope06.length;
    let wEurope07avg = wEurope07.reduce(sum_reducer) / wEurope07.length;
    let wEurope08avg = wEurope08.reduce(sum_reducer) / wEurope08.length;
    let wEurope09avg = wEurope09.reduce(sum_reducer) / wEurope09.length;
    let wEurope10avg = wEurope10.reduce(sum_reducer) / wEurope10.length;
    let wEurope11avg = wEurope11.reduce(sum_reducer) / wEurope11.length;
    let wEurope12avg = wEurope12.reduce(sum_reducer) / wEurope12.length;
    let wEurope13avg = wEurope13.reduce(sum_reducer) / wEurope13.length;
    let wEurope14avg = wEurope14.reduce(sum_reducer) / wEurope14.length;
    let wEurope15avg = wEurope15.reduce(sum_reducer) / wEurope15.length;
    let wEurope16avg = wEurope16.reduce(sum_reducer) / wEurope16.length;
    let wEurope17avg = wEurope17.reduce(sum_reducer) / wEurope17.length;
    
    let nearEast00avg = nearEast00.reduce(sum_reducer) / nearEast00.length;
    let nearEast01avg = nearEast01.reduce(sum_reducer) / nearEast01.length;
    let nearEast02avg = nearEast02.reduce(sum_reducer) / nearEast02.length;
    let nearEast03avg = nearEast03.reduce(sum_reducer) / nearEast03.length;
    let nearEast04avg = nearEast04.reduce(sum_reducer) / nearEast04.length;
    let nearEast05avg = nearEast05.reduce(sum_reducer) / nearEast05.length;
    let nearEast06avg = nearEast06.reduce(sum_reducer) / nearEast06.length;
    let nearEast07avg = nearEast07.reduce(sum_reducer) / nearEast07.length;
    let nearEast08avg = nearEast08.reduce(sum_reducer) / nearEast08.length;
    let nearEast09avg = nearEast09.reduce(sum_reducer) / nearEast09.length;
    let nearEast10avg = nearEast10.reduce(sum_reducer) / nearEast10.length;
    let nearEast11avg = nearEast11.reduce(sum_reducer) / nearEast11.length;
    let nearEast12avg = nearEast12.reduce(sum_reducer) / nearEast12.length;
    let nearEast13avg = nearEast13.reduce(sum_reducer) / nearEast13.length;
    let nearEast14avg = nearEast14.reduce(sum_reducer) / nearEast14.length;
    let nearEast15avg = nearEast15.reduce(sum_reducer) / nearEast15.length;
    let nearEast16avg = nearEast16.reduce(sum_reducer) / nearEast16.length;
    let nearEast17avg = nearEast17.reduce(sum_reducer) / nearEast17.length;
    
    let northAm00avg = northAm00.reduce(sum_reducer) / northAm00.length;
    let northAm01avg = northAm01.reduce(sum_reducer) / northAm01.length;
    let northAm02avg = northAm02.reduce(sum_reducer) / northAm02.length;
    let northAm03avg = northAm03.reduce(sum_reducer) / northAm03.length;
    let northAm04avg = northAm04.reduce(sum_reducer) / northAm04.length;
    let northAm05avg = northAm05.reduce(sum_reducer) / northAm05.length;
    let northAm06avg = northAm06.reduce(sum_reducer) / northAm06.length;
    let northAm07avg = northAm07.reduce(sum_reducer) / northAm07.length;
    let northAm08avg = northAm08.reduce(sum_reducer) / northAm08.length;
    let northAm09avg = northAm09.reduce(sum_reducer) / northAm09.length;
    let northAm10avg = northAm10.reduce(sum_reducer) / northAm10.length;
    let northAm11avg = northAm11.reduce(sum_reducer) / northAm11.length;
    let northAm12avg = northAm12.reduce(sum_reducer) / northAm12.length;
    let northAm13avg = northAm13.reduce(sum_reducer) / northAm13.length;
    let northAm14avg = northAm14.reduce(sum_reducer) / northAm14.length;
    let northAm15avg = northAm15.reduce(sum_reducer) / northAm15.length;
    let northAm16avg = northAm16.reduce(sum_reducer) / northAm16.length;
    let northAm17avg = northAm17.reduce(sum_reducer) / northAm17.length;


    let baltics00avg = baltics00.reduce(sum_reducer) / baltics00.length;
    let baltics01avg = baltics01.reduce(sum_reducer) / baltics01.length;
    let baltics02avg = baltics02.reduce(sum_reducer) / baltics02.length;
    let baltics03avg = baltics03.reduce(sum_reducer) / baltics03.length;
    let baltics04avg = baltics04.reduce(sum_reducer) / baltics04.length;
    let baltics05avg = baltics05.reduce(sum_reducer) / baltics05.length;
    let baltics06avg = baltics06.reduce(sum_reducer) / baltics06.length;
    let baltics07avg = baltics07.reduce(sum_reducer) / baltics07.length;
    let baltics08avg = baltics08.reduce(sum_reducer) / baltics08.length;
    let baltics09avg = baltics09.reduce(sum_reducer) / baltics09.length;
    let baltics10avg = baltics10.reduce(sum_reducer) / baltics10.length;
    let baltics11avg = baltics11.reduce(sum_reducer) / baltics11.length;
    let baltics12avg = baltics12.reduce(sum_reducer) / baltics12.length;
    let baltics13avg = baltics13.reduce(sum_reducer) / baltics13.length;
    let baltics14avg = baltics14.reduce(sum_reducer) / baltics14.length;
    let baltics15avg = baltics15.reduce(sum_reducer) / baltics15.length;
    let baltics16avg = baltics16.reduce(sum_reducer) / baltics16.length;
    let baltics17avg = baltics17.reduce(sum_reducer) / baltics17.length;

    new Chart(document.getElementById("myLineChart"), {
        type: 'line',
        data: {
            labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
            datasets: [{
                data: [asiaEx00avg, asiaEx01avg, asiaEx02avg, asiaEx03avg, asiaEx04avg, asiaEx05avg,
                     asiaEx06avg, asiaEx07avg, asiaEx08avg, asiaEx09avg, asiaEx10avg, asiaEx11avg, asiaEx12avg,
                     asiaEx13avg, asiaEx14avg, asiaEx15avg, asiaEx16avg, asiaEx17avg],
                label: "ASIA (EX. NEAR EAST)",
                borderColor: "red",
                fill: false
            }, {
                data: [eEurope00avg, eEurope01avg, eEurope02avg, eEurope03avg, eEurope04avg, eEurope05avg,
                    eEurope06avg, eEurope07avg, eEurope08avg, eEurope09avg, eEurope10avg, eEurope11avg, eEurope12avg,
                    eEurope13avg, eEurope14avg, eEurope15avg, eEurope16avg, eEurope17avg],
                label: "EASTERN EUROPE",
                borderColor: "blue",
                fill: false
            }, {
                data: [northAfrica00avg, northAfrica01avg, northAfrica02avg, northAfrica03avg, northAfrica04avg, northAfrica05avg,
                    northAfrica06avg, northAfrica07avg, northAfrica08avg, northAfrica09avg, northAfrica10avg, northAfrica11avg, northAfrica12avg,
                    northAfrica13avg, northAfrica14avg, northAfrica15avg, northAfrica16avg, northAfrica17avg],
                label: "NORTHERN AFRICA",
                borderColor: "purple",
                fill: false
            }, {
                data: [SSAfrica00avg, SSAfrica01avg, SSAfrica02avg, SSAfrica03avg, SSAfrica04avg, SSAfrica05avg,
                    SSAfrica06avg, SSAfrica07avg, SSAfrica08avg, SSAfrica09avg, SSAfrica10avg, SSAfrica11avg, SSAfrica12avg,
                    SSAfrica13avg, SSAfrica14avg, SSAfrica15avg, SSAfrica16avg, SSAfrica17avg],
                label: "SUB-SAHARAN AFRICA",
                borderColor: "orange",
                fill: false
            }, {
                data: [latinAm00avg, latinAm01avg, latinAm02avg, latinAm03avg, latinAm04avg, latinAm05avg,
                    latinAm06avg, latinAm07avg, latinAm08avg, latinAm09avg, latinAm10avg, latinAm11avg, latinAm12avg,
                    latinAm13avg, latinAm14avg, latinAm15avg, latinAm16avg, latinAm17avg],
                label: "LATIN AMER. & CARIB",
                borderColor: "pink",
                fill: false
            }, {
                data: [CWI00avg, CWI01avg, CWI02avg, CWI03avg, CWI04avg, CWI05avg,
                    CWI06avg, CWI07avg, CWI08avg, CWI09avg, CWI10avg, CWI11avg, CWI12avg,
                    CWI13avg, CWI14avg, CWI15avg, CWI16avg, CWI17avg],
                label: "C.W. OF IND. STATES",
                borderColor: "green",
                fill: false
            }, {
                data: [oceania00avg, oceania01avg, oceania02avg, oceania03avg, oceania04avg, oceania05avg, 
                    oceania06avg, oceania07avg, oceania08avg, oceania09avg, oceania10avg, oceania11avg, 
                    oceania12avg, oceania13avg, oceania14avg, oceania15avg, oceania16avg, oceania17avg],
                label: "OCEANIA",
                borderColor: "brown",
                fill: false
            }, {
                data: [wEurope00avg, wEurope01avg, wEurope02avg, wEurope03avg, wEurope04avg, wEurope05avg, 
                    wEurope06avg, wEurope07avg, wEurope08avg, wEurope09avg, wEurope10avg, wEurope11avg, 
                    wEurope12avg, wEurope13avg, wEurope14avg, wEurope15avg, wEurope16avg, wEurope17avg],
                label: "WESTERN EUROPE",
                borderColor: "marigold",
                fill: false
            }, {
                data: [nearEast00avg, nearEast01avg, nearEast02avg, nearEast03avg, nearEast04avg, nearEast05avg, 
                    nearEast06avg, nearEast07avg, nearEast08avg, nearEast09avg, nearEast10avg, nearEast11avg, 
                    nearEast12avg, nearEast13avg, nearEast14avg, nearEast15avg, nearEast16avg, nearEast17avg],
                label: "NEAR EAST",
                borderColor: "teal",
                fill: false
            }, {
                data: [northAm00avg, northAm01avg, northAm02avg, northAm03avg, northAm04avg, northAm05avg, 
                    northAm06avg, northAm07avg, northAm08avg, northAm09avg, northAm10avg, northAm11avg, 
                    northAm12avg, northAm13avg, northAm14avg, northAm15avg, northAm16avg, northAm17avg],
                label: "NORTHERN AMERICA",
                borderColor: "black",
                fill: false
            }, {
                data: [baltics00avg, baltics01avg, baltics02avg, baltics03avg, baltics04avg, baltics05avg, 
                    baltics06avg, baltics07avg, baltics08avg, baltics09avg, baltics10avg, baltics11avg, 
                    baltics12avg, baltics13avg, baltics14avg, baltics15avg, baltics16avg, baltics17avg],
                label: "BALTICS",
                borderColor: "gray",
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
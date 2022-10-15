let url = "http://127.0.0.1:5000/api/v1.0/alldata";

let pmd = d3.json(url);

pmd.then(function(data){
    let mmr00 = [];
    let mmr01 = [];
    let mmr02 = [];
    let mmr03 = [];
    let mmr04 = [];
    let mmr05 = [];
    let mmr06 = [];
    let mmr07 = [];
    let mmr08 = [];
    let mmr09 = [];
    let mmr10 = [];
    let mmr11 = [];
    let mmr12 = [];
    let mmr13 = [];
    let mmr14 = [];
    let mmr15 = [];
    let mmr16 = [];
    let mmr17 = [];

for (let k of data) {
    if (k.Year === "2000") {
        mmr00.push(k);
    } else if (k.Year === "2001") {
        mmr01.push(k);
    } else if (k.Year === "2002") {
        mmr02.push(k);
    } else if (k.Year === "2003") {
        mmr03.push(k);
    } else if (k.Year === "2004") {
        mmr04.push(k);
    } else if (k.Year === "2005") {
        mmr05.push(k);
    } else if (k.Year === "2006") {
        mmr06.push(k);
    } else if (k.Year === "2007") {
        mmr07.push(k);
    } else if (k.Year === "2008") {
        mmr08.push(k);
    } else if (k.Year === "2009") {
        mmr09.push(k);
    } else if (k.Year === "2010") {
        mmr10.push(k);
    } else if (k.Year === "2011") {
        mmr11.push(k);
    } else if (k.Year === "2012") {
        mmr12.push(k);
    } else if (k.Year === "2013") {
        mmr13.push(k);
    } else if (k.Year === "2014") {
        mmr14.push(k);
    } else if (k.Year === "2015") {
        mmr15.push(k);
    } else if (k.Year === "2015") {
        mmr16.push(k);
    } else {
        mmr17.push(k);
    }
});

2000_df = px.mmr00.MMR(Year === 2000)
fig = px.choropleth(df, locations="iso_alpha",
                    color="MMR", # lifeExp is a column of gapminder
                    hover_name="country", # column to add to hover information
                    color_continuous_scale=px.colors.sequential.Plasma)
fig.show()



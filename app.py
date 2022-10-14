#Dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask_cors import CORS

#setup database
engine = create_engine("sqlite:///pmd.sqlite")

Base = automap_base()
Base.prepare(engine, reflect = True)
pmd = Base.classes.pmd

#flask setup
app = Flask(__name__)

CORS(app)

#flask routes
@app.route("/")
def welcome():
    return (
        f"Welcome to the Maternal Mortality Rate API.<br/>"
        f"When inputting a year, use the full year yyyy<br/>"
        f"To call the API, replace the bracketed item with the respective parameter.<br/>"
        f"For the Country parameter, the first letter must be capitalized.<br/>"
        f"For the CountryCode parameter, all three letters must be capitalized.<br/>"
        f"For the region parameter, enter the region with %20 in place of spaces.<br/>"
        f"<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/alldata<br/>"
        f"/api/v1.0/country/{{Country}}<br/>"
        f"/api/v1.0/year/{{Year}}<br/>"
        f"/api/v1.0/region/{{region}}%<br/>"
        f"/api/v1.0/countryCode/{{countryCode}}<br/>"
    )

@app.route("/api/v1.0/alldata")
def allData():
    session = Session(engine)
    results = session.query(pmd.Country, pmd.Year, pmd.MMR, pmd.Ranges, pmd.Region, pmd.Country_Code).all()
    session.close()

    allData = []    
    for countryname, year, mmr, ranges, region, country_code in results:
        allData_dict = {}
        allData_dict["Country"] = countryname
        allData_dict["Year"] = year
        allData_dict["MMR"] = mmr
        allData_dict["Ranges"] = ranges
        allData_dict["Region"] = region
        allData_dict["Country Code"] = country_code

        allData.append(allData_dict)

    return jsonify(allData)

@app.route("/api/v1.0/country/<country>")
def countryInfo(country):
    session = Session(engine)
    results = session.query(pmd.Country, pmd.Year, pmd.MMR, pmd.Ranges, pmd.Region, pmd.Country_Code).\
        filter(pmd.Country == country).all()
    session.close()

    countryInfo = []
    for countryname, year, mmr, ranges, region, country_code in results:
        country_dict = {}
        country_dict["Country"] = countryname
        country_dict["Year"] = year
        country_dict["MMR"] = mmr
        country_dict["Ranges"] = ranges
        country_dict["Region"] = region
        country_dict["Country Code"] = country_code

        countryInfo.append(country_dict)

    return jsonify(countryInfo)



@app.route("/api/v1.0/year/<int:yearIn>")
def yearInfo(yearIn):
    session = Session(engine)
    results = session.query(pmd.Country, pmd.Year, pmd.MMR, pmd.Ranges, pmd.Region, pmd.Country_Code).\
        filter(pmd.Year == yearIn).all()
    session.close()

    yearInfo = []
    for countryname, years, mmr, ranges, region, country_code in results:
        year_dict = {}
        year_dict["Country"] = countryname
        year_dict["Year"] = years
        year_dict["MMR"] = mmr
        year_dict["Ranges"] = ranges
        year_dict["Region"] = region
        year_dict["Country Code"] = country_code

        yearInfo.append(year_dict)

    return jsonify(yearInfo)



@app.route("/api/v1.0/region/<region>")
def RegionInfo(region):
    session = Session(engine)
    results = session.query(pmd.Country, pmd.Year, pmd.MMR, pmd.Ranges, pmd.Region, pmd.Country_Code).\
        filter(pmd.Region.like(region)).all()
    session.close()

    regionInfo = []
    for countryname, year, mmr, ranges, region, country_code in results:
        region_dict = {}
        region_dict["Country"] = countryname
        region_dict["Year"] = year
        region_dict["MMR"] = mmr
        region_dict["Ranges"] = ranges
        region_dict["Region"] = region
        region_dict["Country Code"] = country_code

        regionInfo.append(region_dict)

    return jsonify(regionInfo)



@app.route("/api/v1.0/countryCode/<countryCode>")
def countryCodeInfo(countryCode):
    session = Session(engine)
    results = session.query(pmd.Country, pmd.Year, pmd.MMR, pmd.Ranges, pmd.Region, pmd.Country_Code).\
        filter(pmd.Country_Code == countryCode).all()
    session.close()

    countryCodeInfo = []
    for countryname, year, mmr, ranges, region, country_code in results:
        countryCode_dict = {}
        countryCode_dict["Country"] = countryname
        countryCode_dict["Year"] = year
        countryCode_dict["MMR"] = mmr
        countryCode_dict["Ranges"] = ranges
        countryCode_dict["Region"] = region
        countryCode_dict["Country Code"] = country_code

        countryCodeInfo.append(countryCode_dict)

    return jsonify(countryCodeInfo)



if __name__ == "__main__":
    app.run(debug=True)
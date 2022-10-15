import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask_cors import CORS
from urllib.request import urlopen
import json
import pandas as pd
import plotly.express as px

with urlopen('http://127.0.0.1:5000/api/v1.0/alldata') as response:
    countries = json.load(response)

# df = pd.read_csv("/countries.geojson",
#                    dtype={"Country_Code": str})


engine = create_engine("sqlite:///pmd.sqlite")

Base = automap_base()
Base.prepare(engine, reflect = True)
pmd = Base.classes.pmd

#flask setup
app = Flask(__name__)

CORS(app)

#flask routes
@app.route("/")




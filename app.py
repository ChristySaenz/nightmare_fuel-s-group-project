#for flask stuff
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def welcome():
    return (
        f"Welcome to the Maternal Mortality Rate API.<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/   <br/>"
    )







if __name__ == "__main__":
app.run(debug=True)
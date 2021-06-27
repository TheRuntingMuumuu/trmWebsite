from flask import Flask, render_template
import flask

app = Flask(__name__)


@app.route("/")
def welcome():
    return render_template("general.html")

@app.route("/general")
def general():
    return render_template("general.html")

@app.route("/eso")
def eso():
    return render_template("eso.html")


if __name__ == '__main__':
    app.run()

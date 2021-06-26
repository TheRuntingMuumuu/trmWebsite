from flask import Flask, render_template, request, redirect
import mainmenu, flask

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template('index.html', mainMenuItems=mainmenu.items)

@app.route("/index.html")
def redirIndex():
    return redirect("/", 301)

@app.route("/sitemap")
def nav():
    return render_template("sitemap.html")
@app.route("/contact")
def contactMe():
    return render_template("contact.html")
@app.route("/school")
def school():
    return render_template("school/index.html")
@app.route("/coding")
def codie():
    return render_template("coding/index.html")
@app.route("/youtube")
def youtube():
    return render_template("youtube/index.html")
@app.route("/cr")
def clash():
    return render_template("cr/index.html")
@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

for i in ("general","eso","minecraft"):
    exec(f"from {i} import *")
    setup(app, flask)

@app.after_request
def add_header(r):#https://stackoverflow.com/questions/34066804/disabling-caching-in-flask
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 0 seconds.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

if __name__ == '__main__':
    app.run()

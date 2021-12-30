from flask import Flask, render_template, request, redirect, send_from_directory
import mainmenu, flask
from downloads import downloaddddddd
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
@app.route("/youtube")
def youtube():
    return render_template("youtube/index.html")
@app.route("/cr")
def clash():
    return render_template("cr/index.html")
@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

for i in ("school", "general","eso","minecraft", "coding"):
    exec(f"from {i} import *")
    setup(app, flask)
del setup

@app.route("/<path:static>")
async def get_static(static):
    return send_from_directory("static", path=static)

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
# Errors {{{
@app.errorhandler(404)
def error404(e):
    return render_template("error/error.html", code="HTTP-404",
                           description="""This page does not exist. You may try to find the page yourself by visiting either the <a href="/" class="textLinks">index </a>or the <a href="/sitemap" class="textLinks">sitemap</a>.
                           If you need help, please contact me <a href="/contact" class="textLinks">here</a>."""), 404
# }}}
app.register_blueprint(downloaddddddd, url_prefix="/downloads")
if __name__ == '__main__':
    app.run(host="0.0.0.0")

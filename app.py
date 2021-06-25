from flask import Flask, render_template, request
import mainmenu

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template('index.html', mainMenuItems=mainmenu.items)

@app.route("/sitemap")
def nav():
    return render_template("sitemap.html")
@app.route("/contact")
def contactMe():
    return render_template("contact.html")
@app.route("/minecraft")
def mc():
    return render_template("minecraft/index.html")
@app.route("/eso")
def eso():
    return render_template("eso/index.html")
@app.route("/school")
def school():
    return render_template("school/index.html")

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

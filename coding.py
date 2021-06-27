from flask import render_template
def coding():
    return render_template("coding/index.html")
def alphaportal():
    return render_template('coding/AlphaPortal.html')
def owsportal():
    return render_template('coding/OWSPortal.html')
def useless():
    return render_template('coding/useless.html')
def games():
    return render_template('coding/games.html')
def random():
    return render_template('coding/random.html')
def website():
    return render_template('coding/website.html')
def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"coding": "/coding", "alphaportal": "/coding/alpha/portal", "owsportal": "/coding/ows/portal",
             "useless": "/coding/useless", "games": "/coding/games", "random": "/coding/random", "website": "/coding/website"}
    for i in stuff:
        exec(f"{i} = app.route('{stuff[i]}')({i})")

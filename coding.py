def coding():
    return render_template("templates/coding/index.html")
def alphaportal():
    return render_template

def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"coding": "/coding", "alphaportal": "/coding/alpha/portal"}
    for i in stuff:
        exec(f"{i} = app.route('{stuff[i]}')({i})")

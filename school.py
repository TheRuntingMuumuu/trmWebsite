async def ivleague():
    return render_template("school/IV.html")

def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"ivleague": "/school/IV"}
    for i in stuff:
        exec(f"{i} = app.route('{stuff[i]}')({i})")

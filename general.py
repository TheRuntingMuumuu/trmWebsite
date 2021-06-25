def generalMain():
    return flask.render_template("general/index.html")
def generalMe():
    return flask.render_template("general/me.html")
def generalPC():
    return flask.render_template("general/pc.html")
def generalBrew():
    return flask.render_template("general/brew.html")

def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"generalMain": "/general", "generalMe": "/me", "generalPC": "/pc", "generalBrew": "/brew"}
    for i in stuff:
        exec(f"{i} = app.route('{stuff[i]}')({i})")

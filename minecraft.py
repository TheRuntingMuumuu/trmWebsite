def mcMain():
    return flask.render_template("minecraft/index.html")
def mcWorlds():
    return flask.render_template("minecraft/worlds.html")
def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"mcMain": "/minecraft", "mcWorlds": "/minecraft/worlds"}
    for i in stuff:
        exec(f"{i} = app.route('{stuff[i]}')({i})")

def eso():
    return flask.render_template("eso/index.html")
def esoTrials():
    return flask.render_template("eso/trial.html")
def esoToons():
    return flask.render_template("eso/toons.html")

def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"eso": "/eso", "esoTrials": "/eso/trial", "esoToons": "/eso/toons"}
    for i in stuff: #https://stackoverflow.com/questions/28741965/decorate-a-function-after-it-is-defined
        exec(f"{i} = app.route('{stuff[i]}')({i})")

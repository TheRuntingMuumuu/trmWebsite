def eso():
    return flask.render_template("eso/index.html")
def esoTrials():
    return flask.render_template("eso/trial.html")
def esoToons():
    return flask.render_template("eso/toons.html")
def esoForm():
    """Reminder for thetechrobo: Type Name Text"""
    form = [
        ['', '', '</p><p class="miniTitle">Your Username</p><p class="bodyText">'],
        ['name', 'user', 'This will be put online, so use an appropriate, safe one!<sub>Kids: Stay safe online. Don\'t give out your name.</sub>'],
        ['', '', '</p><p class="miniTitle">What is their role?</p><p class="bodyText">'],
        ['radio', 'role', 'Stamina DPS'],
        ['radio', 'role', 'Magicka DPS'],
        ['radio', 'role', 'Tank'],
        ['radio', 'role', 'Healer'],
        ['radio', 'role', 'Other (say down below)'],
        ['', '', '</p><p class="miniTitle">If you said "Other", what did you mean?</p><p class="bodyText">'],
        ['text', 'role_other', ''],
        ['', '', '</p><p class="miniTitle">Class</p><p class="bodyText">'],
        ['radio', 'class', 'Pyromancer'],
    ]
    return flask.render_template("eso/form.html", form=form)
def setup(app, flask):
    globals()['flask'] = flask
    stuff = {"eso": "/eso", "esoTrials": "/eso/trial", "esoToons": "/eso/toons", "esoForm": "/eso/form"}
    for i in stuff: #https://stackoverflow.com/questions/28741965/decorate-a-function-after-it-is-defined
        exec(f"{i} = app.route('{stuff[i]}')({i})")

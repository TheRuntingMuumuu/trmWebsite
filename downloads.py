import flask
downloaddddddd = flask.Blueprint('downloaddddddd',__name__)
@downloaddddddd.route("/1old/<path:name>") # https://stackoverflow.com/questions/50529779/passing-arguments-to-api-created-by-flask-in-python and https://github.com/pallets/flask/discussions/4177
def downloadstuff(name, runByErrorHandler=False):
    path = name
    print("hi")
    if runByErrorHandler is True:
        return flask.redirect(f"{path}/index.html", 301)
    return flask.send_from_directory("downloads/1old", filename=path)
@downloaddddddd.errorhandler(404)
def errorDownloadStuff404(e):
    if flask.request.view_args['name'].endswith('html'):
        import app
        return app.error404(e)
    return downloadstuff(flask.request.view_args['name'], True)


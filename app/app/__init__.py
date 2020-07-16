from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(test_config=None):
    app = Flask(__name__)
    if test_config == None:
        app.config.from_object('app.config.Config')
    else:
        app.config.update(test_config)

    db.init_app(app)
    with app.app_context():
        from app.cities import cities_bp
        app.register_blueprint(cities_bp, url_prefix='/cities')


    return app


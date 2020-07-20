from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt import JWT, jwt_required, current_identity


db = SQLAlchemy()
def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    app.secret_key = "zhang"
    db.init_app(app)
    with app.app_context():
        from app.cities import cities_bp
        from app.index import index_bp
        app.register_blueprint(index_bp, url_prefix="/")
        app.register_blueprint(cities_bp, url_prefix='/cities')
        from app.auth import authenicate, identity
        jwt = JWT(app, authenicate, identity)



    return app


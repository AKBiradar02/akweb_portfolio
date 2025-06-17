# backend/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from .routes import main_routes

db = SQLAlchemy()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'hardcoded-secret-key'
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://akuser:PJ7aqcVsXCRn4txujMIF7VM8Yw9ObuYw@dpg-d18mdv8gjchc739ahhq0-a/akwebdb"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = 'super-secret-admin-token'

    db.init_app(app)
    CORS(app)
    jwt.init_app(app)

    app.register_blueprint(main_routes)

    with app.app_context():
        db.create_all()

    return app

from flask import Flask
from .config import Config
from .extensions import db, jwt, cors  # If extensions are in a separate file


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)

    from .routes import main_routes
    app.register_blueprint(main_routes)

    with app.app_context():
        db.create_all()

    return app

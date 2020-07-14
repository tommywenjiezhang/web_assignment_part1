from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))


class Config:
    """Set Flask configuration from .env file."""

    # General Config
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
    print(SQLALCHEMY_DATABASE_URI)
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False

if __name__ == "__main__":
    print("base dir is " + basedir)
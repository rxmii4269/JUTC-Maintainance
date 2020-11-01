import os
from os.path import dirname
from flask import Flask
from flask_login import LoginManager
from dotenv import load_dotenv
from flask.helpers import url_for
from flask_sqlalchemy import SQLAlchemy
import sass

APP_ROOT = os.path.join(os.path.dirname(__file__),'..')
dotenv_path = os.path.join(APP_ROOT,'.env')
load_dotenv(dotenv_path=dotenv_path)


app = Flask(__name__)

app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = os.environ['TEMPLATES_AUTO_RELOAD']
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['DEBUG'] = os.environ['DEBUG']
app.config['FLASK_ENV'] = os.environ['FLASK_ENV']
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.environ['SQLALCHEMY_TRACK_MODIFICATIONS']

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


app.config.from_object(__name__)
sass.compile(dirname=(os.path.join(APP_ROOT,'app/assets/scss'),os.path.join(APP_ROOT,'app/static/css')), output_style='compressed')



from app import views




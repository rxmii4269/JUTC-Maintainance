import os
from os.path import dirname
from flask import Flask
from dotenv import load_dotenv
from flask.helpers import url_for
import sass


APP_ROOT = os.path.join(os.path.dirname(__file__),'..')
dotenv_path = os.path.join(APP_ROOT,'.env')
load_dotenv(dotenv_path=dotenv_path)


app = Flask(__name__)

app.config.from_object(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = os.environ['TEMPLATES_AUTO_RELOAD']
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['DEBUG'] = os.environ['DEBUG']
app.config['FLASK_ENV'] = os.environ['FLASK_ENV']
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']


sass.compile(dirname=(os.path.join(APP_ROOT,'app/assets/scss'),os.path.join(APP_ROOT,'app/static/css')), output_style='compressed')



from app import views




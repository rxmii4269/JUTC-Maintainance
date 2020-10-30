import os
from flask import Flask
from dotenv import load_dotenv



APP_ROOT = os.path.join(os.path.dirname(__file__),'..')
dotenv_path = os.path.join(APP_ROOT,'.env')
load_dotenv(dotenv_path=dotenv_path)


app = Flask(__name__)

app.config.from_object(__name__)

from app import views




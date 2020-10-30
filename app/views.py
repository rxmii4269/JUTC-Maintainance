from os import environ
from flask import flash, redirect, render_template, request, url_for
from werkzeug.utils import secure_filename

from app import app


@app.route('/')
def home():
    return 'HELLO'


from os import environ
from flask import flash, redirect, render_template, request, url_for
from werkzeug.utils import secure_filename

from app import app


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    return 'login page not ready'

    

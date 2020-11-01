from os import environ
from flask import flash, redirect, render_template, request, url_for
from werkzeug.utils import secure_filename
from werkzeug.security import check_password_hash
from flask_login import login_user, logout_user, current_user, login_required

from app import app, db, login_manager
from app.forms import LoginForm
from app.models import UserProfile

 
@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/')
@app.route('/login',methods=["GET","POST"])
def login():
    form = LoginForm()
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    if request.method == "POST" and form.validate_on_submit():
        username = form.username.data
        password = form.password.data 
        user = UserProfile.query.filter_by(username=username).first()

        if user is not None and check_password_hash(user.password,password):

            login_user(user=user)


            return redirect(url_for('dashboard'))

        else:
            flash('Username or Password is incorrect','danger')
    
    return render_template('index.html',form=form)


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out','success')
    return redirect(url_for('login'))



@login_manager.user_loader 
def load_user(id):
    return UserProfile.query.get(int(id))


@app.route('/<file_name>.txt')
def send_text_file(file_name):
    """Send your static text file."""
    file_dot_text = file_name + '.txt'
    return app.send_static_file(file_dot_text)


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


    

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from flask_ckeditor import CKEditor


app = Flask(__name__)
app.config['SECRET_KEY'] = '0c014f263595692403877a67076c1004'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
ckeditor = CKEditor(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'




# app.config['MAIL_DRIVER']='sendmail'
# app.config['MAIL_ADDRESS']=   'smtp.gmail.com'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_DOMAIN']='gmail.com'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_AUTHENTICATION'] = 'PLAIN'
app.config['MAIL_ENABLE_STARTTLS_AUTO']= True
app.config['MAIL_USERNAME'] = '5u6i9.ui@gmail.com'
app.config['MAIL_PASSWORD'] = '983427sudip'
mail = Mail(app)

     
from project import main1
from project import util1

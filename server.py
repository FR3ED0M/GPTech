import mysql.connector
from flask import Flask
app = Flask(__name__)

cnx = mysql.connector.connect(user='nativeuser', 
                                password='password', 
                                host='127.0.0.1', 
                                database='gp',
                                auth_plugin='mysql_native_password')

@app.route('/login')
def login():
    pass

@app.route('/new_user')
def new_user():
    pass

@app.route('/location_retrieve')
def location():
    pass


@app.route('/location_pass')
def location_pass():
    pass


app.run()



    




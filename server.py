import mysql.connector
from flask import Flask, request
app = Flask(__name__)

cnx = mysql.connector.connect(user='nativeuser', 
                                password='password', 
                                host='127.0.0.1', 
                                database='gp',
                                auth_plugin='mysql_native_password')

@app.route('/login')
def login():
    pass

@app.route('/new_user', methods = ['POST'])
def new_user():
    username = request.args.get('username')
    password = request.args.get('password')
    return 'SUCCESS'

@app.route('/location_retrieve', methods = ['GET'])
def location():
    x = request.args.get('longitude')
    y = request.args.get('latitude')
    pass


@app.route('/location_pass')
def location_pass():
    pass

if __name__ == '__main__':
    app.run()

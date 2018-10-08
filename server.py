import mysql.connector
from flask import Flask
app = Flask(__name__)

cnx = mysql.connector.connect(user='nativeuser', 
                                password='password', 
                                host='127.0.0.1', 
                                database='gp',
                                auth_plugin='mysql_native_password')

@app.route('/')
def hello():
    return 'Hello, World!'




app.run()



    




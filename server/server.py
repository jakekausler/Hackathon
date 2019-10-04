from flask import Flask, send_from_directory
from flask_restful import Resource, Api

import mysql.connector

import os
import argparse

WEB_ROOT = os.environ['WEB_ROOT']
DATABASE = os.environ['DATABASE']
DB_USER  = os.environ['DB_USER']
DB_PASS  = os.environ['DB_PASS']

app = Flask(__name__)
api = Api(app)

db = mysql.connector.connect(
    host="localhost",
    database=DATABASE,
    user=DB_USER,
    passwd=DB_PASS
)

class Index(Resource):
    def get(self):
        print(os.listdir(WEB_ROOT))
        return send_from_directory(WEB_ROOT, "index.html")

class WebFile(Resource):
    def get(self, filename):
        return send_from_directory(WEB_ROOT, filename)

api.add_resource(Index, '/')
api.add_resource(WebFile, '/web/<string:filename>')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="The Hackathon Project")
    parser.add_argument("-H", "--host", help="host on which to run the software")
    parser.add_argument("-P", "--port", help="port on which to run the software")
    args = parser.parse_args()
    app.run(debug=True, host=args.host, port=args.port)

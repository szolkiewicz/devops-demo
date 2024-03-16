from flask import Flask, jsonify, request
import jwt
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
SECRET = os.environ.get("JWT_SECRET") or "secret"

@app.route('/up', methods=['GET'])
def up():
    return jsonify(server="up"), 200

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username == 'admin' and password == 'admin':
        payload = {"email": "admin@local.xyz"}
        access_token = jwt.encode(payload, SECRET, algorithm="HS256")
        return jsonify(access_token=access_token), 201
    else:
        return jsonify({"msg": "Bad username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)

# Test:
# curl -X POST -H "Content-Type: application/json" -d '{"username":"admin", "password":"admin"}' http://localhost:5000/login

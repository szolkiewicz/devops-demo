from flask import Flask, jsonify, request
import jwt
import os
from functools import wraps

from flask_cors import CORS
from db import get_users, create_user, read_user, update_user, delete_user

app = Flask(__name__)
CORS(app)
SECRET = os.environ.get("JWT_SECRET") or "secret"

def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]

        if not token:
            return jsonify({'message': 'Token is missing!'}), 403

        try:
            data = jwt.decode(token, SECRET, algorithms=["HS256"])
            current_user = data['email']
        except:
            return jsonify({'message': 'Token is invalid or expired!'}), 401

        return f(*args, **kwargs)

    return decorated_function


@app.route('/up', methods=['GET'])
def up():
    return jsonify(server="up"), 200

@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if email == 'admin' and password == 'admin':
        payload = {"email": "admin@local.xyz"}
        token = jwt.encode(payload, SECRET, algorithm="HS256")
        return jsonify(token=token, user=email, roles=['dummy', 'admin'], msg="Login successfull"), 201
    else:
        user_from_db = read_user(email=email)
        if user_from_db and user_from_db.get("password") == password:
            payload = {"email": email}
            token = jwt.encode(payload, SECRET, algorithm="HS256")
            return jsonify(token=token, user=email, roles=user_from_db.get("roles"), msg="Login successfull"), 201
        else:
            return jsonify({"msg": "Bad email or password"}), 401

@app.route('/users', methods=['GET'])
@token_required
def fetch_all_users():
    users = get_users()
    return jsonify(users), 200


@app.route('/users', methods=['POST'])
def create():
    user_data = request.json
    user_id = create_user(user_data)
    if user_id == "User with this email already exists.":
        return jsonify({"error": user_id}), 400
    return jsonify({"user_id": user_id}), 201

@app.route('/users/<user_id>', methods=['GET'])
def read(user_id):
    user = read_user(user_id=user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user), 200

@app.route('/users/<user_id>', methods=['PUT'])
def update(user_id):
    new_user_data = request.json
    updated_user = update_user(user_id, new_user_data)
    if not updated_user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(updated_user), 200

@app.route('/users/<user_id>', methods=['DELETE'])
def delete(user_id):
    result = delete_user(user_id)
    if result.deleted_count == 0:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"message": "User deleted successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")

# Test:
# curl -X POST -H "Content-Type: application/json" -d '{"email":"admin", "password":"admin"}' http://localhost:5000/login
# curl http://localhost:5000/users
# curl -X POST -H "Content-Type: application/json" -d '{"email":"newemail@example.com", "password":"bazinga"}' http://localhost:5000/login

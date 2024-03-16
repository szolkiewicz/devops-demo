import base64
import json
import hmac
import hashlib


def _base64_encode(data):
    return base64.urlsafe_b64encode(json.dumps(data).encode()).decode().replace('=', '')

def gen_jwt(payload, secret=""):
    secret = secret or 'your_secret_key'
    header = {
        "alg": "HS256",
        "typ": "JWT"
    }

    encoded_header = _base64_encode(header)
    encoded_payload = _base64_encode(payload)

    signature_base = f"{encoded_header}.{encoded_payload}"
    signature = hmac.new(secret.encode(), signature_base.encode(), hashlib.sha256).digest()
    encoded_signature = base64.urlsafe_b64encode(signature).decode().replace('=', '')

    jwt_token = f"{encoded_header}.{encoded_payload}.{encoded_signature}"
    return jwt_token

if __name__ == "__main__":
    payload = {
        "email": "admin",
        "name": "Admin User"
    }
    gen_jwt(payload)

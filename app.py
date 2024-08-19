# app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = {
        'message': 'Hello from Stunning-Octo-Chainsaw!',
        'status': 'success'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

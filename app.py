from flask import Flask, render_template
from controllers import routes

app = Flask(__name__, template_folder='views')

routes.init_app(app)

if __name__ == '__main__':
   app.run(host='localhost', port=7000, debug=True)
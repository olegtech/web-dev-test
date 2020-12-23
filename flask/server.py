from flask import Flask, render_template, url_for
app = Flask(__name__)
print(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/works.html')
# def works():
#     return render_template('works.html')    
# 
# @app.route('/about.html')
# def about():
#     return render_template('about.html')
# 
# @app.route('/contact.html')
# def contact():
#     return render_template('contact.html')

@app.route('/<string:page_name>')
def page(page_name):
    return render_template(page_name)        
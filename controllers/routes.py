from flask import render_template


def init_app(app):
  
  @app.route('/')

  def home():
   
    return render_template('home.html')
  
  @app.route('/login')
  
  def login():

    return render_template('login.html')
  
  @app.route('/sistema')
  
  def sistema():

    return render_template('sistema.html')
  
  @app.route('/admin')
  
  def admin():

    return render_template('admin.html')
  
  @app.route('/aluno')
  
  def aluno():

    return render_template('aluno.html')
  
  
  
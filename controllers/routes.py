from flask import render_template


def init_app(app):
  
  @app.route('/')

  def home():
   
    return render_template('landingPage.html')
  
  @app.route('/login')
  
  def login():

    return render_template('login.html')
  
  @app.route('/sistema')
  
  def sistema():

    return render_template('sistema.html')
  
  @app.route('/docente')
  
  def docente():

    return render_template('sistemaDocente.html')
  
  @app.route('/graduacao')
  
  def graduacao():

    return render_template('sistemaGraduacao.html')
  
  
  
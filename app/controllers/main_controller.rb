# encoding: utf-8
# frozen_string_literal: true

# This is the MainController class
class MainController < ApplicationController
  skip_before_filter :authenticate, only: %i[index confirm_login]

  def index
    render '/login/selectra', layout: 'login'
  end

  def confirm_login
    if !params[:email].blank? && !params[:password].blank?
      redirect_to action: :selectra, controller: :main
      # md5_of_password = Digest::MD5.hexdigest(params[:password])
      # user = User.find_by_email(params[:email])
      # if user && user.password == md5_of_password
      #   session[:email] = user.email
      #   redirect_to action: :selectra, controller: :main
      # else
      #   flash.alert = 'El usuario y/o la contrasena son incorrectos.'
      #   flash[:status] = 'danger'
      #   redirect_to main_index_path
      # end
    else
      flash.alert = 'Es necesario rellenar los campos de usuario y contraseña.'
      flash[:status] = 'danger'
      redirect_to main_index_path
    end
  end

  def selectra; end

  def logout
    reset_session
    flash.alert = 'El usuario ha salido del sistema correctamente.'
    flash[:status] = 'success'
    redirect_to main_index_path
  end
end

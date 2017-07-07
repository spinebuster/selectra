# encoding: utf-8
# frozen_string_literal: true

# This is the main ApplicationController class
class ApplicationController < ActionController::Base
  include Concerns::ActsAsJsoner

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  before_filter :authenticate

  protected

  def authenticate
    return true
    # return true if User.find_by_email(session[:user].email)
    flash.alert = 'No existe una sesión asociada a este usuario.'
    flash[:status] = 'danger'
    redirect_to main_index_path
  end
end

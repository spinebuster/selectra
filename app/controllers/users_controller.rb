# encoding: utf-8
# frozen_string_literal: true

# This is the UsersController class
class UsersController < ApplicationController
  def index
    json_emitter ::Services::Users::Index
  end

  def create
    json_emitter ::Services::Users::Create
  end

  def show
    json_emitter ::Services::Users::Show
  end

  def update
    json_emitter ::Services::Users::Update
  end

  def destroy
    json_emitter ::Services::Users::Destroy
  end

  def permit_params_create(params)
    params.permit(
      [
        { user: user_parmit_params },
        :format
      ]
    )
  end

  def permit_params_update(params)
    params.permit(
      [
        { user: user_parmit_params },
        :id, :format
      ]
    )
  end

  protected

  def user_parmit_params
    %w[
      name surname email password active
    ]
  end
end

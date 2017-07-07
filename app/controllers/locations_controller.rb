# encoding: utf-8
# frozen_string_literal: true

# This is the LocationsController class
class LocationsController < ApplicationController
  def index
    json_emitter ::Services::Locations::Index
  end

  def create
    json_emitter ::Services::Locations::Create
  end

  def show
    json_emitter ::Services::Locations::Show
  end

  def update
    json_emitter ::Services::Locations::Update
  end

  def destroy
    json_emitter ::Services::Locations::Destroy
  end

  def permit_params_create(params)
    params.permit(location: %i[name open_time close_time])
  end

  def permit_params_update(params)
    params.permit([:id, location: %i[name open_time close_time]])
  end

  protected

  def current_power
    Powers::Network.new(current_user_session)
  end
end

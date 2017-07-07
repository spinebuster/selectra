# encoding: utf-8
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe LocationsController, type: :routing do
  it 'recognizes and generates a route for index' do
    expect(
      get: '/locations.json'
    ).to route_to(
      controller: 'locations',
      action: 'index',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for create' do
    expect(
      post: '/locations.json'
    ).to route_to(
      controller: 'locations',
      action: 'create',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for show' do
    expect(
      get: '/locations/1.json'
    ).to route_to(
      controller: 'locations',
      action: 'show',
      id: '1',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for update' do
    expect(
      put: '/locations/1.json'
    ).to route_to(
      controller: 'locations',
      action: 'update',
      id: '1',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for destroy' do
    expect(
      delete: '/locations/1.json'
    ).to route_to(
      controller: 'locations',
      action: 'destroy',
      id: '1',
      format: 'json'
    )
  end
end

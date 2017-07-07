# encoding: utf-8
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UsersController, type: :routing do
  it 'recognizes and generates a route for index' do
    expect(
      get: '/users.json'
    ).to route_to(
      controller: 'users',
      action: 'index',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for create' do
    expect(
      post: '/users.json'
    ).to route_to(
      controller: 'users',
      action: 'create',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for show' do
    expect(
      get: '/users/1.json'
    ).to route_to(
      controller: 'users',
      action: 'show',
      id: '1',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for update' do
    expect(
      put: '/users/1.json'
    ).to route_to(
      controller: 'users',
      action: 'update',
      id: '1',
      format: 'json'
    )
  end

  it 'recognizes and generates a route for destroy' do
    expect(
      delete: '/users/1.json'
    ).to route_to(
      controller: 'users',
      action: 'destroy',
      id: '1',
      format: 'json'
    )
  end
end

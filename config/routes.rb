# encoding: utf-8
# frozen_string_literal: true

Rails.application.routes.draw do
  get  ''                    => 'main#index', as: :main_index
  post '/main/confirm_login' => 'main#confirm_login'
  get  '/salir'              => 'main#salir'

  get  '/selectra.html' => 'main#selectra'

  resources :locations, only: %i[index create show update destroy]
  resources :users, only: %i[index create show update destroy]
end

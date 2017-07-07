# encoding: utf-8
# frozen_string_literal: true

module Services
  # The main ApplicationService Class
  # every service should inherit this class
  class ApplicationService
    include Services::Concerns::ActsAsTemplate
  end
end

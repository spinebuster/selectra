# encoding: utf-8
# frozen_string_literal: true

module Services
  module Locations
    # This is the Networks create service
    class Create < Services::ApplicationService
      def initialize(params)
        @params = params
      end

      def execute!
        apply_api_template(Location.create!(@params[:location]))
      end
    end
  end
end

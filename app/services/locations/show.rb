# encoding: utf-8
# frozen_string_literal: true

module Services
  module Locations
    # This is the Networks show service
    class Show < Services::ApplicationService
      def initialize(params)
        @params = params
      end

      def execute!
        apply_api_template(Location.find(@params[:id]))
      end
    end
  end
end

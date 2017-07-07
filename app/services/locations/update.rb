# encoding: utf-8
# frozen_string_literal: true

module Services
  module Locations
    # This is the Networks update service
    class Update < Services::ApplicationService
      def initialize(params)
        @params = params
      end

      def execute!
        location = Location.find(@params[:id])
        location.update_attributes!(@params[:location])
        apply_api_template(location)
      end
    end
  end
end

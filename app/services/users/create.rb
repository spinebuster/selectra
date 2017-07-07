# encoding: utf-8
# frozen_string_literal: true

module Services
  module Users
    # This is the Networks create service
    class Create < Services::ApplicationService
      def initialize(params)
        @params = params
      end

      def execute!
        apply_api_template(User.create!(@params[:user]))
      end
    end
  end
end

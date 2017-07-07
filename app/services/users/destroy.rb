# encoding: utf-8
# frozen_string_literal: true

module Services
  module Users
    # This is the Networks destroy service
    class Destroy < Services::ApplicationService
      def initialize(params)
        @params = params
      end

      def execute!
        user = User.find(@params[:id])
        user.destroy
        apply_api_template(user)
      end
    end
  end
end

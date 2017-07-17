# encoding: utf-8
# frozen_string_literal: true

module Services
  module Locations
    # This is the Networks index service
    class Index < Services::ApplicationService
      include Services::Concerns::ActsAsIndexable

      def initialize(params)
        @params = params
      end

      def execute!
        scope = Location
        scope = scope.with_name(@params[:name]) unless @params[:name].blank?
        indexable(scope)
      end
    end
  end
end

# encoding: utf-8
# frozen_string_literal: true

module Services
  module Users
    # This is the Networks index service
    class Index < Services::ApplicationService
      include Services::Concerns::ActsAsIndexable

      def initialize(params)
        @params = params
      end

      def execute!
        indexable(User)
      end
    end
  end
end

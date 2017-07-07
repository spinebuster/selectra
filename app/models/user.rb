# encoding: utf-8
# frozen_string_literal: true

# This is the ActiveRecord model of an user
class User < ActiveRecord::Base
  EMAIL_FORMAT = Authlogic::Regex.email

  acts_as_api
  has_paper_trail ignore: %w[last_request_at perishable_token]

  # Attributes
  assignable_values_for :active, default: :false do
    [true, false]
  end

  # Validations
  validates :name, presence: true
  validates :surname, presence: true
  validates :email, presence: true, format: {
    with: EMAIL_FORMAT
  }, uniqueness: true
  validates :password, presence: true

  # API Templates
  api_accessible :base do |template|
    %i[
      id name surname email
    ].each do |field|
      template.add field
    end
  end
end

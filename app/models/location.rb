# encoding: utf-8
# frozen_string_literal: true

# This is the ActiveRecord model of an location
class Location < ActiveRecord::Base
  acts_as_api
  has_paper_trail

  # Validations
  validates :name, :open_time, :close_time, presence: true

  # API Templates
  api_accessible :base do |template|
    %i[
      id name open_time close_time
    ].each do |field|
      template.add field
    end
  end
end

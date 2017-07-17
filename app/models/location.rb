# encoding: utf-8
# frozen_string_literal: true

# This is the ActiveRecord model of an location
class Location < ActiveRecord::Base
  acts_as_api
  has_paper_trail

  # Validations
  validates :name, :open_time, :close_time, presence: true
  validate :valid_dates?

  # API Templates
  api_accessible :base do |template|
    %i[
      id name open_time close_time
    ].each do |field|
      template.add field
    end
  end

  # Scopes
  class << self
    def with_name(name)
      where(
        'name LIKE :name', name: "%#{name}%"
      )
    end
  end

  private

  def valid_dates?
    return if open_time <= close_time
    errors.add(:times, 'Las fechas de apertura y cierre no son correctas')
  end
end

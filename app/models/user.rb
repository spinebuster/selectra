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
  assignable_values_for :can_delete, default: :false do
    [true, false]
  end

  # Callbaks
  before_save :create_hashed_password, if: :password_changed?
  before_destroy :validate_deletion

  # Validations
  validates :name, presence: true
  validates :email, presence: true, format: {
    with: EMAIL_FORMAT
  }, uniqueness: true
  validates :password, presence: true

  # API Templates
  api_accessible :base do |template|
    %i[
      id name surname email active can_delete
    ].each do |field|
      template.add field
    end
  end

  api_accessible :list do |template|
    %i[
      id name email active can_delete
    ].each do |field|
      template.add field
    end
  end

  api_accessible :with_errors, extend: :list do |template|
    template.add :errors
  end

  # Scopes
  class << self
    def with_name(name)
      where(
        'name LIKE :name', name: "%#{name}%"
      )
    end

    def with_email(email)
      where(
        'email LIKE :email', email: "%#{email}%"
      )
    end

    def actives(active)
      where(active: active.to_boolean)
    end
  end

  def create_hashed_password
    self.password = Digest::MD5.hexdigest(password)
  end

  def validate_deletion
    return if can_delete?
    errors.add(:can_delete, 'El usuario no puede ser borrado')

    # this will prevent the object from getting destroyed
    false
  end
end

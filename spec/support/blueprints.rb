# encoding: utf-8
# frozen_string_literal: true

require 'machinist/active_record'

Location.blueprint do
  name       { Faker::Name.name }
  open_time  { Faker::Date.between(2.days.ago, Date.today) }
  close_time { Faker::Date.between(2.days.ago, Date.today) }
end

User.blueprint do
  name     { Faker::Name.name }
  surname  { Faker::Lorem.characters(250) }
  email    { Faker::Internet.email }
  password { Faker::Lorem.characters(50) }
  active   { true }
  delete   { false }
end

User.blueprint(:invalid) do
  email { nil }
  password { Faker::Lorem.characters(50) }
end

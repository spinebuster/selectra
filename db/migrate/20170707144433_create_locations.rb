# encoding: utf-8
# frozen_string_literal: true

# This migration creates the `locations` table
class CreateLocations < ActiveRecord::Migration
  def change
    create_table(
      :locations
    ) do |t|
      t.string :name, null: false
      t.datetime :open_time, null: false
      t.datetime :close_time, null: false

      t.timestamps null: false
    end
  end
end

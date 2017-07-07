# encoding: utf-8
# frozen_string_literal: true

# This migration creates the `users` table
class CreateUsers < ActiveRecord::Migration
  def change
    create_table(
      :users
    ) do |t|
      t.string :name, null: false
      t.string :surname
      t.string :email, null: false
      t.string :password, null: false
      t.boolean :active, default: true

      t.timestamps null: false
    end

    add_index :users, :codexp
    add_index :users, %i[name surname]
    add_index :users, :email, unique: true
  end
end

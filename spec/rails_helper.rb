# encoding: utf-8
# frozen_string_literal: true

if ENV['RAILS_ENV'] == 'test'
  require 'simplecov'
  SimpleCov.start
end

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
if Rails.env.production?
  abort('The Rails environment is running in production mode!')
end
require 'spec_helper'
require 'rspec/rails'

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
#
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# Checks for pending migration and applies them before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = false

  config.before(:suite) do
    # pre_count checks if a table is empty before it bothers truncating:
    # should speed specs
    DatabaseCleaner.strategy = :truncation, { pre_count: true }

    # Patch database_cleaner because of this problem:
    # https://github.com/DatabaseCleaner/database_cleaner/issues/293
    #
    # If there's data in the dev database, it triggers an unneeded truncate in
    # the test db for that table.
    # This patch focuses on just the test database.
    #
    module DatabaseCleaner
      module ConnectionAdapters
        module AbstractMysqlAdapter
          private

          def has_been_used?(table)
            if has_rows?(table)
              true
            else
              # Patch for MysqlAdapter with ActiveRecord 3.2.7 later
              # select_value("SELECT 1") #=> "1"
              select_value(<<-SQL).to_i > 1 # returns nil if not present
                SELECT Auto_increment
                FROM information_schema.tables
                WHERE table_name='#{table}'
                AND table_schema='#{current_database}';
              SQL
            end
          end
        end
      end
    end
  end

  config.before(:each) do
    # Asegurarse de que PaperTrail esta activo
    PaperTrail.enabled = true

    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.start
  end

  # Transactions doesn't work with Capybara test so we need truncation
  config.before(:each, js: true) do
    DatabaseCleaner.strategy = :truncation
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")
end

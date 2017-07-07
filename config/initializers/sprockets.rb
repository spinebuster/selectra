#require 'sprockets/ember_handlebars'
Dir[File.join(Rails.root, "lib", "sprockets", "*.rb")].each {|l| require l }

#Rails.application.assets.register_engine 'hjs', EmberHandlebars
Rails.application.assets.register_engine 'hjs', JstHandlebars

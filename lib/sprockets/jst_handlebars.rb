# encoding: utf-8
# frozen_string_literal: true

require 'tilt'
require 'json'

# This is the JstHandlebars class
class JstHandlebars < Tilt::Template
  def self.default_mime_type
    'application/javascript'
  end

  def self.default_namespace
    'this.JST'
  end

  def prepare
    @namespace = self.class.default_namespace
  end

  attr_reader :namespace

  def evaluate(scope, _locals, _block)
    <<-JST
      (function() { #{namespace} || (#{namespace} = {}); #{namespace}['#{scope.logical_path}'] = Handlebars.compile(#{data.to_json});
      }).call(this);
    JST
  end

  protected

  def indent(string)
    string.gsub(/$(.)/m, '\\1  ').strip
  end
end

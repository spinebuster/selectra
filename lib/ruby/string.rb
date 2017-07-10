# encoding: utf-8
# frozen_string_literal: true

# This is the String class
class String
  def to_boolean(nil_value = false)
    return nil_value if size.zero?
    to_s !~ /no|false|0|off/i
  end
end

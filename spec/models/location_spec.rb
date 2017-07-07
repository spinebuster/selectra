# encoding: utf-8
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'definition' do
    let(:location) { Location.make! }
    subject { location }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:open_time) }
    it { is_expected.to validate_presence_of(:close_time) }
  end # definition
end

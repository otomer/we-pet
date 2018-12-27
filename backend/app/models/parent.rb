# == Schema Information
#
# Table name: parents
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Parent < ApplicationRecord
  has_many :children

  validates :name, presence: true
  validates :name, uniqueness: true
end

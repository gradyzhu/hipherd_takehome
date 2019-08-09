class Todo < ApplicationRecord
  validates :body, presence: true
  validates_inclusion_of :complete, in: [true, false]
end
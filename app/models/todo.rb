class Todo < ApplicationRecord
  validates :body, presence: true
  validates :complete, presence: true
end
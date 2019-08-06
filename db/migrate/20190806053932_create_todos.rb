class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :body, null: false
      t.boolean :complete, null: false
    end
  end
end

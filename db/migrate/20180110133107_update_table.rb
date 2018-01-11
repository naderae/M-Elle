class UpdateTable < ActiveRecord::Migration[5.1]
  def change
    change_column :clothings, :size, :string
    change_column :clothings, :sale, :string
    change_column :clothings, :new_collection, :string
  end
end

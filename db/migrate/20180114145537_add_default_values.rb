class AddDefaultValues < ActiveRecord::Migration[5.1]
  def change
    change_column :clothings, :quantity_added, :integer, :default => 0
    change_column :clothings, :quantity_sold, :integer, :default => 0
  end
end

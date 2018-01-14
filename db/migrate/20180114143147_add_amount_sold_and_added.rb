class AddAmountSoldAndAdded < ActiveRecord::Migration[5.1]
  def change
    add_column :clothings, :quantity_sold, :integer
    add_column :clothings, :quantity_added, :integer
  end
end

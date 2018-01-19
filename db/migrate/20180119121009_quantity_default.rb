class QuantityDefault < ActiveRecord::Migration[5.1]
  def change
    change_column :clothings, :quantity, :integer, :default => 0
  end
end

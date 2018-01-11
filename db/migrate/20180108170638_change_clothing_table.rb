class ChangeClothingTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :clothing, :clothings
  end
end

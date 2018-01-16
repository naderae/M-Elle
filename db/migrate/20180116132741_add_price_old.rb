class AddPriceOld < ActiveRecord::Migration[5.1]
  def change
    add_column :clothings, :price_old, :integer
  end
end

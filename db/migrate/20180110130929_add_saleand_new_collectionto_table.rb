class AddSaleandNewCollectiontoTable < ActiveRecord::Migration[5.1]
  def change
    add_column :clothings, :sale, :boolean
    add_column :clothings, :new_collection, :boolean
  end
end

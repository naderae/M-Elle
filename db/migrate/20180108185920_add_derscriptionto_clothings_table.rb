class AddDerscriptiontoClothingsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :clothings, :description, :string
  end
end

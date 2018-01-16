class AddImagesToClothings < ActiveRecord::Migration[5.1]
  def change
    add_column :clothings, :images, :string
  end
end

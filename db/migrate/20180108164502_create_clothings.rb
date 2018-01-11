class CreateClothings < ActiveRecord::Migration[5.1]
  def change
    create_table :clothings do |t|
      t.string :type
      t.string :color
      t.integer :size
      t.integer :price
      t.integer :amount
      t.text :description 

      t.timestamps
    end
  end
end

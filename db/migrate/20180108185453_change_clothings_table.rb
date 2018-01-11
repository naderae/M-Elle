class ChangeClothingsTable < ActiveRecord::Migration[5.1]
    def change
      change_table :clothings do |t|
        t.rename :amount, :quantity
      end
    end
end

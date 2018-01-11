class ChangeTypeTocategory < ActiveRecord::Migration[5.1]
  def change
    change_table :clothings do |t|
      t.rename :type, :category
    end
  end
end

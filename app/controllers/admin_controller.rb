class AdminController < ApplicationController

  def index
    @clothings = Clothing.all
    @clothing_groups = Clothing.all.group_by(&:category)



    @bodysuits = Clothing.where("category = 'Bodysuits'")
    @dresses = Clothing.where("category = 'Dresses'")
    @jackets = Clothing.where("category = 'Jackets'")
    @jeans = Clothing.where("category = 'Jeans'")
    @pants = Clothing.where("category = 'Pants'")
    @jumpsuits = Clothing.where("category = 'Jumpsuits'")
    @leggings = Clothing.where("category = 'Leggings'")
    @outfits = Clothing.where("category = 'Outfits'")
    @skirts = Clothing.where("category = 'Skirts'")
    @tops = Clothing.where("category = 'Tops'")
    @tracksuits = Clothing.where("category = 'Tracksuits'")
  end


  def display
    
    @items = Clothing.where(category: params[:category])
  end



end

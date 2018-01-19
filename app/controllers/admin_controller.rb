class AdminController < ApplicationController

  before_action :authenticate_user!


  def index
    @clothings = Clothing.all
    @clothing_groups = Clothing.all.group_by(&:category)
  end


  def display
    @items = Clothing.where(category: params[:category])
  end





end

class ClothingsController < ApplicationController

def index
  @clothings = Clothing.all

end


def show
  @clothing = Clothing.find(params[:id])
end

def new
  @clothing = Clothing.new
end

def create
  @clothing = Clothing.new(clothing_params)
  if @clothing.save
    redirect_to '/clothings'
  else
    render :new
  end
end


def edit
  @clothing = Clothing.find(params[:id])
end

def update
  @clothing = Clothing.find(params[:id])
  @clothing.update_attributes!(clothing_params)
  @clothing.quantity_sold = @clothing.quantity_sold + params[:clothing][:quantity_sold].to_f
  @clothing.quantity_added = @clothing.quantity_added + params[:clothing][:quantity_added].to_f

  if @clothing.save
      flash[:notice] = "You have successfuly updated a piece."
      redirect_to '/clothings'
    else
      render '/admins'
    end

end

def destroy
  @clothing = Clothing.find(params[:id])
  @clothing.destroy
  redirect_to '/clothings'

end


def retrieve
  @clothings = Clothing.where(category: params[:category])
  



  respond_to do |format|
        format.js {}
  end

end


private
  def clothing_params
    params.require(:clothing).permit(:category, :color, :size, :price, :quantity, :description, :image, :sale, :new_collection)
  end

end

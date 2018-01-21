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
  # @clothing.images[0].url
  # @clothing.images[0].current_path
  # @clothing.images[0].identifier
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
    redirect_to admins_path
  else
    render admin_path
  end

end

def destroy
  @clothing = Clothing.find(params[:id])
  @clothing.destroy
  redirect_to '/clothings'

end


def fetch_items
  

  @clothings = Clothing.where(category: params[:category]).where(sale: params[:list_type])

  respond_to do |format|
      format.json do
        render json: {clothings: @clothings }
      end
  end

end


private
  def clothing_params
    params.require(:clothing).permit(:category, :color, :size, :price, :quantity, :description, {images: []}, :sale, :new_collection, :price_old)
  end

end

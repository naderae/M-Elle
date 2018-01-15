class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def retrieve
    @clothings = Clothing.where(category: params[:category])
  end

end

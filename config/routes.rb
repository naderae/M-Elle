Rails.application.routes.draw do

  root 'home#index'

  resources :clothings
  get '/home' => 'home#index'

  match '/clothings/retrieve' => 'clothings#retrieve', :via  => :post
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

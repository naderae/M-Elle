Rails.application.routes.draw do

  devise_for :users

  root to: "home#index"

  resources :clothings

  get '/home' => 'home#index'


  get 'admins' => 'admin#index'
  get 'admins/:category', to: 'admin#display', as: :admin


  get 'contact', to: 'messages#new', as: 'contact'
  post 'contact', to: 'messages#create'

  post '/clothings/fetch_items' => 'clothings#fetch_items', as: :fetch_items
  patch '/clothings/:id/update_stock' => 'clothings#update_stock', as: :update_stock
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

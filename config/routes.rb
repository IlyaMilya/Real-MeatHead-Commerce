Rails.application.routes.draw do
  resources :reviews
  resources :products, only: [:index, :show]
  resources :users, only: [:create, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end

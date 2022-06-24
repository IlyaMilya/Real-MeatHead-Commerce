Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :destroy]
  resources :products, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "sessions#show"
end

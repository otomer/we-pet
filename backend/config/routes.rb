Rails.application.routes.draw do
  scope '/api' do
    resources :children
    resources :parents
  end
end

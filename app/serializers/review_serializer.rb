class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :user_id, :product_id
  # belongs_to :user
  # belongs_to :product

end

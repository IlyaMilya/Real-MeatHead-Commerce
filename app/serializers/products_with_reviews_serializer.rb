class ProductsWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :image, :company
  has_many :reviews
end

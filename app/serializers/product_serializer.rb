class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :image, :company

end

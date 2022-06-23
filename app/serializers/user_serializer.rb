class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :username, :password, :image
  
end

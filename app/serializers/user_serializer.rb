class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :username, :password_digest, :image
  
end

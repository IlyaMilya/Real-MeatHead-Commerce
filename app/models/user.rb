class User < ApplicationRecord
    has_many :reviews
    has_many :products, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end

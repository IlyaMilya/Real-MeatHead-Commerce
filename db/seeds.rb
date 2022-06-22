# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Start destroy..."

User.destroy_all
Product.destroy_all
Review.destroy_all

puts "🌱 End destroy..."

puts "🌱 Seeding start..."

puts "🌱 Seeding users..."

u1 = User.create(fullname: "Johnny Cash", email: "fruitpunch@aol.com", username:"johnnyCash32", password:"getVaporized", image: "https://i.discogs.com/9HfmXDCsEysBIWxEmkTsZdXy7Sg4SQT59WGDnl8W7Ks/rs:fit/g:sm/q:90/h:652/w:506/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEzNTk0/Ni0xNjE0MTkzOTc2/LTE4MDMuanBlZw.jpeg")
u2 = User.create(fullname: "Elmo", email: "sesamestreet@gmail.com", username:"catchMeOutside", password:"password", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEKCdM26HUnC8py4a4T8JY0sxGDLoZF30sA&usqp=CAU")

puts "🌱 Seeding products..."

p1 = Product.create(category: "Strength", name: "HAGOO 400LBS Power Tower Pull Up Station Dumbbell Bench 6 Adjustable", company: "HAGOO", price: 250, image: "https://content.toolots.com/media/catalog/product/cache/1/small_image/38x50/fd2c6820d7d512d5e7e5a15d4f852118/e/1/e1i1vkpf8_5851511.jpg")
p2 = Product.create(category: "Strength", name: "71.5LBS Adjustable dumbbell weight set (pair)", company: "Ativafit", price: 500, image: "https://m.media-amazon.com/images/I/51RpiX2zCkL._AC_SL1000_.jpg")
p3 = Product.create(category: "Preworkout", name: "Pulse Natural Pre-Workout", company: "Legion", price: 24, image: "https://legionathletics.com/wp-content/uploads/2020/12/Pulse-Fruit-Punch-Front-1000x1000-1.png")

puts "🌱 Seeding reviews..."

r1 = Review.create(description: "description1", rating: "rating1", user_id:u1.id, product_id:p1.id)
r2 = Review.create(description: "description2", rating: "rating2", user_id:u2.id, product_id:p3.id)
r3 = Review.create(description: "description3", rating: "rating3", user_id:u2.id, product_id:p2.id)
r4 = Review.create(description: "description4", rating: "rating4", user_id:u1.id, product_id:p1.id)
r5 = Review.create(description: "description5", rating: "rating5", user_id:u2.id, product_id:p3.id)

puts "✅ Done seeding!"
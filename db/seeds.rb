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

p1 = Product.create(category: "Strength", name: "HAGOO 400LBS Power Tower Pull Up Station Dumbbell Bench 6 Adjustable", company: "HAGOO", price: 250, image: "https://m.media-amazon.com/images/I/61PzvSVJtzS._AC_SX569_.jpg")
p2 = Product.create(category: "Strength", name: "71.5LBS Adjustable dumbbell weight set (pair)", company: "Ativafit", price: 500, image: "https://m.media-amazon.com/images/I/51RpiX2zCkL._AC_SL1000_.jpg")
p3 = Product.create(category: "Preworkout", name: "Pulse Natural Pre-Workout", company: "Legion", price: 24, image: "https://legionathletics.com/wp-content/uploads/2020/12/Pulse-Fruit-Punch-Front-1000x1000-1.png")

puts "🌱 Seeding reviews..."

r1 = Review.create(description: "I must say right up front that I am extremely pleased with the Power Tower. It only took my son and me about 45 minutes to put it together. The instructions were clear -- both in terms of the text and illustrations. Even better -- all of the necessary nuts and bolts for each step come packaged separately. No need to guess which screws and bolts are needed. I will caution that it really takes two people to put it together. Most of the pieces are heavy -- but this is an indication of the quality materials used. Once put together the tower is extremely solid -- there is very little wobble -- and there are built in floor levelers to manage this. And it has a very compact build -- it takes up only a few square feet in my garage.
    I use the Tower every day for pull-ups, dips, and situps. It replaced several individual pieces of equipment I had for these exercises. It was a great purchase.", rating: 1, user_id:u1.id, product_id:p1.id)
r2 = Review.create(description: "This product has been reformulated, removing two actives, changing the sweetener and flavor, and adding a calcium blend. I loved the previous formulation as the excipients were limited, the actives were exactly what I wanted, and the flavor was delicious. With this reformulation the flavor is terrible, actives are missing, and a bunch of bulking agents have been added; this is not what I wanted in a product. The companys webpage and Amazon page still advertise the old formulation; which is not the product I received. This is deceitful and disappointing. I will not be purchasing this product again; not only because of the poor reformulation but also because of the companys failure to disclose it.", rating: 2, user_id:u2.id, product_id:p3.id)
r3 = Review.create(description: "These worked great for a couple months. This morning while I was doing curls, nothing crazy, the dumbbell malfunctioned and released a weight plate, it fell straight onto my foot and smashed it. I was lucky I wasn't doing anything above my head, could have been very serious. These are a safety concern and people should know.", rating: 3, user_id:u2.id, product_id:p2.id)
r4 = Review.create(description: "The adjustment bolt for the upper tower came cross threaded making any adjustment impossible by hand. The seller wanted me to disassemble the item and box it back up for a refund. WTF?!?!? This thing took a couple hours to assemble and they want it returned? I just wanted a reasonable discount given on a defective item. Very poor customer service. No accommodation on their part, so they get a poor review in return. Horrible business practice. Dont order this item.", rating: 4, user_id:u1.id, product_id:p1.id)
r5 = Review.create(description: "I have been using 51/50 RIch Piana for a long time and I still like it. Athletic Pilse is stronger, especially if you take two scoops in 350 ml water and I feel it does staying in my body system slightly longer. As you guys know we are all different and I would like to say that if you have any doubts how this suplament is going to affect your workout, why don't just just try. I personally always follow this guideline.", rating: 5, user_id:u2.id, product_id:p3.id)
r6 = Review.create(description: "I have never seen such a clever design for a dumbbell I guess system is what you would call it? This is sooo convenient! It is basically 5 to 6 dumbbells in 1 (And I say 5 to 6 because the bar itself is somewhat heavy which could be used as a starting point for some people) but it takes the space of just one! Depending of the exercise you can chose the amount of weight you want and if you need more or less just place the dumbbell into its dock and either add or remove weight!", rating: 3, user_id:u1.id, product_id:p2.id)

puts "✅ Done seeding!"
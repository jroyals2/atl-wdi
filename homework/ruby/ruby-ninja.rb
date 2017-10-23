# Challenge 1 
a = true
b = false
puts a == b
puts a != b

# Challenge 2

this_var = nil

p this_var
puts "#{this_var} was here"
print this_var
puts this_var.class

# Challenge 3 

d = 10 
puts d
e = 3.14
puts e
d = e 
puts d

# Challenge 4

christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda"
puts "#{christine} and I like #{likesTo}"
g = "2"
gToNumber = 2
puts g.to_i + gToNumber

# Challenge 5

# puts "What is your name"
# name = gets.chomp
# puts "Input and integer"
# number = gets.chomp
# puts number.to_i * 2
# puts "what do you like to do?"
# favor = gets.chomp
# puts "#{name} likes to #{favor}"

# Challenge 6

# my_first_array = []
# my_first_array = ["What", "Are", "You", "Making me", "Do"]
# my_first_array = my_first_array + [1, 2, 3, 4]
# puts my_first_array.last
# puts my_first_array.first
# my_first_array[1] = "Joe"
# my_first_array[2] = 3
# my_first_array.push(true)
# my_first_array.push(my_first_array[3].class)
# puts my_first_array

# Challenge 7 

my_favorite_animals = {
    "edgar": "donkey",
    "ryan": "dog",
    "billy": "goat",
    "andrea": "horse",
    "chris": "sorta human"
}
my_favorite_animals[:"edgar"] = "bear"

puts my_favorite_animals

favorite_movie = {}

favorite_movie["movie"] = "scary"
puts favorite_movie

# Challenge 8

first_range = (1..10)
first_range = first_range.to_a

second_range = (1..999)
second_range = second_range.to_a

for range in first_range 
    range = range.to_s
    p range
end
x = 0
while x < 50 
    puts second_range[x]
    x += 1
end

new_array = []
first_range.each do |things|
    if things.odd? == true 
        new_array.push(things * 2)
    end
end
p new_array

first_range.map do |num|
    if num % 2 == 0 
       p num.to_s
    else
        p num
    end
end

# Challenge 9 

new_range = (1..1000)
new_range = new_range.to_a
added = 0;
new_range.each do|stuff|
    if stuff % 3 == 0 || stuff % 5 == 0
        added += stuff
    end
end
p added

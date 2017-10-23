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

my_first_array = []
my_first_array = ["What", "Are", "You", "Making me", "Do"]
my_first_array = my_first_array + [1, 2, 3, 4]
puts my_first_array.last
puts my_first_array.first
my_first_array[1] = "Joe"
my_first_array[2] = 3
my_first_array.push(true)
my_first_array.push(my_first_array[3].class)
puts my_first_array
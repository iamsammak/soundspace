# Write a method that reads in a file of integers, one per line, and sums them. Skip the line if it begins with a "#".
def sum_from_file(filename)
  nums = File
  nums
    .readlines(filename)
    .select { |line| line[0] != "#" }
    .map(&:to_i)

  nums.inject(:+)
end

# You are given an array and a random number generator. Shuffle the array.

def shuffle(array)
  new_array = array.dup
  array.each_index do |index|
    # notice how each time it moves the number at `index` out of the
    # way so it may be sampled later.
    rand_index = index + rand(array.length - index)
    new_array[index], new_array[rand_index] =
      new_array[rand_index], new_array[index]
  end
  new_array
end

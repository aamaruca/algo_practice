def square_digits num
  res = []
  num = num.to_s.split('')
  num.each do |i|
    n = i.to_i ** 2
    res.push(n)
  end
  puts res.join().to_i
end

puts square_digits(3212) #9414
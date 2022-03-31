def divisors(n)
 # take in a (number) can create a while loop stop when i = n
 #if n % i && i != 1 || n push i into array

 i = 2
 divisors = []

 while i < n do
  if n % i == 0
    divisors.push(i)
  end
  i += 1
  end
  if divisors.length == 0
    divisors.push("#{n} is prime")
    return divisors.join(',')
  end
  divisors
end

print divisors(12)
print divisors(13)
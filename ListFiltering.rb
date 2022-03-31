def filter_list(l)
  l.select {|n| n.is_a? (Integer)}
end

print filter_list([1,2,'a','b'])
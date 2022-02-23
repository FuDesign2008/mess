#!/usr/bin/ruby -w
#coding=utf-8

puts "你好，世界！";
puts "计算: #{24 * 60 * 60}"
name = "Ruby"
puts "计算: #{"hello " + name}"

arraylist = ['hello', '3.14', 'ruby', 'this is a string', 'last element']
arraylist.each do |i|
  puts i
end


nameList = Array.new(4, 'mac')
puts "#{nameList}"

numList = Array.new(10)  {|e| e = e * 2}
puts "#{numList}"


obj = Hash["a" => 100, "b" => 200]



range1 = (1..10).to_a
range2 = ('bar'..'bat').to_a

puts "#{range1}"
puts "#{range2}"



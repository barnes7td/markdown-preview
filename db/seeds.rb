10.times do |n|
  Post.create!(
    title: "Post ##{n}",
    body: "That is a beautiful body"
  )
end

puts "#{Post.count} posts created"

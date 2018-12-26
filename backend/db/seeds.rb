parents = [
  {
    "name" => "Foo",
    "child" => "Foosh"
  },
  {
    "name" => "Bar",
    "child" => "Barsh"
  }
]

parents.each do |x|
  parent = Parent.create(name: x["name"])
  Child.create(name: x["child"], parent_id: parent.id)
end

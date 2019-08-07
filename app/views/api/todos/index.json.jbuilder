@todos.each do |todo|
  json.set! todo.id do
    json.extract! todo, :id, :body, :complete
  end
end
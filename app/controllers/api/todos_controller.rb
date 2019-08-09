class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render "api/todos/index"
  end

  def create
    todo_parameters = { 
      body: todo_params[:body], 
      complete: false 
    }
    @todo = Todo.new(todo_parameters);

    if @todo.save
      render "api/todos/show"
    else
      render json: ["error"], status: 404
    end
  end

  def update
    @todo = Todo.find_by!(id: params[:id])

    new_params = { 
      body: todo_params[:body], 
      complete: todo_params[:complete] 
    }

    if @todo.update(new_params)
      render "api/todos/show"
    else
      render json: ["could not update todo"], status: 404
    end
  end

  def destroy
    @todo = Todo.find_by!(id: params[:id])

    if @todo.destroy
      render "api/todos/show"
    else
      render json: ["todo not destroyed"], status: 404
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body, :complete, :id)
  end
end 
import todoPost from '../models/todo_post.js';

export const getTodos = async (req, res) => {
  try {
    const todolist = await todoPost.find(
      {
      date: req.params.todoDate,
      User: req.data_user._id
    }
    );
    res.ok({
      status_code: 200,
      message: "sucsess get data",
      data: todolist
    });
    console.log(todolist, "todolist")
  } catch (err) {
    console.log(err)
    res.error({
      message: err
    });
  }
}

export const getAllData = async (req, res) => {
  try {
    const todoall = await todoPost.find({});
    res.ok({
      status_code: 200,
      message: "sucsess get data",
      data: todoall
    });
    console.log(todoall, "todolist")
  } catch (err) {
    console.log(err)
    res.error({
      message: err
    });
  }
}


export const getTodosNotAuth = async (req, res) => {
  try {
    const todoall = await todoPost.find({});
    res.ok({
      status_code: 200,
      message: "sucsess get data",
      data: todoall
    });
    console.log(todoall, "todolist")
  } catch (err) {
    console.log(err)
    res.error({
      message: err
    });
  }
}

export const postTodos = async (req, res) => {
  const post = new todoPost({
    User: req.data_user._id,
    name: req.body.name,
    date: req.body.date,
    note: req.body.note
  });
  try {
    const savedPost = await post.save();
    res.ok({
      status_code: 200,
      message: "sucsess post data",
    });
  } catch (err) {
    console.log(err, "errrrrrrrrr")
    res.error({
      message: err
    });
  }
}

export const deleteTodo = async (req, res) => {
  console.log(req.params.todoId)
  try {
    const removePost = await todoPost.deleteOne({
      _id: req.params.todoId,
      User: req.data_user._id,
    });
    res.ok({
      status_code: 200,
      message: "sucsess delete data",
    });
    console.log(removePost)
  } catch (err) {
    res.error({
      message: err
    });
  }
}

export const updateTodo = async (req, res) => {
  try {
    const updatePost = await todoPost.updateOne(
      {_id: req.params.todoId,
        User: req.data_user._id,
      }, 
      {
      $set: {
        name: req.body.name,
        date: req.body.date,
        note: req.body.note
      }
    })
    res.ok({
      status_code: 200,
      message: "sucsess update data",
    });
    console.log(updatePost)
  } catch (err) {
    res.error({
      message: err
    });
  }
}


export const updateTodoComplete = async (req, res) => {
  try {
    const updatePostComplete = await todoPost.updateOne(
      { _id: req.params.todoId,
        User: req.data_user._id
      }, 
      {
      $set: {
        complete: req.params.value,
      }
    })
    res.ok({
      status_code: 200,
      message: "sucsess update complete data",
    });
    console.log(updatePostComplete)
  } catch (err) {
    res.error({
      message: err
    });
  }
}
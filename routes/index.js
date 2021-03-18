
import todo from './todo.js'
import user from './user.js'

export default (app) => {
    app.use('/todo', todo);
    app.use('/user', user);
}
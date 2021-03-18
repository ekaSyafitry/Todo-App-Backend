
import todo from './todo'
import user from './user'

export default (app) => {
    app.use('/todo', todo);
    app.use('/user', user);
}
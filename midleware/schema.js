import Joi from 'joi-oid'

export const todos = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    date: Joi.string().required(),
    note: Joi.string().allow('').max(200)
})

export const user = Joi.object({
    firstname:Joi.string().min(3).max(50).required(),
    lastname: Joi.string().allow('').max(50),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
    passwordConf : Joi.any().valid(Joi.ref('password')).required()
})

export const loginUser = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
})
export default todos;
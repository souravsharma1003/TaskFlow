const joi = require("joi");
const ExpressError = require("../utils/ExpressError.util");

const taskSchema=joi.object({
    title:joi.string().required().trim().min(3)
})

const validateTaskSchema = (req, res, next) => {
    try {
        const { error, value } = taskSchema.validate(req.body);
        if (error) {
            return next(new ExpressError(error.details[0].message, 400))
        }
        return next();
    } catch (error) {
        return next(new ExpressError("Data validation failed", 400));
    }
}

module.exports=validateTaskSchema;
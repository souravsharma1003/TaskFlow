const joi=require("joi");
const ExpressError = require("../utils/ExpressError.util");

const updateTaskSchema=joi.object({
    status:joi.string().required().valid("todo","in-progress","done")
});

const validateUpdateTaskSchema = (req, res, next) => {
    try {
        const { error, value } = updateTaskSchema.validate(req.body);
        if (error) {
            return next(new ExpressError(error.details[0].message, 400))
        }
        return next();
    } catch (error) {
        return next(new ExpressError("Data validation failed", 400));
    }
}

module.exports=validateUpdateTaskSchema;
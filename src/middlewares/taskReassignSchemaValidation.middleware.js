const joi=require("joi");
const ExpressError=require("../utils/ExpressError.util");

const taskReassignmentSchema=joi.object({
    assigneeId:joi.string().required().pattern(/^[0-9a-fA-F]{24}$/)
})

const validateReassignTask=(req,res,next)=>{
    try {
        const { error, value } = taskReassignmentSchema.validate(req.body);
        if (error) {
            return next(new ExpressError(error.details[0].message, 400))
        }
        return next();
    } catch (error) {
        return next(new ExpressError("Data validation failed", 400));
    }
}

module.exports=validateReassignTask;
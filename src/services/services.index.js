import EErrors from "./errors/errors.enum.js";

export const errorsMidleware = (error, req, res, next) => {
    console.log(error.cause);
    switch(error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            return res.send({status: "error", error: error.name})
        default:
            return res.send({status: "error", error: "Unhandled error"})
    }
}
import Joi from "joi";

// Rules validasi
const detectionValidate = Joi.object({
  fileName: Joi.string().max(255).required(),
  detectionDate: Joi.date().iso().required(),
  detectionResult: Joi.string().max(255).required(),
  imageUrl: Joi.string().max(255).required(),
}).options({ abortEarly: false });

export { detectionValidate };

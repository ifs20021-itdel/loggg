import Joi from "joi";

// Rules validasi
const recommendValidate = Joi.object({
  daerah: Joi.string().min(5).max(50).required(),
  suhu: Joi.string().min(2).required(),
  luas_tanah: Joi.string().min(1).required(),
  recommendasi_tanaman: Joi.string().min(3).required()
}).options({ abortEarly: false });

export { recommendValidate };

import joi from "joi";

export async function imageSchema(req, res, next) {
  const { originalname: name, size, key, location: url } = req.file;
  console.log(req.file)

  const imageBody = {
    name,
    key,
    size,
    url,
    date: new Date()
  }
  console.log(imageBody)
  const imageSchemaBody = joi.object({
    name: joi.string().required(),
    key: joi.string().required(),
    size: joi.number().required(),
    url: joi.any(),
    date: joi.any().required()
  });

  const { error } = imageSchemaBody.validate(imageBody, { abortEarly: false });
  if (error) return res.status(422).send(error.details.map(error => error.message));

  res.locals.imageBody = imageBody;
  next();
}
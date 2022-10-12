const diseasecreater = require("../models/diseases");

const diseaseList = async (req, res) => {
  const diseaselist = await diseasecreater.find({}, null, {
    sort: { name: 1 },
  });
  res.json(diseaselist);
};

const diseaseListById = async (req, res) => {
  const singleDisease = await diseasecreater.find({ _id: req.params.id });
  res.json(singleDisease);
};

module.exports = {
  diseaseList,
  diseaseListById,
};

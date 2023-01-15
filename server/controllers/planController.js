const Plan = require("../models/Plan");

////// create a doc from a plan /////////////
module.exports.add = async (req, res) => {
  try {
    console.log("🚀 ~  add plan  hello", req.body);

    const newPlan = await Plan.create(req.body);

    if (!newPlan) return res.send({ success: false, errorId: 2 });

    res.send({ success: true, plan: newPlan });
  } catch (error) {
    console.log("🚀 ~ plan add error", error.message);

    res.send({ success: false, error: error.message });
  }
};
module.exports.list = async (req, res) => {
  try {
    console.log("🚀 ~ plan list hello", req.query);

    const plans = await Plan.find().select("-__v");

    res.send({ success: true, plans });
  } catch (error) {
    console.log("🚀 ~ plan list error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    console.log("🚀 ~ plan delete hello", req.params);

    const deletedPlan = await Plan.findByIdAndDelete(req.params._id);

    console.log("🚀 ~ module.exports.delete ~ deletedPlan", deletedPlan);

    if (!deletedPlan) return res.send({ success: false, errorId: 1 });

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ plan delete error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.findone = async (req, res) => {
  try {
    console.log("🚀 ~ plan findone hello", req.query);

    const plan = await Plan.findOne(req.query).select("-__v");
    console.log("🚀 ~ module.exports.findone= ~ plan", plan);

    res.send({ success: true, plan });
  } catch (error) {
    console.log("🚀 ~ plan findone error", error.message);

    res.send({ success: false, error: error.message });
  }
};
module.exports.edit = async (req, res) => {
  try {
    console.log("🚀 ~ plan edit hello", req.body);

    const { _id, ...plan } = req.body;
    console.log("🚀 ~ _id, plan", _id, plan);

    // // findByIdAndUpdate({filter}, {updated resource}, {options})
    const newPlan = await Plan.findByIdAndUpdate(
      { _id },
      { ...plan },
      { new: true }
    );
    console.log("🚀 ~ module.exports.edit= ~ newPlan", newPlan);

    if (!newPlan) return res.send({ success: false, errorId: 1 });

    res.send({ success: true, plan: newPlan });
  } catch (error) {
    console.log("🚀 ~ plan edit error", error.message);

    res.send({ success: false, error: error.message });
  }
};

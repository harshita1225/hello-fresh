const Plan = require("../models/Plan");

module.exports.addToCart = async (req, res) => {
  try {
    console.log("Hello from add to cart", req.body);

    const user = await User.findById(req.body._id);
    // console.log("🚀 ~ module.exports.addToCart= ~ user", user)

    const product = user.cart.filter(
      (item) => item.product.toString() === req.body.product
    );
    console.log("🚀 ~ module.exports.addToCart= ~ product", product);

    let cart = [];

    if (product.length === 0) {
      //product is not found in the cart

      const user = await User.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $push: {
            cart: {
              quantity: 1,
              product: req.body.product,
            },
          },
        },
        { new: true }
      );
      console.log("🚀 ~ module.exports.addToCart= ~ user", user);

      cart = user.cart;
    } else {
      // PRODUCT IS FOUND IN THE CART

      console.log("product is found in the cart");

      //*******************MONGOOSE WAY**************** */

      const updatedUser = await User.findByIdAndUpdate(
        {
          _id: req.body._id,
          // 'cart.product': req.body.product,
          // cart: {
          //     $elemMatch : {
          //         product: req.body.product
          //     }
          // }
        },
        {
          $inc: {
            "cart.$[elem].quantity": 1,
          },
        },
        {
          arrayFilters: [{ "elem.product": req.body.product }],
          new: true,
        }
      );
      console.log("🚀 ~ module.exports.addToCart= ~ updatedUser", updatedUser);
      cart = updatedUser.cart;
    }

    res.send({ success: true, cart });
  } catch (error) {
    console.log("🚀 ~ add to cart error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.addToCartOld = async (req, res) => {
  try {
    console.log("Hello from add to cart", req.body);

    const user = await User.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $push: {
          cart: req.body.product,
        },
      },
      { new: true }
    );

    console.log("🚀 ~ module.exports.addToCart= ~ user", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ add to cart error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.removeFromCart = async (req, res) => {
  try {
    console.log("Hello from remove from cart", req.body);

    const user = await User.findById(req.body._id);

    console.log("🚀 ~ module.exports.removeFromCart= ~ user", user);

    const cart = user.cart.filter(
      (item) => item.product.toString() !== req.body.productId
    );
    console.log("🚀 ~ module.exports.removeFromCart= ~ products", cart);

    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.body._id },
      { cart },
      { new: true }
    );
    console.log(
      "🚀 ~ module.exports.removeFromCart= ~ updatedUser",
      updatedUser
    );

    res.send({ success: true, cart });
  } catch (error) {
    console.log("🚀 ~ remove from cart error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.listCart = async (req, res) => {
  try {
    console.log("Hello from list cart", req.params);

    const user = await User.findById(req.params.user).populate({
      path: "cart.product",
    });

    console.log("🚀 ~ module.exports.listCart= ~ user", user.cart);

    res.send({ success: true, products: user.cart });
  } catch (error) {
    console.log("🚀 ~ list cart error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.updateCart = async (req, res) => {
  try {
    console.log("Hello from list cart", req.params);

    const user = await User.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      {
        $set: {
          "cart.$[elem].quantity": req.body.quantity,
        },
      },
      {
        arrayFilters: [{ "elem.product": req.body.product }],
        new: true,
      }
    );
    console.log("🚀 ~ module.exports.updateCart= ~ user", user.cart);

    res.send({ success: true, cart: user.cart });
  } catch (error) {
    console.log("🚀 ~ list cart error", error.message);

    res.send({ success: false, error: error.message });
  }
};

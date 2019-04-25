import stripe from "tipsi-stripe";

stripe.setOptions({
  publishableKey: "pk_test_Z3HM7MQyYtl3Ka9dTECk4LAh"
});

export const makeToken = async (number, expMonth, expYear, cvc) => {
  const params = {
    number, // String
    expMonth, // Number
    expYear, // Number
    cvc // String
  };
  return await stripe.createTokenWithCard(params);
};

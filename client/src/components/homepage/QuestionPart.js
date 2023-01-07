import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const QuestionPart = () => {
  const [answer, setAnswer] = useState({
    id1: false,
    id2: false,
    id3: false,
    id4: false,
    id5: false,
    id6: false,
    id7: false,
  });

  return (
    <div className="mt-20 px-10 w-[800px] bg-[#F8F8F8] h-[650px] flex-col items-center justify-center mx-auto">
      <h1 className="text-[40px] mb-5">FAQs</h1>
      <div>
        <ul>
          <div className="flex-col gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id1 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id1: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id1: true })}
                />
              )}

              <li className="text-[16px] flex items-center ml-5">
                Can I choose my recipes?
              </li>
            </div>

            {answer.id1 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                After checkout, you will have access to the entire menu of 30+
                weekly recipes. Want to mix and match? No problem, you can
                always pick and choose your recipes regardless of preference.
              </li>
            )}
          </div>
          <div className="flex-col gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id2 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id2: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id2: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                Will HelloFresh recipes support my diet?
              </li>
            </div>

            {answer.id2 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                We can help with that. Low carb? Vegetarian? Under 650 calories?
                We have options for everyone, and you can easily preview next
                week’s menu.
              </li>
            )}
          </div>
          <div className="flex-col  gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id3 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id3: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id3: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                Can I change my plan or meal preferences?
              </li>
            </div>

            {answer.id3 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                Absolutely! We know life is full of surprises. If you need more
                or fewer meals, or want to see different options from week to
                week, simply update your meal quantity and menu preferences in
                your account settings.
              </li>
            )}
          </div>

          <div className="flex-col gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id4 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id4: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id4: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                How can I see ingredients and nutritional information?
              </li>
            </div>

            {answer.id4 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                Each recipe we offer includes FDA nutrition information. You can
                view nutrition information and ingredients for each recipe in
                the “My Menu” section after you’ve checked out.
              </li>
            )}
          </div>
          <div className="flex-col gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {" "}
              {answer.id5 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id5: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id5: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                Will I be locked in a contract?
              </li>
            </div>

            {answer.id5 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                Never. You can easily skip a week, pause, or cancel your account
                at any time in your account settings. Just make sure you do so
                before your weekly cutoff to stop your next order.
              </li>
            )}
          </div>
          <div className="flex-col  gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id6 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id6: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id6: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                Where can I see the upcoming menu?
              </li>
            </div>

            {answer.id6 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                After you’ve selected your plan preferences, the recipe menu
                will display the upcoming options. Don’t forget, you always have
                full access to the 30+ recipes available each week.
              </li>
            )}
          </div>

          <div className="flex-col  gap-[16px] pb-[32px] items-center justify-center">
            <div className="flex">
              {answer.id7 ? (
                <BiChevronUp
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id7: false })}
                />
              ) : (
                <BiChevronDown
                  size="30px"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={(e) => setAnswer({ id7: true })}
                />
              )}
              <li className="text-[16px] flex items-center ml-5">
                Does HelloFresh give nutrition & calorie information?
              </li>
            </div>

            {answer.id7 && (
              <li className="text-[16px] flex text-left ml-[60px]">
                Absolutely! We know life is full of surprises. If you need more
                or fewer meals, or want to see different options from week to
                week, simply update your meal quantity and menu preferences in
                your account settings.
              </li>
            )}
          </div>
        </ul>
        {/* <p className="text-gray-300">
          *The cutoff for any changes is 11:59 pm PST 5 days prior to your next
          scheduled delivery.{" "}
          <span className="text-[#047A46]">
            See the Help Center for more information.
          </span>
          *Up to three free gifts (total approx. value of $28) when you
          subscribe to HelloFresh. First gift after fourth box purchase, second
          gift after sixth box, and third gift after eighth box purchase. Gifts
          available while supplies last.
        </p> */}
      </div>
    </div>
  );
};

export default QuestionPart;

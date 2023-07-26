import React, { useState } from "react";

const Help = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-4 pb-4 lg:pt-[40px] lg:pb-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[40px] max-w-[800px] text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Frequently <span className="text-orange-500">Asked</span>{" "}
                Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-6 flex flex-wrap shadow-xl px-4 pt-6">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Do you offer vegetarian options?"
              text="Yes, we have a variety of vegetarian dishes available on our menu."
            />
            <AccordionItem
              header="Do you offer takeout or delivery services?"
              text="Yes, we offer both takeout and delivery services. You can place your order online or by calling our restaurant."
            />
            <AccordionItem
              header="What are your operating hours?"
              text="We are open from [opening time] to [closing time] every day of the week."
            />
            <AccordionItem
              header="Do you have a kids' menu?"
              text="Yes, we have a dedicated kids' menu with a variety of options suitable for children."
            />
            <AccordionItem
              header="Do you support bulk orders?"
              text="In order to provide all customers with a great selection and to ensure on-time delivery of your meal, we request you to order bulk quantity at least 24 hours in advance."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Can I make special dietary requests?"
              text="Absolutely! We accommodate special dietary requests to the best of our abilities. Please inform our staff about your requirements when placing your order."
            />
            <AccordionItem
              header="Do you accept credit cards?"
              text="Yes, we accept major credit cards for payment."
            />
            <AccordionItem
              header="Can I edit my Order?"
              text="Your order can be edited before it reaches the kitchen. You could contact the customer support team via a call to do so. Once an order is placed and the kitchen starts preparing your food, you may not edit its contents."
            />
            <AccordionItem
              header="Did not recieve order confirmation SMS?"
              text="Please check if your text message. If not, please share the details via customer Support team.
              Mail Id: customercare@hungryheart.com Phone No: +91 - xxxxxxxxxx"
            />
            <AccordionItem
              header="I want an invoice for my order"
              text="Invoice Copy is sent via email & Text Message."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    // event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="single-faq mb-8 w-full rounded-lg border-4 border-x-orange-500 border-y-orange-300 bg-white p-4 sm:p-8 lg:px-6 xl:px-8 shadow-md">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};

export default Help;

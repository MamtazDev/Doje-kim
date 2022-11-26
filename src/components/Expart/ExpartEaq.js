import React from "react";

const ExpartEaq = () => {
  const faqs = [
    {
      ques: "     ABOUT ME",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    },
    {
      ques: "    SUBMISSION GIODLINES",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    },
    {
      ques: "     PAYMENT",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    },
    {
      ques: "   SERVICE POLICY",
      ans: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    },
  ];
  return (
    <div className="my-5">
      <div class="accordion" id="accordionExample">
        {/* {
  faqs.map((faq,index)=> <div key={index} class="accordion-item">
  <h2 class="accordion-header" id={index}>
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={index + '*'}
      aria-expanded="true"
      aria-controls={index + '*'}
    >
      ABOUT ME
    </button>
  </h2>
  <div
    id={index + '*'}
    class="accordion-collapse collapse show"
    aria-labelledby={index}
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem
      ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod.
    </div>
  </div>
</div>)
}  */}

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              ABOUT ME
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              SUBMISSION GIODLINES
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              PAYMENT
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              SERVICE POLICY
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpartEaq;

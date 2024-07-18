"use client";
import { useState } from "react";

export default function Accordion({ topics }) {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <>
      {topics.map((topic, index) => (
        <div className="accordion" id="accordion">
          <div
            className="accordion-item mb-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h5 className="accordion-header" onClick={() => handleClick(index)}>
              <button
                className={
                  activeItem == index
                    ? "accordion-button"
                    : "accordion-button collapsed"
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
                aria-expanded="true"
                aria-controls="faq1"
              >
                {topic?.name}
              </button>
            </h5>
            <div
              id="faq1"
              className={
                activeItem == index
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                {topic?.subTopics.map((subtopic) => (
                  <span>
                    <i class="fa-solid fa-star-sharp"></i>
                    <small style={{ marginRight: 10, marginLeft: 4 }}>
                      {subtopic?.name}
                    </small>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

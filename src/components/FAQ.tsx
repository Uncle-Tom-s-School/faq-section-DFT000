import React from "react";
import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"

interface FaqProps {
  question: string;
  answer: string;
  isOpen: Boolean;
  onClick: () => void;
}

const Faq: React.FC<FaqProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onClick} type="button">
        <span>{question}</span>
        <img 
          src={isOpen ? plus : minus } 
          alt={isOpen ? "Collapse" : "Expand"}
          className="faq-icon" 
        />
        </button>
        {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default Faq;
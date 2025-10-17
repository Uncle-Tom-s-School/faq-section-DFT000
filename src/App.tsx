import { useEffect, useState } from "react";
import Faq from "./components/FAQ.tsx";
import star from "./assets/images/icon-star.svg"

interface FaqElem {
  question: string;
  answer: string;
}

function App() {
  const [FaqState, setFaqs] = useState<FaqElem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(()=>{
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setFaqs(data))
  }, []);

  const ToggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null: index)
  };

  return (
    <section className="faq-container">
        <img src={star} alt="star icon" className="faq-star" />
        <h2 className="faq-title">FAQs</h2>
        {FaqState.map((item, index) => (
          <Faq 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            isOpen={openIndex === index} 
            onClick={() => ToggleFaq(index)} 
          />
        ))}
    </section>
  );
}

export default App
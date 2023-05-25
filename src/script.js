/*
 * https://frontendeval.com/questions/faq-component
 *
 * Create a re-usable "Frequently Asked Questions" component
 */

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];

const FAQComponent = ({ questions }) => {
  // Create this component

  const [value, setValue] = useState(0);
  const handleOnClick = (index) => {
    if (index === value) {
      setValue(null);
    } else setValue(index);
  };
  return (
    <>
      {questions.map((question, index) => {
        return (
          <ul className="list">
            <li>{question.question}</li>
            <button onClick={() => handleOnClick(index)}>Read/Hide</button>
            {value === index && <li className="answer">{question.answer} </li>}
          </ul>
        );
      })}
    </>
  );
};

const { useState } = React;

const App = () => {
  return <FAQComponent questions={FAQ} />;
};

ReactDOM.render(<App />, document.getElementById("app"));

/*
* https://frontendeval.com/questions/faq-component
*
* Create a re-usable "Frequently Asked Questions" component
*/


const FAQ = [
{
  question: "How many bones does a cat have?",
  answer: "A cat has 230 bones - 6 more than a human" },

{
  question: "How much do cats sleep?",
  answer: "The average cat sleeps 12-16 hours per day" },

{
  question: "How long do cats live",
  answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average." }];



const FAQComponent = ({ questions }) => {
  // Create this component
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const handleOnClick = passedValue => {
    const filtered = questions.filter(i => i.question === passedValue.question);
    setValue(filtered[0]);
    setVisible(!visible);
  };
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null,
    questions.map((question, index) => {
      return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, question.question), /*#__PURE__*/
      React.createElement("button", { onClick: () => handleOnClick(question) }, "Read/Hide"), /*#__PURE__*/
      React.createElement("li", null, visible && value.answer === question.answer && question.answer));

    })));



};


const { useState } = React;
const App = () => {
  return /*#__PURE__*/React.createElement(FAQComponent, { questions: FAQ });
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
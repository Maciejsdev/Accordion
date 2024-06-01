import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h2>Questions</h2>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          ></SingleQuestion>
        );
      })}
    </section>
  );
};
export default Questions;

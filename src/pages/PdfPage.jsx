import QuizGenerator from "../components/QuizGenerator";

const QuizPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Take a Quiz</h2>
      <QuizGenerator />
    </div>
  );
};

export default QuizPage;

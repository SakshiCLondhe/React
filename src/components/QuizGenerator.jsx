import { useState } from "react";
import axios from "axios";

const QuizGenerator = () => {
  const [text, setText] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate quiz from text
  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter or paste some text first!");
      return;
    }

    setLoading(true);
    setError("");
    setQuiz([]);
    setScore(null);

    try {
      const res = await axios.post("http://localhost:5000/api/quiz", { text });
      setQuiz(res.data.questions || []);
    } catch (err) {
      console.error(err);
      setError("Failed to generate quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Record selected answers
  const handleAnswerSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  // Calculate score
  const handleSubmit = () => {
    let total = 0;
    quiz.forEach((q, i) => {
      if (answers[i] && q.answer.toLowerCase().includes(answers[i].toLowerCase())) {
        total++;
      }
    });
    setScore(total);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text or notes from your book..."
        className="w-full h-32 border rounded p-2 mb-4"
      />

      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Quiz"}
        </button>
        {quiz.length > 0 && (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Answers
          </button>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {quiz.length > 0 && (
        <div className="space-y-4">
          {quiz.map((q, i) => (
            <div key={i} className="p-4 border rounded bg-gray-50">
              <p className="font-semibold mb-2">{q.question}</p>
              {q.options.map((opt, j) => (
                <label key={j} className="block">
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={opt}
                    onChange={() => handleAnswerSelect(i, opt)}
                    checked={answers[i] === opt}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
        </div>
      )}

      {score !== null && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded">
          <p className="font-semibold text-green-700">
            ✅ You scored {score} / {quiz.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;

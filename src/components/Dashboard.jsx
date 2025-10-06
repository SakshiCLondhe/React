import { useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalQuizzes: 5,
    avgScore: 4.2,
    weakTopics: ["Gravitation", "Thermodynamics"],
  });

  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-xl font-semibold mb-4">Your Learning Stats</h3>
      <p>Total Quizzes Taken: {stats.totalQuizzes}</p>
      <p>Average Score: {stats.avgScore}</p>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Weak Topics:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {stats.weakTopics.map((topic, i) => (
            <li key={i}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

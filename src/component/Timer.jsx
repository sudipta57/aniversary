// src/components/Timer.js
import Countdown from "react-countdown";
import moment from "moment";

const Timer = ({ setShowMainPage }) => {
  const targetDate = moment().endOf("day"); // Adjust to match 12:00 AM

  const handleComplete = () => {
    setShowMainPage(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Wait for the Magic to Begin...
        </h1>
        <Countdown
          date={targetDate}
          onComplete={handleComplete}
          renderer={({ hours, minutes, seconds }) => (
            <div className="text-6xl font-semibold">
              {hours}:{minutes}:{seconds}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Timer;

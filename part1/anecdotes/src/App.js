import { useState } from "react";

const Anecdote = ({ text, points, selected }) => (
  <div>
    <p>{text}</p>
    <p>Has {points[selected]} votes</p>
  </div>
);

const Winner = ({ winnerPoints, text }) => (
  <div>
    <h2>Anecdote with most votes</h2>
    <p>{text}</p>
    <p>Has votes {winnerPoints}</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [points, setPoints] = useState(new Uint8Array(7));
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    console.log(copy);
  };

  const winnerPoints = Math.max(...points);
  const winnerIndex = points.indexOf(winnerPoints);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote
        text={anecdotes[selected]}
        points={points}
        selected={selected}
      />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleClick} text="Next anecdote" />
      {
        <Winner
          text={anecdotes[winnerIndex]}
          winnweIndex={winnerIndex}
          winnerPoints={winnerPoints}
          selected={selected}
        />
      }
    </div>
  );
};

export default App;

// src/components/Game.jsx
import { useState, useEffect } from 'react';
import { startNewGame, makeGuess, getGameStatus } from '../services/api';

const Game = () => {
  const [gameState, setGameState] = useState(null);
  const [guess, setGuess] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = async () => {
    try {
      setLoading(true);
      const state = await startNewGame();
      setGameState(state);
    } catch (err) {
      setError('Failed to initialize game. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGuess = async (e) => {
    e.preventDefault();
    if (!guess || isNaN(guess)) return;

    try {
      setLoading(true);
      const state = await makeGuess(parseInt(guess));
      setGameState(state);
      setGuess('');
    } catch (err) {
      setError('Failed to process your guess. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewGame = async () => {
    await initializeGame();
  };

  if (loading && !gameState) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
          <button
            onClick={initializeGame}
            className="ml-4 px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">

            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Number Guessing Game</h1>
            
            <div className="mb-6">

                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Attempts left:</span>
                    <span className="font-semibold">{gameState?.attemptsLeft}</span>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Score:</span>
                    <span className="font-semibold">{gameState?.score}</span>
                </div>

            </div>

            <div className={`p-4 mb-6 rounded-lg ${gameState?.gameOver ? (gameState?.message.includes('Congratulations') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800') : 'bg-blue-100 text-blue-800'}`}>
                <p className="text-center font-medium">{gameState?.message}</p>
            </div>

            {!gameState?.gameOver ? (

                <form onSubmit={handleGuess} className="mb-6">

                    <div className="flex flex-col space-y-4">
                        <input type="number" min="1" max="100" value={guess} onChange={(e) => setGuess(e.target.value)} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Enter your guess (1-100)" disabled={loading} required/>
                        <button type="submit" disabled={loading} className="px-4 py-2 bg-primary-500 transition duration-300 hover:bg-blue-500 bg-blue-400 text-white rounded hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" >
                            {loading ? 'Processing...' : 'Submit Guess'}
                        </button>
                    </div>
                </form>
                
            ) : (
            
                <button onClick={handleNewGame} className="w-full px-4 py-2 bg-secondary-500 transition duration-300 hover:bg-blue-500 text-white bg-blue-400 rounded hover:bg-secondary-600 cursor-pointer">
                    Play Again
                </button>

            )}

                <div className="text-sm text-gray-500 mt-4">
                    <p>Guess a number between 1 and 100. You have 10 attempts.</p>
                    <p>Score is calculated based on remaining attempts.</p>
                </div>

        </div>
    </div>
  );
};

export default Game;
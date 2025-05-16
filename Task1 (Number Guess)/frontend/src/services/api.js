const API_BASE_URL = 'http://localhost:8080/api/game';

export const startNewGame = async() => {

    const response = await fetch(`${API_BASE_URL}/start`)
    return await response.json();
};

export const makeGuess = async (guess) => {
    const response = await fetch(`${API_BASE_URL}/guess?guess=${guess}`,
    {
        method: 'POST',
    });
    return await response.json();
};

export const getGameStatus = async () =>{
    const response = await fetch(`${API_BASE_URL}/status`);
    return await response.json();
};
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/atm';

export const withdraw = async (accountNumber, amount) => {
  try {
    const response = await axios.post(`${API_URL}/withdraw`, null, {
      params: { accountNumber, amount }
    });
    return response.data;
  } catch (error) {
    console.error('Withdrawal error:', error);
    throw error;
  }
};

export const deposit = async (accountNumber, amount) => {
  try {
    const response = await axios.post(`${API_URL}/deposit`, null, {
      params: { accountNumber, amount }
    });
    return response.data;
  } catch (error) {
    console.error('Deposit error:', error);
    throw error;
  }
};

export const checkBalance = async (accountNumber) => {
  try {
    const response = await axios.get(`${API_URL}/balance`, {
      params: { accountNumber }
    });
    return response.data;
  } catch (error) {
    console.error('Balance check error:', error);
    throw error;
  }
};

export const validatePin = async (accountNumber, pin) => {
  try {
    const response = await axios.post(`${API_URL}/validate`, null, {
      params: { accountNumber, pin }
    });
    return response.data;
  } catch (error) {
    console.error('PIN validation error:', error);
    throw error;
  }
};
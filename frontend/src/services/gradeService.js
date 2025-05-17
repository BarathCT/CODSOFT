import axios from 'axios';

const API_URL = 'http://localhost:8080/api/grade';

export const calculateGrade = async (marks) =>{
    try{
        const response = await axios.post(
            `${API_URL}/calculate`,
            {marks}
        );
        return response.data;
    }catch(error){
        console.error("Error calculating grade : ", error);
        throw error;
    }
};
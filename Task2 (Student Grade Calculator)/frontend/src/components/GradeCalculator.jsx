// GradeCalculator.jsx
import { useState } from 'react';
import axios from 'axios';

const GradeCalculator = () => {
  const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', marks: '' }]);
  };

  const removeSubject = (index) => {
    if (subjects.length > 1) {
      const newSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(newSubjects);
    }
  };

  const calculateGrade = async () => {
    setLoading(true);
    try {
      const marks = subjects.map(subject => parseInt(subject.marks));
      const response = await axios.post('http://localhost:8080/api/grade/calculate', { marks });
      setResult(response.data);
    } catch (error) {
      console.error('Error calculating grade:', error);
      alert('Error calculating grade. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubjects([{ name: '', marks: '' }]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Student Grade Calculator</h1>
        
            <div className="space-y-4">

                {subjects.map((subject, index) => (

                    <div key={index} className="flex space-x-4 items-end">

                        <div className="flex-1">

                            <label className="block text-sm font-medium text-gray-700">Subject {index + 1}</label>
                            <input type="text" value={subject.name} onChange={(e) => handleSubjectChange(index, 'name', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Subject name"/>

                        </div>

                        <div className="w-24">

                            <label className="block text-sm font-medium text-gray-700">Marks</label>
                            <input type="number" min="0" max="100" value={subject.marks} onChange={(e) => handleSubjectChange(index, 'marks', e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="0-100"/>

                        </div>
                    
                        {subjects.length > 1 && (
                        
                            <button onClick={() => removeSubject(index)} className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Remove
                            </button>
                        )}
                    </div>
                ))}
          
                <div className="flex space-x-4">

                    <button onClick={addSubject} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Add Subject
                    </button>
                
                    <button onClick={calculateGrade} disabled={loading} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50">
                        {loading ? 'Calculating...' : 'Calculate Grade'}
                    </button>

                    <button onClick={resetForm} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                        Reset
                    </button>
                </div>

            </div>

            {result && (

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">

                    <h2 className="text-xl font-semibold mb-4">Results</h2>

                    <div className="space-y-2">

                        <p><span className="font-medium">Total Marks:</span> {result.totalMarks}</p>
                        <p><span className="font-medium">Average Percentage:</span> {result.averagePercentage.toFixed(2)}%</p>

                        <p><span className="font-medium">Grade:</span> 
                            <span className={`ml-2 px-2 py-1 rounded text-white
                                ${
                                    result.grade === 'A+' ? 'bg-purple-600' :
                                    result.grade === 'A' ? 'bg-blue-600' :
                                    result.grade === 'B' ? 'bg-green-600' :
                                    result.grade === 'C' ? 'bg-yellow-600' :
                                    result.grade === 'D' ? 'bg-orange-600' : 'bg-red-600'
                                }`}>

                                {result.grade}
                            
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
        
    </div>
  );
};

export default GradeCalculator;
package com.task2.studentGradeCalculator.Service;

import com.task2.studentGradeCalculator.Model.GradeRequest;
import com.task2.studentGradeCalculator.Model.GradeResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeService {

    public GradeResponse calculateGrade(GradeRequest request) {

        GradeResponse response = new GradeResponse();
        List<Integer> marks = request.getMarks();

        int total = marks.stream().mapToInt(Integer::intValue).sum();
        response.setTotalMarks(total);

        double average = (double) total / marks.size();
        response.setAveragePercentage(average);

        response.setGrade(calculateGrade(average));

        return response;

    }

    private String calculateGrade(double percentage) {
        if(percentage >= 90) return "A+";
        if(percentage >= 80) return "A";
        if(percentage >= 70) return "B";
        if(percentage >= 60) return "C";
        if(percentage >= 50) return "D";

        return "F";
    }
}

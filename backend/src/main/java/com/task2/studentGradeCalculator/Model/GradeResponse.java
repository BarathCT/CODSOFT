package com.task2.studentGradeCalculator.Model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GradeResponse {

    private int totalMarks;
    private double averagePercentage;
    private String grade;
}

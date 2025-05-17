package com.task2.studentGradeCalculator.Model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GradeRequest {
    private List<Integer> marks;
}

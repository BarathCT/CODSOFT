package com.task2.studentGradeCalculator.Controller;

import com.task2.studentGradeCalculator.Model.GradeRequest;
import com.task2.studentGradeCalculator.Model.GradeResponse;
import com.task2.studentGradeCalculator.Service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/grade")
@CrossOrigin(origins = "http://localhost:5173")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @PostMapping("/calculate")
    public GradeResponse calculateGrade(@RequestBody GradeRequest request){
        return gradeService.calculateGrade(request);
    }
}

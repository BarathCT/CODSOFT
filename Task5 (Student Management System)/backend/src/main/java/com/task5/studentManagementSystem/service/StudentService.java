package com.task5.studentManagementSystem.service;

import com.task5.studentManagementSystem.entity.Student;
import com.task5.studentManagementSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id){
        return studentRepository.findById(id).orElse(null);
    }

    public Student getStudentByRollNumber(String rollNumber){
        return studentRepository.findByRollNumber(rollNumber);
    }

    public List<Student> searchStudentByName(String name){
        return studentRepository.findByNameContainingIgnoreCase(name);
    }

    public Student addStudent(Student student){
        if(studentRepository.existsByRollNumber(student.getRollNumber())){
            throw new IllegalArgumentException("Student with this roll number already exists");
        }
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student studentDetails){
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));

        student.setName(studentDetails.getName());
        student.setGrade(studentDetails.getGrade());
        student.setEmail(studentDetails.getEmail());
        student.setPhoneNumber(studentDetails.getPhoneNumber());
        return studentRepository.save(student);
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }
}

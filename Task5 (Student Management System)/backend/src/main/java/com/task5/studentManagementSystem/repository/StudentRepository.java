package com.task5.studentManagementSystem.repository;

import com.task5.studentManagementSystem.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByNameContainingIgnoreCase(String name);
    Student findByRollNumber(String rollNumber);
    boolean existsByRollNumber(String rollNumber);
}

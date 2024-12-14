package com.supplyhouse.backend.dao.repository;

import com.supplyhouse.backend.entities.SpecialHours;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SpecialHoursRepository extends JpaRepository<SpecialHours, Long> {
    List<SpecialHours> findByDateAfter(LocalDate date);
}
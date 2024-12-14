package com.supplyhouse.backend.service.impl;

import com.supplyhouse.backend.dao.repository.CustomerServiceHoursRepository;
import com.supplyhouse.backend.dao.repository.SpecialHoursRepository;
import com.supplyhouse.backend.dao.requests.SpecialHoursReq;
import com.supplyhouse.backend.dao.response.AppResponse;
import com.supplyhouse.backend.entities.CustomerServiceHours;
import com.supplyhouse.backend.entities.SpecialHours;
import com.supplyhouse.backend.service.HoursService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
@Service
public class HoursServiceImpl implements HoursService {
    private final CustomerServiceHoursRepository customerServiceHoursRepository;
    private final SpecialHoursRepository specialHoursRepository;

    public HoursServiceImpl(CustomerServiceHoursRepository customerServiceHoursRepository, SpecialHoursRepository specialHoursRepository) {
        this.customerServiceHoursRepository = customerServiceHoursRepository;
        this.specialHoursRepository = specialHoursRepository;
    }
    @Override
    public AppResponse getRegularHours() {
        AppResponse appResponse = new AppResponse();
        List<CustomerServiceHours> customerServiceHourList=customerServiceHoursRepository.findAll();
        if(!customerServiceHourList.isEmpty()){
            appResponse.setStatus(true);
            appResponse.setSuccessMessage("Customer Service hours found");
            appResponse.setData(customerServiceHourList);
        }else {
            appResponse.setErrorMsg("No customer service hours found");
            appResponse.setStatus(false);
        }
        return appResponse;
    }

    @Override
    public AppResponse getSpecialHours() {
        AppResponse appResponse = new AppResponse();
        List<SpecialHours> specialHourList=specialHoursRepository.findByDateAfter(LocalDate.now());
         if(!specialHourList.isEmpty()){
             appResponse.setStatus(true);
             appResponse.setSuccessMessage("Special hours found");
             appResponse.setData(specialHourList);
         }else {
             appResponse.setErrorMsg("No special hours found");
             appResponse.setStatus(false);
         }
         return appResponse;
    }

    @Override
    public AppResponse addSpecialHours(SpecialHoursReq request) {
        AppResponse appResponse = new AppResponse();
        try {
            SpecialHours specialHours = new SpecialHours();
            populateSpecialHours(request, specialHours);
            specialHoursRepository.save(specialHours);
            appResponse.setSuccessMessage("Added " + specialHours);
            appResponse.setStatus(true);
            appResponse.setStatusCode(200);
        } catch (Exception e) {
            appResponse.setErrorMsg("Adding specialHours failed due to exception: " + e.getMessage());
            appResponse.setStatus(false);
        }
        return appResponse;
    }

    private static void populateSpecialHours(SpecialHoursReq request, SpecialHours specialHours) {
        specialHours.setDate(request.getDate());
        specialHours.setReason(request.getReason());
        specialHours.setOpenTime(request.getOpenTime());
        specialHours.setCloseTime(request.getCloseTime());
    }
}

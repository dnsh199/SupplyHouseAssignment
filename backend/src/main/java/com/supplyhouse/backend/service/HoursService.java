package com.supplyhouse.backend.service;

import com.supplyhouse.backend.dao.requests.SpecialHoursReq;
import com.supplyhouse.backend.dao.response.AppResponse;
import com.supplyhouse.backend.entities.CustomerServiceHours;
import com.supplyhouse.backend.entities.SpecialHours;

import java.util.List;

public interface HoursService {
    AppResponse getRegularHours();
    AppResponse getSpecialHours();
    AppResponse addSpecialHours(SpecialHoursReq specialHours);
}

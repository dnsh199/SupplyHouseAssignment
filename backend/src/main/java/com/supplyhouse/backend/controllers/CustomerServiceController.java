package com.supplyhouse.backend.controllers;

import com.supplyhouse.backend.dao.requests.SpecialHoursReq;
import com.supplyhouse.backend.dao.response.AppResponse;
import com.supplyhouse.backend.service.HoursService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hours")
@Tag(name = "Customer Service Hours", description = "APIs for managing customer service regular and special hours")
public class CustomerServiceController {

    @Autowired
    private HoursService hoursService;

    @Operation(
            summary = "Get regular customer service hours",
            description = "Retrieve the regular customer service hours for the week.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Regular hours retrieved successfully", content = @Content(schema = @Schema(implementation = AppResponse.class))),
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }
    )
    @GetMapping("/regular")
    public AppResponse getRegularHours() {
        return hoursService.getRegularHours();
    }

    @Operation(
            summary = "Get special customer service hours",
            description = "Retrieve all configured special customer service hours.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Special hours retrieved successfully", content = @Content(schema = @Schema(implementation = AppResponse.class))),
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }
    )
    @GetMapping("/special")
    public AppResponse getSpecialHours() {
        return hoursService.getSpecialHours();
    }

    @Operation(
            summary = "Add special customer service hours",
            description = "Add new special customer service hours.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Special hours added successfully", content = @Content(schema = @Schema(implementation = AppResponse.class))),
                    @ApiResponse(responseCode = "400", description = "Invalid request data", content = @Content(schema = @Schema(implementation = AppResponse.class))),
                    @ApiResponse(responseCode = "500", description = "Internal server error")
            }
    )
    @PostMapping("/special")
    public AppResponse addSpecialHours(@RequestBody SpecialHoursReq request) {
        return hoursService.addSpecialHours(request);
    }
}

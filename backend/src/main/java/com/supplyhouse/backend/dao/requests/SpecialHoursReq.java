package com.supplyhouse.backend.dao.requests;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Schema(description = "Request body for adding special customer service hours")
public class SpecialHoursReq {

    @NotBlank
    @Schema(description = "Date for the special hours in YYYY-MM-DD format", example = "2024-12-14", type = "string", format = "date")
    private LocalDate date;

    @NotBlank
    @Schema(description = "Opening time in HH:mm:ss format", example = "08:00:00", type = "string", format = "time")
    private LocalTime openTime;

    @NotBlank
    @Schema(description = "Closing time in HH:mm:ss format", example = "19:45:00", type = "string", format = "time")
    private LocalTime closeTime;

    @Nullable
    @Schema(description = "Reason for the special hours", example = "Christmas Holiday")
    private String reason;
}

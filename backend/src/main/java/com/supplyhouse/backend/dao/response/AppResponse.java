package com.supplyhouse.backend.dao.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppResponse {
    private int statusCode;
    private boolean status = false;
    private String errorMsg;
    private Object data;
    private String successMessage;
}
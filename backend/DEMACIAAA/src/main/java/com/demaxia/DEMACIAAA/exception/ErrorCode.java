package com.demaxia.DEMACIAAA.exception;

public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error"),
    INVALID_KEY( 1001, "Invalid message key"),
    USER_EXISTED( 1002, "User existed"),
    USERNAME_INVALID( 1003, "TREN 3 KITU MOI DC"),
    PASSWORD_INVALID( 1004, "TREN 4 KITU MOI DC"),
    ORDER_EXISTED(2001, "Order with the same tracking number already exists"),
    ORDER_NOT_FOUND(2002, "Order tim kh thay"),
    USER_NOT_FOUND(2003, "USer tim kh thay")

            ;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    private int code;
    private String message;

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}

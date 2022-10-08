package com.toyreactjava.api.common;

public class ApiResponse<T> {
    public static final int OK = 200;
    public static final int BAD_REQUEST = 400;
    public static final int UNAUTHORIZED = 401;
    public static final int FORBIDDEN = 403;

    private final int status;
    private final String message;
    private final T result;

    public ApiResponse(int status, String message, T result){
        this.status = status;
        this.message = message;
        this.result = result;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage(){
        return message;
    }

    public T getResult(){
        return result;
    }
}

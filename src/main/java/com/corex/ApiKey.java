package com.corex;


public class ApiKey {

    private String key;

    private String userId;


    public ApiKey(
        String key,
        String userId
    ) {

        this.key = key;
        this.userId = userId;

    }


    public String getKey() {

        return key;

    }


    public String getUserId() {

        return userId;

    }

}

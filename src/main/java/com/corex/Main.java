package com.corex;


import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;



@SpringBootApplication
@RestController
public class Main {


    public static void main(
        String[] args
    ) {

        SpringApplication.run(
            Main.class,
            args
        );

    }



    @GetMapping("/health")
    public Object health() {

        return new Object() {

            public String status =
                "online";

            public String service =
                "corex-backend";

        };

    }



    @GetMapping("/api/user")
    public User user() {


        return new User(
            "001",
            "demo-user"
        );

    }


}

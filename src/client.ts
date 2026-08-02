import {
    CorexOptions,
    ChatResponse
} from "./types";


export class Corex {


    private endpoint: string;

    private apiKey?: string;



    constructor(
        options: CorexOptions = {}
    ) {

        this.endpoint =
            options.endpoint ||
            "http://localhost:8080";


        this.apiKey =
            options.apiKey;

    }



    async chat(
        prompt: string
    ): Promise<string> {


        const response =
            await fetch(
                `${this.endpoint}/v1/chat`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        ...(this.apiKey
                            ? {
                                "Authorization":
                                `Bearer ${this.apiKey}`
                            }
                            : {})

                    },


                    body:
                        JSON.stringify({
                            prompt
                        })

                }
            );


        const data =
            await response.json()
            as ChatResponse;


        return data.response;

    }

}

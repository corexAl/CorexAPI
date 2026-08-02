import { Corex } from "./dist/index.js";


const ai = new Corex({

    endpoint:
        "http://localhost:8080"

});


const answer =
    await ai.chat(
        "What is COREX?"
    );


console.log(answer);

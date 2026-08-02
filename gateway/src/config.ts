export const config = {
    port: Number(
        process.env.PORT || 8080
    ),

    engineUrl:
        process.env.ENGINE_URL ||
        "http://localhost:9000"
};

use axum::{
    Json,
    extract::State,
};

use serde::{
    Deserialize,
    Serialize,
};

use crate::model::CorexModel;


#[derive(Deserialize)]
pub struct ChatRequest {

    pub prompt: String,

}


#[derive(Serialize)]
pub struct ChatResponse {

    pub response: String,

}


pub async fn chat(
    State(model): State<CorexModel>,
    Json(request): Json<ChatRequest>,
)
-> Json<ChatResponse> {


    let output =
        model.generate(
            &request.prompt
        );


    Json(
        ChatResponse {
            response: output,
        }
    )

}

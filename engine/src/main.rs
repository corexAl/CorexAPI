mod model;
mod routes;


use axum::{
    routing::post,
    Router,
};

use model::CorexModel;
use routes::chat;

use std::sync::Arc;


#[tokio::main]
async fn main() {


    let model =
        Arc::new(
            CorexModel::new()
        );


    let app =
        Router::new()
            .route(
                "/v1/chat",
                post(chat)
            )
            .with_state(
                model
            );


    let listener =
        tokio::net::TcpListener::bind(
            "0.0.0.0:9000"
        )
        .await
        .unwrap();


    println!(
        "COREX Engine running on port 9000"
    );


    axum::serve(
        listener,
        app
    )
    .await
    .unwrap();

}

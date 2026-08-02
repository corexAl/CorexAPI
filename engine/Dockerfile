FROM rust:1.82


WORKDIR /app


COPY Cargo.toml .


COPY src ./src


RUN cargo build --release


EXPOSE 9000


CMD [
    "./target/release/corex-engine"
]

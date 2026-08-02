pub struct CorexModel {
    pub name: String,
}


impl CorexModel {

    pub fn new() -> Self {

        Self {
            name: "COREX".to_string(),
        }

    }


    pub fn generate(
        &self,
        prompt: &str,
    ) -> String {

        format!(
            "{} response: {}",
            self.name,
            prompt
        )

    }
}

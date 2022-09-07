#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use parser;
use napi::{Error, Status};

#[napi]
pub fn parse(unparsed: String) -> Result<String, Error> {
  let result = parser::parse(&unparsed);
  match result {
    Ok(test_def) => {
      Ok(serde_json::to_string(&test_def).unwrap())
    },
    Err(e) => {
      Err(Error::new(Status::GenericFailure, e.to_string()))
    }
  }
}

// necesary cretes
use sails_rs::{
    prelude::*,
    gstd::msg
};

// import the state
use crate::states::traffic_light_state::{
    TrafficLightState,
    IoTrafficLightState
};

use keyring_service::services::{
    keyring_service::KeyringService,
    keyring_query_service::KeyringQueryService
};

// Traffic light service struct to build the service 
pub struct TrafficLightService {
    keyring_service: KeyringService,
    keyring_query_service: KeyringQueryService
}

// Impl for seed related function to init the state
impl TrafficLightService {
    // Related function to init the service state (call only once)
    // Another related function is created that initializes the state 
    // to avoid unnecessary imports in the "lib.rs" file, you can see 
    // that it remains more "structured"
    pub fn seed() {
        TrafficLightState::init_state();
    }
}

// Trffic light service
#[service(extends = [KeyringService, KeyringQueryService])]
impl TrafficLightService {
    // Service constructor
    pub fn new() -> Self {
        Self {
            keyring_service: KeyringService::new(),
            keyring_query_service: KeyringQueryService::new()
        }
    }

    // Remote call "green" exposed to external consumers
    // Returns a struct that will be sent as a response to the user
    // Is treated as a command changing the state (&mut self)
    pub fn green(&mut self) -> TrafficLightEvent {
        // // Get state as mut
        // let traffic_light_state = traffic_light_state_mut();

        let current_light = "Green".to_string();

        // Changing state
        TrafficLightState::state_mut()
            .current_light = current_light.clone();

        TrafficLightState::state_mut()
            .all_users
            .insert(msg::source().into(), current_light);

        // returning the response
        TrafficLightEvent::Green
    }

    // Remote call "yellow" exposed to external consumers
    // Returns a struct that will be sent as a response to the user
    // Is treated as a command changing the state (&mut self)
    pub fn yellow(&mut self) -> TrafficLightEvent {
        // // Get state as mut
        // let traffic_light_state = traffic_light_state_mut();

        let current_light = "Yellow".to_string();

        // Changing state
        TrafficLightState::state_mut()
            .current_light = current_light.clone();
        TrafficLightState::state_mut()
            .all_users
            .insert(msg::source().into(), current_light);

        // returning the response
        TrafficLightEvent::Yellow
    }

    // Remote call "yellow" exposed to external consumers
    // Returns a struct that will be sent as a response to the user
    // Is treated as a command changing the state (&mut self)
    pub fn red(&mut self) -> TrafficLightEvent {
        // // Get state as mut
        // let traffic_light_state = traffic_light_state_mut();

        let current_light = "Red".to_string();

        // Changing state
        TrafficLightState::state_mut()
            .current_light = current_light.clone();
        TrafficLightState::state_mut()
            .all_users
            .insert(msg::source().into(), current_light);

        // returning the response
        TrafficLightEvent::Red
    }

    // Remote call "traffic_light" exposed to external consumers
    // Returns a struct that will be sent as a response to the user
    // Is treated as a query, keeping everything unchanged and returning some data. (&self)
    pub fn traffic_light(&self) -> IoTrafficLightState {
        TrafficLightState::state_ref()
            .to_owned()
            .into()
    }
}

impl AsRef<KeyringService> for TrafficLightService {
    fn as_ref(&self) -> &KeyringService {
        // You have to return a reference to the attribute that 
        // you specified to store the keyring service
        &self.keyring_service
    }
}

impl AsRef<KeyringQueryService> for TrafficLightService {
    fn as_ref(&self) -> &KeyringQueryService {
        // You have to return a reference to the attribute that 
        // you specified to store the keyring query service
        &self.keyring_query_service
    }
}

// struct to use as a response to the user
#[derive(Encode, Decode, TypeInfo)]
#[codec(crate = sails_rs::scale_codec)]
#[scale_info(crate = sails_rs::scale_info)]

pub enum TrafficLightEvent {
    Green,
    Yellow,
    Red
}





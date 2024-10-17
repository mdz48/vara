# Traffic light contract

To compile the contract yo need yo enter in 'wasm' and then put:

cargo build --release

## Architecture

A contract consists of two directories:
-	App: Where lives all business logic.
-	Wasm: Where the contract is built and the IDL is generated 

## Walletless feature

This contract contains the signless and walletless feature, it extends the services "KeyringService" and  "KeyringQueryService" in "TrafficLightService" from the [keyring-service repository](https://github.com/Vara-Lab/Contracts-Services/tree/main/keyring-service)

### Services

- TrafficLightService:

    This service extends both contracts `KeyringQueryService` and `KeyringService`, which will give all commands and querires of this services. It contains extra fields that will contains the extended services:
    
    ```rust
    // Main service
    pub struct TrafficLightService {
        // To extend the wallet less service (and others services), yo need to create
        // an atribute to "store" the service
        keyring_service: KeyringService,
        keyring_query_service: KeyringQueryService
    }
    ```

    This implements the "AsRef" trait on keyring services, for service TrafficLightService which will extend said services:

    ```rust
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
    ```

- KeyringService:

    This service comes from the [KeyringService](https://github.com/Vara-Lab/Contracts-Services/tree/main/keyring-service) repository, to use it, you just have to put it as another service in the program (This contract already implement it):

    ```rust
    // code ...

    #[derive(Default)]
    pub struct Porgram;

    #[program]
    impl Program {
        #[route("KeyringService")]
        pub fn keyring_svc(&self) -> KeyringService {
            KeyringService::new()
        }

        // code ...
    }
    ```
import { HexString } from '@gear-js/api';

interface ContractSails {
  programId: HexString,
  idl: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: 'wss://testnet.vara.network', // import.meta.env.VITE_NODE_ADDRESS,
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  DENUNTIATION: '/denuntiation',
  EMPRESA: '/empresa',
  HOUSE: '/house',
  REGISTER: '/register',
  NOTFOUND: '*',
};

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
export const sponsorName = "Alice";
export const sponsorMnemonic = "bottom drive obey lake curtain smoke basket hold race lonely fit walk";

export const CONTRACT_DATA: ContractSails = {
  programId: '0x484313fec847994255f3ab1bdd9d243e80732d3e12b63555c7539a313594fbcb',
  idl: `
    type KeyringData = struct {
  address: str,
  encoded: str,
};

type KeyringEvent = enum {
  KeyringAccountSet,
  Error: KeyringError,
};

type KeyringError = enum {
  KeyringAddressAlreadyEsists,
  UserAddressAlreadyExists,
  UserCodedNameAlreadyExists,
  UserDoesNotHasKeyringAccount,
  KeyringAccountAlreadyExists,
  SessionHasInvalidCredentials,
  UserAndKeyringAddressAreTheSame,
};

type KeyringQueryEvent = enum {
  LastWhoCall: actor_id,
  SignlessAccountAddress: opt actor_id,
  SignlessAccountData: opt KeyringData,
};

type PersonReport = struct {
  firstname_denuncied: str,
  lastname_denuncied: str,
  img_denuncied: str,
  description_denuncied: str,
  age_denuncied: u128,
};

type Category = enum {
  FaltasALaProbidadAdministrativa,
  MalUsoDeRecursos,
  Robo,
  TraficoDeInfluencias,
  Maltrato,
  AcosoLaboral,
  AcosoSexual,
  DiscriminacionArbitraria,
  ConflictoDeInteres,
  UsoDeInformacionReservada,
  Soborno,
  IntentoDeAsesinato,
  AgresionFisica,
  AgresionVerbal,
  Violacion,
  OperacionSospechosa,
  Estafa,
  Amenaza,
  Otros,
};

type ReportDataMent = struct {
  person_report: PersonReport,
  report_id: u128,
  details: str,
  is_public: bool,
  description: str,
  category: Category,
  otro: opt str,
};

type Enterprise = struct {
  name: str,
  code_post: str,
  location: str,
  hour: str,
  name_owner: str,
};

constructor {
  New : ();
};

service Keyring {
  BindKeyringDataToUserAddress : (user_address: actor_id, keyring_data: KeyringData) -> KeyringEvent;
  BindKeyringDataToUserCodedName : (user_coded_name: str, keyring_data: KeyringData) -> KeyringEvent;
  query KeyringAccountData : (keyring_address: actor_id) -> KeyringQueryEvent;
  query KeyringAddressFromUserAddress : (user_address: actor_id) -> KeyringQueryEvent;
  query KeyringAddressFromUserCodedName : (user_coded_name: str) -> KeyringQueryEvent;
};

service ReportService {
  CreatedReport : (person_report: PersonReport, report_id: u128, details: str, is_public: bool, description: str, category: Category, otro: opt str) -> ReportDataMent;
  query GetAllEnterprises : () -> vec Enterprise;
  query GetAllReports : () -> vec ReportDataMent;
};
  `
};
import { ContractService as ContractServiceInterface } from '../services'
import { Network } from '../../contract/types'
import { NFTCategory } from '../../nft/types'
import { TransferType } from '../types'

const network = process.env.REACT_APP_NETWORK! as Network

const contractAddresses = {
  [Network.ROPSTEN]: {
    MANAToken: '0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb',
    LANDRegistry: '0x7a73483784ab79257bb11b96fd62a2c3ae4fb75b',
    EstateRegistry: '0x124bf28a423b2ca80b3846c3aa0eb944fe7ebb95',
    Marketplace: '0x5424912699dabaa5f2998750c1c66e73d67ad219',
    Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    DCLRegistrar: '0xeb6f5d94d79f0750781cc962908b161b95192f53',

    BinanceUsCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    ChinaFlyingCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    CommunityContestCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    CybermikeCyberSoldierCollection:
      '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    CZMercenaryMTZCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DappcraftMoonminerCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DCGCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DCLLaunchCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DCMetaCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DCNiftyblocksmithCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DGFall2020Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DGSummer2020Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DgtbleHeadspaceCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    DigitalAlchemyCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    EtheremonWearablesCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    ExclusiveMasksCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    Halloween2019Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    Halloween2020Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    MCHCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    MFSammichgamerCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    MLPekingoperaCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    Moonshot2020Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    PMDreamverseEminenceCollection:
      '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    PMOuttathisworldCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    StaySafeCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    SugarclubYumiCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    TechTribalMarc0maticCollection:
      '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    WonderzoneMeteorchaserCollection:
      '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    WonderzoneSteampunkCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    WZWonderbotCollection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0',
    Xmas2019Collection: '0x30ae57840b0e9b8ea55334083d53d80b2cfe80e0'
  },
  [Network.MAINNET]: {
    MANAToken: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    LANDRegistry: '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d',
    EstateRegistry: '0x959e104e1a4db6317fa58f8295f586e1a978c297',
    Marketplace: '0x8e5660b4ab70168b5a6feea0e0315cb49c8cd539',
    Bids: '0xe479dfd9664c693b2e2992300930b00bfde08233',
    DCLRegistrar: '0x2a187453064356c898cae034eaed119e1663acb8',

    BinanceUsCollection: '0xa8ee490e4c4da48cc1653502c1a77479d4d818de',
    ChinaFlyingCollection: '0x90958d4531258ca11d18396d4174a007edbc2b42',
    CommunityContestCollection: '0x32b7495895264ac9d0b12d32afd435453458b1c6',
    CybermikeCyberSoldierCollection:
      '0x24d538a6265b006d4b53c45ba91af5ef60dca6cb',
    CZMercenaryMTZCollection: '0xc3ca6c364b854fd0a653a43f8344f8c22ddfdd26',
    DappcraftMoonminerCollection: '0x1e1d4e6262787c8a8783a37fee698bd42aa42bec',
    DCGCollection: '0x3163d2cfee3183f9874e2869942cc62649eeb004',
    DCLLaunchCollection: '0xd35147be6401dcb20811f2104c33de8e97ed6818',
    DCMetaCollection: '0xe7a64f6a239ed7f5bf18caa1ce2920d0c1278129',
    DCNiftyblocksmithCollection: '0x102daabd1e9d294d4436ec4c521dce7b1f15499e',
    DGFall2020Collection: '0x7038e9d2c6f5f84469a84cf9bc5f4909bb6ac5e0',
    DGSummer2020Collection: '0xbf53c33235cbfc22cef5a61a83484b86342679c5',
    DgtbleHeadspaceCollection: '0x574f64ac2e7215cba9752b85fc73030f35166bc0',
    DigitalAlchemyCollection: '0x5cf39e64392c615fd8086838883958752a11b486',
    EtheremonWearablesCollection: '0x54266bcf2ffa841af934f003d144957d5934f3ab',
    ExclusiveMasksCollection: '0xc04528c14c8ffd84c7c1fb6719b4a89853035cdd',
    Halloween2019Collection: '0xc1f4b0eea2bd6690930e6c66efd3e197d620b9c2',
    Halloween2020Collection: '0xfeb52cbf71b9adac957c6f948a6cf9980ac8c907',
    MCHCollection: '0xf64dc33a192e056bb5f0e5049356a0498b502d50',
    MFSammichgamerCollection: '0x30d3387ff3de2a21bef7032f82d00ff7739e403c',
    MLPekingoperaCollection: '0x60d8271c501501c4b8cd9ed5343ac59d1b79d993',
    Moonshot2020Collection: '0x6a99abebb48819d2abe92c5e4dc4f48dc09a3ee8',
    PMDreamverseEminenceCollection:
      '0x09305998a531fade369ebe30adf868c96a34e813',
    PMOuttathisworldCollection: '0x75a3752579dc2d63ca229eebbe3537fbabf85a12',
    StaySafeCollection: '0x201c3af8c471e5842428b74d1e7c0249adda2a92',
    SugarclubYumiCollection: '0xb5d14052d1e2bce2a2d7459d0379256e632b855d',
    TechTribalMarc0maticCollection:
      '0x480a0f4e360e8964e68858dd231c2922f1df45ef',
    WonderzoneMeteorchaserCollection:
      '0x34ed0aa248f60f54dd32fbc9883d6137a491f4f3',
    WonderzoneSteampunkCollection: '0xb96697fa4a3361ba35b774a42c58daccaad1b8e1',
    WZWonderbotCollection: '0x5df4602e7f38a91ea7724fc167f0c67f61604b1e',
    Xmas2019Collection: '0xc3af02c0fd486c8e9da5788b915d6fff3f049866'
  }
}[network]

const {
  MANAToken,
  LANDRegistry,
  EstateRegistry,
  Marketplace,
  Bids,
  DCLRegistrar,

  BinanceUsCollection,
  ChinaFlyingCollection,
  CommunityContestCollection,
  CybermikeCyberSoldierCollection,
  CZMercenaryMTZCollection,
  DappcraftMoonminerCollection,
  DCGCollection,
  DCLLaunchCollection,
  DCMetaCollection,
  DCNiftyblocksmithCollection,
  DGFall2020Collection,
  DGSummer2020Collection,
  DgtbleHeadspaceCollection,
  DigitalAlchemyCollection,
  EtheremonWearablesCollection,
  ExclusiveMasksCollection,
  Halloween2019Collection,
  Halloween2020Collection,
  MCHCollection,
  MFSammichgamerCollection,
  MLPekingoperaCollection,
  Moonshot2020Collection,
  PMDreamverseEminenceCollection,
  PMOuttathisworldCollection,
  StaySafeCollection,
  SugarclubYumiCollection,
  TechTribalMarc0maticCollection,
  WonderzoneMeteorchaserCollection,
  WonderzoneSteampunkCollection,
  WZWonderbotCollection,
  Xmas2019Collection
} = contractAddresses

export type ContractName = keyof typeof contractAddresses

export class ContractService implements ContractServiceInterface {
  static contractAddresses = contractAddresses

  contractAddresses = contractAddresses

  contractSymbols = {
    [MANAToken]: 'MANA',
    [LANDRegistry]: 'LAND',
    [EstateRegistry]: 'Estates',
    [Marketplace]: 'Marketplace',
    [Bids]: 'Bids',
    [DCLRegistrar]: 'Names',
    [BinanceUsCollection]: 'Binance Us',
    [CommunityContestCollection]: 'Community Contest',
    [DappcraftMoonminerCollection]: 'Dappcraft Moonminer',
    [DCGCollection]: 'DCG',
    [DCLLaunchCollection]: 'DCL Launch',
    [DGSummer2020Collection]: 'DG Summer',
    [DgtbleHeadspaceCollection]: 'Dgtble Headspace',
    [ExclusiveMasksCollection]: 'Exclusive Masks',
    [Halloween2019Collection]: 'Halloween2019',
    [Halloween2020Collection]: 'Halloween2020',
    [MCHCollection]: 'MCH',
    [Moonshot2020Collection]: 'Moonshot',
    [PMOuttathisworldCollection]: 'PM Outtathisworld',
    [StaySafeCollection]: 'Stay Safe',
    [WonderzoneMeteorchaserCollection]: 'Wonderzone Meteorcharser',
    [Xmas2019Collection]: 'Xmas',
    [ChinaFlyingCollection]: 'China Flying',
    [CybermikeCyberSoldierCollection]: 'Cybermike CyberSoldier Set',
    [CZMercenaryMTZCollection]: 'CZ Mercenary MTZ',
    [DCMetaCollection]: 'DC Meta',
    [DCNiftyblocksmithCollection]: 'DC Niftyblocksmith',
    [DGFall2020Collection]: 'DG Fall 2020',
    [DigitalAlchemyCollection]: 'Digital Alchemy',
    [EtheremonWearablesCollection]: 'Ethermon Wearables',
    [MFSammichgamerCollection]: 'MF Sammichgamer',
    [MLPekingoperaCollection]: 'ML Pekingopera',
    [PMDreamverseEminenceCollection]: 'PM Dreamverse Eminence',
    [SugarclubYumiCollection]: 'Sugarclub Yumi',
    [TechTribalMarc0maticCollection]: 'Tech Tribal Marc0matic',
    [WonderzoneSteampunkCollection]: 'Wonderzone Steampunk',
    [WZWonderbotCollection]: 'WZ Wonderbot'
  } as const

  contractNames = {
    [MANAToken]: 'MANAToken',
    [LANDRegistry]: 'LANDRegistry',
    [EstateRegistry]: 'EstateRegistry',
    [DCLRegistrar]: 'DCLRegistrar',
    [Marketplace]: 'Marketplace',
    [Bids]: 'ERC721Bid',

    [BinanceUsCollection]: 'BinanceUsCollection',
    [ChinaFlyingCollection]: 'ChinaFlyingCollection',
    [CommunityContestCollection]: 'CommunityContestCollection',
    [CybermikeCyberSoldierCollection]: 'CybermikeCyberSoldierCollection',
    [CZMercenaryMTZCollection]: 'CZMercenaryMTZCollection',
    [DappcraftMoonminerCollection]: 'DappcraftMoonminerCollection',
    [DCGCollection]: 'DCGCollection',
    [DCLLaunchCollection]: 'DCLLaunchCollection',
    [DCMetaCollection]: 'DCMetaCollection',
    [DCNiftyblocksmithCollection]: 'DCNiftyblocksmithCollection',
    [DGFall2020Collection]: 'DGFall2020Collection',
    [DGSummer2020Collection]: 'DGSummer2020Collection',
    [DgtbleHeadspaceCollection]: 'DgtbleHeadspaceCollection',
    [DigitalAlchemyCollection]: 'DigitalAlchemyCollection',
    [EtheremonWearablesCollection]: 'EtheremonWearablesCollection',
    [ExclusiveMasksCollection]: 'ExclusiveMasksCollection',
    [Halloween2019Collection]: 'Halloween2019Collection',
    [Halloween2020Collection]: 'Halloween2020Collection',
    [MCHCollection]: 'MCHCollection',
    [MFSammichgamerCollection]: 'MFSammichgamerCollection',
    [MLPekingoperaCollection]: 'MLPekingoperaCollection',
    [Moonshot2020Collection]: 'Moonshot2020Collection',
    [PMDreamverseEminenceCollection]: 'PMDreamverseEminenceCollection',
    [PMOuttathisworldCollection]: 'PMOuttathisworldCollection',
    [StaySafeCollection]: 'StaySafeCollection',
    [SugarclubYumiCollection]: 'SugarclubYumiCollection',
    [TechTribalMarc0maticCollection]: 'TechTribalMarc0maticCollection',
    [WonderzoneMeteorchaserCollection]: 'WonderzoneMeteorchaserCollection',
    [WonderzoneSteampunkCollection]: 'WonderzoneSteampunkCollection',
    [WZWonderbotCollection]: 'WZWonderbotCollection',
    [Xmas2019Collection]: 'Xmas2019Collection'
  } as const

  contractCategories = {
    [LANDRegistry]: NFTCategory.PARCEL,
    [EstateRegistry]: NFTCategory.ESTATE,
    [DCLRegistrar]: NFTCategory.ENS,

    [BinanceUsCollection]: NFTCategory.WEARABLE,
    [ChinaFlyingCollection]: NFTCategory.WEARABLE,
    [CommunityContestCollection]: NFTCategory.WEARABLE,
    [CybermikeCyberSoldierCollection]: NFTCategory.WEARABLE,
    [CZMercenaryMTZCollection]: NFTCategory.WEARABLE,
    [DappcraftMoonminerCollection]: NFTCategory.WEARABLE,
    [DCGCollection]: NFTCategory.WEARABLE,
    [DCLLaunchCollection]: NFTCategory.WEARABLE,
    [DCMetaCollection]: NFTCategory.WEARABLE,
    [DCNiftyblocksmithCollection]: NFTCategory.WEARABLE,
    [DGFall2020Collection]: NFTCategory.WEARABLE,
    [DGSummer2020Collection]: NFTCategory.WEARABLE,
    [DgtbleHeadspaceCollection]: NFTCategory.WEARABLE,
    [DigitalAlchemyCollection]: NFTCategory.WEARABLE,
    [EtheremonWearablesCollection]: NFTCategory.WEARABLE,
    [ExclusiveMasksCollection]: NFTCategory.WEARABLE,
    [Halloween2019Collection]: NFTCategory.WEARABLE,
    [Halloween2020Collection]: NFTCategory.WEARABLE,
    [MCHCollection]: NFTCategory.WEARABLE,
    [MFSammichgamerCollection]: NFTCategory.WEARABLE,
    [MLPekingoperaCollection]: NFTCategory.WEARABLE,
    [Moonshot2020Collection]: NFTCategory.WEARABLE,
    [PMDreamverseEminenceCollection]: NFTCategory.WEARABLE,
    [PMOuttathisworldCollection]: NFTCategory.WEARABLE,
    [StaySafeCollection]: NFTCategory.WEARABLE,
    [SugarclubYumiCollection]: NFTCategory.WEARABLE,
    [TechTribalMarc0maticCollection]: NFTCategory.WEARABLE,
    [WonderzoneMeteorchaserCollection]: NFTCategory.WEARABLE,
    [WonderzoneSteampunkCollection]: NFTCategory.WEARABLE,
    [WZWonderbotCollection]: NFTCategory.WEARABLE,
    [Xmas2019Collection]: NFTCategory.WEARABLE
  } as const

  getTransferType(_address: string) {
    return TransferType.SAFE_TRANSFER_FROM
  }
}

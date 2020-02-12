import { FetchNFTsSuccessAction, FETCH_NFTS_SUCCESS } from '../nft/actions'
import { View } from './types'
import {
  FETCH_BIDS_BY_ADDRESS_SUCCESS,
  FetchBidsByAddressSuccessAction,
  ArchiveBidAction,
  UnarchiveBidAction,
  ARCHIVE_BID,
  UNARCHIVE_BID,
  FetchBidsByNFTSuccessAction,
  FETCH_BIDS_BY_NFT_SUCCESS
} from '../bid/actions'

export type UIState = {
  nftIds: string[]
  homepageWearableIds: string[]
  homepageLandIds: string[]
  homepageENSIds: string[]
  sellerBidIds: string[]
  bidderBidIds: string[]
  archivedBidIds: string[]
  nftBidIds: string[]
}

const INITIAL_STATE: UIState = {
  nftIds: [],
  homepageWearableIds: [],
  homepageLandIds: [],
  homepageENSIds: [],
  sellerBidIds: [],
  bidderBidIds: [],
  archivedBidIds: [],
  nftBidIds: []
}

type UIReducerAction =
  | FetchNFTsSuccessAction
  | FetchBidsByAddressSuccessAction
  | FetchBidsByNFTSuccessAction
  | ArchiveBidAction
  | UnarchiveBidAction

export function uiReducer(
  state: UIState = INITIAL_STATE,
  action: UIReducerAction
) {
  switch (action.type) {
    case FETCH_NFTS_SUCCESS: {
      switch (action.payload.options.view) {
        case View.MARKET:
        case View.ACCOUNT: {
          return {
            ...state,
            nftIds: action.payload.nfts.map(nft => nft.id)
          }
        }
        case View.LOAD_MORE: {
          return {
            ...state,
            nftIds: [...state.nftIds, ...action.payload.nfts.map(nft => nft.id)]
          }
        }
        case View.HOME_WEARABLES: {
          return {
            ...state,
            homepageWearableIds: action.payload.nfts.map(nft => nft.id)
          }
        }
        case View.HOME_LAND: {
          return {
            ...state,
            homepageLandIds: action.payload.nfts.map(nft => nft.id)
          }
        }
        case View.HOME_ENS: {
          return {
            ...state,
            homepageENSIds: action.payload.nfts.map(nft => nft.id)
          }
        }
        default:
          return state
      }
    }
    case FETCH_BIDS_BY_ADDRESS_SUCCESS: {
      const { seller, bidder } = action.payload
      return {
        ...state,
        sellerBidIds: seller.map(bid => bid.id),
        bidderBidIds: bidder.map(bid => bid.id)
      }
    }
    case FETCH_BIDS_BY_NFT_SUCCESS: {
      const { bids } = action.payload
      return {
        ...state,
        nftBidIds: bids.map(bid => bid.id)
      }
    }
    case ARCHIVE_BID: {
      const { bid } = action.payload
      return {
        ...state,
        archivedBidIds: [
          ...state.archivedBidIds.filter(id => id !== bid.id),
          bid.id
        ]
      }
    }
    case UNARCHIVE_BID: {
      const { bid } = action.payload
      return {
        ...state,
        archivedBidIds: [...state.archivedBidIds.filter(id => id !== bid.id)]
      }
    }
    default:
      return state
  }
}

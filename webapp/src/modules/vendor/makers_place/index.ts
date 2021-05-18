import { NFTService } from './NFTService'
import { ContractService } from './ContractService'
import { OrderService } from './OrderService'

export const VendorName = 'makers_place'

export * from './types'
export * from './nft'
export * from './routing'

export * from './NFTService'
export * from './ContractService'
export * from './OrderService'
export const services = {
  NFTService,
  ContractService,
  OrderService
}

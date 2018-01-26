import {RestServiceClient} from './RestServiceClient'
import {ETH_SCAN_API_URL, ETH_SCAN_API_KEY} from 'react-native-dotenv'

export class EtherScanService extends RestServiceClient {
  constructor (walletAddress) {
    super(ETH_SCAN_API_URL)
    this.walletAddress = walletAddress
  }

  fetchTransactionList () {
    const params = {
      module: 'account',
      action: 'txlist',
      address: this.walletAddress,
      apiKey: ETH_SCAN_API_KEY
    }

    return this.GET('/api', { params })
  }
}
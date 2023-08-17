import { memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { getAnalytics } from 'decentraland-dapps/dist/modules/analytics/utils'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Button, Icon, Mana } from 'decentraland-ui'
import { locations } from '../../../../modules/routing/locations'
import * as events from '../../../../utils/events'
import { Props } from './BuyNFTButtons.types'
import styles from './BuyNFTButtons.module.css'

const BuyNFTButtons = ({ assetType, contractAddress, network, tokenId, itemId, buyWithCardClassName }: Props) => {
  const assetId = tokenId || itemId

  const analytics = getAnalytics()

  const handleBuyWithCard = useCallback(() => {
    analytics.track(events.CLICK_GO_TO_BUY_NFT_WITH_CARD)
  }, [analytics])

  return (
    <>
      <Button as={Link} to={locations.buy(assetType, contractAddress, assetId)} primary fluid>
        <Mana showTooltip inline size="small" network={network} />
        {t('asset_page.actions.buy_with_mana')}
      </Button>

      <Button
        as={Link}
        className={`${styles.buy_with_card} ${buyWithCardClassName}`}
        to={locations.buyWithCard(assetType, contractAddress, assetId)}
        onClick={handleBuyWithCard}
        fluid
      >
        <Icon name="credit card outline" />
        {t('asset_page.actions.buy_with_card')}
      </Button>
    </>
  )
}

export default memo(BuyNFTButtons)

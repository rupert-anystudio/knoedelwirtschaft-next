import Script from 'next/script'
import { useRouter } from 'next/router'

const ZenchefMultivenueScript = () => {
  const {locale} = useRouter()
  return (
    <>
      <Script
        id="zenchef-sdk"
        strategy='afterInteractive'
        src="https://sdk.zenchef.com/v1/sdk.min.js"
      />
      <div
        className="zc-widget-config"
        data-multivenue="opid_TBMR0HN3"
        data-lang={locale}
        data-position="right"
      />
    </>
  )
}

export default ZenchefMultivenueScript

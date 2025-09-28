import headerImage from '../../logo-newWhite.png'
export function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src={headerImage} />
            <img className="mobile-logo" src={headerImage} />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            3 items
          </a>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}

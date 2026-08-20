import { useState } from "react"

export default function Topbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <nav className="topbar">
      <div className="wrap">
        <div className="logo-and-name">
          <div className="virovek-logo-div">
            <img src="images/Virovek-Logo-Web-300x103.png" className="virovek-logo" />
          </div>
          Subdomain Name
        </div>
        <button className={`hamburger hamburger--slider ${hamburgerOpen ? "is-active" : ""}`} type="button" onClick={() => {
          setHamburgerOpen(!hamburgerOpen)
        }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button> 

        {/* links when desktop */}
        <div className="links">
          <div>
            <a href="https://store.virovek.com/" target="_blank" rel="noreferrer">Products</a>
          </div>
          <div>
            <a href="https://store.virovek.com/forms/custom" target="_blank" rel="noreferrer">Custom AAV Request</a>
          </div>
        </div>

        {/* links when mobile */}
        {
          hamburgerOpen ?
            <div className={`links ${hamburgerOpen ? "mobile-menu" : "mobile-menu-hidden"}`}>
              <div className="wrap">
                <div>
                  <a href="https://store.virovek.com/" target="_blank" rel="noreferrer">Product Catalog</a>
                </div>
                <div>
                  <a href="https://store.virovek.com/forms/custom" target="_blank" rel="noreferrer">Custom AAV Request</a>
                </div>
              </div>
            </div>
            : null
        }

      </div>
    </nav>
  )
}
import { useState } from "react"
import MobileMenu from "./mobile-menu"

export default function Topbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <nav className="topbar">
      <div className="wrap">
        <div>Virovek Subdomain Name</div>
        <button className={`hamburger hamburger--slider ${hamburgerOpen ? "is-active" : ""}`} type="button" onClick={() => {
          setHamburgerOpen(!hamburgerOpen)
        }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="links">
          <div>
            <a href="https://store.virovek.com/" target="_blank" rel="noreferrer">Product Catalog</a>
          </div>
          <div>
            <a href="https://store.virovek.com/forms/custom" target="_blank" rel="noreferrer">Custom AAV Request</a>
          </div>
        </div>
        <MobileMenu open={hamburgerOpen} />

      </div>
    </nav>
  )
}
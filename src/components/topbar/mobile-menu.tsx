export default function MobileMenu({ open }: {
  open: boolean
}) {
  return (
    <div className={`links ${open ? "mobile-menu" : "mobile-menu-hidden"}`}>
      <div className="wrap">
        <div>
          <a href="https://store.virovek.com/" target="_blank" rel="noreferrer">Product Catalog</a>
        </div>
        <div>
          <a href="https://store.virovek.com/forms/custom" target="_blank" rel="noreferrer">Custom AAV Request</a>
        </div>
      </div>
    </div>
  )
}
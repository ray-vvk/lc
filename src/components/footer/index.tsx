import vvkLogo from "../../../images/Virovek-Logo-Web-300x103.png"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-flex-left">
            <div className="virovek-logo-div">
              <img src={vvkLogo} className="virovek-logo" />
            </div>
            <div>
              <strong>Virovek Inc.</strong><br />
              Advanced AAV manufacturing and capsid engineering solutions<br />
              <a href="https://virovek.com/" target="_blank" rel="noreferrer">virovek.com</a> · <a
                href="mailto:info@virovek.com">info@virovek.com</a>
            </div>
          </div>
          <p><strong>No-AI article policy</strong> · Every article in the learning center has been written and edited by
            team
            members at Virovek, because we care enough to put in the effort ourselves.</p>
        </div>
      </footer>
    </>
  )
}
import "./Body/body.css";
import "./Header/styles/NavbarTop.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="center">
        <div className="foo-1">
          <div className="foo1-para">
            <p>
              Stay ahead in a rapidly changing world. Subscribe to Bain
              Insights, our monthly look at the critical issues facing global
              businesses.
            </p>
          </div>

          <div className="foo1-inp">
            <input placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <img
          className="foo-img"
          src="https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_white.svg"
        />

        <div className="last">
          <ul className="foo-list">
            <li>Contact us</li>
            <li>Sustainability</li>
            <li>Accessibility</li>
            <li>Terms of use Privacy</li>
            <li>Cookie</li>
            <li>Policy</li>
            <li>Sitemap</li>
            <li>Log In</li>
          </ul>
          <p className="copyright">© 1996-2023 Bain & Company, Inc.</p>
        </div>
      </div>
    </div>
  );
}

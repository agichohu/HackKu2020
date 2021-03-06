import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/home"
                  target="_blank"
                >
                  TEAM AKA
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Team AKA
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

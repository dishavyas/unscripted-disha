import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const whatsappLink =
  "https://wa.me/916267481715?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20work%20with%20you.";

const footerLinks = {
  Explore: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
  ],

  Services: [
    {
      name: "AI Cinematic Reels",
      link: "/packages/ai-cinematic-reels",
    },
    {
      name: "Script Writing",
      link: "/packages/script-writing",
    },
    {
      name: "AI Voiceover",
      link: "/packages/ai-voiceover",
    },
    {
      name: "Video Editing",
      link: "/packages/video-editing",
    },
    {
      name: "MERN Websites",
      link: "/packages/mern-websites",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">


      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="footer-background">

        <div className="footer-glow footer-glow-one"></div>

        <div className="footer-glow footer-glow-two"></div>

        <div className="footer-grid"></div>

      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-container">


        {/* =========================================
            TOP CTA
        ========================================= */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span className="footer-label">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's make it
              <br />

              <span>cinematic.</span>
            </h2>

            <p>
              From an idea in your head to a reel
              people can't stop watching.
            </p>

          </div>


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-button"
          >

            <WhatsAppIcon />

            Start a Project

            <ArrowOutwardRoundedIcon />

          </a>

        </div>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            FOOTER CONTENT
        ========================================= */}

        <div className="footer-main">


          {/* =====================================
              BRAND
          ===================================== */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo"
            >
              Unscripted{" "}

              <span>
                Disha
              </span>
            </a>


            <p>
              AI-powered cinematic storytelling,
              visual experiences and digital
              creativity crafted to make people
              stop scrolling.
            </p>


            <div className="footer-socials">

              <a
                href="https://www.instagram.com/unscripteddisha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>


              <a
                href="https://www.youtube.com/@UnscriptedDisha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>


              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

            </div>

          </div>


          {/* =====================================
              EXPLORE
          ===================================== */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            {footerLinks.Explore.map(
              (item) => (

                <a
                  key={item.name}
                  href={item.link}
                >
                  {item.name}
                </a>

              )
            )}

          </div>


          {/* =====================================
              SERVICES
          ===================================== */}

          <div className="footer-column">

            <h3>
              Services
            </h3>

            {footerLinks.Services.map(
              (item) => (

                <a
                  key={item.name}
                  href={item.link}
                >
                  {item.name}
                </a>

              )
            )}

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}

          <div className="footer-column footer-contact">

            <h3>
              Let's Talk
            </h3>


            <span>
              Available for creative
              collaborations.
            </span>


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >

              <WhatsAppIcon />

              WhatsApp Me

            </a>

          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Unscripted Disha.
            All rights reserved.
          </span>


          <span className="footer-made">

            Made with

            <span className="heart">
              ♥
            </span>

            & creativity.

          </span>

        </div>

      </div>

    </footer>
  );
}
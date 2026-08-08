import "./About.css";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const whatsappLink =
  "https://wa.me/916267481715?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20work%20with%20you.";

export default function About() {
  return (
    <section className="about-section" id="about">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="about-background">

        <div className="about-orb about-orb-one"></div>

        <div className="about-orb about-orb-two"></div>

        <div className="about-grid"></div>

        <div className="about-glow-line"></div>

      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="about-container">


        {/* =========================================
            TOP HEADING
        ========================================= */}

        <div className="about-heading">

          <div className="about-label">

            <span></span>

            ABOUT UNSCRIPTED DISHA

          </div>


          <h2>

            We don't just
            <br />

            <span>create content.</span>

            <br />

            We create stories.

          </h2>


          <p>

            Unscripted Disha is a creative studio where
            storytelling meets artificial intelligence,
            cinematic visuals and modern technology.

          </p>

        </div>



        {/* =========================================
            STORY SECTION
        ========================================= */}

        <div className="about-story">


          {/* Visual */}

          <div className="about-visual">

            <div className="visual-glow"></div>

            <div className="visual-card">

              <div className="visual-top">

                <span>
                  UNSCRIPTED
                </span>

                <span>
                  01 / 04
                </span>

              </div>


              <div className="visual-center">

                <AutoAwesomeRoundedIcon />

                <strong>
                  CREATE
                </strong>

                <span>
                  WITHOUT LIMITS.
                </span>

              </div>


              <div className="visual-bottom">

                <span>
                  AI
                </span>

                <span>
                  STORY
                </span>

                <span>
                  VISUAL
                </span>

              </div>

            </div>


            {/* Floating card */}

            <div className="about-floating-card">

              <MovieCreationRoundedIcon />

              <div>

                <strong>
                  Cinematic
                </strong>

                <span>
                  Storytelling
                </span>

              </div>

            </div>

          </div>



          {/* Text */}

          <div className="about-story-content">

            <span className="story-number">
              01 — THE IDEA
            </span>


            <h3>
              Every story deserves
              <span> a visual.</span>
            </h3>


            <p>

              From mythology and spirituality to brands,
              creators and modern digital experiences —
              we turn ideas into content people remember.

            </p>


            <p>

              Our approach combines AI-generated visuals,
              cinematic editing, storytelling and technology
              to create content that feels different from
              ordinary social media posts.

            </p>


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="about-button"
            >

              Let's Create

              <ArrowOutwardRoundedIcon />

            </a>

          </div>

        </div>



        {/* =========================================
            WHAT WE DO
        ========================================= */}

        <div className="about-services">


          <div className="about-services-heading">

            <span>
              WHAT WE BELIEVE IN
            </span>

            <h3>
              One studio.
              <br />
              <em>Multiple possibilities.</em>
            </h3>

          </div>



          <div className="about-service-list">


            <div className="about-service-item">

              <div className="about-service-icon">
                <MovieCreationRoundedIcon />
              </div>

              <div>

                <strong>
                  Cinematic Content
                </strong>

                <p>
                  AI-powered reels, visual storytelling
                  and social media content.
                </p>

              </div>

              <span>
                01
              </span>

            </div>



            <div className="about-service-item">

              <div className="about-service-icon">
                <PublicRoundedIcon />
              </div>

              <div>

                <strong>
                  Hindi + Global Stories
                </strong>

                <p>
                  Stories created for Indian and
                  international audiences.
                </p>

              </div>

              <span>
                02
              </span>

            </div>



            <div className="about-service-item">

              <div className="about-service-icon">
                <CodeRoundedIcon />
              </div>

              <div>

                <strong>
                  Digital Experiences
                </strong>

                <p>
                  Modern responsive websites and
                  digital experiences using MERN.
                </p>

              </div>

              <span>
                03
              </span>

            </div>


          </div>

        </div>



        {/* =========================================
            STATS
        ========================================= */}

        <div className="about-stats">

          <div>

            <strong>
              AI
            </strong>

            <span>
              POWERED CREATION
            </span>

          </div>


          <div>

            <strong>
              9:16
            </strong>

            <span>
              SOCIAL READY
            </span>

          </div>


          <div>

            <strong>
              2+
            </strong>

            <span>
              CONTENT WORLDS
            </span>

          </div>


          <div>

            <strong>
              ∞
            </strong>

            <span>
              POSSIBILITIES
            </span>

          </div>

        </div>



        {/* =========================================
            FINAL CTA
        ========================================= */}

        <div className="about-cta">

          <div>

            <span>
              HAVE AN IDEA?
            </span>

            <h3>
              Let's make it
              <em> cinematic.</em>
            </h3>

          </div>


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta-button"
          >

            <WhatsAppIcon />

            Start a Project

            <ArrowOutwardRoundedIcon />

          </a>

        </div>


      </div>

    </section>
  );
}
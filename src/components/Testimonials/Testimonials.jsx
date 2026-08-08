import "./Testimonials.css";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const features = [
  {
    id: "01",
    icon: <MovieCreationRoundedIcon />,
    title: "Cinematic Visuals",
    text: "AI-powered visuals, animation and cinematic editing that make your content feel like a mini film.",
    tags: ["AI Visuals", "Animation", "Editing"],
  },

  {
    id: "02",
    icon: <AutoAwesomeRoundedIcon />,
    title: "Storytelling First",
    text: "Every reel starts with a strong hook and is structured to keep viewers curious until the final frame.",
    tags: ["Hooks", "Storytelling", "Retention"],
  },

  {
    id: "03",
    icon: <LanguageRoundedIcon />,
    title: "Hindi + Global",
    text: "From Hindi spiritual stories to English global content, we create for different audiences and platforms.",
    tags: ["Hindi", "English", "Global"],
  },

  {
    id: "04",
    icon: <TrendingUpRoundedIcon />,
    title: "Ready to Post",
    text: "Complete 9:16 reels with visuals, voiceover, music, captions and editing — ready for your social media.",
    tags: ["9:16", "Voiceover", "Social"],
  },
];

const whatsappLink =
  "https://wa.me/916267481715?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20work%20with%20you.";

export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      id="why-us"
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="testimonials-background">

        <div className="testimonial-orb testimonial-orb-one"></div>

        <div className="testimonial-orb testimonial-orb-two"></div>

        <div className="testimonial-grid"></div>

      </div>


      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="testimonials-container">


        {/* =========================================
            HEADING
        ========================================= */}

        <div className="testimonials-heading">

          <div className="testimonials-label">

            <span></span>

            WHY UNSCRIPTED DISHA

          </div>


          <h2>

            More than
            <br />

            <span>just a reel.</span>

          </h2>


          <p>

            We combine storytelling, AI visuals and
            cinematic editing to turn simple ideas
            into content people remember.

          </p>

        </div>


        {/* =========================================
            FEATURES
        ========================================= */}

        <div className="testimonials-grid">

          {features.map((feature) => (

            <article
              className="testimonial-card"
              key={feature.id}
            >

              {/* Number */}

              <div className="testimonial-top">

                <div className="quote-icon">

                  {feature.icon}

                </div>


                <span className="testimonial-number">

                  {feature.id}

                </span>

              </div>


              {/* Content */}

              <h3>

                {feature.title}

              </h3>


              <p className="testimonial-text">

                {feature.text}

              </p>


              {/* Tags */}

              <div className="testimonial-tags">

                {feature.tags.map((tag) => (

                  <span key={tag}>

                    {tag}

                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="testimonial-note">

          <span>
            YOUR IDEA + OUR CRAFT
          </span>

          <p>
            You bring the idea.
            We turn it into something worth watching.
          </p>

        </div>


        {/* =========================================
            CTA
        ========================================= */}

        <div className="testimonials-cta">

          <div>

            <span>
              HAVE AN IDEA?
            </span>


            <h3>

              Let's turn it into
              <br />

              <em>something cinematic.</em>

            </h3>

          </div>


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="testimonial-cta-button"
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
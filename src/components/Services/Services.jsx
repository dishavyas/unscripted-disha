import "./Services.css";
import { Link } from "react-router-dom";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const services = [
  {
    number: "01",
    icon: <MovieCreationRoundedIcon />,
    title: "AI Cinematic Reels",
    slug: "reels",
    description:
      "Transform your ideas into cinematic AI-powered reels with dramatic visuals, storytelling and engaging motion.",
    tags: ["AI Visuals", "Animation", "9:16"],
  },

  {
    number: "02",
    icon: <EditNoteRoundedIcon />,
    title: "Script Writing",
    slug: "script-writing",
    description:
      "Scroll-stopping scripts designed with powerful hooks, curiosity, storytelling and audience retention.",
    tags: ["Hooks", "Storytelling", "SEO"],
  },

  {
    number: "03",
    icon: <RecordVoiceOverRoundedIcon />,
    title: "AI Voiceover",
    slug: "voiceover",
    description:
      "Professional AI voiceovers that match the mood, emotion and storytelling style of your content.",
    tags: ["Hindi", "English", "Voice"],
  },

  {
    number: "04",
    icon: <AutoAwesomeRoundedIcon />,
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Cinematic editing with transitions, sound design, captions, effects and music built for social media.",
    tags: ["Editing", "Captions", "Sound"],
  },

  {
    number: "05",
    icon: <TrendingUpRoundedIcon />,
    title: "Content Strategy",
    slug: "content-strategy",
    description:
      "Content ideas and creative direction designed to help creators build a recognizable digital presence.",
    tags: ["Strategy", "Ideas", "Growth"],
  },

  {
    number: "06",
    icon: <CodeRoundedIcon />,
    title: "MERN Websites",
    slug: "mern-websites",
    description:
      "Modern responsive websites built with React, Node.js, Express.js and database integration.",
    tags: ["React", "Express", "MERN"],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">

      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="services-background">

        <div className="bg-orb orb-one"></div>
        <div className="bg-orb orb-two"></div>
        <div className="bg-orb orb-three"></div>

        {/* WATERFALL GLOW */}

        <div className="waterfall-glow"></div>

        {/* Moving cinematic strips */}

        <div className="showcase showcase-one">

          <div className="showcase-item">
            AI CINEMATIC
          </div>

          <div className="showcase-item">
            STORYTELLING
          </div>

          <div className="showcase-item">
            VISUALS
          </div>

          <div className="showcase-item">
            MOTION
          </div>

          <div className="showcase-item">
            AI CINEMATIC
          </div>

          <div className="showcase-item">
            STORYTELLING
          </div>

        </div>


        <div className="showcase showcase-two">

          <div className="showcase-item image-card">
            <span>AI</span>
          </div>

          <div className="showcase-item image-card second">
            <span>REELS</span>
          </div>

          <div className="showcase-item image-card third">
            <span>STORIES</span>
          </div>

          <div className="showcase-item image-card">
            <span>AI</span>
          </div>

          <div className="showcase-item image-card second">
            <span>REELS</span>
          </div>

        </div>


        <div className="showcase showcase-three">

          <div className="mini-word">
            CREATIVE
          </div>

          <div className="mini-word">
            CINEMATIC
          </div>

          <div className="mini-word">
            DIGITAL
          </div>

          <div className="mini-word">
            CREATIVE
          </div>

          <div className="mini-word">
            CINEMATIC
          </div>

        </div>

      </div>


      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="services-container">

        {/* HEADER */}

        <div className="services-heading">

          <div className="section-label">
            <span></span>
            WHAT WE CREATE
          </div>

          <h2>
            Ideas into
            <br />
            <span>Experiences.</span>
          </h2>

          <p>
            From a simple idea to a cinematic story —
            we create digital experiences designed to
            capture attention.
          </p>

        </div>


        {/* ================================
            CENTER
        ================================= */}

        <div className="services-center">

          <div className="center-ring ring-one"></div>
          <div className="center-ring ring-two"></div>

          <div className="center-content">

            <span className="center-small">
              UNSCRIPTED
            </span>

            <strong>
              CREATE.
            </strong>

            <strong className="orange-text">
              CREATE.
            </strong>

            <span className="center-bottom">
              SCROLL • STORY • IMPACT
            </span>

          </div>

        </div>


        {/* ================================
            SERVICES GRID
        ================================= */}

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              {/* NUMBER */}

              <div className="service-number">
                {service.number}
              </div>


              {/* ICON */}

              <div className="service-icon">
                {service.icon}
              </div>


              {/* CONTENT */}

              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                <div className="service-tags">

                  {service.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>


              {/* ARROW */}

              <Link
                to={`/packages/${service.slug}`}
                className="service-arrow"
                aria-label={`View ${service.title} packages`}
              >
                ↗
              </Link>

            </article>

          ))}

        </div>


        {/* ================================
            BOTTOM CTA
        ================================= */}

        <div className="services-bottom">

          <div>

            <span>
              READY TO CREATE?
            </span>

            <h3>
              Let's turn your idea
              <br />
              into something cinematic.
            </h3>

          </div>

          <a
            href="#contact"
            className="services-cta"
          >
            Start a Project
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}
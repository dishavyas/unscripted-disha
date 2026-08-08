import { useState } from "react";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import "./Portfolio.css";


// =====================================================
// REELS
// =====================================================

const reels = [

  {
    id: 1,
    title: "Ramayan Mystery",
    category: "Hindi",
    channel: "Unscripted Disha",
    video: "/reels/reel1.mp4",
  },

  {
    id: 2,
    title: "Ramayan Mystery",
    category: "Hindi",
    channel: "Unscripted Disha",
    video: "/reels/reel2.mp4",
  },

  {
    id: 3,
    title: "AD",
    category: "Promotion",
    channel: "Unscripted Disha",
    video: "/reels/reel3.mp4",
  },

  {
    id: 4,
    title: "Krishna Manga",
    category: "Global",
    channel: "Unscripted Disha Global",
    video: "/reels/reel4.mp4",
  },

  {
    id: 5,
    title: "Mahabharata Mystery",
    category: "Global",
    channel: "Unscripted Disha Global",
    video: "/reels/reel5.mp4",
  },

//   {
//     id: 6,
//     title: "Mahabharata Mystery",
//     category: "Global",
//     channel: "Unscripted Disha Global",
//     video: "/reels/reel6.mp4",
//   },

];


// =====================================================
// COMPONENT
// =====================================================

export default function Portfolio() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Hindi",
    "Global",
  ];


  const filteredReels =
    activeFilter === "All"
      ? reels
      : reels.filter(
          (reel) =>
            reel.category === activeFilter
        );


  return (

    <section
      className="portfolio-section"
      id="portfolio"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="portfolio-background">

        <div className="portfolio-glow glow-left"></div>

        <div className="portfolio-glow glow-right"></div>

        <div className="portfolio-grid-lines"></div>

      </div>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="portfolio-container">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="portfolio-heading">

          <div className="portfolio-label">

            <span></span>

            SELECTED WORK

          </div>


          <h2>

            Stories we've

            <br />

            <span>created.</span>

          </h2>


          <p>

            From mythology and spirituality to
            cinematic global stories — explore
            some of our latest work.

          </p>

        </div>


        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="portfolio-filters">

          {filters.map((filter) => (

            <button

              key={filter}

              className={
                activeFilter === filter
                  ? "active"
                  : ""
              }

              onClick={() =>
                setActiveFilter(filter)
              }

            >

              {filter}

            </button>

          ))}

        </div>


        {/* =================================================
            REELS
        ================================================= */}

        <div className="portfolio-grid">

          {filteredReels.map((reel) => (

            <article
              className="portfolio-card"
              key={reel.id}
            >


              {/* VIDEO */}

              <div className="portfolio-video">

                <video

                  src={reel.video}

                  muted

                  loop

                  playsInline

                  preload="metadata"

                  onMouseEnter={(event) => {

                    event.currentTarget.play();

                  }}

                  onMouseLeave={(event) => {

                    event.currentTarget.pause();

                    event.currentTarget.currentTime = 0;

                  }}

                />


                {/* Overlay */}

                <div className="portfolio-overlay">

                  <div className="portfolio-play">

                    <PlayArrowRoundedIcon />

                  </div>

                </div>


                {/* Number */}

                <span className="portfolio-number">

                  {String(reel.id).padStart(2, "0")}

                </span>


                {/* Category */}

                <span className="portfolio-category">

                  {reel.category}

                </span>

              </div>


              {/* INFO */}

              <div className="portfolio-info">

                <div>

                  <h3>
                    {reel.title}
                  </h3>

                  <p>
                    {reel.channel}
                  </p>

                </div>


                <div className="portfolio-arrow">

                  <ArrowOutwardRoundedIcon />

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            CTA
        ================================================= */}

        <div className="portfolio-cta">

          <div>

            <span>
              HAVE A STORY?
            </span>

            <h3>

              Let's make it

              <em>
                cinematic.
              </em>

            </h3>

          </div>


          <a

            href="https://wa.me/916267481715?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20create%20a%20cinematic%20reel."

            target="_blank"

            rel="noopener noreferrer"

          >

            Start a Project

            <ArrowOutwardRoundedIcon />

          </a>

        </div>


      </div>

    </section>

  );

}
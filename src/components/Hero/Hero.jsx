import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";

import "./Hero.css";


// =====================================================
// WHATSAPP
// =====================================================

const whatsappLink =
  "https://wa.me/916267481715?text=Hi%20Unscripted%20Disha!%20I%20want%20to%20buy%20your%20AI%20Reel%20package.";


// =====================================================
// YOUR REELS
// Put videos inside:
// public/reels/
// =====================================================

const reels = [
  {
    id: 1,
    title: "Ramayan Mystery",
    type: "Hindi",
    video: "/reels/reel1.mp4",
  },

  {
    id: 2,
    title: "Ramayan Mystery",
    type: "Hindi",
    video: "/reels/reel2.mp4",
  },

  {
    id: 3,
    title: "Promotional ad",
    type: "English",
    video: "/reels/reel3.mp4",
  },

  {
    id: 4,
    title: "Krishna Manga",
    type: "English",
    video: "/reels/reel4.mp4",
  },

  {
    id: 5,
    title: "Krishna Manga",
    type: "English",
    video: "/reels/reel5.mp4",
  },
  {
    id: 6,
    title: "Mahabhart Mystery",
    type: "English",
    video: "/reels/reel6.mp4",
  },
];


export default function Hero() {

  // ===================================================
  // CURRENT REEL
  // ===================================================

  const [currentReel, setCurrentReel] = useState(0);


  // ===================================================
  // AUTO CHANGE REEL
  // ===================================================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentReel((prev) => {

        return (prev + 1) % reels.length;

      });

    }, 6000);


    return () => clearInterval(interval);

  }, []);


  return (

    <section className="hero" id="home">


      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <div className="orange-glow"></div>

      <div className="purple-glow"></div>


      {/* =================================================
          PARALLAX BACKGROUND
      ================================================= */}

      <div className="hero-stars"></div>

      <div className="layer clouds"></div>

      <div className="layer mountains"></div>

      <div className="layer mountains-back"></div>

      <div className="layer grass"></div>


      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="hero-content">


        {/* Badge */}

        <div className="hero-badge">

          <span className="badge-dot"></span>

          <span>
            AI STORYTELLING STUDIO
          </span>

        </div>


        {/* Small Heading */}

        <div className="hero-small-title">

          W E &nbsp; T U R N &nbsp; I D E A S &nbsp; I N T O

        </div>


        {/* Main Heading */}

        <h1>

          CINEMATIC

          <br />

          <span>
            STORIES.
          </span>

        </h1>


        {/* Description */}

        <p className="hero-description">

          AI-powered cinematic reels, storytelling
          and visual experiences crafted to make
          people stop scrolling.

        </p>


        {/* Buttons */}

        <div className="hero-buttons">

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href={whatsappLink}
            target="_blank"
            className="hero-order-button"
          >

            Order Reel — ₹1,200

          </Button>


          <Button
            variant="outlined"
            startIcon={<PlayArrowRoundedIcon />}
            href="#portfolio"
            className="hero-portfolio-button"
          >

            View Portfolio

          </Button>

        </div>


        {/* Bottom Stats */}

        <div className="hero-stats">

          <div>

            <strong>
              ₹1,200
            </strong>

            <span>
              Per Reel
            </span>

          </div>


          <div>

            <strong>
              AI + EDITING
            </strong>

            <span>
              Cinematic Visuals
            </span>

          </div>


          <div>

            <strong>
              9:16
            </strong>

            <span>
              Ready to Post
            </span>

          </div>

        </div>


      </div>


      {/* =================================================
          PHONE / REEL PREVIEW
      ================================================= */}

      <div className="phone-area">


        {/* Phone */}

        <div className="phone">

          <div className="phone-notch"></div>


       <video
  className="hero-reel-video"
  src={reels[currentReel].video}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>


          {/* Phone Overlay */}

          <div className="phone-top">

            <span>
              Unscripted Disha
            </span>

          </div>


          <div className="phone-bottom">

            <strong>
              {reels[currentReel].title}
            </strong>

            <span>
              {reels[currentReel].type} Content
            </span>

          </div>

        </div>


        {/* =================================================
            AI CINEMATIC REELS CARD
        ================================================= */}

        <div className="floating-card ai-reels">

          <div className="floating-icon">

            <MovieCreationRoundedIcon />

          </div>


          <div>

            <strong>
              AI Cinematic Reels 
            </strong>
<br></br>
            <span>
              Premium Visuals
            </span>

          </div>

        </div>


        {/* =================================================
            HINDI CONTENT CARD
        ================================================= */}

        <div className="floating-card hindi-content">

          <div className="floating-icon">

            🇮🇳

          </div>


          <div>

            <strong>
              Hindi Content
            </strong>
            <br />
  
            <span>
              Spiritual • Mystery • Culture
            </span>

          </div>

        </div>


        {/* =================================================
            GLOBAL STORIES CARD
        ================================================= */}

        <div className="floating-card global-stories">

          <div className="floating-icon">

            <LanguageRoundedIcon />

          </div>


          <div>

            <strong>
              Global Stories
            </strong>
            <br />

            <span>
              English Content
            </span>

          </div>

        </div>


        {/* =================================================
            REEL PREVIEW CARD
        ================================================= */}

        <div className="floating-card reel-preview-card">

          <div className="floating-icon preview-icon">

            <AutoAwesomeRoundedIcon />

          </div>


          <div>

            <strong>
              Reel Preview
            </strong>
            <br />

            <span>
              {String(currentReel + 1).padStart(2, "0")} /{" "}
              {String(reels.length).padStart(2, "0")}
            </span>

          </div>

        </div>


        {/* =================================================
            PRICE CARD
        ================================================= */}

        <div className="price-card">

          <div className="price-icon">

            ✨

          </div>


          <div>

            <strong>
              ₹1,200
            </strong>

            <span>
              Per Reel
            </span>

          </div>

        </div>


      </div>


      {/* =================================================
          BOTTOM SCROLL
      ================================================= */}

      <div className="scroll-indicator">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line"></div>

      </div>


      {/* Slide Counter */}

      <div className="hero-counter">

        0{currentReel + 1}

        <span>
          /
        </span>

        0{reels.length}

      </div>


    </section>

  );

}
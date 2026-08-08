import "./Packages.css";
import { Link, useParams } from "react-router-dom";

const packages = {
  reels: {
    title: "AI Cinematic Reel Packages",
    subtitle:
      "Create cinematic short-form content designed to capture attention and build your brand.",

    plans: [
      {
        name: "Starter",
        oldPrice: "₹12,000",
        price: "₹9,650",
        duration: "30 Days • 30 Reels",
        description: "Perfect for creators and businesses starting with cinematic AI content.",
        features: [
          "AI Cinematic Visuals",
          "Script Writing",
          "AI Voiceover",
          "Background Music",
          "Custom Brand Watermark",
          "Ready-to-Post Reels (9:16)",
          "2 Revision Rounds",
        ],
        trial: "5-Day Trial – ₹650",
      },

      {
        name: "Premium",
        oldPrice: "₹21,000",
        price: "₹18,000",
        duration: "30 Days • 30 Premium Reels",
        description: "For brands that want premium cinematic content and stronger creative direction.",
        features: [
          "Premium AI Cinematic Visuals",
          "Advanced AI Animation Sequences",
          "Custom Script Writing",
          "Professional AI Voiceover",
          "Background Music",
          "SEO-Optimized Caption",
          "Custom Cover Image",
          "Branded Customizable Subtitles",
          "Custom Brand Watermark",
          "Ready-to-Post Reels (9:16)",
          "Priority Support",
          "3 Revision Rounds",
        ],
        trial: "5-Day Trial – ₹1,750",
      },
    ],
  },

  "script-writing": {
    title: "Script Writing Packages",
    subtitle:
      "Scroll-stopping scripts built around hooks, storytelling, curiosity and audience retention.",

    plans: [
      {
        name: "Starter",
        oldPrice: "₹5,000",
        price: "₹3,500",
        duration: "30 Scripts",
        description: "Strong scripts for creators who need consistent content.",
        features: [
          "30 Short-Form Scripts",
          "Powerful Hooks",
          "Storytelling Structure",
          "CTA Suggestions",
          "Basic SEO Keywords",
          "2 Revision Rounds",
        ],
      },

      {
        name: "Premium",
        oldPrice: "₹9,000",
        price: "₹7,000",
        duration: "30 Premium Scripts",
        description: "Advanced scripts designed around your brand voice and audience.",
        features: [
          "30 Premium Scripts",
          "Advanced Hooks",
          "Complete Story Structure",
          "Audience Psychology",
          "SEO Optimization",
          "CTA Strategy",
          "Content Research",
          "3 Revision Rounds",
          "Priority Support",
        ],
      },
    ],
  },

  voiceover: {
    title: "AI Voiceover Packages",
    subtitle:
      "Professional AI voiceovers with natural delivery, emotion and language flexibility.",

    plans: [
      {
        name: "Starter",
        oldPrice: "₹5,000",
        price: "₹3,500",
        duration: "30 Voiceovers",
        description: "High-quality AI voiceovers for regular social media content.",
        features: [
          "30 Voiceovers",
          "Hindi & English",
          "Multiple Voice Styles",
          "Background Music",
          "Audio Cleanup",
          "Social Media Ready Audio",
        ],
      },

      {
        name: "Premium",
        oldPrice: "₹9,000",
        price: "₹7,000",
        duration: "30 Premium Voiceovers",
        description: "More expressive voiceovers with advanced delivery and customization.",
        features: [
          "30 Premium Voiceovers",
          "Hindi & English",
          "Premium Voice Selection",
          "Emotional Delivery",
          "Background Music",
          "Advanced Audio Mixing",
          "Custom Voice Direction",
          "Priority Support",
        ],
      },
    ],
  },

  "video-editing": {
    title: "Video Editing Packages",
    subtitle:
      "Cinematic editing, captions, sound design and motion built for social media.",

    plans: [
      {
        name: "Starter",
        oldPrice: "₹10,000",
        price: "₹7,500",
        duration: "30 Videos",
        description: "Professional editing for consistent short-form content.",
        features: [
          "30 Edited Videos",
          "Transitions",
          "Captions",
          "Background Music",
          "Basic Sound Design",
          "Color Correction",
          "2 Revision Rounds",
        ],
      },

      {
        name: "Premium",
        oldPrice: "₹18,000",
        price: "₹15,000",
        duration: "30 Premium Videos",
        description: "Advanced cinematic editing for brands and creators.",
        features: [
          "30 Premium Videos",
          "Advanced Transitions",
          "Animated Captions",
          "Sound Design",
          "Motion Graphics",
          "Color Grading",
          "Effects",
          "Custom Branding",
          "3 Revision Rounds",
          "Priority Support",
        ],
      },
    ],
  },

  "content-strategy": {
    title: "Content Strategy Packages",
    subtitle:
      "A practical content system designed to help your brand build consistency and grow.",

    plans: [
      {
        name: "Starter",
        oldPrice: "₹7,000",
        price: "₹5,000",
        duration: "30-Day Strategy",
        description: "A simple content strategy for creators and small businesses.",
        features: [
          "Content Research",
          "30 Content Ideas",
          "Content Pillars",
          "Posting Strategy",
          "Hook Ideas",
          "Basic Competitor Research",
        ],
      },

      {
        name: "Premium",
        oldPrice: "₹12,000",
        price: "₹9,000",
        duration: "30-Day Premium Strategy",
        description: "Complete creative direction and content planning for your brand.",
        features: [
          "Complete Content Strategy",
          "30+ Content Ideas",
          "Content Pillars",
          "Competitor Analysis",
          "Audience Research",
          "Hook Strategy",
          "Posting Calendar",
          "Growth Strategy",
          "Priority Support",
        ],
      },
    ],
  },

  "mern-websites": {
    title: "MERN Website Packages",
    subtitle:
      "Modern responsive websites built with React, Node.js, Express.js and database integration.",

    plans: [
      {
        name: "Starter Website",
        oldPrice: "₹35,000",
        price: "₹25,000",
        duration: "Project Based",
        description:
          "A professional responsive website for individuals, creators and small businesses.",
        features: [
          "React Frontend",
          "Responsive Design",
          "Up to 5 Pages",
          "Contact Form",
          "Basic Animations",
          "SEO Setup",
          "Deployment",
          "2 Revision Rounds",
        ],
      },

      {
        name: "Premium Website",
        oldPrice: "₹65,000",
        price: "₹50,000",
        duration: "Project Based",
        description:
          "A complete full-stack website with advanced functionality and backend integration.",
        features: [
          "React Frontend",
          "Node.js Backend",
          "Express.js",
          "MongoDB Database",
          "Authentication",
          "Admin Dashboard",
          "API Integration",
          "Advanced Animations",
          "SEO Optimization",
          "Deployment",
          "3 Revision Rounds",
          "Priority Support",
        ],
      },
    ],
  },
};

export default function Packages() {
  const { slug } = useParams();

  const service = packages[slug];

  if (!service) {
    return (
      <div className="packages-page">
        <div className="package-not-found">
          <h1>Service Not Found</h1>

          <Link to="/">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="packages-page">

      <div className="packages-container">

        {/* BACK */}

        <Link to="/" className="packages-back">
          ← Back to Services
        </Link>


        {/* HEADER */}

        <div className="packages-header">

          <span className="packages-label">
            PACKAGES
          </span>

          <h1>
            {service.title}
          </h1>

          <p>
            {service.subtitle}
          </p>

        </div>


        {/* PACKAGES */}

        <div className="packages-grid">

          {service.plans.map((plan) => (

            <article
              className="package-card"
              key={plan.name}
            >

              <div className="package-top">

                <span className="package-name">
                  {plan.name}
                </span>

                <span className="package-duration">
                  {plan.duration}
                </span>

              </div>


              <div className="package-price">

                <del>
                  {plan.oldPrice}
                </del>

                <strong>
                  {plan.price}
                </strong>

              </div>


              <p className="package-description">
                {plan.description}
              </p>


              <div className="package-features">

                {plan.features.map((feature) => (

                  <div
                    className="package-feature"
                    key={feature}
                  >
                    <span>✓</span>
                    {feature}
                  </div>

                ))}

              </div>


              {plan.trial && (
                <div className="package-trial">
                  {plan.trial}
                </div>
              )}


              <a
                href="#contact"
                className="package-button"
              >
                Choose {plan.name}
                <span>↗</span>
              </a>

            </article>

          ))}

        </div>


        {/* HOW IT WORKS */}

        {slug === "reels" && (
          <div className="how-it-works">

            <span className="packages-label">
              PROCESS
            </span>

            <h2>
              How It Works
            </h2>

            <div className="process-grid">

              <div>
                <strong>01</strong>
                <h3>Share Your Idea</h3>
                <p>
                  Share your business, product or content requirements.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>We Create</h3>
                <p>
                  We develop the concept, script and visual direction.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Review</h3>
                <p>
                  You review the content and request revisions if needed.
                </p>
              </div>

              <div>
                <strong>04</strong>
                <h3>Publish</h3>
                <p>
                  You receive a ready-to-post final video.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}
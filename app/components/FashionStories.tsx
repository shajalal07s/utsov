"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const stories = [
  {
    name: "Bridal Collection",
    poster: "/image/story-1.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    name: "Festive Wear",
    poster: "/image/story-2.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    name: "Casual Elegance",
    poster: "/image/story-3.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    name: "Accessories",
    poster: "/image/story-4.webp",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4",
  },
];

export default function FashionStories() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev < stories.length - 1 ? prev + 1 : null));
    }, 6000);
  }, []);

  const openStory = (i) => {
    setActiveIndex(i);
    setLoading(true);
    setMuted(true);
  };

  const closeStory = () => {
    clearTimer();
    setActiveIndex(null);
    setLoading(false);
  };

  const goNext = useCallback(() => {
    clearTimer();
    setActiveIndex((prev) => {
      if (prev < stories.length - 1) {
        setLoading(true);
        setMuted(true);
        return prev + 1;
      }
      return null;
    });
  }, []);

  const goPrev = useCallback(() => {
    clearTimer();
    setActiveIndex((prev) => {
      if (prev > 0) {
        setLoading(true);
        setMuted(true);
        return prev - 1;
      }
      return null;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    startTimer();
    return clearTimer;
  }, [activeIndex, startTimer]);

  useEffect(() => {
    if (videoRef.current && activeIndex !== null) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeStory();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handleVideoLoaded = () => setLoading(false);

  return (
    <section className="fashion-stories-section">
      <div className="fashion-stories-header">
        <h2 className="section-heading">Fashion Stories</h2>
      </div>

      <div className="fashion-stories-row">
        {stories.map((story, i) => (
          <button
            key={story.name}
            className="fashion-story-card"
            onClick={() => openStory(i)}
          >
            <div className="fashion-story-ring">
              <div className="fashion-story-ring-inner">
                <Image
                  src={story.poster}
                  alt={story.name}
                  width={100}
                  height={100}
                  className="fashion-story-img"
                />
              </div>
            </div>
            <span className="fashion-story-name">{story.name}</span>
          </button>
        ))}
      </div>

      <div className="fashion-stories-dots">
        {stories.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === 0 ? "active" : ""}`}
            onClick={() => openStory(i)}
          />
        ))}
      </div>

      <div className="fashion-stories-grid">
        {["wedding-style-1", "wedding-style-2", "wedding-style-3", "wedding-style-4"].map((name, i) => (
          <div key={name} className="fashion-grid-item">
            <Image
              src={`/image/${name}.webp`}
              alt={name}
              width={400}
              height={300}
              className="fashion-grid-img"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="story-overlay" onClick={closeStory}>
          <div className="story-modal" onClick={(e) => e.stopPropagation()}>
            <div className="story-top-bar">
              <div className="story-progress">
                {stories.map((_, i) => (
                  <div
                    key={i}
                    className={`story-progress-bar ${i === activeIndex ? "active" : i < activeIndex ? "seen" : ""}`}
                  />
                ))}
              </div>

              <div className="story-top-actions">
                <button
                  className="story-sound-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMuted((m) => !m);
                  }}
                >
                  {muted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>

                <button className="story-close" onClick={closeStory}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>
            </div>

            {activeIndex > 0 && (
              <button className="story-nav story-prev" onClick={goPrev}>‹</button>
            )}
            {activeIndex < stories.length - 1 && (
              <button className="story-nav story-next" onClick={goNext}>›</button>
            )}

            <div className="story-content">
              <div className="story-video-wrapper">
                {loading && (
                  <div className="story-loader">
                    <div className="story-spinner" />
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={stories[activeIndex].video}
                  poster={stories[activeIndex].poster}
                  className="story-video"
                  playsInline
                  muted={muted}
                  onLoadedData={handleVideoLoaded}
                  onLoadedMetadata={handleVideoLoaded}
                />
                <div className="story-video-gradient" />
                <div className="story-video-label">
                  <span className="story-video-name">{stories[activeIndex].name}</span>
                  <span className="story-video-hint">
                    {typeof window !== "undefined" && window.innerWidth < 768
                      ? "Tap to close"
                      : "Press Esc"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";
import { useState,useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoPopup({ style, url }) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {style === 3 && (
        <span className="button-text wow fadeInUp" data-wow-delay=".9s">
          <a
            onClick={() => {
              // setStopCarousel(true)
              setOpen(true);
            }}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
          <span className="ms-4 d-line">Watch video</span>
        </span>
      )}
      {url ? (
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url={url}
          onClose={() => setOpen(false)}
        />
      ) : (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="LRP2DXLMhf8"
          
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

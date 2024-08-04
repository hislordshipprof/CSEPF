import { DEFAULT_AVATAR } from "@/utils/utils";
import React, { useEffect } from "react";

const CustomModal = ({ isPastList, isOpen, handleModalOpen, speaker }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  //   if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleModalOpen}>
      <div
        className="modal-content"
        style={{ maxWidth: "45vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <button onClick={handleModalOpen} className="close-button">
            &times;
          </button>
        </div>
        {isPastList && (
          <div className="modal-body">
            <div className="modal-left">
              <img
                src={speaker?.picture || DEFAULT_AVATAR}
                alt={speaker?.presenter}
              />
            </div>
            <div className="modal-right column-layout">
              <div>
                <h4>{speaker?.presenter}</h4>
                <p>
                  Contact:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "blue" }}
                    href={`mailto:${speaker?.email}`}
                  >
                    {speaker?.email}
                  </a>
                </p>

                {speaker?.media && (
                  <a
                    href={speaker?.media}
                    target="_blank"
                    download
                    className="theme-btn"
                  >
                    Download Presentation
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <div style={{marginTop:20}}>
          <h4 className="text-center">{speaker?.title}</h4>
          <div
            className={isPastList ? "scrollable-bio" : "s"}
            style={{
              textAlign: "justify",
              marginTop: 10,
              maxHeight: "45vh",
              overflow: "auto",
              maxWidth: "100%",
            }}
          >
            <p className="px-3">{speaker?.summary}</p>
          </div>
        </div>

        {speaker?.media && !isPastList && (
          <a
            href={speaker?.media}
            target="_blank"
            download
            className="theme-btn"
          >
            Download Presentation
          </a>
        )}
      </div>
    </div>
  );
};

export default CustomModal;

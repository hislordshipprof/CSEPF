import React, { useEffect } from 'react';

const CustomModal = ({ isOpen, handleModalOpen, speaker }) => {
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [isOpen]);
    
      if (!isOpen) return null;
    
//   if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleModalOpen}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={handleModalOpen} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <img src={speaker.image || "/assets/img/hero/education.svg"} alt={speaker.name} />
          </div>
          <div className="modal-right column-layout">
            <div>
            <h4>{speaker.name}</h4>
            <p>Contact: <a target="_blank" rel="noreferrer" style={{color: "blue"}} href={`mailto:${speaker.email}`}>{speaker.email}</a></p>

            <a href={speaker.presentationUrl} download className="theme-btn">
              Download Presentation
            </a>
            </div>
            
          </div>
        </div>
            <p className="scrollable-bio">{speaker.bio}</p>

      </div>
    </div>
  );
};

export default CustomModal;

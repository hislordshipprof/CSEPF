import { DEFAULT_AVATAR } from '@/utils/utils';
import React, { useEffect } from 'react';

const CustomModal = ({ isPastList,isOpen, handleModalOpen, speaker }) => {
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
       {isPastList && <div className="modal-body">
          <div className="modal-left">
            <img src={speaker?.picture || DEFAULT_AVATAR} alt={speaker?.presenter} />
          </div>
          <div className="modal-right column-layout">
            <div>
            <h4>{speaker?.presenter}</h4>
            <p>Contact: <a target="_blank" rel="noreferrer" style={{color: "blue"}} href={`mailto:${speaker?.email}`}>{speaker?.email}</a></p>

           {speaker?.media && ( <a href={speaker?.media}  target='_blank'download className="theme-btn">
              Download Presentation
            </a>)}
            </div>
            
          </div>
        </div>}
       {!isPastList && <h3>Summary of {speaker?.title}</h3>}
       
            <p className={isPastList?"scrollable-bio":"scrollable-bio-3"} style={{textAlign: "justify"}}>{speaker?.summary}</p>
            {speaker?.media && !isPastList && ( <a href={speaker?.media}  target='_blank'download className="theme-btn">
              Download Presentation
            </a>)}
      </div>
    </div>
  );
};

export default CustomModal;

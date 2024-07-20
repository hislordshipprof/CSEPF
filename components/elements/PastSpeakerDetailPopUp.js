"use client";
import { useState } from "react";
import Modal from "react-modal";
import "../../node_modules/react-modal-video/css/modal-video.css";


export default function PastSpeakerDetailPopUp({
  setOpen,
  isOpen,
  imageUrl,
  name,
  content,
}) {
  const customStyles = {
    content: {
        width: '40%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        top: '50%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '20px', 
    },
    imageContainer: {
      flexBasis: '40%', // Adjust image container width as needed
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    contentContainer: {
      flexBasis: '60%', // Adjust content container width as needed
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={{
        content: {
          ...customStyles.content,
        },
      }}
    >
      <div style={customStyles.imageContainer}>
        <img src={imageUrl} alt="Speaker" style={{ width: '100%', height: 'auto' }} />
        <p>{name}</p>
      </div>
      <div style={customStyles.contentContainer}>
        {content}
      </div>
    </Modal>
  );
}
// ReactDOM.render(<App />, appElement);
// LRP2DXLMhf8?si=DB0x0qmHCteblj5B

import React from 'react';

function TooltipComponent() {
  const tooltipStyle = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const tooltipText = {
    visibility: 'hidden',
    width: '120px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px',
    position: 'absolute',
    zIndex: '1',
    bottom: '125%',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: '0',
    transition: 'opacity 0.3s',
  };

  const handleTooltipHover = (event) => {
    event.target.nextSibling.style.visibility = 'visible';
    event.target.nextSibling.style.opacity = '1';
  };

  const handleTooltipLeave = (event) => {
    event.target.nextSibling.style.visibility = 'hidden';
    event.target.nextSibling.style.opacity = '0';
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <p>
        <span
          className="tooltip"
          onMouseEnter={handleTooltipHover}
          onMouseLeave={handleTooltipLeave}
        >
          <span style={tooltipText}>abl pl. (vis, roboris)</span>
          Viribus
        </span>,
        {/* Continue adding more tooltip spans and content here */}
      </p>
    </div>
  );
}

export default AboutMe;

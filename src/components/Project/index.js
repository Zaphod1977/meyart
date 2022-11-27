import React from 'react';


function Project (props) {
    const {linkurl, imageSource, imageAlt, label} = props;

    return (
        <div>
        <a href={linkurl}>
          <img src={imageSource} alt={imageAlt} />
          <div className="pictext">{label}</div>
        </a>
      </div>
    )
}

export default Project;
import React from 'react';

const Item = ({date, download, upload}) => {
  return(
    <div className="history__item">
      <p className="history__item--date">
        {date}
      </p>
      <p className="history__item--speed">
        Download
        <br />
        <span>{download}</span> <b>Mbps</b>
      </p>
      <hr />
      <p className="history__item--speed">
        Upload
        <br />
        <span>{upload}</span> <b>Mbps</b>
      </p>
    </div>  
  )
} 

export default Item;
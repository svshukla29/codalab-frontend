import React from 'react'

export default function Events({url, description, date}) {
    const dateStr = date;
    const date1 = new Date(dateStr);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = `${monthNames[date1.getUTCMonth()]} ${date1.getUTCFullYear()}`;

    // console.log(formattedDate); 

  return (
    <a
    href = {url}
    target="_blank" 
    style={{ textDecoration: 'none' }}
    >
    <div className="event">
        <h4 style={{color:'black'}}>{formattedDate}</h4>
        <p>{description}</p>
    </div>
    <hr style={{borderColor:'lightgray'}} />
    </a>
  )
}

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="title">CoDA Lab @IITR</h1>
        <p className="subtitle">Computing And Design Automation Laboratory Research Group</p>
        <p className="institute">Indian Institute Of Technology, Roorkee</p>
      </div>

      <style>{
      `
        .footer {
          background-color: #d3d3d3;
          padding: 20px;
          // position: absolute;
          width: 100%;
          height: 100px;
         position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
        }
        
        .title {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        
        .subtitle,
        .institute {
          margin: 0px;
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;























// import React from 'react';
// import './Footer.css'; // Import the CSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <h1 className="title">CoDA Lab @IITR</h1>
//         <p className="subtitle">Computing And Design Automation Laboratory Research Group</p>
//         <p className="institute">Indian Institute Of Technology, Roorkee</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
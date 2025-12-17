import React from 'react';

const Vision = () => {
  return (
    <>
      <div className="vision-section">
        <img
          src="https://img.icons8.com/FCC54C/ios11/2x/ios-photos.png"
          alt="Vision Icon"
          className="vision-icon"
        />
        <h2 className="vision-text">Vision</h2>
      </div>
      <div className="vision-content">
        <p className="vision-text1">
          Our Vision For The Research Lab Is To Be At The Forefront Of Innovation In The Integration Of Cutting-Edge Design Principles With Advanced Algorithmic Research. We Aim To Explore And Develop Novel Algorithms That Enhance The Functionality And Efficiency Of The Internet Of Things (IoT) Ecosystems. By Leveraging The Power Of Machine Learning, Our Lab Will Create Intelligent, Adaptive Systems Capable Of Transforming Data Into Actionable Insights. We Strive To Bridge The Gap Between Theoretical Computer Science And Practical Applications, Fostering Interdisciplinary Collaboration. Our Lab Will Serve As A Hub For Pioneering Research, Contributing To The Academic Community And Industry Advancements. We Envision Creating A Vibrant Environment Where Creativity And Technical Expertise Converge To Solve Complex Real-World Problems. Our Ultimate Goal Is To Drive Technological Progress That Enhances Connectivity, Automation, And Intelligence In Everyday Life.
        </p>
      </div>

      <style>{`
        .vision-section {
          display: flex;
          align-items: center;
          background-color: #fde5a8;
          padding: 10px 20px;
          border-radius: 5px;
          width: 65vw;
          margin: 20px auto;
          margin-left: 2%;
        }

        .vision-icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }

        .vision-text {
          font-size: 24px;
          font-weight: bold;
          color: #4b2d0e;
          margin: 0;
        }

        .vision-content {
          margin-left: 2%;
          width: 65vw;
          padding: 20px;
          background-color: #f8f9fa;
          border: 1px solid #ddd;
        }

        .vision-text1 {
          font-size: 16px;
          color: #333;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .vision-section {
            flex-direction: column;
            text-align: center;
          }

          .vision-icon {
            margin: 0 0 10px 0;
          }

          .vision-text {
            font-size: 20px;
          }

          .vision-text1 {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Vision;
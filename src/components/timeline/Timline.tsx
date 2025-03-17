import DirectionsBikeOutlinedIcon from '@mui/icons-material/DirectionsBikeOutlined';
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Timeline.css"; // Import the CSS file

const timelineData = [
  { year: 2015, event: "Started College", achievement: "Dean's List" },
  { year: 2017, event: "Internship at XYZ", achievement: "Best Intern Award" },
  { year: 2019, event: "Graduated", achievement: "Summa Cum Laude" },
  { year: 2021, event: "First Job", achievement: "Employee of the Year" },
  { year: 2023, event: "Promotion", achievement: "Team Lead" },
];

const Timeline: React.FC = () => {
  const controls = useAnimation();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const duration = 5;
    controls.start({ x: "100%" });

    let stepTime = duration / timelineData.length;
    timelineData.forEach((_, index) => {
      setTimeout(() => {
        setHighlightedIndex(index);
      }, stepTime * index * 1000);
    });
  }, [controls]);

  return (
    <div className="timeline-container">
      <motion.div
        initial={{ x: "-100%" }}
        animate={controls}
        transition={{ duration: 5, ease: "easeInOut" }}
        className="timeline-user"
      >
        <DirectionsBikeOutlinedIcon />
      </motion.div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-node">
            <motion.div
              className={`timeline-year ${highlightedIndex === index ? "highlighted" : ""}`}
            >
              {item.year}
            </motion.div>
            <div className="timeline-event">
              <p className="font-semibold">{item.event}</p>
              <p className="text-sm">{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
      <svg className="timeline-svg" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="timeline-path" d="M 50 150 Q 250 50, 450 150 T 850 150" />
      </svg>
    </div>
  );
};

export default Timeline;

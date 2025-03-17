import React, { useEffect, useState } from "react";

interface SequentialStringsProps {
  items: string[]; // List of strings to display
  interval?: number; // Time between each item's appearance in milliseconds
}

const SequentialStrings: React.FC<SequentialStringsProps> = ({
  items,
  interval = 2000,
}) => {
  const [displayedItems, setDisplayedItems] = useState<string[]>([]); // Array of displayed items
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current index in the array

  useEffect(() => {
    if (currentIndex < items.length) {
      // Add the current item to the displayed items after the interval
      const timer = setTimeout(() => {
        setDisplayedItems((prev) => [...prev, items[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);

      // Cleanup timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [currentIndex, items, interval]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stack vertically
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        padding: "20px",
        overflowY: "auto", // Scrollable if items exceed view height
      }}
    >
      {displayedItems.map((item, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SequentialStrings;

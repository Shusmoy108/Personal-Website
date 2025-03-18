/**
 * Shuffles an array using the Fisher-Yates (Knuth) algorithm.
 * This function creates a new array and doesn't modify the original.
 * 
 * @param array The array to shuffle
 * @returns A new shuffled array
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

// Keep this for backward compatibility
export const a = 1;
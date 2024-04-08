export const calculateAverageReleaseYear = (songs) => {
    const totalYears = songs.reduce((total, song) => total + song.releaseYear, 0);
    return totalYears / songs.length;
  };
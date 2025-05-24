function interpretColor(rgb) {
  const colorDistance = (c1, c2) => {
    return Math.sqrt(
      Math.pow(c1.r - c2.r, 2) +
      Math.pow(c1.g - c2.g, 2) +
      Math.pow(c1.b - c2.b, 2)
    );
  };

  const merahKecoklatan = { r: 145, g: 111, b: 116 };     // Sangat layak
  const kuningKecoklatan = { r: 158, g: 126, b: 116 };    // Masih layak
  const kuningCerah = { r: 165, g: 143, b: 123 };         // Kurang layak

  const d1 = colorDistance(rgb, merahKecoklatan);
  const d2 = colorDistance(rgb, kuningKecoklatan);
  const d3 = colorDistance(rgb, kuningCerah);

  const minDist = Math.min(d1, d2, d3);

  if (minDist === d1) return "Sangat Layak Dikonsumsi";
  if (minDist === d2) return "Masih Layak Dikonsumsi";
  return "Tidak Layak Dikonsumsi";
}

function getPriceByQuality(quality) {
  switch(quality) {
    case "Sangat Layak Dikonsumsi": return "Rp 25.000";
    case "Masih Layak Dikonsumsi": return "Rp 10.000";
    case "Tidak Layak Dikonsumsi": return "Rp 7.000";
    default: return "Harga tidak tersedia";
  }
}

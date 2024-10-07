function inter(s1, s2) {
  const intersection = new Set();
  for (let item of s1) {
    if (s2.has(item)) {
      intersection.add(item);
    }
  }
  return intersection;
}

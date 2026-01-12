// ==== PLAYER DATA (AUTO-UPDATES) ====
const players = [
  {
    username: "PlayerOne",
    score: 40,
    waffles: 3,
    waffled: 1,
    bestRank: 1,
    lastDiff: "+5"
  },
  {
    username: "PlayerTwo",
    score: 35,
    waffles: 2,
    waffled: 0,
    bestRank: 2,
    lastDiff: "-2"
  }
];

// ==== SORTING LOGIC ====
players.sort((a, b) => {
  if (b.score !== a.score) return b.score - a.score;
  if (b.waffles !== a.waffles) return b.waffles - a.waffles;
  if (a.waffled !== b.waffled) return a.waffled - b.waffled;
  return a.username.localeCompare(b.username);
});

// ==== RENDER TABLE ====
const tbody = document.querySelector("#leaderboard tbody");

players.forEach((p, i) => {
  const rank = i + 1;
  if (!p.bestRank || rank < p.bestRank) p.bestRank = rank;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>#${rank}</td>
    <td>${p.username}</td>
    <td>${p.score}</td>
    <td>${p.waffles}</td>
    <td>${p.waffled}</td>
    <td>${p.lastDiff}</td>
    <td>#${p.bestRank}</td>
  `;
  tbody.appendChild(row);
});

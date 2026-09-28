// Placeholder names — replace with the real lineup.
// Grid reading order: top-left, top-right, bottom-left, bottom-right.
const members = [
    { name: "Andrea Gartmann", instrument: "Vocals", photo: "./src/photos/members/vocals.jpg" },
    { name: "Sarusan Jegatheeswaran", instrument: "Guitar", photo: "./src/photos/members/guitar.jpg" },
    { name: "Thierry Beer", instrument: "Bass", photo: "./src/photos/members/bass.jpg" },
    { name: "Damian Kopp", instrument: "Drums", photo: "./src/photos/members/drums.jpg" },
];

module.exports = members.map(member => ({
    ...member,
    alt: `${member.name} — ${member.instrument}`,
}));

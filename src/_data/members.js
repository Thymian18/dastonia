// Placeholder names — replace with the real lineup.
const members = [
    { name: "Damian Kopp", instrument: "Drums", photo: "./src/photos/members/drums.jpg" },
    { name: "Thierry Beer", instrument: "Bass", photo: "./src/photos/members/bass.jpg" },
    { name: "Sarusan Jegatheeswaran", instrument: "Guitar", photo: "./src/photos/members/guitar.jpg" },
    { name: "Andrea Gartmann", instrument: "Vocals", photo: "./src/photos/members/vocals.jpg" },
];

module.exports = members.map(member => ({
    ...member,
    alt: `${member.name} — ${member.instrument}`,
}));

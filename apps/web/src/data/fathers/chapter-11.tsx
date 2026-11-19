import type { FathersData } from '@/components/fathers-section';

export const fathers: FathersData = {
	chapter: 11,
	intro: <>This is a summary. The Fathers on chapter 11 are set out in full on The Woman and the Ark: <a href="https://apocalypse12.com/the-temple-measured" target="_blank" rel="noopener noreferrer">The Temple Measured</a>, <a href="https://apocalypse12.com/the-two-witnesses" target="_blank" rel="noopener noreferrer">The Two Witnesses</a>, <a href="https://apocalypse12.com/the-seventh-trumpet" target="_blank" rel="noopener noreferrer">The Seventh Trumpet</a> and <a href="https://apocalypse12.com/the-ark-in-heaven" target="_blank" rel="noopener noreferrer">The Ark in Heaven</a>.</>,
	related: [
		{ to: "/topics/the-two-witnesses", label: "The Two Witnesses" },
		{ to: "/topics/forty-two-months", label: "Forty-Two Months" },
		{ to: "https://apocalypse12.com/the-two-witnesses", label: "The Two Witnesses (The Woman and the Ark)" },
	],
	rows: [
		{ number: '01', reference: "REVELATION 11:1–2", title: "The temple measured", points: [
			{ label: "The temple is the Church.", body: <>None of the Fathers cited reads these verses of a building to be put up in Jerusalem. For St. Victorinus the measuring rod is the creed, “the rod and measure of the faith.” For St. Bede it is the Gospel, by which each heart measures itself.</> },
			{ label: "The court left outside.", body: <>Tyconius: those who appear to be in the Church and are not. St. Andrew of Caesarea: those who do not believe. Oecumenius reads it the other way: the uncounted multitude of the New Covenant, most of them from the nations.</> },
			{ label: "Forty-two months.", body: <>Andrew: the three and a half years of the Antichrist. Primasius: the last persecution, and also the whole Christian era.</> },
		] },
		{ number: '02', reference: "REVELATION 11:3–6", title: "The two witnesses", points: [
			{ label: "Two prophets at the end.", body: <>Most of the early writers expect Elijah with Enoch; Victorinus thinks of Jeremiah, a prophet “to the nations” who has not yet been one (Jeremiah 1:5). Oecumenius and Andrew give the reason for their power: the Antichrist will come with false signs, and God will arm his witnesses with true ones, “a healing that is commensurate with the wound.”</> },
			{ label: "The Church and her two Testaments.", body: <>Tyconius argues openly against two individuals: the witnesses are the two Testaments by which the Church is governed. Primasius notes the tense, “these are,” not “these will be,” and adds two kinds of witness, a hidden life and public confession.</> },
		] },
		{ number: '03', reference: "REVELATION 11:7–13", title: "Killed, and raised", points: [
			{ label: "The beast from the abyss.", body: <>Victorinus and Andrew: the Antichrist, who by God’s leave will kill the witnesses. Oecumenius: a man of our own nature, whose coming is by the working of Satan. Tyconius and Bede read the Church: the beast “conquers” in those who give way and “kills” those who suffer for Christ’s name.</> },
			{ label: "They stood on their feet.", body: <>Tyconius reads the general resurrection (1 Thessalonians 4:17) and asks how the whole earth could rejoice over two deaths in one city. Andrew keeps the two prophets, who rise and go up on a cloud as the Lord did.</> },
		] },
		{ number: '04', reference: "REVELATION 11:15–19", title: "The seventh trumpet and the ark", points: [
			{ label: "“The kingdom of the world now belongs to our Lord.”", body: <>Oecumenius: God has always been king; when every earthly and demonic rule is dissolved, he alone will reign. Bede: the seventh trumpet is the herald of “the eternal sabbath.” Tyconius sees both comings of Christ in the one hymn.</> },
			{ label: "The ark seen in the temple.", body: <>The early commentators read the opened temple as Christ’s body and the ark as his Incarnation. Bede: the veil has been torn by the blood of the Lord, and “the ark of his incarnation” is laid open to all the world. The Church’s later reading of the ark as Mary rests on the same mystery: the one who carried the Word made flesh is rightly called his ark.</> },
		] },
	],
};

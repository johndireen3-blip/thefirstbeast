import type { FathersData } from '@/components/fathers-section';

export const fathers: FathersData = {
	chapter: 12,
	intro: <>This is a summary. Chapter 12 is the subject of the sister site, The Woman and the Ark, where the Fathers are set out page by page, beginning with <a href="https://apocalypse12.com/a-woman-clothed-with-the-sun" target="_blank" rel="noopener noreferrer">A Woman Clothed with the Sun</a> and <a href="https://apocalypse12.com/who-is-the-woman" target="_blank" rel="noopener noreferrer">Who Is the Woman?</a>.</>,
	related: [
		{ to: "https://apocalypse12.com/", label: "The Woman and the Ark: Revelation 12 in depth" },
		{ to: "https://apocalypse12.com/the-commentators", label: "The Commentators" },
	],
	rows: [
		{ number: '01', reference: "REVELATION 12:1–2", title: "The Woman", points: [
			{ label: "The Church.", body: <>This is the reading of most of the Fathers. St. Methodius: our mother the Church, clothed with the brightness of the Word, in labour to bring forth natural people as spiritual. Tyconius: the Church, who in Baptism puts on Christ, the sun of righteousness (Galatians 3:27). St. Victorinus: the ancient Church of the patriarchs, prophets and apostles.</> },
			{ label: "Mary.", body: <>Two name her. Oecumenius says plainly that the vision speaks of the mother of our Saviour. St. Quodvultdeus of Carthage, about 430: “that woman signifies the Virgin Mary,” and he adds at once that she is a figure of the Church.</> },
			{ label: "The birth pangs.", body: <>Tyconius: the Church is with child “not in her womb but in her mind,” and never stops being in labour, as St. Paul was with the Galatians (Galatians 4:19). Oecumenius, reading Mary, notes that Isaiah says she gave birth before she was in labour (Isaiah 66:7), and takes the pain of the vision in another sense.</> },
		] },
		{ number: '02', reference: "REVELATION 12:3–6", title: "The dragon and the child", points: [
			{ label: "The dragon.", body: <>Oecumenius: called a dragon for his deceit and red for his thirst for blood. The heads and horns are kings and kingdoms (Tyconius) or powers of wickedness set against the seven gifts of the Spirit (St. Andrew of Caesarea). The third of the stars are the angels who fell with him, or members of the Church dragged down by false teachers.</> },
			{ label: "The male child.", body: <>Oecumenius reads Christ alone, whom Herod sought to kill. Tyconius and Primasius read Christ and his body: the Church is always bringing forth Christ in her members, and the devil is always seeking to devour whoever is born to God.</> },
		] },
		{ number: '03', reference: "REVELATION 12:7–12", title: "War in heaven", points: [
			{ label: "When is the war?", body: <>The Fathers give three answers. At the beginning, when Satan fell (Oecumenius, with Luke 10:18). At the Cross, when “the ruler of this world” was condemned (Andrew, John 16:11). Now, in the Church, where each of the faithful contends with the powers of evil (Primasius, following Tyconius, Ephesians 6:12).</> },
			{ label: "The accuser cast out.", body: <>Oecumenius marvels that the angels call human beings their brothers. St. Caesarius of Arles: the saints are the heaven from which the devil is cast out. “His time is short”: short beside the unending ages that follow.</> },
		] },
		{ number: '04', reference: "REVELATION 12:13–17", title: "The Woman in the desert", points: [
			{ label: "Read of Mary.", body: <>St. Epiphanius of Salamis is the first known to raise the question, in defending her perpetual virginity. Oecumenius reads the eagle’s wings of the flight into Egypt.</> },
			{ label: "Read of the Church.", body: <>The two wings are the two Testaments (Primasius, St. Bede), and the desert is our present exile, while we are away from the Lord (2 Corinthians 5:6). “A time, times and half a time” is the whole time of the Church.</> },
			{ label: "The rest of her offspring.", body: <>Oecumenius: the faithful are the brothers of the Lord, and so her children. Bede: to keep the commandments of God by faith in Jesus Christ is already to be at war with the devil.</> },
		] },
	],
};

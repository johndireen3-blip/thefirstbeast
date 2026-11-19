import type { FathersData } from '@/components/fathers-section';

export const fathers: FathersData = {
	chapter: 20,
	intro: <>This is a summary. The Fathers on chapter 20 are set out in full on The Woman and the Ark: <a href="https://apocalypse12.com/the-dragon-bound" target="_blank" rel="noopener noreferrer">The Dragon Bound</a> and <a href="https://apocalypse12.com/gog-and-magog-and-the-dragons-end" target="_blank" rel="noopener noreferrer">Gog and Magog and the Dragon’s End</a>, which includes a note on the word “predestined.”</>,
	related: [
		{ to: "/topics/the-millennium", label: "The Millennium" },
		{ to: "/topics/gog-and-magog", label: "Gog and Magog" },
		{ to: "https://apocalypse12.com/the-dragon-bound", label: "The Dragon Bound (The Woman and the Ark)" },
	],
	rows: [
		{ number: '01', reference: "REVELATION 20:1–3", title: "The dragon bound", points: [
			{ label: "Who binds him.", body: <>Primasius: the Lord himself, the stronger one who came to bind the strong man (Matthew 12:29). St. Andrew of Caesarea: an angel carrying out Christ’s sentence.</> },
			{ label: "When.", body: <>At the Passion, says Andrew. The demons who begged not to be sent into the abyss already knew it.</> },
			{ label: "The abyss.", body: <>St. Augustine: the hearts of the godless, where the devil is shut in more deeply the more he is shut out of the hearts of believers.</> },
		] },
		{ number: '02', reference: "REVELATION 20:4–6", title: "The thousand years", points: [
			{ label: "The time of the Church.", body: <>St. Augustine allows two readings, and in both the thousand years are the present age of the Church, in which the saints already reign with Christ (<em>City of God</em> 20). Andrew refuses a literal thousand: the number means many, or complete. St. Caesarius of Arles counts it from the Passion.</> },
			{ label: "A future reign on earth.", body: <>St. Victorinus, among the earliest, expects a first resurrection of the just and a thousand-year reign before the last judgment. The Church has not accepted this reading (Catechism of the Catholic Church 676).</> },
			{ label: "Others.", body: <>Oecumenius stands alone in taking the thousand years for the days of the Lord’s earthly life. Apringius of Beja finds the cross in the number itself.</> },
		] },
		{ number: '03', reference: "REVELATION 20:7–10", title: "Gog and Magog", points: [
			{ label: "No nation on a map.", body: <>Augustine: they are not some barbarian tribe in one corner of the earth. The camp of the saints is the Church spread through all nations, hemmed in everywhere and never giving up her fight.</> },
			{ label: "The fire from heaven.", body: <>Augustine: the firmness of the saints, given by God’s grace. Caesarius: the fire of the Spirit, which brings some to faith, or the fire of their own sins. Andrew: real fire, or the glorious coming of Christ (2 Thessalonians 2:8).</> },
		] },
		{ number: '04', reference: "REVELATION 20:11–15", title: "The judgment and the books", points: [
			{ label: "The dead, great and small.", body: <>The sister site sets out the Fathers on the great white throne, the books, and the second death, with a note explaining how the Church understands predestination: God predestines no one to hell (Catechism of the Catholic Church 1037).</> },
		] },
	],
};

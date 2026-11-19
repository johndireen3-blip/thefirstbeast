import type { FathersData } from '@/components/fathers-section';

export const fathers: FathersData = {
	chapter: 21,
	intro: <>This is a summary. The Fathers on chapter 21 are set out in full on The Woman and the Ark: <a href="https://apocalypse12.com/the-bride-the-wife-of-the-lamb" target="_blank" rel="noopener noreferrer">The Bride, the Wife of the Lamb</a> and <a href="https://apocalypse12.com/the-city-the-temple-and-the-garden" target="_blank" rel="noopener noreferrer">The City, the Temple and the Garden</a>, which gives the full table of the twelve stones.</>,
	related: [
		{ to: "https://apocalypse12.com/the-bride-the-wife-of-the-lamb", label: "The Bride, the Wife of the Lamb (The Woman and the Ark)" },
		{ to: "https://apocalypse12.com/the-city-the-temple-and-the-garden", label: "The City, the Temple and the Garden (The Woman and the Ark)" },
	],
	rows: [
		{ number: '01', reference: "REVELATION 21:1–4", title: "A new heaven and a new earth", points: [
			{ label: "Renewed, not replaced.", body: <>On this the Fathers cited give one answer. Oecumenius reads the verse with St. Paul: creation will be set free from its slavery to corruption (Romans 8:19–21). St. Augustine: what burns away is the corruptible quality of things, so that a world made new may suit bodies made new. Cassiodorus: a man is still himself when he rises, and so are heaven and earth.</> },
			{ label: "The new Jerusalem coming down.", body: <>Augustine: she comes down from heaven because God makes her by heavenly grace, and her descent began with time itself, as her citizens are born through the bath of rebirth. Apringius of Beja: the city is the multitude of the saints.</> },
			{ label: "No more tears.", body: <>Tertullian argues from causes: where could sorrow and death come from in the presence of God, with the devil cast out? Primasius adds a point for now: here, the holier a person is, the more he weeps in prayer.</> },
		] },
		{ number: '02', reference: "REVELATION 21:5–9", title: "“I make all things new”", points: [
			{ label: "The Alpha and the Omega.", body: <>St. Andrew of Caesarea: first by his divinity and last by his humanity, and his care reaches from the first creature to the last.</> },
			{ label: "A gift.", body: <>Oecumenius asks how the water can be free when the saints reach it through such hardship. It is free because no labour is worth what is given (Romans 8:18).</> },
		] },
		{ number: '03', reference: "REVELATION 21:10–21", title: "The city, its gates and foundations", points: [
			{ label: "The wall and the gates.", body: <>The wall is Christ, all say. The gates are the apostles, through whom we came to the faith; Apringius adds that Christ alone is the door (John 10:9). Three gates on each side: the four quarters of the world have received faith in the Trinity.</> },
			{ label: "Twelve foundations, one foundation.", body: <>Primasius explains how there can be twelve when St. Paul says there is one (1 Corinthians 3:11): the apostles are foundations in Christ, as they are the light of the world in him.</> },
			{ label: "The stones and the pearls.", body: <>Andrew assigns each stone to an apostle; St. Bede reads each as a grace of the Christian life. Each gate is a single pearl, and the one pearl is Christ, from whom the apostles have their brightness.</> },
		] },
		{ number: '04', reference: "REVELATION 21:22–27", title: "No temple, no night", points: [
			{ label: "No temple.", body: <>Apringius: a temple was given so that people might reach by faith what cannot be seen. Where God shows himself openly, none is wanted. Oecumenius: we know now as in a mirror, then face to face (1 Corinthians 13:12).</> },
			{ label: "Nothing unclean.", body: <>Apringius: no one enters who refuses to be cleansed of sin, or who, once cleansed and soiled again, refuses the washing of humility and tears.</> },
		] },
	],
};

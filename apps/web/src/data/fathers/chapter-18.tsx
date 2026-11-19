import type { FathersData } from '@/components/fathers-section';

export const fathers: FathersData = {
	chapter: 18,
	intro: <>This is a summary. The Fathers on the fall of Babylon are set out in full on The First Beast, under “The commentators on her fall”: <a href="https://thefirstbeast.com/the-harlot-and-the-scarlet-beast" target="_blank" rel="noopener noreferrer">The Harlot and the Scarlet Beast</a>.</>,
	related: [
		{ to: "/topics/babylon", label: "Babylon" },
		{ to: "https://thefirstbeast.com/the-harlot-and-the-scarlet-beast", label: "The Harlot and the Scarlet Beast (The First Beast)" },
	],
	rows: [
		{ number: '01', reference: "REVELATION 18:1–3", title: "“Fallen, fallen is Babylon”", points: [
			{ label: "No city of stones.", body: <>St. Caesarius of Arles asks whether the ruins of one city could hold every unclean spirit. The city that holds them all is the city of the devil, spread through the whole earth in wicked people. Babylon means “confusion”; Jerusalem, “vision of peace.”</> },
			{ label: "Fallen already.", body: <>Primasius, following Tyconius: by collapsing under the weight of her sins she showed herself fit for demons.</> },
			{ label: "The merchants.", body: <>Primasius: those who “trade their souls” for temporal abundance (Matthew 16:26).</> },
		] },
		{ number: '02', reference: "REVELATION 18:4–5", title: "“Come out of her, my people”", points: [
			{ label: "A separation of the will.", body: <>Primasius: until the end of the world the good allow the wicked to be mingled with them. The righteous go out less by a separation of body than by the difference of a sound will (2 Timothy 2:19).</> },
			{ label: "Babylon divided.", body: <>Caesarius: one comes out of Babylon whenever one abandons an evil way of life. Citizens of both cities are found “in each house and in the one church and in each city.”</> },
			{ label: "St. Jerome to a friend in Rome.", body: <>Writing from Bethlehem, he quotes this verse to urge a friend to the monastic life, and grants at once that Rome has a holy church, the trophies of apostles and martyrs and a true confession of Christ (<em>Letter</em> 46).</> },
		] },
		{ number: '03', reference: "REVELATION 18:6–19", title: "“Repay her double”; the laments", points: [
			{ label: "By the sword of the word.", body: <>St. Augustine: the vengeance is done daily by speaking. The friend who begins to blush at having worshiped what he made “is about to die that he may live” (<em>Explanation of Psalm 149</em>).</> },
			{ label: "Less than she deserves.", body: <>Oecumenius: God does not take vengeance twice, and punishes far less than is deserved.</> },
			{ label: "They weep for themselves.", body: <>Caesarius: the kings mourn their lost prosperity, not their sin. Primasius reads more hopefully: to stand far off and cry out can be the turning of a soul, a “fruitful penance.”</> },
		] },
		{ number: '04', reference: "REVELATION 18:20–24", title: "The millstone", points: [
			{ label: "“Rejoice over her.”", body: <>St. Andrew of Caesarea: the apostles and prophets rejoice at the end of sin, not at anyone’s hardship.</> },
			{ label: "The turning of time.", body: <>Caesarius: the ages grind down those who love the world. This is the city Cain founded on his brother’s blood (Genesis 4:17).</> },
			{ label: "Two stones.", body: <>St. Bede: the world is an unstable millstone, sunk by the weight of its sins. The Church is the firm rock that withstands the storm (Matthew 7:24–25).</> },
		] },
	],
};

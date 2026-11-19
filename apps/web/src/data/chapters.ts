export type ChapterCard = {
	number: number;
	title: string;
	summary: string;
	available?: boolean;
	path?: string;
};

export const chapters: ChapterCard[] = [
	{ number: 1, title: 'The Son of Man', summary: 'On Patmos, John sees the risen Christ among seven golden lampstands.', available: true, path: '/chapter-1' },
	{ number: 2, title: 'Letters to Four Churches', summary: 'Christ speaks to Ephesus, Smyrna, Pergamum and Thyatira: praise, warning and promise.', available: true, path: '/chapter-2' },
	{ number: 3, title: 'Letters to Three Churches', summary: 'Sardis, Philadelphia and Laodicea are called to wake, to hold fast, and to open the door.', available: true, path: '/chapter-3' },
	{ number: 4, title: 'The Throne in Heaven', summary: 'A door opens on the heavenly liturgy: the throne, the elders and the four living creatures.', available: true, path: '/chapter-4' },
	{ number: 5, title: 'The Lamb and the Scroll', summary: 'Only the slain Lamb is worthy to open the sealed scroll of God’s plan.', available: true, path: '/chapter-5' },
	{ number: 6, title: 'The First Six Seals', summary: 'Four horsemen ride out, the martyrs cry “How long?”, and the cosmos shakes.', available: true, path: '/chapter-6' },
	{ number: 7, title: 'The Sealed and the Great Multitude', summary: 'God’s servants are sealed, and a countless multitude stands before the Lamb in white.', available: true, path: '/chapter-7' },
	{ number: 8, title: 'Silence and Trumpets', summary: 'The seventh seal brings silence in heaven, prayers rise as incense, and four trumpets sound.', available: true, path: '/chapter-8' },
	{ number: 9, title: 'The Fifth and Sixth Trumpets', summary: 'Locusts from the abyss and an army from the Euphrates, yet people do not repent.', available: true, path: '/chapter-9' },
	{ number: 10, title: 'The Little Scroll', summary: 'A mighty angel gives John a scroll sweet to taste and bitter to digest.', available: true, path: '/chapter-10' },
	{ number: 11, title: 'The Two Witnesses', summary: 'Two prophets bear witness, are killed, and rise; the ark of the covenant appears in heaven.', available: true, path: '/chapter-11' },
	{ number: 12, title: 'The Woman and the Dragon', summary: 'A woman clothed with the sun, her child, and the dragon cast down from heaven.', available: true, path: '/chapter-12' },
	{ number: 13, title: 'The Two Beasts', summary: 'A beast from the sea and a beast from the earth demand worship; the faithful are called to endurance.', available: true, path: '/chapter-13' },
	{ number: 14, title: 'The Lamb on Mount Zion', summary: 'The Lamb’s companions, three angels’ warnings, and the harvest of the earth.', available: true, path: '/chapter-14' },
	{ number: 15, title: 'The Song of Moses and the Lamb', summary: 'The victorious sing beside the sea of glass as seven angels prepare the last plagues.', available: true, path: '/chapter-15' },
	{ number: 16, title: 'The Seven Bowls', summary: 'God’s judgment is poured out, and the kings gather at the place called Armageddon.', available: true, path: '/chapter-16' },
	{ number: 17, title: 'Babylon and the Scarlet Beast', summary: 'The great harlot rides the beast, but the Lamb will conquer.', available: true, path: '/chapter-17' },
	{ number: 18, title: 'The Fall of Babylon', summary: 'Kings, merchants and sailors lament the city’s fall; God’s people are called out of her.', available: true, path: '/chapter-18' },
	{ number: 19, title: 'The Wedding Feast of the Lamb', summary: 'Heaven sings Alleluia, the Lamb’s wedding is announced, and the Word of God rides to victory.', available: true, path: '/chapter-19' },
	{ number: 20, title: 'The Thousand Years', summary: 'Satan is bound, the martyrs reign with Christ, and the dead are judged.', available: true, path: '/chapter-20' },
	{ number: 21, title: 'The New Jerusalem', summary: 'A new heaven and a new earth: God dwells with his people and wipes away every tear.', available: true, path: '/chapter-21' },
	{ number: 22, title: 'The River of Life', summary: 'The river and tree of life, and the Church’s final prayer: “Come, Lord Jesus!”', available: true, path: '/chapter-22' },
];

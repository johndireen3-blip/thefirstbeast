type PageEntry = {
	href: string;
	label: string;
	note: string;
};

type PageSection = {
	heading: string;
	entries: PageEntry[];
};

export const pageSections: PageSection[] = [
	{
		heading: 'The twenty-two chapters',
		entries: [
			{
				href: '/chapter-1',
				label: 'Revelation 1 Explained: The Son of Man Among the Lampstands',
				note: 'A Catholic reading of Revelation 1: John on Patmos, the Lord’s Day vision of the risen Christ, and the seven lampstands and seven stars.',
			},
			{
				href: '/chapter-2',
				label: 'Revelation 2 Explained: Letters to the Four Churches',
				note: 'A Catholic reading of Revelation 2: Christ’s letters to four churches, with their praise, warnings and promises to those who are victorious.',
			},
			{
				href: '/chapter-3',
				label: 'Revelation 3 Explained: Sardis, Philadelphia and Laodicea',
				note: 'A Catholic reading of Revelation 3: Christ’s letters to Sardis, Philadelphia and lukewarm Laodicea, and his promise to stand at the door and knock.',
			},
			{
				href: '/chapter-4',
				label: 'Revelation 4 Explained: The Throne Room of Heaven',
				note: 'A Catholic reading of Revelation 4: John’s vision of God’s throne, the twenty-four elders, the four living creatures and the endless song “Holy, holy, holy.”',
			},
			{
				href: '/chapter-5',
				label: 'Revelation 5 Explained: The Lamb and the Sealed Scroll',
				note: 'A Catholic reading of Revelation 5: the sealed scroll, the Lion of Judah who appears as a slain Lamb, and the hymn of all creation, “Worthy is the Lamb.”',
			},
			{
				href: '/chapter-6',
				label: 'Revelation 6 Explained: The Four Horsemen and Six Seals',
				note: 'A Catholic reading of Revelation 6: the four horsemen, the martyrs beneath the altar crying “How long?”, and the cosmic signs of the sixth seal.',
			},
			{
				href: '/chapter-7',
				label: 'Revelation 7 Explained: The 144,000 and the Great Multitude',
				note: 'A Catholic reading of Revelation 7: God’s servants sealed, the meaning of the 144,000, and the countless multitude in white washed in the blood of the Lamb.',
			},
			{
				href: '/chapter-8',
				label: 'Revelation 8 Explained: Silence and the First Trumpets',
				note: 'A Catholic reading of Revelation 8: the seventh seal, half an hour of silence, the prayers of the saints rising as incense, and the first four trumpets.',
			},
			{
				href: '/chapter-9',
				label: 'Revelation 9 Explained: Locusts, Abaddon and the Euphrates',
				note: 'A Catholic reading of Revelation 9: the locusts from the abyss, their king Abaddon, the army from the Euphrates, and a world that still refuses to repent.',
			},
			{
				href: '/chapter-10',
				label: 'Revelation 10 Explained: The Angel and the Little Scroll',
				note: 'A Catholic reading of Revelation 10: the mighty angel, the little scroll sweet in the mouth and bitter in the stomach, and John’s call to prophesy again.',
			},
			{
				href: '/chapter-11',
				label: 'Revelation 11 Explained: The Two Witnesses',
				note: 'A Catholic reading of Revelation 11: the measured temple, the two witnesses who die and rise, the seventh trumpet, and the ark of the covenant seen in heaven.',
			},
			{
				href: '/chapter-12',
				label: 'Revelation 12 Explained: The Woman and the Dragon',
				note: 'A Catholic reading of Revelation 12: the woman clothed with the sun, the dragon, Michael’s victory, and God’s protection of his people.',
			},
			{
				href: '/chapter-13',
				label: 'Revelation 13 Explained: The Two Beasts, the Mark and 666',
				note: 'A Catholic reading of Revelation 13: the beast from the sea, the beast from the earth, the mark of the beast and 666, each a counterfeit of the Lamb.',
			},
			{
				href: '/chapter-14',
				label: 'Revelation 14 Explained: The Lamb on Mount Zion',
				note: 'A Catholic reading of Revelation 14: the Lamb and the 144,000 on Mount Zion, the three angels’ messages, the blessed dead, and the harvest of the earth.',
			},
			{
				href: '/chapter-15',
				label: 'Revelation 15 Explained: The Song of Moses and the Lamb',
				note: 'A Catholic reading of Revelation 15: the victors on the sea of glass, the song of Moses and the Lamb, and the seven angels who receive the bowls of God’s wrath.',
			},
			{
				href: '/chapter-16',
				label: 'Revelation 16 Explained: The Seven Bowls and Armageddon',
				note: 'A Catholic reading of Revelation 16: the seven bowls of God’s wrath, the plagues of Egypt retold, the meaning of Armageddon, and the call to stay awake.',
			},
			{
				href: '/chapter-17',
				label: 'Revelation 17 Explained: The Whore of Babylon',
				note: 'Who is the Whore of Babylon? A Catholic reading of Revelation 17: the harlot on the scarlet beast, the seven hills, and the Lamb who conquers.',
			},
			{
				href: '/chapter-18',
				label: 'Revelation 18 Explained: The Fall of Babylon',
				note: 'A Catholic reading of Revelation 18: the fall of Babylon, the call to come out of her, the laments of kings and merchants, and the millstone in the sea.',
			},
			{
				href: '/chapter-19',
				label: 'Revelation 19 Explained: The Wedding Feast of the Lamb',
				note: 'A Catholic reading of Revelation 19: heaven’s Alleluia, the wedding feast of the Lamb, and the rider on the white horse called the Word of God.',
			},
			{
				href: '/chapter-20',
				label: 'Revelation 20 Explained: The Millennium and Last Judgment',
				note: 'What is the millennium? A Catholic reading of Revelation 20: Satan bound, the thousand-year reign, Gog and Magog, and the last judgment.',
			},
			{
				href: '/chapter-21',
				label: 'Revelation 21 Explained: New Heaven, New Earth, New Jerusalem',
				note: 'A Catholic reading of Revelation 21: a new heaven and a new earth, every tear wiped away, and the new Jerusalem, the Bride of the Lamb.',
			},
			{
				href: '/chapter-22',
				label: 'Revelation 22 Explained: The River of Life',
				note: 'A Catholic reading of Revelation 22: the river and tree of life, seeing God’s face, and the Bible’s final prayer: Come, Lord Jesus!',
			},
		],
	},
	{
		heading: 'Chapter 13 in depth',
		entries: [
			{
				href: '/chapter-13/the-first-beast',
				label: 'The Beast from the Sea: Revelation 13:1–10',
				note: 'Who is the first beast of Revelation 13? Its roots in Daniel 7, the Roman Empire, the healed wound, and what it means for Christians today.',
			},
			{
				href: '/chapter-13/the-second-beast',
				label: 'The Beast from the Earth and the False Prophet',
				note: 'Revelation 13:11–17: the lamb-like beast that speaks like a dragon, its signs and image, and why Revelation later calls it the false prophet.',
			},
			{
				href: '/chapter-13/mark-of-the-beast',
				label: 'The Mark of the Beast: A Catholic Explanation',
				note: 'What is the mark of the beast in Revelation 13? A Catholic reading of the mark, the seal of God, and allegiance in daily life.',
			},
			{
				href: '/chapter-13/666-number-of-the-beast',
				label: '666: The Number of the Beast Explained',
				note: 'Why 666? Gematria, the Nero reading, the ancient 616 variant, and how the Church Fathers approached the number in Revelation 13:18.',
			},
		],
	},
	{
		heading: 'Topics',
		entries: [
			{
				href: '/topics/forty-two-months',
				label: 'Forty-Two Months in Revelation: What Does It Mean?',
				note: 'The 42 months, 1,260 days, and ‘time, times and half a time’ in Daniel and Revelation: a limited season of trial, not a countdown.',
			},
			{
				href: '/topics/numbers-in-revelation',
				label: 'Numbers in Revelation: What 7, 12, 144,000 and 666 Mean',
				note: 'A Catholic guide to the symbolic numbers in Revelation: seven, twelve, four, three and a half, a thousand, 144,000 and 666.',
			},
			{
				href: '/topics/revelation-and-the-mass',
				label: 'Revelation and the Mass: The Heavenly Liturgy',
				note: 'Why Catholics hear the Mass in Revelation: the Lord’s Day, the altar, incense, the Sanctus, the Lamb of God, the wedding supper and Maranatha.',
			},
			{
				href: '/topics/the-millennium',
				label: 'The Millennium in Revelation: What the Thousand Years Mean',
				note: 'What does the thousand-year reign of Revelation 20 mean? A Catholic explanation of the millennium and why the Church rejects millenarianism.',
			},
			{
				href: '/topics/babylon',
				label: 'Babylon in Revelation: Who Is the Whore of Babylon?',
				note: 'Who is Babylon the great, the harlot of Revelation 17–18? A Catholic explanation of the symbol, why it meant Rome, and what it means for Christians today.',
			},
			{
				href: '/topics/armageddon',
				label: 'Armageddon in the Bible: What It Means in Revelation 16',
				note: 'What is Armageddon? A Catholic explanation of Revelation 16:16, the history of Megiddo, and why the final battle is a symbol, not a prediction.',
			},
			{
				href: '/topics/the-rapture',
				label: 'Is the Rapture in Revelation? A Catholic Answer',
				note: 'Is the rapture in the Bible? A Catholic look at 1 Thessalonians 4:17 and Revelation, and why the Church awaits one visible return of Christ.',
			},
			{
				href: '/topics/the-144000',
				label: 'Who Are the 144,000 in Revelation? A Catholic Answer',
				note: 'The 144,000 of Revelation 7 and 14 are the whole people of God, counted as his complete Israel. The number is a symbol of fullness, not a limit.',
			},
			{
				href: '/topics/the-two-witnesses',
				label: 'Who Are the Two Witnesses in Revelation 11? A Catholic Answer',
				note: 'The two witnesses of Revelation 11: what John sees, what the Fathers said about Elijah and Enoch, what the Church has left open, and how to keep watch.',
			},
			{
				href: '/topics/gog-and-magog',
				label: 'Gog and Magog in Revelation 20: What Do They Mean?',
				note: 'Gog and Magog in Revelation 20 are not a country on a map. They stand for all the nations deceived into a last attack on God’s people, which God himself ends.',
			},
			{
				href: '/topics/the-four-horsemen',
				label: 'The Four Horsemen of the Apocalypse: A Catholic Answer',
				note: 'Who are the four horsemen of Revelation 6? Conquest, war, famine and death, what the Fathers said about the white rider, and what the text leaves open.',
			},
			{
				href: '/topics/the-seven-churches',
				label: 'The Seven Churches of Revelation: What the Letters Say',
				note: 'What are the seven churches of Revelation 2 and 3? A Catholic guide to the seven letters, what Christ praises and rebukes, and how to read them today.',
			},
			{
				href: '/topics/the-antichrist',
				label: 'The Antichrist: What the Catholic Church Teaches',
				note: 'What the Catholic Church teaches about the Antichrist: a final trial and a religious deception in which man puts himself in the place of God. She names no one and sets no date.',
			},
		],
	},
	{
		heading: 'About this study',
		entries: [
			{
				href: '/how-catholics-read-revelation',
				label: 'How Catholics Read the Book of Revelation',
				note: 'How the Catholic Church reads the Apocalypse: the literal and spiritual senses, the Church Fathers, and why it is not a code for predicting dates.',
			},
			{
				href: '/how-to-test-a-reading',
				label: 'How to Test a Reading of Revelation: Eleven Questions',
				note: 'Eleven questions for testing any reading of the Book of Revelation: the text, the Church, the evidence, and the one who holds it.',
			},
			{
				href: '/the-fathers',
				label: 'Who Are the Fathers Cited Here?',
				note: 'Short notes on the early Christian writers quoted in this study: who they were, when they lived, and how much weight they carry.',
			},
			{
				href: '/further-reading',
				label: 'Further Reading on the Book of Revelation',
				note: 'Trusted commentaries and studies on Revelation, Catholic and other traditions, with notes on approach and level for each.',
			},
			{
				href: '/faq',
				label: 'Revelation FAQ: Frequently Asked Questions',
				note: 'Catholic answers to common questions about Revelation: the rapture, the 144,000, the mark of the beast, 666, Armageddon, Babylon and the millennium.',
			},
			{
				href: '/discussion',
				label: 'Questions & Discussion',
				note: 'Submit a question or reflection on the Book of Revelation. Contributions are moderated and selected responses are published.',
			},
			{
				href: '/about',
				label: 'About This Study',
				note: 'The Lamb’s Victory, founded and directed by Fr. John, a Catholic diocesan priest, is a chapter-by-chapter Catholic study of the Book of Revelation.',
			},
			{
				href: '/contribute',
				label: 'Write for This Study',
				note: 'Guidelines for scholars, clergy and teachers who wish to contribute a reflection or essay on the Book of Revelation.',
			},
			{
				href: '/how-this-site-is-made',
				label: 'How This Site Is Made',
				note: 'How The Lamb’s Victory is made: Fr. John directs, Claude researches and writes, within seven rules. How sources are checked and how to report a mistake.',
			},
		],
	},
];

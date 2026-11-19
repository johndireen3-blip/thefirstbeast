export type FaqEntry = {
	question: string;
	answer: string;
	more?: { label: string; path: string };
};

export type FaqGroup = {
	heading: string;
	entries: FaqEntry[];
};

export const faqGroups: FaqGroup[] = [
	{
		heading: 'About the book',
		entries: [
			{
				question: 'Who wrote Revelation, and when?',
				answer:
					"The author calls himself simply John, an exile on the island of Patmos (1:9). Early writers such as St. Justin Martyr and St. Irenaeus identified him with the Apostle John; the USCCB introduction notes he may have been a disciple in the apostle's circle. Most scholars date the book near the end of the emperor Domitian's reign (A.D. 81–96).",
				more: { label: 'More', path: '/chapter-1' },
			},
			{
				question: 'How do Catholics read Revelation?',
				answer:
					'As a book of hope written to persecuted Christians, not as a coded timetable of the future. The Church reads it in its first-century setting, in the light of the whole of Scripture, and as a message for every generation: Christ has already won, and his people are called to faithful witness.',
				more: { label: 'More', path: '/how-catholics-read-revelation' },
			},
			{
				question: 'Is Revelation read at Mass?',
				answer:
					"Yes. In Year C of the Sunday cycle, the second reading through the Easter season comes from Revelation. It is read on All Saints' Day (chapter 7) and on the Assumption (11:19 and 12:1), and on weekdays at the end of the liturgical year in Year II. The Mass itself echoes it: the Sanctus repeats the song of 4:8, and \"Behold the Lamb of God\" recalls the Lamb of chapter 5.",
				more: { label: 'More', path: '/chapter-4' },
			},
		],
	},
	{
		heading: 'Chapters 1–12',
		entries: [
			{
				question: 'Will there be a rapture?',
				answer:
					'The Catholic Church does not teach a secret rapture that removes believers before a time of tribulation. The Catechism teaches that "before Christ\'s second coming the Church must pass through a final trial" (CCC 675), following her Lord through his death and Resurrection (CCC 677). The "open door" of 4:1 describes John alone being caught up in a vision. Nor does the Church read the thousand years of chapter 20 as a future earthly kingdom (CCC 676).',
				more: { label: 'More', path: '/topics/the-rapture' },
			},
			{
				question: 'What are the seven churches of Revelation?',
				answer:
					'Seven real Christian communities in the Roman province of Asia, in what is now western Turkey: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia and Laodicea. Because seven signals completeness, the Church hears their letters as addressed to every Christian community. They are not a timeline of seven ages of Church history.',
				more: { label: 'More', path: '/chapter-2' },
			},
			{
				question: 'What does it mean to be lukewarm?',
				answer:
					'In the letter to Laodicea (3:15–16), "lukewarm" describes a complacent church that thinks it needs nothing. The image may come from the city\'s tepid water supply. The cure Christ offers is not condemnation but an invitation: "I stand at the door and knock" (3:20).',
				more: { label: 'More', path: '/chapter-3' },
			},
			{
				question: 'Who are the twenty-four elders and the four living creatures?',
				answer:
					'The USCCB notes say the elders represent the twelve tribes of Israel and the twelve apostles, the whole People of God. The four living creatures, drawn from Ezekiel and Isaiah, represent all creation; since the second century they have also stood for the four evangelists.',
				more: { label: 'More', path: '/chapter-4' },
			},
			{
				question: 'What do the four horsemen mean?',
				answer:
					'The first four seals release conquest, war, famine and death, the sufferings that follow human violence in every age. The imagery comes from the prophet Zechariah. Some early writers read the white rider as Christ or the Gospel. Each rider goes out only when the Lamb opens the seal: Christ, not chaos, holds history.',
				more: { label: 'More', path: '/chapter-6' },
			},
			{
				question: 'Who are the 144,000?',
				answer:
					'A symbolic number: twelve tribes squared, times a thousand, standing for the complete People of God, the new Israel. It is not a limit on the saved. Right after hearing the number, John sees "a great multitude, which no one could count, from every nation" (7:9). They appear again with the Lamb on Mount Zion (14:1), where they stand for all who refused the mark of the beast.',
				more: { label: 'More', path: '/chapter-7' },
			},
			{
				question: 'What is Wormwood?',
				answer:
					'A bitter plant the prophet Jeremiah used as a symbol of the punishment that follows unfaithfulness (Jer 9:14). In Revelation 8 it is part of a warning to repent, not a prediction of Chernobyl or any modern event.',
				more: { label: 'More', path: '/chapter-8' },
			},
			{
				question: 'Who are the two witnesses?',
				answer:
					'The USCCB notes say they "cannot readily be identified." Some have suggested Moses and Elijah, or Peter and Paul, but the notes conclude they most probably represent the whole Church, especially the martyrs, bearing witness even unto death and sharing in Christ\'s resurrection.',
				more: { label: 'More', path: '/chapter-11' },
			},
			{
				question: 'Is the Woman of Revelation 12 Mary?',
				answer:
					'Both/and. The USCCB notes read the Woman as God\'s people, Israel and the Church, who bring forth the Messiah. Catholic tradition also sees Mary, the Mother of the Messiah, in her. Pope Benedict XVI said she represents "at the same time Our Lady and the Church." The Church reads this chapter on the Assumption.',
				more: { label: 'More', path: '/chapter-12' },
			},
		],
	},
	{
		heading: 'Revelation 13: the beasts, the mark and 666',
		entries: [
			{
				question: 'Who is the beast in Revelation 13?',
				answer:
					"For John's first readers, the beast from the sea was the Roman Empire and its emperor cult. The Church has also read it as every power that demands worship belonging to God, and as a figure of the final trial before Christ's return.",
				more: { label: 'More', path: '/chapter-13/the-first-beast' },
			},
			{
				question: 'Is the beast the same as the Antichrist?',
				answer:
					'Revelation never uses the word "antichrist"; it appears only in the letters of John (1 John 2:18, 22; 4:3; 2 John 7). Many Church Fathers linked the two, and the Catechism (no. 675) speaks of the deception of the Antichrist in the final trial. The Church has not identified any individual as the Antichrist.',
			},
			{
				question: 'Who is the false prophet?',
				answer:
					'The second beast, the one from the earth, is later called the false prophet (16:13; 19:20). It represents religious and cultural voices that promote false worship.',
				more: { label: 'More', path: '/chapter-13/the-second-beast' },
			},
			{
				question: 'What does the Catholic Church teach about the mark of the beast?',
				answer:
					'The Church has no definition of the mark as a physical object. Read in context, it is a sign of allegiance to the beast set against God\'s seal on his servants. Catholics already bear the seal of Christ through Baptism and Confirmation.',
				more: { label: 'More', path: '/chapter-13/mark-of-the-beast' },
			},
			{
				question: 'Is the mark a microchip, barcode, or vaccine?',
				answer:
					'No. Revelation ties the mark to worshiping the beast (14:9–11). No one receives it unknowingly through technology or medicine. Such claims have been made about new inventions for centuries.',
			},
			{
				question: 'What does 666 mean?',
				answer:
					'Most scholars read 666 as the numerical value of "Nero Caesar" in Hebrew letters. Symbolically, it falls short of seven, the number of perfection.',
				more: { label: 'More', path: '/chapter-13/666-number-of-the-beast' },
			},
			{
				question: 'Is the Pope or the Catholic Church the beast?',
				answer:
					'This claim arose in some Reformation-era polemics and still circulates online. It has no basis in the text, which describes a pagan empire persecuting Christians in the first century. Many Protestant scholars today reject it as well.',
			},
			{
				question: 'Are we living in the end times?',
				answer:
					"In one sense, yes: the New Testament calls the whole period since Christ's resurrection \"the last days\" (Heb 1:2). But Jesus taught that no one knows the day or the hour (Matt 24:36), and the Church warns against setting dates.",
				more: { label: 'More', path: '/chapter-22' },
			},
			{
				question: 'Does the Church have an official interpretation of Revelation 13?',
				answer:
					"The Church has defined the doctrines Revelation teaches — Christ's return, the final trial, the judgment — but not the meaning of each symbol. Catholics are free to weigh the interpretations of scholars within the faith of the Church.",
				more: { label: 'More', path: '/how-catholics-read-revelation' },
			},
		],
	},
	{
		heading: 'Chapters 14–22: Babylon, the millennium and the new creation',
		entries: [
			{
				question: 'What are the seven bowls?',
				answer:
					'The last of Revelation\'s three series of seven, after the seals and the trumpets. Modeled on the plagues of Egypt, they show God\'s judgment on a world that will not repent. Many Catholic interpreters see the three series as overlapping retellings of the same reality, each more intense than the last, rather than twenty-one events in a row.',
				more: { label: 'More', path: '/chapter-16' },
			},
			{
				question: 'What is Armageddon?',
				answer:
					'The word means \'Mountain of Megiddo\' in Hebrew (16:16). Because so many decisive battles were fought at Megiddo, the USCCB notes explain, it became a symbol of the final defeat of the forces of evil. Revelation describes no battle there: the kings gather, and in chapter 19 they are overcome by the word of Christ. It is not a prediction of a particular war in the Middle East.',
				more: { label: 'More', path: '/topics/armageddon' },
			},
			{
				question: 'Who is the Whore of Babylon? Is it the Catholic Church?',
				answer:
					'No. The USCCB notes identify Babylon, the \'great harlot\' of chapter 17, as imperial Rome, the city on seven hills that worshiped the emperor and killed the martyrs, including Peter and Paul. Identifying her with the Church was a polemic of the Reformation era. In every age, Babylon stands for any society that makes wealth, power or the state an idol.',
				more: { label: 'More', path: '/topics/babylon' },
			},
			{
				question: 'What is the wedding feast of the Lamb?',
				answer:
					'The marriage of Christ and his Church at the fulfillment of God\'s reign (19:7–9). Scripture often describes God\'s covenant as a marriage, and Jesus spoke of the kingdom as a wedding feast. Every Mass is a foretaste of it: before Communion the priest says, \'Blessed are those called to the supper of the Lamb.\'',
				more: { label: 'More', path: '/chapter-19' },
			},
			{
				question: 'Who is the rider on the white horse?',
				answer:
					'Christ himself (19:11–16), called Faithful and True and the Word of God. His robe is dipped in blood before any battle, and his only weapon is the sword that comes from his mouth: he conquers by his word and his Cross. This is not the white rider of the first seal (6:2), whose meaning is debated.',
				more: { label: 'More', path: '/chapter-19' },
			},
			{
				question: 'What is the millennium, the thousand years?',
				answer:
					'The USCCB notes say the thousand years are not to be taken literally. They stand for the long period between Christ\'s victory over death and the end of the world, the age of the Church, in which Christ already reigns and his people share his reign through Baptism. This is St. Augustine\'s reading. The Catechism rejects the idea of a millennial kingdom within history (CCC 676).',
				more: { label: 'More', path: '/topics/the-millennium' },
			},
			{
				question: 'Who are Gog and Magog?',
				answer:
					'Names taken from Ezekiel 38–39, where a vast army attacks God\'s people and is destroyed by God alone. The USCCB notes say that in Revelation 20 they are symbols of all the pagan nations opposed to God, not codes for any modern country.',
				more: { label: 'More', path: '/chapter-20' },
			},
			{
				question: 'What is the \'second death\'?',
				answer:
					'Final separation from God, the \'lake of fire\' (20:14; 21:8). The first death is the death of the body, which all share; the second is the loss of eternal life. Revelation promises that those who share in Christ\'s resurrection need not fear it (2:11; 20:6). The Church calls this state hell (CCC 1033–1035).',
				more: { label: 'More', path: '/chapter-20' },
			},
			{
				question: 'What will heaven be like?',
				answer:
					'Revelation describes it in symbols: a new heaven and a new earth, a city of gold and jewels, a river and a tree of life. Its heart is simpler: God will dwell with his people, wipe away every tear, and \'they will see his face\' (21:3–4; 22:4). The Church calls this the beatific vision (CCC 1023–1029). Creation will not be discarded but made new.',
				more: { label: 'More', path: '/chapter-21' },
			},
			{
				question: 'When will Jesus come again?',
				answer:
					'Christ promises, \'I am coming soon\' (22:20), and the Church answers, \'Come, Lord Jesus!\' No one knows the day or the hour (Matt 24:36), and with the Lord a thousand years are like a day (2 Pet 3:8). The Catechism teaches that since the Ascension his return has been \'imminent,\' so Christians are called to watchfulness, not calculation (CCC 673).',
				more: { label: 'More', path: '/chapter-22' },
			},
		],
	},
];

export const faqEntries: FaqEntry[] = faqGroups.flatMap((group) => group.entries);

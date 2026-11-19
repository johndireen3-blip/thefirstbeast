import type { FathersData } from '@/components/fathers-section';

const W = ({ children }: { children: string }) => <em>{children}</em>;

// DRAFT: rows 01-04 written from ACCS pp. 81-91 (part 1 of 2). Rows for 6:9-11 and 6:12-17 to be added from part 2.
export const fathers: FathersData = {
	chapter: 6,
	intro: <>The Fathers read the seals in two main ways. St. Victorinus and St. Andrew of Caesarea see the history of the Church from the apostles to the end. Oecumenius sees the saving works of Christ, from his birth to his cross. Tyconius and those who follow him see the Church and her enemies in every age. The readings below also draw on Primasius, St. Caesarius of Arles and St. Bede.</>,
	related: [{ to: '/topics/the-four-horsemen', label: 'The Four Horsemen' }],
	rows: [
		{ number: '01', reference: 'REVELATION 6:1–2', title: 'The first seal: a white horse', points: [
			{ label: 'What the seals are.', body: <></>, sub: [
				{ label: 'St. Victorinus:', body: <>to break the seals is to disclose the prophecies of the Old Testament and to foretell what will happen at the end. The announcement runs its full course only when all the seals are open. His text reads “Come and see”: “come” is said to one invited to faith, and “see” to one who has not yet seen (<W>Commentary on the Apocalypse</W> 6.1).</> },
				{ label: 'Oecumenius:', body: <>the sealed scroll is our estrangement from God, our mouths closed from any plea. Each seal loosed is a work the Lord did for our salvation and against our spiritual enemies. The first is his birth in the flesh, which began our return from the exile caused by Adam’s sin and made human birth holy (<W>Commentary on the Apocalypse</W> 6.1–4).</> },
				{ label: 'Primasius:', body: <>the one living creature that speaks is the whole Church, preaching with a great voice and inviting to faith: “Let anyone who thirsts come to me and drink” (John 7:37) (<W>Commentary on the Apocalypse</W> 6.1).</> },
				{ label: 'St. Andrew of Caesarea:', body: <>the first living creature, the lion, is the royal courage of the apostles against the demons (<W>Commentary on the Apocalypse</W> 6.1).</> },
			] },
			{ label: 'The white horse and its rider.', body: <></>, sub: [
				{ label: 'Victorinus:', body: <>this is what happened first. After the Lord ascended he sent the Holy Spirit, whose words, through preachers, went into human hearts like arrows and conquered unbelief. The white horse is the word of preaching sent into the world, as the Lord said: this Gospel will be preached to all nations, and then the end will come (Matthew 24:14) (6.1).</> },
				{ label: 'Oecumenius:', body: <>the white horse is the Gospel, and it goes out to bring the crown to Christ, who had begun to conquer the devil and would conquer him completely.</> },
				{ label: 'Primasius, St. Caesarius and St. Bede,', body: <>probably following Tyconius: the white horse is the Church, made whiter than snow by grace, and its rider is Christ. The bow is the preaching of the word, which pierces hearts so that they bear the fruit of faith (Psalm 45:6). Caesarius finds this horse promised in Zechariah (Zechariah 10:3–4), and sees in the rider the Holy Spirit as well (<W>Exposition on the Apocalypse</W>, Homily 5).</> },
				{ label: 'Andrew:', body: <>the generation of the apostles, who drew the Gospel like a bow against the demons and brought to Christ those wounded by saving arrows. “Conquering and to conquer” names two victories: the conversion of the nations, and their own willing death for it (6.2).</> },
				{ label: 'Bede:', body: <>the rider has a bow because he came to make war on the powers of the air, and a crown because by dying he overthrew the reign of death (Hebrews 2:9) (<W>On the Tabernacle</W> 1.25.11).</> },
			] },
		] },
		{ number: '02', reference: 'REVELATION 6:3–4', title: 'The second seal: a red horse', points: [
			{ label: 'Oecumenius:', body: <>the second work of Christ is his temptation and his victory over the tempter. The one who boasted that he would set his throne above the clouds (Isaiah 14:13–14) was sent away like a slave by a man: “Get away, Satan!” (Matthew 4:10). The sword is given to cut apart the agreement in evil and idolatry among those who dwell on earth, for the Lord came to bring not peace but a sword (Matthew 10:34–35) (6.1–4).</> },
			{ label: 'Victorinus:', body: <>the wars to come, as the Gospel says: nation will rise against nation (Luke 21:10–11) (6.2).</> },
			{ label: 'Tyconius and Caesarius:', body: <>the red horse is an evil people with the devil for its rider, red with the blood of others, and it comes out against the victorious Church. Zechariah saw a red horse of the Lord (Zechariah 1:8); that one is red with his own blood. The peace taken away is the peace of the earth. The Church keeps the peace Christ left her, which passes all understanding (<W>Commentary on the Apocalypse</W> 6.4; Homily 5).</> },
			{ label: 'Primasius:', body: <>after joy at the Church’s victory comes a warning. The Church is told beforehand of the evil she will face (6.3).</> },
			{ label: 'Andrew:', body: <>the second living creature is the calf, for the sacrifices of the martyrs. This seal is the age after the apostles, of martyrs and teachers. As the preaching spreads, the peace of the world is taken away, and the martyrs are offered on the heavenly altar. The horse is red for their blood or for their burning zeal. That the rider “was given” power shows God’s wise permission, by which his servants are tested (6.3–4).</> },
		] },
		{ number: '03', reference: 'REVELATION 6:5–6', title: 'The third seal: a black horse', points: [
			{ label: 'The horse and the scales.', body: <></>, sub: [
				{ label: 'Victorinus:', body: <>famine, as the Lord foretold (Matthew 24:7), and above all the great famine in the time of the Antichrist (6.2).</> },
				{ label: 'Oecumenius:', body: <>the third mercy of Christ is his teaching and his miracles, by which we learned who is truly God and stopped honouring what our hands had made. As yeast draws the flour, his teaching drew people to itself. The horse is black for the devil’s shame and grief; the scales are the just judgment the Lord gave in our favour (Psalm 9:5) (6.5–8).</> },
				{ label: 'Caesarius:', body: <>an evil people who work with the devil. They pretend to hold the scales of justice, and so deceive many (Homily 5).</> },
				{ label: 'Bede:', body: <>the company of false brothers, who hold the balance of a right confession and harm their fellows by works of darkness. “Do not damage” shows that someone is doing damage (<W>Explanation of the Apocalypse</W> 6.5–6).</> },
				{ label: 'Andrew:', body: <>the third living creature is the man, and the seal shows human beings falling through the misuse of free will. The black horse is the grief of those who fell away from Christ under torture; the scales test those who fell through inconstancy, vainglory or weakness of body (6.5–6).</> },
			] },
			{ label: 'Wheat and barley.', body: <></>, sub: [
				{ label: 'Tyconius:', body: <>the wheat and barley are the Church, her great and her least, or her leaders and her people. One measure and three cost the same: though one may exceed another in merit, all have been redeemed by one price. The three measures recall the leaven hidden in three measures of flour (Matthew 13:33) (6.6).</> },
				{ label: 'Primasius:', body: <>the one denarius is eternal life, common to all though there are many dwelling places (John 14:2). One may receive a greater reward than another, yet where each has immortality all share one eternity (6.6).</> },
				{ label: 'Bede:', body: <>take care not to scandalize by bad example a brother for whom Christ died, who bears the signs of the sacred blood and the chrism. Whether his merit is great or small, he was redeemed at the same price (6.5–6).</> },
				{ label: 'Oecumenius:', body: <>the wheat is the preaching of the Gospel, food for the mature; the barley is the teaching of the law of Moses. The seal warns of a time when both are scarce, “a famine… for hearing the word of the Lord” (Amos 8:11).</> },
				{ label: 'Andrew:', body: <>the wheat is those who contended lawfully and kept the divine image; the barley is those who bowed to their persecutors out of cowardice and later washed the image clean with tears (6.5–6).</> },
			] },
			{ label: '“Do not damage the olive oil or the wine.”', body: <>Primasius and Caesarius: the wine is the Blood of Christ and the oil the anointing with chrism; the power of the sacraments is not to be dishonoured. Oecumenius: leave alone those who despise the teaching, for there is still mercy for them, and hope that the preaching of the Son will gladden their hearts like wine (Psalm 104:15). Andrew: the wine and oil are the healing Christ gives through repentance, as to the man who fell among robbers. Let us bring to brothers who have fallen the wine of consolation mixed with the oil of compassion, so that what is lame may be healed (Hebrews 12:13).</> },
		] },
		{ number: '04', reference: 'REVELATION 6:7–8', title: 'The fourth seal: a pale horse', points: [
			{ label: 'Oecumenius:', body: <>with this seal the undoing of Adam’s sin begins. It is the scourging of Christ. We were condemned through pleasure and are healed by its opposite: disobedience by obedience, pleasure by pain, the hands that reached for the forbidden tree by the hands stretched out on the cross. He reads Death and Hades as sent against the demons, to end their tyranny (6.5–8).</> },
			{ label: 'Victorinus:', body: <>the Lord foretold these things among other disasters. “Hades accompanied him” means the devouring of the souls of many of the impious (6.3).</> },
			{ label: 'Andrew:', body: <>the fourth living creature is the eagle, whose swift descent on its prey suggests the plagues that come from above, to vindicate the devout and punish the impious unless they turn back. It has happened before. Eusebius tells how, under the emperor Maximinus, famine and plague killed more than could be buried, and how the Christians buried the dead and by their kindness led many to the truth (<W>Ecclesiastical History</W> 9.8). The like has been seen in his own day (6.7–8).</> },
			{ label: 'Tyconius:', body: <>there are two parts in the world, God’s and the devil’s. The devil’s has three divisions, inside the Church and outside: the pagans, false brothers, and those cut off by open error or schism. These make war on the one Church. The three horses that follow the white one are these three enemies, with sword, famine and death. Whether they are meant literally or spiritually may be left open: there is a sword against the body and one against the soul, a famine of bread and one of the word. Through it all the full number of the elect is kept: “none of them was lost” (John 17:12) (6.8).</> },
			{ label: 'Caesarius:', body: <>the pale horse is evil people who never stop stirring up persecutions. The three horses are one, and their rider is the devil, who is death. They are war, famine and pestilence, which the Lord foretold in the Gospel. They have already happened, and will happen more as the day of judgment draws near (Homily 5).</> },
			{ label: 'Bede:', body: <>heretics who dress as Catholics and carry death within them, drawing the lost after them. He points to the madness of Arius, which rose in Alexandria and reached as far as the ocean of Gaul, pursuing the faithful with a famine of God’s word and also with the sword (6.8).</> },
		] },
	],
};

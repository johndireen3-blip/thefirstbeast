import type { ReactNode } from 'react';
import { Link } from 'react-router';

export const sourceUrl = 'https://bible.usccb.org/bible/revelation/12';

type Passage = {
	id: string;
	label: string;
	range: string;
	title: string;
	intro: string;
	verses: { number: number; text: string }[];
	note: ReactNode;
};

export const passages: Passage[] = [
	{
		id: 'sign',
		label: 'A great sign',
		range: '01–06',
		title: 'A woman in glory, a dragon in wait',
		intro: 'A great sign appears in the sky.',
		verses: [
			{ number: 1, text: 'A great sign appears in the sky: a woman clothed with the sun, the moon beneath her feet, and a crown of twelve stars on her head.' },
			{ number: 2, text: 'She is with child and cries out in the pain of giving birth.' },
			{ number: 3, text: 'A second sign appears: a huge red dragon with seven heads, ten horns, and seven crowns.' },
			{ number: 4, text: 'Its tail sweeps a third of the stars to earth. It stands before the woman, ready to devour her child at birth.' },
			{ number: 5, text: 'She gives birth to a son destined to rule the nations with an iron rod. Her child is caught up to God and his throne.' },
			{ number: 6, text: 'The woman flees into the desert, to a place God has prepared, where she is cared for 1,260 days.' },
		],
		note: (
			<>
				The USCCB notes read the woman as God’s people of both Testaments: Israel, who gives birth to the Messiah, and the Church, persecuted after him. Her sun, moon and twelve stars recall Joseph’s dream (Gen 37:9). Catholic tradition also sees in her Mary, the Mother of the Messiah, the new Eve of Genesis 3:15. The Church reads 11:19 and 12:1 together on the Solemnity of the Assumption: the ark of the covenant appears in God’s temple, and then the Woman clothed with the sun. Catholic tradition sees in Mary the new Ark, who carried the Word made flesh (see{' '}
				<Link to="/chapter-11" className="page-link">Chapter 11</Link>
				).
			</>
		),
	},
	{
		id: 'war',
		label: 'War in heaven',
		range: '07–12',
		title: 'The accuser is thrown down',
		intro: 'War breaks out in heaven.',
		verses: [
			{ number: 7, text: 'War breaks out in heaven: Michael and his angels fight the dragon and its angels.' },
			{ number: 8, text: 'The dragon loses, and there is no longer any place for it in heaven.' },
			{ number: 9, text: 'The great dragon, the ancient serpent called the Devil and Satan, who deceives the whole world, is thrown down to earth with its angels.' },
			{ number: 10, text: 'A loud voice in heaven proclaims that salvation, power and the kingdom of God have come, because the accuser who accused our brothers day and night has been cast out.' },
			{ number: 11, text: 'They conquered him by the blood of the Lamb and the word of their testimony; love for life did not keep them from death.' },
			{ number: 12, text: 'Heaven rejoices, but woe to earth and sea: the Devil has come down in great fury, knowing his time is short.' },
		],
		note: (
			<>
				Michael, whose name means “Who is like God?”, is Israel’s protector in Daniel 12:1. The victory belongs to the Lamb’s blood and the martyrs’ testimony: the dragon is defeated before the beasts of chapter 13 ever appear. ‘They conquered him by the blood of the Lamb and by the word of their testimony’ (12:11). This is the Lamb ‘that seemed to have been slain’ (
				<Link to="/chapter-5" className="page-link">5:6</Link>
				), in whose blood the great multitude washed their robes white (
				<Link to="/chapter-7" className="page-link">7:14</Link>
				).
			</>
		),
	},
	{
		id: 'pursuit',
		label: 'The pursuit on earth',
		range: '13–18',
		title: 'The woman protected, her children targeted',
		intro: 'The dragon pursues the woman.',
		verses: [
			{ number: 13, text: 'Thrown down to earth, the dragon pursues the woman who gave birth to the male child.' },
			{ number: 14, text: 'She is given the two wings of the great eagle to fly to her place in the desert, where she is cared for “a time, times, and half a time,” far from the serpent.' },
			{ number: 15, text: 'The serpent spews a torrent of water after her to sweep her away.' },
			{ number: 16, text: 'The earth helps the woman: it opens its mouth and swallows the flood.' },
			{ number: 17, text: 'Enraged, the dragon goes off to wage war on the rest of her offspring, those who keep God’s commandments and bear witness to Jesus.' },
			{ number: 18, text: 'It takes its stand on the sand of the sea, where the next chapter’s beast is about to rise.' },
		],
		note: (
			<>
				God carried Israel “on eagles’ wings” out of Egypt (Exod 19:4), and the earth swallowed the pursuers (Exod 15:12). The Church is protected through her trial, not spared from it, for a limited season. Her 1,260 days are the same span as the two witnesses’ prophecy (
				<Link to="/chapter-11" className="page-link">11:3</Link>
				) and the beast’s forty-two months (
				<Link to="/chapter-13" className="page-link">13:5</Link>
				): a limited season of trial in which God both protects his people and sends them out to bear witness.
			</>
		),
	},
];

export const symbols = [
	{ number: '01', title: 'The woman clothed with the sun', reference: 'REVELATION 12:1–2', description: 'Sun, moon and twelve stars recall Joseph’s dream of Israel (Gen 37:9). She is God’s people, Israel and the Church, and the Church sees in her Mary, Mother of the Messiah.', link: 'https://bible.usccb.org/bible/genesis/37', linkLabel: 'Read Genesis 37' },
	{ number: '02', title: 'The red dragon', reference: 'REVELATION 12:3–4, 9', description: '“The ancient serpent” of Genesis 3 and the sea monster Leviathan (Isa 27:1). Its seven diadems claim rule over the world, a counterfeit of Christ’s many diadems (19:12).', link: 'https://bible.usccb.org/bible/genesis/3', linkLabel: 'Read Genesis 3' },
	{ number: '03', title: 'The child caught up to God', reference: 'REVELATION 12:5', description: 'The Messiah of Psalm 2, who rules the nations with an iron rod. “Caught up to God” points to the Ascension: the dragon cannot touch him.', link: 'https://bible.usccb.org/bible/psalms/2', linkLabel: 'Read Psalm 2' },
	{ number: '04', title: 'Michael and the war in heaven', reference: 'REVELATION 12:7–12', description: 'Michael, whose name means “Who is like God?”, is Israel’s protector in Daniel (Dan 12:1). The victory belongs to the Lamb’s blood and the martyrs’ testimony (12:11).', link: 'https://bible.usccb.org/bible/daniel/12', linkLabel: 'Read Daniel 12' },
	{ number: '05', title: 'Eagle’s wings and the desert', reference: 'REVELATION 12:6, 14–16', description: 'God carried Israel “on eagles’ wings” out of Egypt (Exod 19:4), and the earth swallowed the pursuers (Exod 15:12). The Church is protected for a limited time: 1,260 days.', link: '/topics/forty-two-months', linkLabel: 'Forty-Two Months' },
];

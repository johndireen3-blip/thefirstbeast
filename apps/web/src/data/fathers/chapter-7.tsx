import type { FathersData } from '@/components/fathers-section';

const W = ({ children }: { children: string }) => <em>{children}</em>;
const A = ({ to, children }: { to: string; children: string }) => <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>;

export const fathers: FathersData = {
	chapter: 7,
	intro: <>This is a summary. The Fathers on chapter 7 are set out in full on The Woman and the Ark, the sister site for the centre of the book: <A to="https://apocalypse12.com/the-seal-of-the-living-god">The Seal of the Living God</A> (7:1–8) and <A to="https://apocalypse12.com/the-144000-and-the-great-multitude">The 144,000 and the Great Multitude</A> (7:4–17).</>,
	related: [
		{ to: '/topics/the-144000', label: 'The 144,000' },
		{ to: 'https://apocalypse12.com/the-seal-of-the-living-god', label: 'The Seal of the Living God (The Woman and the Ark)' },
	],
	rows: [
		{ number: '01', reference: 'REVELATION 7:1–3', title: 'The four winds and the seal', points: [
			{ label: 'The winds held back.', body: <>Oecumenius reads the siege of Jerusalem as Josephus describes it. St. Andrew of Caesarea knows that reading and looks further: what happened in part in one land will happen over the whole world in the time of the Antichrist. St. Bede takes the four angels as the four empires of Daniel.</> },
			{ label: 'The angel from the rising of the sun.', body: <>St. Victorinus: Elijah, who comes before the end (Malachi 3:23–24). Oecumenius: the dawn of the Gospel. Bede: Christ himself, the dayspring from on high (Luke 1:78), who carries the standard of the cross.</> },
			{ label: 'The seal is the cross.', body: <>On this the Fathers agree. Andrew begins from Ezekiel 9 and calls it “the seal of the life-giving cross,” which marks those who bear the sign of Christ openly; it shows its power in the measure that we add our own work to it. Bede: the shape of the cross, reaching to the four quarters, shows that the Lord’s kingdom extends everywhere.</> },
		] },
		{ number: '02', reference: 'REVELATION 7:4–8', title: 'The 144,000', points: [
			{ label: 'The whole Church.', body: <>Bede: the finite number stands for the countless multitude of the whole Church, children of the patriarchs by descent or by imitating their faith (Galatians 3:29).</> },
			{ label: 'Believers from Israel.', body: <>Oecumenius thinks of the many thousands of Jews who believed in the first century (Acts 21:20). St. Jerome, with St. Paul, looks to the end, when “all Israel will be saved” (Romans 11:25–26). Andrew says of the two readings, “Either interpretation is acceptable.”</> },
			{ label: 'The names of the tribes.', body: <>Andrew and Bede read the list as a map of the Christian life, from Judah, “confession,” to Benjamin, “son of the right hand.” The full table is on the sister site.</> },
		] },
		{ number: '03', reference: 'REVELATION 7:9–14', title: 'The great multitude', points: [
			{ label: 'The same people, or another?', body: <>St. Caesarius of Arles and Primasius: the same people, now seen without number, since by believing all nations are grafted into the one root. Oecumenius and Bede: the believers from the nations, named after Israel. Andrew: the martyrs of every tribe and tongue.</> },
			{ label: '“Washed in the blood of the Lamb.”', body: <>Tertullian takes them strictly as the martyrs. Caesarius answers that they are “not, as some think, only martyrs,” for the text says the blood of the Lamb, not their own (1 John 1:7). Oecumenius points to the sacraments: Baptism into the Lord’s death and the receiving of his Blood. Primasius gives the martyrs first place and then includes all who are cleansed at the font and fed by the Lord’s flesh.</> },
		] },
		{ number: '04', reference: 'REVELATION 7:15–17', title: 'No more hunger, no more tears', points: [
			{ label: 'Already begun.', body: <>Tyconius reads the promise of the sacraments now: they do not hunger, because they are fed by “the living bread” (John 6:51), and do not thirst, because of the water Christ gives (John 4:14).</> },
			{ label: 'The springs of life-giving water.', body: <>Andrew: the abundant stream of the Spirit (John 7:38). Bede: the vision of God, for which the soul longs as the deer for running water (Psalm 42:2).</> },
			{ label: 'Every tear.', body: <>Tertullian notes that God wipes the tears from the same eyes that wept, which is a promise of the resurrection of the body (<W>On the Resurrection of the Flesh</W> 58).</> },
		] },
	],
};

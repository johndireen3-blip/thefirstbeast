import type { FathersData } from '@/components/fathers-section';

const W = ({ children }: { children: string }) => <em>{children}</em>;

export const fathers: FathersData = {
	chapter: 1,
	intro: <>The first chapter drew comment from the second century on. The readings below come from St. Irenaeus and Tertullian, from St. Athanasius, St. Jerome and St. Augustine, and from the commentators who worked through the whole book: St. Victorinus, Apringius of Beja, Primasius, St. Caesarius of Arles, Oecumenius, St. Andrew of Caesarea and St. Bede.</>,
	related: [{ to: '/topics/the-seven-churches', label: 'The Seven Churches' }],
	rows: [
		{ number: '01', reference: 'REVELATION 1:1–3', title: 'A revelation, and “soon”', points: [
			{ label: 'Apringius of Beja:', body: <>the book is called an Apocalypse, a revelation, because it shows what is hidden from the senses; unless Christ himself reveals it, the one who sees will not have the strength to understand (<W>Tractate on the Apocalypse</W> 1.1).</> },
			{ label: 'Oecumenius:', body: <>the revelation passes from the Father to the Son and from the Son to us, his servants. Why “soon,” when “more than five hundred years” had passed by his own day? Because to the eternal God a thousand years are as yesterday (Psalm 90:4); the word measures God’s eternity and not the calendar (<W>Commentary on the Apocalypse</W> 1.1–2).</> },
			{ label: 'St. Bede:', body: <>once the apostles had founded the Church, it was fitting to reveal the course by which she would spread and be perfected at the end, to strengthen her preachers against the world (<W>Explanation of the Apocalypse</W> 1.1).</> },
			{ label: '“Blessed is the one who reads.”', body: <>Apringius: reading does not fulfil the commandments, and hearing is not a deed done. Perfection is to do with understanding what you read and hear (1.3).</> },
		] },
		{ number: '02', reference: 'REVELATION 1:4', title: 'Seven churches, seven spirits', points: [
			{ label: 'St. Victorinus:', body: <>John names seven churches not because they are the only ones or the greatest, but because “what he says to one, he says to all.” St. Paul also wrote to seven churches (the Romans, Corinthians, Ephesians, Thessalonians, Galatians, Philippians and Colossians) and after that only to persons. Isaiah’s seven women who take hold of one man (Isaiah 4:1) are the churches and Christ: their bread is the Holy Spirit, their reproach is taken away in Baptism, and his name is called over them when each begins to be called a Christian. In the seven we are to think of the one Church (<W>Commentary on the Apocalypse</W> 1.7).</> },
			{ label: 'Apringius:', body: <>seven is the number of the present life, the week of creation (Genesis 2:2; Hebrews 4:4–5), so John writes to every age until the end of the world (1.4). St. Andrew of Caesarea says the same: seven stands for the Church that exists everywhere (<W>Commentary on the Apocalypse</W> 1.4).</> },
			{ label: '“Asia.”', body: <>St. Caesarius of Arles takes the name to mean “elevated” and reads the proud human race, to which the sevenfold grace of the Spirit comes through Christ and his servant John (<W>Exposition on the Apocalypse</W>, Homily 1). Apringius takes the same meaning in a good sense: the Church, lifted up by the Lord and always moving toward the things above.</> },
			{ label: '“Who is and who was and who is to come.”', body: <>Andrew reads the Trinity. “Who is” is the Father, who said to Moses, “I am who I am” (Exodus 3:14); “who was” is the Word, who was in the beginning; “who is to come” is the Paraclete, who comes to the Church’s children in Baptism and will come more fully in the age to come.</> },
			{ label: 'The seven spirits', body: <>are read two ways. Apringius: the one Holy Spirit, sevenfold in power, as Isaiah names his gifts (Isaiah 11:2–3). Oecumenius, with Andrew: seven angels, named beside the Trinity as servants and not as equals (1 Timothy 5:21).</> },
		] },
		{ number: '03', reference: 'REVELATION 1:5–6', title: 'Faithful witness, firstborn of the dead', points: [
			{ label: 'Apringius:', body: <>through the humanity he assumed, Christ bore faithful witness to his divinity, and by his Passion and blood cleansed us (1.5).</> },
			{ label: 'The martyrs of Lyons (A.D. 177),', body: <>in the letter Eusebius preserves, would not let themselves be called “witnesses,” that is, martyrs. That name they gave to Christ, the faithful and true witness; of themselves they said, “we are lowly and humble confessors” (<W>Ecclesiastical History</W> 5.2.2–3).</> },
			{ label: 'St. Irenaeus:', body: <>the Word put himself in our place, in the condition in which we had lost life, loosed the bonds of the prison and raised up fallen man in himself, becoming the firstborn from the dead (<W>Proof of the Apostolic Preaching</W> 38–39).</> },
			{ label: 'St. Athanasius:', body: <>he is “firstborn from the dead” not because he died before us, for we died first, but because he suffered death for us and abolished it and was the first to rise. Since he has risen, we too shall rise from him and through him (<W>Discourses Against the Arians</W> 2.61).</> },
			{ label: 'Oecumenius:', body: <>those raised before the Lord’s coming died again; that was a reprieve and not the true resurrection. Christ is its source and firstfruits (1.5).</> },
			{ label: 'St. Bede:', body: <>he is the firstborn among many brothers (Romans 8:29), even of those born before him. He came after them in time and before them in dignity, since to all who received him he gave power to become children of God (John 1:12) (<W>Homilies on the Gospels</W> 1.5).</> },
			{ label: '“A kingdom, priests.”', body: <>Bede: because the King of kings and heavenly Priest united us to his own body by offering himself for us, none of the saints lacks a share in the priesthood, since each is a member of the eternal Priest (1.6). The Church calls this the common priesthood of the baptized (Catechism of the Catholic Church 1546).</> },
		] },
		{ number: '04', reference: 'REVELATION 1:7–9', title: 'The clouds; Alpha and Omega; Patmos', points: [
			{ label: 'St. Fulgentius of Ruspe:', body: <>the Word made flesh keeps for ever the same human flesh in which he was born of the Virgin, was crucified, rose and ascended, and in it he will come again, as the angels told the apostles (Acts 1:11) (<W>Letter to Peter on the Faith</W> 20.63).</> },
			{ label: 'Oecumenius:', body: <>the “clouds” are the holy angels. The first coming was hidden, like rain upon a fleece; the second will be open, so that every eye sees him (1.7).</> },
			{ label: 'Tertullian:', body: <>Alpha runs on to Omega and Omega returns to Alpha. In Christ, the Word made flesh, all things are brought back to their beginning. He gives examples: marriage is one again, as it was in the beginning (Matthew 19:8), and the whole person is called back to paradise (<W>On Monogamy</W> 5).</> },
			{ label: 'St. Augustine,', body: <>on the feast of Sts. Peter and Paul: Peter the first of the apostles and Paul the last were brought to one day of martyrdom by the First and the Last. You have him as Creator that you might live at all, and as Redeemer that you might live always (<W>Sermon</W> 299B.1).</> },
			{ label: 'St. Athanasius:', body: <>“the Almighty” is said of the Son as of the Father, for the Godhead of the Son is the Father’s and is one (<W>Discourses Against the Arians</W> 3.4).</> },
			{ label: 'Patmos.', body: <>Apringius places John’s exile under Claudius; Bede, with the common tradition, under Domitian. Bede adds that John was allowed to enter the secrets of heaven at the very time he was forbidden to leave a small patch of earth (1.9).</> },
		] },
		{ number: '05', reference: 'REVELATION 1:10–12', title: 'The voice and the lampstands', points: [
			{ label: 'Apringius:', body: <>John was taken up in the spirit, not in the body, and on the Lord’s day, when he was given wholly to holy things. The trumpet is the voice of preaching (Isaiah 58:1) (1.10).</> },
			{ label: 'Andrew:', body: <>John turned “to see the voice.” It was not heard by the ear; spiritual hearing and spiritual seeing are one (1.12).</> },
			{ label: 'St. Irenaeus:', body: <>neither Moses nor Elijah nor Ezekiel saw God himself. The Father is invisible, and the Word makes him known (John 1:18). In this vision the head shows the glory he has from the Father, the long robe his priesthood, and the bronze in the furnace the fire of the end (<W>Against Heresies</W> 4.20.11).</> },
			{ label: 'Oecumenius:', body: <>John says lampstands, not lamps. A lampstand has no light of its own; it bears the light. So Christ enlightens his churches, and they are gold for the worth of those who receive that light (1.12–16). Apringius: the one shaft that carries the lamp is Christ, the only foundation (1 Corinthians 3:11).</> },
			{ label: 'Irenaeus again:', body: <>the Church has one faith throughout the world, one tradition from the apostles, one way of salvation. She is the seven-branched lampstand that bears the light of Christ (<W>Against Heresies</W> 5.20.1).</> },
			{ label: 'The seven names.', body: <>Apringius gives them meanings, as the learning of his day supplied them: Ephesus “my will,” Smyrna “their song,” Pergamum “to him who divides their horns” (the pride of the powers of the air, or of heretics, cut off from the Church), Thyatira “enlightened,” Sardis “beginning of beauty,” Philadelphia “preserving devotion to the Lord,” Laodicea “a tribe beloved of the Lord” or “a birth is expected.” He reads them as one portrait of the Church, awaiting her birth in Baptism and in the resurrection (1.11).</> },
		] },
		{ number: '06', reference: 'REVELATION 1:13–16', title: 'One like a son of man', points: [
			{ label: '“Like a son of man.”', body: <>Oecumenius: he is called son of man as the fruit of the womb of the ever-virgin Mary, who is our sister; and “like,” because he is also God and Lord of all, the Emmanuel. Primasius: John sees Christ and the Church together, for “the two shall become one flesh” is said of Christ and the Church (Ephesians 5:31–32) (<W>Commentary on the Apocalypse</W> 1.12).</> },
			{ label: 'The robe and the golden sash.', body: <></>, sub: [
				{ label: 'Victorinus:', body: <>the priestly robe is his flesh, which death did not corrupt and which holds an eternal priesthood (1.4).</> },
				{ label: 'Andrew:', body: <>he is high priest “according to the order of Melchizedek” (Hebrews 5:6), and the sash is at the breast, where mercy restrains wrath.</> },
				{ label: 'St. Jerome:', body: <>the Baptist wore a leather belt about the loins; the Lord wears gold about the breast, because the Gospel binds not only the deed but the mind and heart (Matthew 5:27–28) (<W>Homilies on Mark</W> 75).</> },
				{ label: 'Apringius:', body: <>the girding is a sign of the Passion, as the Lord told Peter that another would gird him (John 21:18). The gold is also the company of the saints, tested like gold in fire, and the fervent conscience and pure understanding given to the churches (1.13).</> },
				{ label: 'Caesarius and Andrew', body: <>see in the breasts the two Testaments, from which the faithful are nourished.</> },
			] },
			{ label: 'The white head and hair.', body: <></>, sub: [
				{ label: 'Victorinus:', body: <>his antiquity and immortality, for God is the head of Christ (1 Corinthians 11:3).</> },
				{ label: 'Apringius:', body: <>white for his tenderness toward sinners (Isaiah 1:18).</> },
				{ label: 'Caesarius:', body: <>the newly baptized; wool, because they are Christ’s sheep; snow, because the grace of Baptism falls freely from heaven before any merit (<W>Exposition on the Apocalypse</W>, Homily 1).</> },
			] },
			{ label: 'Eyes and feet.', body: <></>, sub: [
				{ label: 'Oecumenius:', body: <>the flame is his light, or the fear he rightly inspires in churches that are not keeping his law.</> },
				{ label: 'Victorinus:', body: <>the feet are the apostles, refined by suffering, through whom the preaching went out.</> },
				{ label: 'Apringius:', body: <>his human nature, pure as refined ore.</> },
				{ label: 'Andrew:', body: <>the foundations of the Church. His text reads “bronze incense,” fragrant when burned: the bronze is the human nature and the incense the divine, united without confusion; or the bronze is the clear sound of the preaching and the incense the conversion of the nations (1.15).</> },
				{ label: 'Bede:', body: <>the Church of the last days, to be tested by fire.</> },
			] },
			{ label: 'The voice like many waters.', body: <>Irenaeus: God works in many ways to bring the human race to salvation (<W>Against Heresies</W> 4.14.2). Oecumenius: how else would his voice reach the ends of the earth?</> },
			{ label: 'The sword from his mouth.', body: <></>, sub: [
				{ label: 'Victorinus:', body: <>the law and the Gospel, by which all will be judged (John 12:48). He gathers the Lord’s own sayings: he came to bring a sword (Matthew 10:34); the scribe brings out the new and the old (Matthew 13:52); the coin in the fish’s mouth was worth two (Matthew 17:27); God spoke once and the psalmist heard two things (Psalm 62:12). The two edges are the two Testaments. With the breath of his mouth the Lord will also slay the lawless one (2 Thessalonians 2:8).</> },
				{ label: 'Jerome:', body: <>the letter and the spirit; here below it strikes down adversaries, above it opens the kingdom. He notes in passing that the Apocalypse “is read in the churches” and counted among the canonical books (<W>Homilies on the Psalms</W> 59).</> },
				{ label: 'Fulgentius:', body: <>the Holy Spirit, the breath of his mouth, who proceeds from the Father and the Son (John 20:22) (<W>Letter to Peter on the Faith</W> 11.54).</> },
			] },
			{ label: 'The face like the sun.', body: <>Victorinus: the sun rises, sets and rises again; so he was born, suffered and rose. Bede: as he appeared to the disciples on the mountain, so he will appear to all the saints after the judgment, and the Church will shine with him (1.16).</> },
		] },
		{ number: '07', reference: 'REVELATION 1:17–20', title: '“Do not be afraid”', points: [
			{ label: 'Apringius:', body: <>John fell not from unbelief but from awe, giving himself wholly to the Lord in humility and faith; and the Lord, who rewards faith, strengthened him (1.17).</> },
			{ label: 'Oecumenius', body: <>hears Christ reason with him: if I, the wellspring of life, became dead for you and trampled death, how could you die from seeing me? I hold the keys of death and of the netherworld (1.17–19).</> },
			{ label: 'The seven stars.', body: <>Oecumenius: the holy angels, bright with the brightness of Christ, resting in the hand of God. Apringius: the souls of the saints, the whole company of the blessed until the end of the world; and the lampstands are the one true Church, founded on faith in the Trinity (1.20).</> },
		] },
	],
};

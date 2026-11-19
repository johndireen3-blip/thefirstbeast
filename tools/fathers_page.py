# One text, two outputs: TSX for thelambsvictory.org, Markdown for thefirstbeast.com.
INTRO_Q = "Who are the writers quoted in the “What the Fathers said” sections, and how much weight do they carry?"
INTRO = " They are the Christian teachers of the first eight centuries who commented on the Book of Revelation. Where they agree on a matter of faith, the Church listens to them as witnesses of her Tradition (CCC 688). On the details of Revelation they often differ, and where they differ a reader is free."
NAME = "“The Fathers” is used loosely on these pages for all the early writers cited. Strictly, a Father of the Church is marked by antiquity, orthodox teaching, holiness of life and the Church’s approval. Most of those below meet that test. A few do not, and each entry says so. They are cited because the later tradition read them and learned from them."
GROUPS = [
("The eight who commented on the whole book", None, [
 ("St. Victorinus of Petovium", "died about 304", "Bishop of what is now Ptuj in Slovenia, martyred under Diocletian. His is the oldest commentary on Revelation that survives. He expected a thousand-year reign of the saints on earth, a view the Church did not keep; St. Jerome later revised his work."),
 ("Tyconius", "about 330–390", "A lay theologian in North Africa who belonged to the Donatist schism and was condemned by his own party. His commentary is lost and is known through those who used it, which is why these pages say “Primasius, following Tyconius.” St. Augustine valued his rules for reading Scripture. Not a Father of the Church."),
 ("St. Caesarius of Arles", "about 470–543", "Bishop of Arles in Gaul and one of the great preachers of his age. His homilies on Revelation were long copied under Augustine’s name."),
 ("Apringius of Beja", "mid sixth century", "Bishop of Beja in what is now Portugal. His own commentary survives only for chapters 1 to 5 and 18 to 22."),
 ("Primasius", "active 550–560", "Bishop of Hadrumetum in what is now Tunisia. He drew on Augustine and Tyconius and passed their reading to the Middle Ages."),
 ("Oecumenius", "sixth century", "Author of the first Greek commentary on the book. He was a layman, called “the Rhetor” or “the Philosopher,” and a correspondent of Severus of Antioch, who rejected the Council of Chalcedon. Not a Father of the Church."),
 ("St. Andrew of Caesarea", "sixth or early seventh century", "Bishop of Caesarea in Cappadocia. His commentary became the standard one of the Greek East. He knew Oecumenius’s work and often answers it, so the two are best read together."),
 ("St. Bede the Venerable", "about 673–735", "Monk of Jarrow in Northumbria, historian of the English Church and Doctor of the Church."),
]),
("Others who are cited", "Second and third centuries", [
 ("St. Clement of Rome", "active about 92–101", "Pope; his letter to the Corinthians is one of the earliest Christian writings outside the New Testament."),
 ("St. Ignatius of Antioch", "died about 107", "Bishop of Antioch, who wrote seven letters on his way to martyrdom in Rome."),
 ("The Shepherd of Hermas", "second century", "An early Christian book of visions, widely read in the first centuries."),
 ("St. Irenaeus of Lyons", "about 135–202", "Bishop of Lyons and the great opponent of the Gnostics, declared a Doctor of the Church in 2022. He had known St. Polycarp, a disciple of St. John."),
 ("Clement of Alexandria", "about 150–215", "Head of the Christian school at Alexandria."),
 ("Tertullian", "about 160–after 220", "A brilliant writer of Carthage who shaped the Latin language of theology. In later life he joined the Montanist sect. Not a Father in the strict sense."),
 ("St. Hippolytus", "active early third century", "By tradition a priest of Rome and a martyr; some scholars now place him in the East."),
 ("Origen", "about 185–254", "The most learned biblical scholar of the early Church. Some of his opinions were later condemned, and he is read with that in mind."),
 ("St. Cyprian of Carthage", "died 258", "Bishop and martyr, whose letters show the Church under persecution."),
 ("St. Gregory the Wonderworker", "active about 248–264", "Bishop of Neocaesarea and a pupil of Origen."),
 ("St. Methodius of Olympus", "died 311", "Bishop and martyr."),
 ("Lactantius", "about 260–330", "A teacher of rhetoric and tutor to the son of Constantine."),
]),
(None, "Fourth and fifth centuries", [
 ("Eusebius of Caesarea", "about 260–340", "The first historian of the Church."),
 ("Aphrahat", "about 270–350", "“The Persian Sage,” the first major Christian writer in Syriac."),
 ("St. Athanasius", "about 295–373", "Bishop of Alexandria, defender of the divinity of Christ against the Arians, and Doctor of the Church."),
 ("St. Gregory of Nazianzus", "about 329–390", "Bishop and Doctor of the Church, called “the Theologian.”"),
 ("St. Epiphanius of Salamis", "about 315–403", "Bishop in Cyprus, who catalogued the heresies of his day."),
 ("St. Jerome", "about 347–420", "Translator of the Latin Bible and Doctor of the Church."),
 ("Rufinus of Aquileia", "about 345–411", "Monk and translator."),
 ("St. Augustine", "354–430", "Bishop of Hippo and Doctor of the Church. Book 20 of his City of God shaped the Western reading of Revelation 20."),
 ("St. Cyril of Alexandria", "about 375–444", "Bishop and Doctor of the Church."),
 ("St. Quodvultdeus", "active about 430", "Bishop of Carthage and friend of Augustine."),
 ("Salvian of Marseilles", "about 400–480", "A priest who wrote on God’s providence as the Roman West collapsed."),
]),
(None, "Sixth century", [
 ("St. Fulgentius of Ruspe", "about 467–532", "African bishop and follower of Augustine."),
 ("Cassiodorus", "about 485–580", "Roman statesman who founded the monastery of Vivarium."),
 ("St. Gregory the Great", "about 540–604", "Pope and Doctor of the Church."),
]),
]
USE1 = "Each is given in summary, with a few short phrases in his own words, and cited by work. Where a writer says something the Church does not teach, a note says so. Passages that bring charges against the Jewish people are left out; the Church does not read Scripture that way (Nostra Aetate 4)."
USE2 = "The selection comes from Revelation, Ancient Christian Commentary on Scripture, New Testament XII, edited by William C. Weinrich (InterVarsity Press, 2005). The complete commentaries are still to be consulted."
KW = " The Fathers do not agree on every image, and none of them names the day. They read the book to stay faithful in their own time, and that is the reason to read them now."
import sys
def tsx():
    o=["import { Link } from 'react-router';","","export function TheFathers() {","\treturn (","\t\t<section className=\"page-section\">","\t\t\t<div className=\"page-content page-content-wide\">","\t\t\t\t<p className=\"eyebrow\">GOING DEEPER</p>","\t\t\t\t<h1>Who Are the Fathers Cited Here?</h1>","\t\t\t\t<div className=\"page-prose\">",
       f"\t\t\t\t\t<p><strong>{INTRO_Q}</strong>{INTRO}</p>","\t\t\t\t\t<h2>A word on the name</h2>",f"\t\t\t\t\t<p>{NAME}</p>"]
    for h,sub,items in GROUPS:
        if h: o.append(f"\t\t\t\t\t<h2>{h}</h2>")
        if sub: o.append(f"\t\t\t\t\t<p><em>{sub}</em></p>")
        o.append("\t\t\t\t\t<ul className=\"page-list\">")
        for n,d,t in items: o.append(f"\t\t\t\t\t\t<li><strong>{n}</strong> ({d}). {t}</li>")
        o.append("\t\t\t\t\t</ul>")
    o+= ["\t\t\t\t\t<h2>How they are used on these pages</h2>",f"\t\t\t\t\t<p>{USE1.replace('Nostra Aetate','<em>Nostra Aetate</em>')}</p>",f"\t\t\t\t\t<p>{USE2.replace('from Revelation,','from <em>Revelation</em>,')}</p>",
         f"\t\t\t\t\t<p><strong>Keep watch.</strong>{KW} <Link className=\"page-link\" to=\"/how-to-test-a-reading\">How to Test a Reading of Revelation</Link> gives the questions to ask.</p>",
         "\t\t\t\t\t<p className=\"sources-note\">Related:{' '}<Link className=\"page-link\" to=\"/how-catholics-read-revelation\" target=\"_blank\" rel=\"noopener noreferrer\">How Catholics Read Revelation</Link> ·{' '}<a className=\"page-link\" href=\"https://apocalypse12.com/the-commentators\" target=\"_blank\" rel=\"noopener noreferrer\">The Commentators (The Woman and the Ark)</a> ·{' '}<Link className=\"page-link\" to=\"/further-reading\" target=\"_blank\" rel=\"noopener noreferrer\">Further Reading</Link>.</p>",
         "\t\t\t\t</div>","\t\t\t</div>","\t\t</section>","\t);","}",""]
    return "\n".join(o).replace("The Shepherd of Hermas","The <em>Shepherd</em> of Hermas").replace("his City of God","his <em>City of God</em>")
def md():
    q=lambda s:s.replace("“",'"').replace("”",'"').replace("’","'")
    o=['<!--{"title":"Who Are the Fathers Cited Here? | The First Beast","description":"Short notes on the early Christian writers quoted on this site: who they were, when they lived, and how much weight they carry.","kicker":"The sources","h1":"Who Are the Fathers Cited Here?","lead":"Short notes on the early Christian writers quoted on these pages: who they were, when they lived, and which of them are Fathers of the Church in the strict sense.","crumbs":[["Home","/"],["The Fathers","/the-fathers"]]}-->',
       f"**{q(INTRO_Q)}**{q(INTRO).replace('What the Fathers said','The Fathers')}","","## A word on the name","",q(NAME),""]
    for h,sub,items in GROUPS:
        if h: o+=[f"## {h}",""]
        if sub: o+=[f"*{sub}*",""]
        for n,d,t in items: o.append(f"- **{q(n)}** ({d}). {q(t)}")
        o.append("")
    o+=["## How they are used on these pages","",q(USE1).replace("Nostra Aetate","*Nostra Aetate*"),"",q(USE2).replace("from Revelation,","from *Revelation*,"),"",'<div class="response" markdown>',"","## Keep watch","",q(KW).strip()+" [How to test a reading of Revelation](/how-to-test-a-reading) gives the questions to ask.","","</div>","","A fuller account of the sources, with what is still to be consulted, is on [The Commentators](https://apocalypse12.com/the-commentators) at The Woman and the Ark.",""]
    return "\n".join(o).replace("The Shepherd of Hermas","The *Shepherd* of Hermas").replace("his City of God","his *City of God*").replace('the "The Fathers" sections','the "The Fathers" sections')
open(sys.argv[1],'w',encoding='utf-8').write(tsx() if sys.argv[1].endswith('.tsx') else md())

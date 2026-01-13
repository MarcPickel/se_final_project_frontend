import "./ThisYears.css";

import diary from "../../assets/diary-of-a-country-priest-gb-mt.jpg";
import confessions from "../../assets/confessions-st-augustine.jpg";
import service from "../../assets/collected-verse-robert-w-service.jpg";
import noApologies from "../../assets/no-apologies.jpg";
import robinHood from "../../assets/merry-adventures-of-robin-hood-hp.jpg";
import quoVadis from "../../assets/quo-vadis.jpg";
import longfellow from "../../assets/complete-works-henry-wadsworth-longfellow.jpg";
import quixote from "../../assets/don-quixote-mdc.jpg";
import leibowitz from "../../assets/a-canticle-for-leibowitz.jpg";
import frost from "../../assets/poetry-of-robert-frost.jpg";

function ThisYears() {
  return (
    <div className="this-years">
      <section className="this-years__annual-section">
        <h1 className="this-years__header">In the Year of Our Lord 2026</h1>
        <div className="this-years__container">
          <h2 className="this-years__month">January</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={diary}
              alt="Diary of a Country Priest"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">Diary of a Country Priest</h3>
                <p className="this-years__author">
                  Written by: George Bernanos
                </p>
                <p className="this-years__translator">
                  Translated by: Michael Tobin
                </p>
              </div>
              <p className="this-years__description">
                Awarded the Grand Prix for Literature by the Académie Française
                and adapted into a classic film by Robert Bresson, Diary of a
                Country Priest has long been recognized as a literary
                masterpiece. In this acclaimed new translation by Bernanos
                scholar Michael R. Tobin, the full, unabridged work is made
                available to English-language readers for the first time.
              </p>
              <p className="this-years__description">
                Set in rural France, the novel recounts the joys and travails of
                a young parish priest, tormented by illness and afflicted by
                awkwardness, as he deals with a colorful cast of local
                characters and endures deep interior suffering. Accessible to
                Catholic and non-Catholic readers alike, it is a tour de force
                of spiritual storytelling, destined to be a classic for
                generations to come.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">February</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={confessions}
              alt="The Confessions"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">The Confessions</h3>
                <p className="this-years__author">Written by: St. Augustine</p>
                <p className="this-years__translator">
                  Translated by: Maria Boulding
                </p>
              </div>
              <p className="this-years__description">
                Writing in the last years of the fourth century A.D., Saint
                Augustine of Hippo created what is at once the first true
                autobiography in Western literature and among the most
                sophisticated yet accessible theological arguments in the
                history of Christianity. With extraordinary candor and
                psychological acumen, Augustine recounts his passage from a life
                of sensuality, Manichaean superstition, and empty careerism to a
                genuine spiritual awakening, and he articulates views on
                marriage, morality, and faith that have shaped our discourse
                ever since. The Confessions allows us to appreciate both the
                startling modernity of Augustine's insights and the imperishable
                poetry of his voice.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">March</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={service}
              alt="The Collected Verse of Robert W. Service"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">
                  The Collected Verse of Robert W. Service
                </h3>
                <p className="this-years__author">
                  Written by: Robert W. Service
                </p>
              </div>
              <p className="this-years__description">
                Throughout his undistinguished youth, Service continued to
                author verses and even made small sums by selling these to
                magazines such as The Colonist. Yet it was only after his bank
                sent him to the distant north, to the city of Whitehorse in the
                Yukon, that poetry became a serious endeavor. Hearing of demand
                for locally relevant poems, Service at first wrote verse for the
                local saloon, whose patrons yearned for original entertainment
                each evening.
              </p>
              <p className="this-years__description">
                After meeting with approval here, Service pursued the idea
                further - he spoke with locals and heard their stories. He would
                also venture out into the beautiful wilds of Yukon, and using
                his own creative flair would author many unique verses. Although
                the many anecdotes Robert Service used to inspire his verse were
                unlikely to have occurred, they were all good stories
                representative of Yukon culture.
              </p>
              <p className="this-years__description">
                Sending a book of his verses south for publication, it was there
                that Service met with great acclaim. William Briggs, the
                Toronto-based publisher sought by Service's father realized that
                the poetry could be a sensation both in and outside Canada and
                made an immediate offer. The resulting collection, Songs of
                Sourdough, was an immediate bestseller.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">April</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={noApologies}
              alt="No Apologies: Why Civilization Depends on the Strength of Men"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">
                  No Apologies: Why Civilization Depends on the Strength of Men
                </h3>
                <p className="this-years__author">Written by: Anthony Esolen</p>
              </div>
              <p className="this-years__description">
                This is a book that should not have to be written. Its purpose
                is to return to men a sense of their worth as men and to give to
                boys the noble aim of manliness, an aim which is their due by
                right.
              </p>
              <p className="this-years__description">
                One of the most courageous and penetrating writers of our time,
                Anthony Esolen shows that men and women would both be happier if
                men came to a just appraisal of their worth. The manhood he
                praises does not boast or swagger, but it appreciates its
                powers. It is reluctant to hurt, but it does not cringe or
                cower.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">May</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={robinHood}
              alt="The Merry Adventures of Robin Hood"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">
                  The Merry Adventures of Robin Hood
                </h3>
                <p className="this-years__author">
                  Written and Illustrated by Howard Pyle
                </p>
              </div>
              <p className="this-years__description">
                The Merry Adventures of Robin Hood tells the classic tale of the
                mischievous Master of Sherwood Forest, who lives the outlaw life
                with Little John, Friar Tuck, Will Scarlet, and his band of
                Merry Men, bedeviling the implacable Sheriff of Nottingham
                during the reign of Richard the Lionhearted.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">June</h2>
          <div className="this-years__container-specifics">
            <img className="this-years__image" src={quoVadis} alt="Quo Vadis" />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">Quo Vadis</h3>
                <p className="this-years__author">
                  Written by: Henryk Sienkiewicz
                </p>
                <p className="this-years__translator">
                  Translated by: Jeremiah Curtin
                </p>
              </div>
              <p className="this-years__description">
                As Rome swelters under the lecherous tyranny of Emperor Nero,
                the young patrician Marcus Vinicius finds himself ruled by a far
                gentler (yet perhaps more dangerous) power: his love for the
                pure and beautiful Lygia. Yet Lygia is a member of that strange
                and fledgling cult of Christians, and as such refuses to make
                the Roman ways her ways. In pursuit of this seemingly
                unattainable woman, Vinicius is drawn into her world, the world
                of this Jesus and his followers and his heralds, the fisherman
                Peter and the Pharisee Paul, and their mysterious message of
                life everlasting. When the maniacal caprice of Nero lays a
                terrible charge against the Christians, Vinicius and Lygia and,
                indeed, every Roman citizen, must decide to whom they will
                pledge their ultimate allegiance: God or Caesar.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">July</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={longfellow}
              alt="The Complete Poetical Works of Henry Wadsworth Longfellow"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">
                  The Complete Poetical Works of Henry Wadsworth Longfellow
                </h3>
                <p className="this-years__author">
                  Written by: Henry Wadsworth Longfellow
                </p>
              </div>
              <p className="this-years__description">
                Henry Wadsworth Longfellow (1807-1882) is considered the
                "uncrowned poet laureate" of 19th-century America, and by some
                the finest poet in American history. He wrote more than four
                hundred poems, including such classics as Paul Revere's Ride and
                The Song of Hiawatha. Longfellow was the most popular poet and
                the most famous American of the nineteenth century. His
                popularity has not diminished since. He has been cherished by
                generations of readers, including President Theodor Roosevelt,
                who considered Longfellow his favorite poet, and his works have
                lost none of their appeal to a modern audience.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">August-October</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={quixote}
              alt="Don Quixote"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">Don Quixote</h3>
                <p className="this-years__author">Written by: Cervantes</p>
                <p className="this-years__translator">
                  Translated by: Tobias Smollett
                </p>
              </div>
              <p className="this-years__description">
                Don Quixote has become so entranced reading tales of chivalry
                that he decides to turn knight errant himself. In the company of
                his faithful squire, Sancho Panza, these exploits blossom in all
                sorts of wonderful ways. While Quixote's fancy often leads him
                astray—he tilts at windmills, imagining them to be giants—Sancho
                acquires cunning and a certain sagacity. Sane madman and wise
                fool, they roam the world together—and together they have
                haunted readers' imaginations for nearly four hundred years.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">November</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={leibowitz}
              alt="A Canticle for Leibowitz"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">A Canticle for Leibowitz</h3>
                <p className="this-years__author">
                  Written by: Walter M. Miller Jr.
                </p>
              </div>
              <p className="this-years__description">
                In the depths of the Utah desert, long after the Flame Deluge
                has scoured the earth clean, a monk of the Order of Saint
                Leibowitz has made a miraculous discovery: holy relics from the
                life of the great saint himself, including the blessed
                blueprint, the sacred shopping list, and the hallowed shrine of
                the Fallout Shelter.
              </p>
              <p className="this-years__description">
                In a terrifying age of darkness and decay, these artifacts could
                be the keys to mankind's salvation. But as the mystery at the
                core of this groundbreaking novel unfolds, it is the search
                itself—for meaning, for truth, for love—that offers hope for
                humanity's rebirth from the ashes.
              </p>
            </div>
          </div>
        </div>
        <div className="this-years__container">
          <h2 className="this-years__month">December</h2>
          <div className="this-years__container-specifics">
            <img
              className="this-years__image"
              src={frost}
              alt="The Poetry of Robert Frost: The Collected Poems"
            />
            <div className="this-years__content">
              <div className="this-years__content-specifics">
                <h3 className="this-years__title">
                  The Poetry of Robert Frost: The Collected Poems
                </h3>
                <p className="this-years__author">Written by: Robert Frost</p>
              </div>
              <p className="this-years__description">
                No poet is more emblematically American than Robert Frost. From
                "The Road Not Taken" to "Stopping by Woods on a Snowy Evening,"
                he refined and even defined our sense of what poetry is and what
                it can do. T. S. Eliot judged him "the most eminent, the most
                distinguished Anglo-American poet now living," and he is the
                only writer in history to have been awarded four Pulitzer
                Prizes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThisYears;

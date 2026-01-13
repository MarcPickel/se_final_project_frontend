import "./FAQ.css";

import pilate from "../../assets/jesus-before-pilate-first-interview-tissot.jpg";

function FAQ({ activeIndex, setActiveIndex }) {
  function handlePanel(index) {
    // Toggle: if clicking the same accordion, close it; otherwise open the clicked one
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div>
      <section className="faq">
        <div className="faq__content">
          <h1 className="faq__header">Quid est veritas?</h1>
          <p className="faq__text faq__text_italic">John 18:38</p>
          <img
            className="faq__image"
            src={pilate}
            alt="Jesus Before Pilate, First Interview, by Tissot"
          />
          <p className="faq__text">
            &quot;What is truth?&quot; asked Pilate, who could not even
            recognize He Who is Truth standing before him in his chambers. How
            too often is that which we are looking for under our noses? And, for
            that matter, what are goodness and beauty? Man longs to know these
            objective realities, and every man is capable of knowing them.
            Man&apos;s Search For Reading hopes to provide you with adequate
            answers or meet you at the start of your journey.
          </p>
          <p className="faq__text">
            Definitions are from&nbsp;
            <a
              href="https://cardinalnewmansociety.org/educating-to-truth-beauty-and-goodness-2/?gad_source=1&gad_campaignid=17907630441&gbraid=0AAAAADFYrY8arSUKLEpqvMeQZd1jevFBF&gclid=CjwKCAiAjojLBhAlEiwAcjhrDiU4fIE4jzKUoHQe676Nebh-QtadPE0d73dVNRkpbKqtwkVIwVpQHRoCOf4QAvD_BwE#easy-footnote-bottom-14-1129"
              className="faq__link"
              target="_blank"
            >
              the Cardinal Newman Society.
            </a>
          </p>
        </div>

        <div className="faq__container">
          <button
            className={`faq__accordion ${
              activeIndex === 0 ? "faq__accordion_active" : ""
            }`}
            onClick={() => handlePanel(0)}
          >
            What is truth?
          </button>
          <div
            className={`faq__panel ${
              activeIndex === 0 ? "faq__panel_active" : ""
            }`}
          >
            <p className="faq__text">
              &quot;A simple definition for truth is the mind being in accord
              with reality. We seek always to place our students and ourselves
              in proper relationship with the truth. Nothing we do can ever be
              opposed to the truth, that is, opposed to reality which has its
              being in God. Catholics hold that when our senses are in good
              condition and functioning properly under normal circumstances, and
              when our reason is functioning honestly and clearly, we can come
              to know reality and have the ability to make true judgments about
              reality. Through study, reflection, experimentation, argument and
              discussion, we believe that an object under discussion may
              manifest itself in its various relations, either directly or
              indirectly, to the mind.
            </p>
            <p className="faq__text">
              &quot;We believe that Man tends by nature toward the truth. Even
              though due to our fallen nature we may sometimes seek to ignore or
              obfuscate the truth, we are nonetheless obliged to honor and bear
              witness to it in its fullness. We are bound to adhere to the truth
              once we come to know it and direct our whole life in accordance
              with the demands of truth. As Catholics, we believe that reason,
              revelation, and science will never be in ultimate conflict, as the
              same God created them all. We oppose scientism which without
              evidence makes the metaphysical claim that only what can be
              measured and subject to physical science can be true. We oppose
              relativism, not only because its central dictum &quot;there is no
              truth&quot; is self-contradicting, but also because in removing
              objective truths from any analysis, this also removes the
              possibility of gauging human progress, destroys the basis for
              human dignity, and disables the ability to make important moral
              distinctions such as the desirability of tolerance and wisdom of
              pursuing truth, beauty, and goodness as opposed to their opposites
              of error, ugliness, and sin.&quot;
            </p>
          </div>
          <button
            className={`faq__accordion ${
              activeIndex === 1 ? "faq__accordion_active" : ""
            }`}
            onClick={() => handlePanel(1)}
          >
            What is goodness?
          </button>
          <div
            className={`faq__panel ${
              activeIndex === 1 ? "faq__panel_active" : ""
            }`}
          >
            <p className="faq__text">
              &quot;When we explore issues of goodness with our students, we are
              fundamentally asking them to consider questions of how well
              someone or something fulfills its purpose. Goodness is understood
              as the perfection of being. A thing is good to the degree that it
              enacts and perfects those powers, activities, and capacities
              appropriate to its nature and purpose. A good pair of scissors
              cuts, a good eye has 20/20 vision, and so forth. We have to know a
              thing&apos;s purpose, nature, or form to engage in an authentic
              discussion of &quot;The Good.&quot; When we get to questions of
              what is a good law, a good government, a good father, or a good
              man, the discussion quickly grows richer, deeper, and more
              complex.
            </p>
            <p className="faq__text">
              &quot;As Catholic educators, our goal is to help our students to
              become good persons. Among those qualities we deem good are
              wisdom, faithfulness, and virtue. Virtue is a habitual and firm
              disposition to do the good. We are free to the extent that with
              the help of others, we have maximized these goods, these proper
              powers and perfections as man. Such efforts raise fundamental
              questions of what it means to be human and our relationships with
              each other, the created world, and God.
            </p>
            <p className="faq__text">
              &quot;God, through reason and revelation, has not left us blind on
              these issues, nor has He left us up to our own subjective devices.
              It is a fundamental responsibility of the Catholic school to teach
              and pass on this Catholic culture, this Catholic worldview, this
              cultural patrimony, these insights, and these very fundamental
              truths about the good and what constitutes the good life.
              Particularly, in this and all our efforts as Catholic educators,
              we build our foundation of the good on Jesus Christ, who is the
              perfect man, and who fully reveals man to himself.&quot;
            </p>
          </div>

          <button
            className={`faq__accordion ${
              activeIndex === 2 ? "faq__accordion_active" : ""
            }`}
            onClick={() => handlePanel(2)}
          >
            What is beauty?
          </button>
          <div
            className={`faq__panel ${
              activeIndex === 2 ? "faq__panel_active" : ""
            }`}
          >
            <p className="faq__text">
              &quot;Beauty can help evoke wonder and delight, which are
              foundations of a life of wisdom and inquiry. Beauty involves
              apprehending unity, harmony, proportion, wholeness, and radiance.
              It often manifests itself in simplicity and purity, especially in
              math and science. Often beauty has a type of pre-rational
              (striking) force upon the soul, for instance when one witnesses a
              spectacular sunset or the face of one&apos;s beloved. Beauty can
              be understood as a type of inner radiance or shine coming from a
              thing that is well-ordered to its state of being or is true to its
              nature or form.
            </p>
            <p className="faq__text">
              &quot;Beauty pleases not only the eye or ear, but also the
              intellect in a celebration of the integrity of our body and soul.
              It can be seen as a sign of God&apos;s goodness, benevolence and
              graciousness, of both His presence and His transcendence in the
              world. It can serve as re-enchantment with the cosmos and all
              reality and assist in moving our students to a rich and deep
              contemplative beholding of the real.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;

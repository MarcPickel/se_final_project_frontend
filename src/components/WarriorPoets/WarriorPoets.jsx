import "./WarriorPoets.css";

import { useEffect } from "react";

import frost from "../../assets/robert-frost.jpg";
import sandburg from "../../assets/carl-sandburg.jpg";
import longfellow from "../../assets/henry-wadsworth-longfellow.jpg";

function WarriorPoets() {
  // Auto Scroll to Top on Page Entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="warrior-poets">
        <div className="warrior-poets__content_top">
          <h1 className="warrior-poets__main-header">
            &quot;They fought like warrior poets...&quot;
          </h1>
          <p className="warrior-poets__text warrior-poets__text_italic">
            Braveheart
          </p>
          <p className="warrior-poets__text">
            Poetry, like anything new, is strange and uncomfortable. And the
            poets themselves seem entirely bizarre and unmanly. Such things
            couldn&apos;t be farther from the truth.
          </p>
          <p className="warrior-poets__text">
            The poety written before Modernity&apos;s free-for-all, emotional
            escapades was entirely different. Traditional poetry was written by
            real men, by warriors, even when (in some cases) they lived in the
            midst of Modernity. Just by examining their lives, they bear witness
            to manly virtues and drives.
          </p>
        </div>
        <div className="warrior-poets__container">
          <img
            className="warrior-poets__image"
            src={frost}
            alt="Robert Frost"
          />
          <div className="warrior-poets__content">
            <h2 className="warrior-poets__header">Robert Frost</h2>
            <p className="warrior-poets__text">
              From Louis Untermeyer&apos;s
              <span className="warrior-poets__text warrior-poets__text_italic">
                &#160;Doorways to Poetry
              </span>
              ;
            </p>
            <p className="warrior-poets__text">
              Robert Frost was born in San Francisco, California, March 26,
              1875. His father, William Prescott Frost, came from New Hampshire,
              the ninth generation of a family of New Englanders. Originally a
              teacher, the father married a teacher, but soon after the marriage
              moved to San Francisco where he became an editor and politician.
              During the Civil War he was in favor of the Confederate cause, and
              so strong were his Southern sympathies that, years after the war
              was over, he named his son &quot;Robert Lee.&quot; The father died
              prematurely, and his son, barely ten years old, was brought back
              East.
            </p>
            <p className="warrior-poets__text">
              Frost&apos;s mother supported herself and her children by teaching
              school in Lawrence, Massachusetts, a town divided between the
              social aristocracy and immigrant labor. Even as a boy, Frost never
              allied himself with any clan or party; he learned to keep to the
              &quot;middle course&quot; which he pursued and eloquently
              exemplified in later years. Frost graduated from the Lawrence
              Grammar School and entered the High School, where he met a fellow
              pupil, Elinor White, who was to become his wife. While still an
              undergraduate, Frost sent out a few poems, and his first verse was
              published in
              <span className="warrior-poets__text warrior-poets__text_italic">
                &#160;The Independent&#160;
              </span>
              when he was not quite seventeen.
            </p>
            <p className="warrior-poets__text">
              At eighteen Frost entered Dartmouth College, but he remained there
              only a few months. Two things drove him back to Lawrence; he did
              not like the college curriculum, and he did not like being
              separated from Miss White. Much to the annoyance of his uncle and
              his grandfather, Frost became a bobbin boy in one of the Lawrence
              mills. It was an inglorious position, almost the lowest, but Frost
              determined to earn his living and get married. He did both. As
              soon as Miss White graduated from Saint Lawrence University in
              northern New York they were married. This was in 1895. Two years
              later, at the age of twenty-two, Frost moved his wife and child to
              Cambridge and entered Harvard, making one more effort to complete
              the college courses. But once again the curriculum was distasteful
              to him; besides, married students were set apart from the other
              undergraduates. After a two years&apos; struggle, Frost returned
              to Lawrence determined to support his small family by labor. He
              taught school and wrote a column for a weekly newspaper; but,
              since this did not bring enough income, he also made shoes and ran
              a farm. For eleven years he struggled with stubborn New Hampshire
              soil, living in poverty, working endlessly, writing secretly.
            </p>
            <p className="warrior-poets__text">
              At the end of elevn years Frost not only needed a change, he
              needed a rest. He sold his farm, scraped a few dollars together,
              and sailed for England. Here, for the first time, Frost moved in a
              literary circle &mdash; he became friends with Rupert Brooke, W.
              W. Gibson, Lascelles Abercrombie, and Edward Thomas, who became
              his disciple &mdash; and it was here that Frost&apos;s first and
              second books were published. His genius was recognized at once,
              and when Frost returned to his native land in early 1915, he
              returned as a suddenly famous American poet.
            </p>
          </div>
        </div>
        <div className="warrior-poets__container">
          <div className="warrior-poets__content">
            <h2 className="warrior-poets__header">Carl Sandburg</h2>
            <p className="warrior-poets__text">
              From
              <a
                href="https://en.wikipedia.org/wiki/Carl_Sandburg"
                className="warrior-poets__link"
              >
                &#160;Wikipedia
              </a>
            </p>
            <p className="warrior-poets__text">
              Carl Sandburg was born in a three-room cottage at 313 East Third
              Street in Galesburg, Illinois, to Clara Mathilda (née Anderson)
              and August Sandberg, both of Swedish ancestry. He adopted the
              nickname "Charles" or “Charlie” in elementary school and, along
              with his two oldest siblings, changed the spelling of the family
              name to "Sandburg".
            </p>
            <p className="warrior-poets__text">
              At the age of thirteen, Sandburg left school and began driving a
              milk wagon. Between approximately ages fourteen and seventeen or
              eighteen, he worked as a porter at the Union Hotel barbershop in
              Galesburg. He later returned to the milk route for eighteen months
              before working as a bricklayer and a farm laborer on the wheat
              plains of Kansas.
            </p>
            <p className="warrior-poets__text">
              After a period at Lombard College in Galesburg, Sandburg worked in
              various jobs, including as a hotel servant in Denver and a
              coal-heaver in Omaha, Nebraska. He began his writing career as a
              journalist for the Chicago Daily News and went on to write poetry,
              history, biographies, novels, children&apos;s literature, and film
              reviews. He also collected and edited books of ballads and
              folklore. Sandburg lived primarily in Illinois, Wisconsin, and
              Michigan before moving to North Carolina.
            </p>
            <p className="warrior-poets__text">
              During the Spanish&mdash;American War, Sandburg volunteered for
              military service and was stationed in Puerto Rico with the 6th
              Illinois Infantry, landing at Guánica on July 25, 1898, though he
              did not see combat. He attended the United States Military Academy
              in West Point, New York for two weeks but left after failing
              mathematics and grammar examinations. He returned to Galesburg and
              entered Lombard College, leaving without a degree in 1903.
            </p>
            <p className="warrior-poets__text">
              In 1907, Sandburg met Lilian Steichen (1883&mdash;1977), sister of
              photographer Edward Steichen, at the Milwaukee Social Democratic
              Party office. They married the following year and had three
              daughters. Their first daughter, Margaret, was born in 1911. The
              family later lived in Harbert, Michigan; the Ravenswood
              neighborhood of Chicago; and then in Maywood, Illinois. From 1919
              to 1930, they resided at 331 South York Street in Elmhurst,
              Illinois.
            </p>
            <p className="warrior-poets__text">
              During his years living in Chicago&apos;s western suburbs,
              Sandburg published several major works, including Chicago Poems
              (1916), Cornhuskers (1918), and Smoke and Steel (1920). He
              received a Pulitzer Prize in 1919, funded by a special grant from
              the Poetry Society of America, for Cornhuskers. He also wrote
              three children&apos;s books—Rootabaga Stories (1922), Rootabaga
              Pigeons (1923), and Potato Face (1930)&mdash;as well as Abraham
              Lincoln: The Prairie Years (1926), The American Songbag (1927),
              and Good Morning, America (1928).
            </p>
          </div>
          <img
            className="warrior-poets__image"
            src={sandburg}
            alt="Carl Sandburg"
          />
        </div>
        <div className="warrior-poets__container">
          <img
            className="warrior-poets__image"
            src={longfellow}
            alt="Henry Wadsworth Longfellow"
          />
          <div className="warrior-poets__content">
            <h2 className="warrior-poets__header">
              Henry Wadsworth Longfellow
            </h2>
            <p className="warrior-poets__text">
              From
              <a
                href="https://poets.org/poet/henry-wadsworth-longfellow"
                className="warrior-poets__link"
              >
                &#160;Poets.org
              </a>
            </p>
            <p className="warrior-poets__text">
              Henry Wadsworth Longfellow was born in Portland, Maine—then still
              part of Massachusetts&mdash;on February 27, 1807, the second son
              in a family of eight children. His mother, Zilpah Wadsworth, was
              the daughter of a Revolutionary War hero. His father, Stephen
              Longfellow, was a prominent Portland lawyer and later a member of
              Congress.
            </p>
            <p className="warrior-poets__text">
              After graduating from Bowdoin College, Longfellow studied modern
              languages in Europe for three years, then returned to Bowdoin to
              teach them. In 1831, he married Mary Storer Potter of Portland, a
              former classmate, and soon published his first book, a description
              of his travels called Outre Mer [Overseas]. But, in November 1835,
              during a second trip to Europe, Longfellow&apos;s life was shaken
              when his wife died during a miscarriage. The young teacher spent a
              grief-stricken year in Germany and Switzerland.
            </p>
            <p className="warrior-poets__text">
              Longfellow took a position at Harvard in 1836. Three years later,
              at the age of thirty-two, he published his first collection of
              poems, Voices of the Night, followed in 1841 by Ballads and Other
              Poems. Many of these poems (“A Psalm of Life,” for example) showed
              people triumphing over adversity, and in a struggling young nation
              that theme was inspiring. Both books were very popular, but
              Longfellow&apos;s growing duties as a professor left him little
              time to write more. In addition, Frances Appleton, a young woman
              from Boston, had refused his proposal of marriage.
            </p>
            <p className="warrior-poets__text">
              Frances finally accepted Longfellow&apos;s proposal the following
              spring, ushering in the happiest eighteen years of
              Longfellow&apos;s life. The couple had six children, five of whom
              lived to adulthood, and the marriage gave him new confidence. In
              1847, he published Evangeline, a book-length poem [...that] takes
              place as the British drive the French from Nova Scotia, and two
              lovers are parted, only to find each other years later when the
              man is about to die.
            </p>
            <p className="warrior-poets__text">
              In 1854, Longfellow decided to quit teaching to devote all his
              time to poetry. He published Hiawatha, a long poem about Native
              American life, and The Courtship of Miles Standish and Other
              Poems. Both books were immensely successful, but Longfellow was
              now preoccupied with national events. With the country moving
              toward civil war, he wrote “Paul Revere&apos;s Ride,” a call for
              courage in the coming conflict.
            </p>
            <p className="warrior-poets__text">
              A few months after the war began in 1861, Frances Longfellow was
              sealing an envelope with wax when her dress caught fire. Despite
              her husband&apos;s desperate attempts to save her, she died the
              next day. Profoundly saddened, Longfellow published nothing for
              the next two years. He found comfort in his family and in reading
              Dante&apos;s Divine Comedy. (Later, he produced its first American
              translation.) Tales of a Wayside Inn, largely written before his
              wife&apos;s death, was published in 1863.
            </p>
            <p className="warrior-poets__text">
              When the Civil War ended in 1865, the poet was fifty-eight. His
              most important work was finished, but his fame kept growing. In
              London alone, twenty-four different companies were publishing his
              work. His poems were popular throughout the English-speaking
              world, and they were widely translated, making him the most famous
              American of his day. His admirers included Abraham Lincoln,
              Charles Dickens, and Charles Baudelaire.
            </p>
            <p className="warrior-poets__text">
              From 1866 to 1880, Longfellow published seven more books of
              poetry, and his seventy-fifth birthday in 1882 was celebrated
              across the country. But his health was failing, and he died the
              following month, on March 24. When Walt Whitman heard of the
              poet&apos;s death, he wrote that, while Longfellow&apos;s work
              “brings nothing offensive or new, does not deal hard blows,” he
              was the sort of bard most needed in a materialistic age: “He comes
              as the poet of melancholy, courtesy, deference—poet of all
              sympathetic gentleness&mdash;and universal poet of women and young
              people. I should have to think long if I were ask&apos;d to name
              the man who has done more and in more valuable directions, for
              America.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WarriorPoets;

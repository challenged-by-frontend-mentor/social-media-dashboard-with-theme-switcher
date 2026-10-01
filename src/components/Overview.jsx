import IconFacebook from "../assets/icon-facebook.svg";
import IconInstagram from "../assets/icon-instagram.svg";
import IconTwitter from "../assets/icon-twitter.svg";
import IconYoutube from "../assets/icon-youtube.svg";
import ArrowUp from "../assets/icon-up.svg";
import ArrowDown from "../assets/icon-down.svg";

const PLATFORM_ICON = {
  facebook: IconFacebook,
  twitter: IconTwitter,
  instagram: IconInstagram,
  youtube: IconYoutube,
};

const OVERVIEW_DATA = [
  {
    topic: "Page Views",
    amount: 87,
    differencePercent: 3,
    platform: "facebook",
    increase: true,
  },
  {
    topic: "Likes",
    amount: 52,
    differencePercent: 2,
    platform: "facebook",
    increase: false,
  },
  {
    topic: "Likes",
    amount: 5462,
    differencePercent: 2257,
    platform: "instagram",
    increase: true,
  },
  {
    topic: "Profile Views",
    amount: 52000,
    differencePercent: 1375,
    platform: "instagram",
    increase: true,
  },
  {
    topic: "Retweets",
    amount: 117,
    differencePercent: 303,
    platform: "twitter",
    increase: true,
  },
  {
    topic: "Likes",
    amount: 507,
    differencePercent: 553,
    platform: "twitter",
    increase: true,
  },
  {
    topic: "Likes",
    amount: 107,
    differencePercent: 19,
    platform: "youtube",
    increase: false,
  },
  {
    topic: "Total Views",
    amount: 1407,
    differencePercent: 12,
    platform: "youtube",
    increase: false,
  },
];

const Overview = () => {
  return (
    <section className="overview">
      <h2 className="overview__title">Overview - Today</h2>
      <div className="overview__cards-container">
        {OVERVIEW_DATA.map((item) => (
          <article
            className="overview__card"
            key={`overview-${item.platform}-${item.topic}`}
          >
            <h3 className="overview__card-topic">{item.topic}</h3>
            <img
              src={PLATFORM_ICON[item.platform]}
              alt=""
              aria-hidden="true"
              className="overview__card-icon"
            />
            <p
              className="overview__stat"
            >
              {item.amount >= 10000 ? Math.floor(item.amount / 1000) + "k" : item.amount}
            </p>
            <div
              className="overview__difference"
            >
              <img
                src={item.increase ? ArrowUp : ArrowDown}
                alt=""
                aria-hidden="true"
                className="overview__direction-icon"
              />
              <span className={`overview__difference-amount overview__difference-amount--${item.increase ? "increase" : "decrease"}`}>
                {item.differencePercent}%
              </span>
              <span className="sr-only">
                {`${item.increase ? "Increased" : "Decreased"} by ${item.differencePercent}% today`}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Overview;

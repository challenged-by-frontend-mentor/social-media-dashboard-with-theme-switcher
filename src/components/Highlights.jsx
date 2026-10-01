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

const HIGHLIGHTS_DATA = [
  {
    platform: "facebook",
    username: "@nathanf",
    amount: 1987,
    unit: "followers",
    difference: 12,
    date: "today",
    increase: true,
  },
  {
    platform: "twitter",
    username: "@nathanf",
    amount: 1044,
    unit: "followers",
    difference: 99,
    date: "today",
    increase: true,
  },
  {
    platform: "instagram",
    username: "@realnathanf",
    amount: 11000,
    unit: "followers",
    difference: 1099,
    date: "today",
    increase: true,
  },
  {
    platform: "youtube",
    username: "Nathan F.",
    amount: 8239,
    unit: "subscribers",
    difference: 144,
    date: "today",
    increase: false,
  },
];

const Highlights = () => {
  return (
    <section className="highlight" aria-label="Social Media Followers Overview">
      {HIGHLIGHTS_DATA.map((item) => {
        const changeText = `${item.difference} ${item.unit} ${item.increase ? "increased" : "decreased"} ${item.date}`;

        return (
          <article
            className={`highlight__card highlight__card--${item.platform}`}
            key={`highlight-${item.platform}`}
          >
            <div className="highlight__card-account">
              <img
                src={PLATFORM_ICON[item.platform]}
                alt=""
                aria-hidden="true"
                className="highlight__card-icon"
              />
              <span className="highlight__username">{item.username}</span>
            </div>
            <div className="highlight__card-stat">
              <p className="highlight__follower-number">
                {item.amount >= 10000
                  ? `${Math.floor(item.amount / 1000)}k`
                  : item.amount}
              </p>
              <span className="highlight__follower-unit">
                {item.unit.toUpperCase()}
              </span>
            </div>
            <div
              className={`highlight__card-difference highlight__card-difference--${item.increase ? "increase" : "decrease"}`}
            >
              <img
                src={item.increase ? ArrowUp : ArrowDown}
                alt=""
                aria-hidden="true"
                className="highlight__difference-direction"
              />
              <span className={`highlight__difference-amount highlight__difference-amount--${item.increase ? "increase" : "decrease"}`}>
                {item.difference}
              </span>
              <span className="highlight__difference-day">{item.date.charAt(0).toUpperCase() + item.date.slice(1)}</span>
              <span className="sr-only">{changeText}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Highlights;

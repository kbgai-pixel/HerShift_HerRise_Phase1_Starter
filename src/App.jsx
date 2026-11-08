import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  CalendarDays,
  MapPin,
  Sparkles,
  Heart,
  Users,
  Mail,
  Instagram,
  Facebook,
  CheckCircle2,
} from "lucide-react";

const BOOKING_URL = "https://tidycal.com/kfm";
const retreats = [
  {
    id: "next-chapter",
    number: "01",
    title: "Her Next Chapter",
    audience:
      "For women navigating divorce, separation or a major life transition.",
    message:
      "You are still you. There is life, possibility and purpose beyond this chapter.",
    detail:
      "A thoughtful space to pause, breathe, rediscover your confidence and begin imagining what life can look like from here.",
    tone: "lavender",
  },
  {
    id: "becoming",
    number: "02",
    title: "The Woman You're Becoming",
    audience:
      "For women seeking personal growth, confidence and renewed direction.",
    message: "You don't need a crisis to give yourself permission to grow.",
    detail:
      "Reconnect with your values, rediscover your possibilities and make intentional choices about the woman you are becoming.",
    tone: "rose",
  },
  {
    id: "leader",
    number: "03",
    title: "The Leader Behind the Work",
    audience: "For entrepreneurs, professionals and women in leadership.",
    message:
      "You can pursue meaningful success without leaving yourself behind.",
    detail:
      "Step away from everyday demands, reconnect with your vision and return with renewed perspective and a practical next-step plan.",
    tone: "gold",
  },
];
const events = [
  {
    id: "signature-retreat",
    title: "The Signature 5-Day Retreat",
    type: "Signature retreat",
    date: "Dates announced soon",
    place: "Destination announced with each retreat",
    price: "Enquire for details",
    status: "Interest list open",
    description:
      "Five intentional days of reflection, reconnection, restoration, meaningful conversations and next-chapter planning.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">H</span>
          <span>
            HER<span className="brand-accent">SHIFT</span> <i>|</i> HER
            <span className="brand-accent">RISE</span>
            <small>REFLECT · RECONNECT · REIMAGINE · RISE</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/" onClick={close}>
            Home
          </NavLink>
          <NavLink to="/events" onClick={close}>
            Retreats & Events
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
          <Link className="nav-cta" to="/register" onClick={close}>
            Register interest <ArrowRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">H</span>
            <span>
              HER<span className="brand-accent">SHIFT</span> | HER
              <span className="brand-accent">RISE</span>
              <small>YOUR NEXT CHAPTER BEGINS WITH YOU</small>
            </span>
          </Link>
          <p className="muted">
            Intentional retreat experiences for women ready to pause, reconnect
            and rise.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/events">Retreats & events</Link>
          <Link to="/about">Our story</Link>
          <Link to="/register">Register interest</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="mailto:hello@therisecollective.ca">
            hello@therisecollective.ca
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book a conversation
          </a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} HerShift | HerRise. All rights reserved.
        </span>
        <span>Presented by The Rise Collective</span>
      </div>
    </footer>
  );
}
function ButtonLink({ to, children, secondary = false }) {
  return (
    <Link className={secondary ? "button button-secondary" : "button"} to={to}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow light">THE SIGNATURE RETREAT EXPERIENCE</p>
          <h1>
            Make room for
            <br />
            <em>what comes next.</em>
          </h1>
          <p className="hero-copy">
            A meaningful pause to reflect, reconnect with yourself and reimagine
            the life you want to create.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/events">Explore the experiences</ButtonLink>
            <Link className="text-link light-link" to="/about">
              Discover HerShift | HerRise
            </Link>
          </div>
          <div className="hero-note">
            REFLECT <b>·</b> RECONNECT <b>·</b> REIMAGINE <b>·</b> RISE
          </div>
        </div>
      </section>
      <section className="intro section">
        <div className="intro-label">
          <span className="overline">A SPACE TO COME BACK TO YOU</span>
          <span className="line"></span>
        </div>
        <div className="intro-copy">
          <h2>
            Your next chapter
            <br />
            <em>begins with you.</em>
          </h2>
          <div>
            <p className="lead">
              HerShift | HerRise is more than a getaway. It is an intentional
              pause to reconnect with who you are, recognise what is possible
              and take meaningful steps towards the life you want to create.
            </p>
            <p>
              You do not have to have everything figured out before you arrive.
              You simply have to be willing to give yourself the time and space
              to begin.
            </p>
            <ButtonLink to="/about" secondary>
              Our approach
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="experiences section section-tint">
        <div className="section-heading">
          <span className="overline">THREE WAYS TO RISE</span>
          <h2>
            There is a space
            <br />
            <em>for your season.</em>
          </h2>
          <p>
            Different seasons of life call for different kinds of support. Find
            the experience that speaks to where you are — and where you want to
            go.
          </p>
        </div>
        <div className="experience-grid">
          {retreats.map((r) => (
            <article className={`experience-card ${r.tone}`} key={r.id}>
              <span className="card-number">{r.number} / EXPERIENCE</span>
              <div className="card-icon">
                <Sparkles size={22} />
              </div>
              <h3>{r.title}</h3>
              <p className="card-audience">{r.audience}</p>
              <p>{r.message}</p>
              <Link className="arrow-link" to={`/events#${r.id}`}>
                Discover this experience <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="quote-band">
        <div className="quote-mark">“</div>
        <blockquote>
          You are not a project that needs fixing. You deserve the space to grow
          into the life you want.
        </blockquote>
        <span>THE HERSHIFT | HERRISE PHILOSOPHY</span>
      </section>
      <section className="cta-section">
        <div>
          <span className="overline">YOUR NEXT CHAPTER IS WAITING</span>
          <h2>
            Give yourself
            <br />
            <em>permission to begin.</em>
          </h2>
          <p>
            Join the HerShift | HerRise community and be among the first to hear
            about upcoming retreat experiences.
          </p>
          <ButtonLink to="/register">Register your interest</ButtonLink>
        </div>
        <div className="cta-image"></div>
      </section>
    </>
  );
}
function Events() {
  return (
    <>
      <PageHero
        eyebrow="FIND YOUR EXPERIENCE"
        title={
          <>
            Retreats & <em>gatherings.</em>
          </>
        }
        intro="Explore the experiences designed to meet you where you are and support the woman you are becoming."
      />
      <section className="section events-layout">
        <div className="event-feature">
          <div className="event-image"></div>
          <div className="event-info">
            <span className="overline">
              FEATURED EXPERIENCE · INTEREST LIST OPEN
            </span>
            <h2>
              The Signature
              <br />
              <em>5-Day Retreat</em>
            </h2>
            <p>
              Five days to reflect, reconnect, restore and rise. A thoughtful
              balance of guided personal development, wellness, sisterhood,
              destination exploration and time to yourself.
            </p>
            <div className="event-meta">
              <span>
                <CalendarDays size={16} /> Dates announced soon
              </span>
              <span>
                <MapPin size={16} /> Destination announced with each retreat
              </span>
            </div>
            <div className="event-bottom">
              <strong>Enquire for details</strong>
              <ButtonLink to="/register">Register interest</ButtonLink>
            </div>
          </div>
        </div>
        <div className="section-heading compact">
          <span className="overline">CHOOSE YOUR SEASON</span>
          <h2>
            Three experiences.
            <br />
            <em>One intention.</em>
          </h2>
        </div>
        <div className="experience-grid event-experiences">
          {retreats.map((r) => (
            <article
              id={r.id}
              className={`experience-card ${r.tone}`}
              key={r.id}
            >
              <span className="card-number">EXPERIENCE {r.number}</span>
              <h3>{r.title}</h3>
              <p className="card-audience">{r.audience}</p>
              <p>{r.detail}</p>
              <p className="italic-note">{r.message}</p>
              <ButtonLink to="/register" secondary>
                Register interest
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className="calendar-callout">
          <CalendarDays size={26} />
          <div>
            <h3>Planning a conversation?</h3>
            <p>
              Book a time to connect and learn more about the retreat
              experience.
            </p>
          </div>
          <a
            className="button button-secondary"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book a conversation <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero">
      <span className="overline">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}
function About() {
  return (
    <>
      <PageHero
        eyebrow="THE HEART OF HERSHIFT | HERRISE"
        title={
          <>
            A pause with
            <br />
            <em>a purpose.</em>
          </>
        }
        intro="We create space for women to reconnect with themselves, their possibilities and the people who help them move forward."
      />
      <section className="section about-grid">
        <div className="about-photo"></div>
        <div>
          <span className="overline">MORE THAN A GETAWAY</span>
          <h2>
            Come as you are.
            <br />
            <em>Leave with intention.</em>
          </h2>
          <p className="lead">
            HerShift | HerRise is a transformational retreat experience for
            women who are ready to pause, reconnect with themselves, rediscover
            their strengths and intentionally design their next chapter.
          </p>
          <p>
            Whether you are navigating a life transition, seeking personal
            reinvention or carrying the responsibilities of leadership, you
            deserve time and space that belongs to you.
          </p>
          <p>
            Our experiences bring together guided reflection, personal
            development, restorative wellness, meaningful connection and
            practical next-step planning.
          </p>
          <p>
            You do not need to explain your story, arrive with all the answers
            or prove your strength. Just come as you are.
          </p>
          <ButtonLink to="/events">Explore our experiences</ButtonLink>
        </div>
      </section>
      <section className="values-strip">
        <div>
          <Heart />
          <h3>Care</h3>
          <p>Space to be met with compassion, without judgement.</p>
        </div>
        <div>
          <Users />
          <h3>Connection</h3>
          <p>Meaningful conversations and a sense of sisterhood.</p>
        </div>
        <div>
          <Sparkles />
          <h3>Possibility</h3>
          <p>Fresh perspective and practical steps towards what is next.</p>
        </div>
      </section>
      <section className="founder-note">
        <span className="overline">A NOTE FROM THE FOUNDER</span>
        <h2>
          Women deserve room
          <br />
          <em>to become.</em>
        </h2>
        <p>
          HerShift | HerRise was shaped by a simple belief: women can honour
          every chapter that brought them here while still choosing what comes
          next. This is an invitation to make that space for yourself.
        </p>
        <strong>Khadijah Faruk Mahmud</strong>
        <span className="muted">Founder, The Rise Collective</span>
      </section>
    </>
  );
}
function Register() {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
    consent: false,
  });
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (!form.consent) return;
    sessionStorage.setItem(
      "hershift_interest",
      JSON.stringify({ ...form, ref: params.get("ref") || "" }),
    );
    navigate("/thank-you");
  }
  return (
    <>
      <PageHero
        eyebrow="TAKE THE FIRST STEP"
        title={
          <>
            Make space for
            <br />
            <em>your next chapter.</em>
          </>
        }
        intro="Tell us a little about yourself and the experience you would like to hear about. We'll be in touch with more information."
      />
      <section className="section form-section">
        <form className="interest-form" onSubmit={submit}>
          <div className="form-intro">
            <span className="overline">REGISTER YOUR INTEREST</span>
            <h2>
              Let's stay <em>connected.</em>
            </h2>
            <p>
              This is an expression of interest, not a payment or confirmed
              booking.
            </p>
          </div>
          <label>
            Your name
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
            />
          </label>
          <label>
            Email address
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Which experience speaks to you?
            <select
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            >
              <option value="">Select an experience</option>
              <option>Her Next Chapter</option>
              <option>The Woman You're Becoming</option>
              <option>The Leader Behind the Work</option>
              <option>I'm open to exploring</option>
            </select>
          </label>
          <label className="consent">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            />
            <span>
              I agree to receive information about HerShift | HerRise retreats
              and events. I understand I can unsubscribe at any time.
            </span>
          </label>
          <button className="button" type="submit">
            Send my interest <ArrowRight size={16} />
          </button>
          <p className="form-fine">
            Your details will only be used to respond to your enquiry and, if
            you consent, send relevant updates. Full privacy and CASL-compliant
            email setup will be connected before launch.
          </p>
        </form>
        <aside className="form-aside">
          <Sparkles size={28} />
          <h3>You don't have to have it all figured out.</h3>
          <p>
            You simply have to be willing to give yourself the time and space to
            begin.
          </p>
          <div className="aside-divider"></div>
          <p className="muted">Prefer to speak first?</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Book a conversation <ArrowRight size={15} />
          </a>
        </aside>
      </section>
    </>
  );
}
function ThankYou() {
  const data = JSON.parse(
    sessionStorage.getItem("hershift_interest") || "null",
  );
  const ref =
    new URLSearchParams(window.location.search).get("ref") || data?.ref || "";
  return (
    <section className="thankyou">
      <div className="thank-icon">
        <CheckCircle2 size={36} />
      </div>
      <span className="overline">THANK YOU FOR TAKING THE FIRST STEP</span>
      <h1>
        Your next chapter
        <br />
        <em>begins with you.</em>
      </h1>
      <p>
        {data?.name ? `Thank you, ${data.name}. ` : ""}Your interest has been
        recorded in this website preview. In the live version, this is where we
        will send your details to the email platform and confirm next steps.
      </p>
      {ref && (
        <div className="ref-box">
          Your referral code: <strong>{ref}</strong>
        </div>
      )}
      <ButtonLink to="/events" secondary>
        Explore the experiences
      </ButtonLink>
    </section>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        eyebrow="WE'D LOVE TO HEAR FROM YOU"
        title={
          <>
            Let's start
            <br />
            <em>a conversation.</em>
          </>
        }
        intro="Have a question about a retreat, partnership or group experience? Reach out and let's connect."
      />
      <section className="section contact-grid">
        <div>
          <span className="overline">GET IN TOUCH</span>
          <h2>
            There is room
            <br />
            <em>for your question.</em>
          </h2>
          <p>
            Whether you are exploring a retreat for yourself, interested in
            bringing a group or curious about collaborating, we'd be happy to
            hear from you.
          </p>
          <a
            className="contact-detail"
            href="mailto:hello@therisecollective.ca"
          >
            <Mail /> hello@therisecollective.ca
          </a>
          <a
            className="contact-detail"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarDays /> Book a conversation
          </a>
        </div>
        <div className="contact-card">
          <span className="overline">THE RISE COLLECTIVE</span>
          <h3>
            Reflect. Reconnect.
            <br />
            <em>Reimagine. Rise.</em>
          </h3>
          <p>HerShift | HerRise is an experience by The Rise Collective.</p>
          <Link className="text-link" to="/register">
            Register your interest <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

import sideImage from "./assets/9f563e8cd8cd969d409b290709728fe964d45da0.png";
import icon1 from "./assets/tabler_clock.png";
import icon3 from "./assets/icon-park-outline_circular-connection.png";
import icon2 from "./assets/ic_outline-email.png";
const iconDiv = {
  display: "grid",
  placeContent: "center",
  padding: "1rem",
  backgroundColor: "white",
  borderRadius: "50%",
};
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Third() {
  const divRef = useRef(null);
  const sectionRef = useRef(null);
  const iconRef = useRef([]);
iconRef.current = [];
const addToIconRefs = (el) => {
  if (el && !iconRef.current.includes(el)) {
    iconRef.current.push(el);
  }
};

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        toggleActions: "play pause resume none",
        start: "top 90%",
        end: "bottom bottom",
      },
      defaults: { duration: 1, ease: "power1.inOut" },
    });
    t1.fromTo(divRef.current, { opacity: 0, y: "30vh" }, { opacity: 1, y: 0 });
    t1.fromTo(sectionRef.current.querySelector("h1"),{opacity:0,y:40},{opacity:1,y:0},"-=0.5")
    t1.fromTo(sectionRef.current.querySelectorAll("p"),{opacity:0,y:40},{opacity:1,y:0,stagger:0.2},"-=1")
    t1.fromTo(sectionRef.current.querySelectorAll("h2"),{opacity:0,x:40},{opacity:1,x:0,stagger:0.2},"-=1")
    t1.fromTo(iconRef.current,{opacity:0,x:-40},{opacity:1,x:0,stagger:0.2},"-=1")
  }, []);

  return (
    <article className="third">
      <div
        ref={divRef}
        style={{
          width: "63vh",
          height: "90%",
          backgroundImage: "linear-gradient(#DEF2FF, #0095FA)",
          overflow: "hidden",
          paddingLeft: "2rem",
          paddingTop: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <img src={sideImage} alt="" />
      </div>
      <section ref={sectionRef}>
        <p style={{ color: "#0095FA" }}>Benefits</p>
        <h1>Why Choose MailPulse</h1>
        <p>
          Grow your business faster with tools designed to make email <br />{" "}
          marketing simple, effective, and affordable.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
          
        >
          <div style={iconDiv} ref={addToIconRefs}>
            <img src={icon1} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2>Save Time with Automation</h2>
            <p>
              Set up automated email sequences to nurture leads <br /> and
              engage customers, without lifting a finger.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={iconDiv} ref={addToIconRefs}>
            <img src={icon2} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2>Create Stunning Emails in Minutes</h2>
            <p>
              Our drag-and-drop editor makes it easy to design <br />{" "}
              professional emails, even if you’re not a designer.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={iconDiv} ref={addToIconRefs}>
            <img src={icon3} alt="" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h2>Seamless Integrations</h2>
            <p>
              Connect with tools like Shopify, Zapier, and more to <br />
              streamline your workflow.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
export default Third;

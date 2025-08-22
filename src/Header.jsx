import mailImage from "./assets/mdi_mail.png"
import sideImage from "./assets/9f563e8cd8cd969d409b290709728fe964d45da0.png"
import playIcon from "./assets/lsicon_play-filled.png"
import brand1 from "./assets/XMLID_1_.png"
import brand3 from "./assets/trello-logo 1.png"
import brand4 from "./assets/adobe-44195 2.png"
import brand2 from "./assets/microsoft-6 (2) 1.png"
import brand5 from "./assets/unicef-3 1.png"
import brand6 from "./assets/airbnb 1.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
const blueButton = {
  padding: "0.5rem 1.3rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#0095FA",
  color: "#ffffff",
  fontFamily: "inherit"
};
const whiteButton = {
  padding: "0.5rem 1.3rem",
  borderRadius: "0.5rem",
  border: "none",
  backgroundColor: "#ffffff",
  color: "#0095FA",
  fontFamily: "inherit",
};

function NavSide(){
    const divRef1 = useRef(null)
    const navSide = useRef(null)
    useEffect(
        ()=>{
            const navTimeline = gsap.timeline({defaults:{duration:0.8,delay:1}})
            navTimeline.fromTo(navSide.current,{opacity:0},{opacity:1})
            navTimeline.fromTo(divRef1.current,{x:-100,opacity:0},{x:0,opacity:1})
            navTimeline.fromTo(navSide.current.querySelectorAll("button"),{x:100,opacity:0},{x:0,opacity:1,stagger:0.2})
            navTimeline.fromTo(navSide.current.querySelectorAll("a"),{y:50,x:50,opacity:0},{y:0,x:0,opacity:1,duration:0.5,stagger:0.2},"-=1.5")
        },[])
    return(
        <section className="nav-side" ref={navSide}>
            <div ref={divRef1}>
                <img src={mailImage} alt="" />
                <p>MailPulse</p>
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Resources</a>
            </nav>
            <div >
                <button style={blueButton}>Login</button>
                <button  style={whiteButton}>Sign Up</button>
            </div>
        </section>
    )
}
function Headings(){
    const headingRef = useRef(null)
    useEffect(()=>{
        const headTimeline = gsap.timeline({defaults:{duration: 0.8,delay:1.2}})
        headTimeline.fromTo(headingRef.current,{opacity:0,y:100},{opacity:1,y:0})
        headTimeline.fromTo(headingRef.current.querySelectorAll("h1,p"),{opacity:0,y:40},{opacity:1,y:0,stagger:0.2})
        headTimeline.fromTo(headingRef.current.querySelector("img"),{opacity:0,y:40},{opacity:1,y:0})
        headTimeline.fromTo(headingRef.current.querySelectorAll("button"),{opacity:0,x:40},{opacity:1,x:0,stagger:0.2},"-=1")
        
    },[])
    return(
        <section className="headings" ref={headingRef}>
            <div>
            <h1>Grow Your <span>Business</span><br/> With Smarter Email <br />Marketing </h1>
            <p>Start sending emails that grow your business today. Automate <br /> your marketing and see results in just 14 days.</p>
            <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                <button style={blueButton}>Start Your Free Trail</button>
                <button style={{...whiteButton,display:"flex",FlexDirection:"row",gap:"0.5rem",alignItems:"center"}}><img style={{height:"100%"}} src={playIcon} alt="" /> Watch a Demo</button>
            </div>
            </div>
            <div>
                <img src={sideImage} alt="" />
            </div>
        </section>
    )
}
function Brand(){
    const brandRef = useRef(null)
    useEffect(()=>{
        gsap.fromTo(brandRef.current.querySelectorAll("img"),{opacity:0,y:20},{opacity:1,stagger:0.2,y:0,duration:0.8,delay:3})
    },[])
    return(
        <section ref={brandRef} className="brand">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
        </section>
    )
}
function Header(){
    const headerRef = useRef(null)
    useEffect(()=>{
        gsap.fromTo(headerRef.current,{opacity:0,y:"80vh"},{opacity:1,y:0,duration:1})
    },[])
    return(
        <header ref={headerRef}>
            <NavSide/>
            <Headings/>
            <Brand/>
        </header>
    )
}
export default Header
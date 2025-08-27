import image1 from "./assets/25a525b6289d440dedd339ad8aa17c8f4d178f20.jpg";
function ImageSec() {
  return (
    <section style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "280px",
          fontWeight: 500,
          fontSize: "0.8rem",
        }}
      >
        <div
          style={{
            height: "220px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "1rem",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image1}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ color: "#000000", fontWeight: 600, fontSize: "1rem" }}>
            E-Commerce Businesses
          </p>
          <p style={{ color: "#6F7788" }}>
            Send personalized product recommendations, abandoned cart emails,
            and promotional campaigns to boost sales.
          </p>
          <p style={{ color: "#0095FA" }}>Get Started</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "280px",
          fontWeight: 500,
          fontSize: "0.8rem",
        }}
      >
        <div
          style={{
            height: "220px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "1rem",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image1}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ color: "#000000", fontWeight: 600, fontSize: "1rem" }}>
            E-Commerce Businesses
          </p>
          <p style={{ color: "#6F7788" }}>
            Send personalized product recommendations, abandoned cart emails,
            and promotional campaigns to boost sales.
          </p>
          <p style={{ color: "#0095FA" }}>Get Started</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "280px",
          fontWeight: 500,
          fontSize: "0.8rem",
        }}
      >
        <div
          style={{
            height: "220px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "1rem",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image1}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ color: "#000000", fontWeight: 600, fontSize: "1rem" }}>
            E-Commerce Businesses
          </p>
          <p style={{ color: "#6F7788" }}>
            Send personalized product recommendations, abandoned cart emails,
            and promotional campaigns to boost sales.
          </p>
          <p style={{ color: "#0095FA" }}>Get Started</p>
        </div>
      </div>
    </section>
  );
}
function Head() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        textAlign: "center",
        fontSize: "0.8rem",
      }}
    >
      <p style={{ color: "#0095FA" }}>Use Cases</p>
      <h1 style={{ color: "#0A2540", fontSize: "2rem" }}>
        Designed For All Marketing Use <br /> cases
      </h1>
      <p style={{ color: "#6F7788" }}>
        From e-commerce to nonprofits, our platform adapts to your unique needs.
      </p>
    </section>
  );
}
function Fourth() {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        padding:"6rem 3rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Head />
      <ImageSec />
      <button style={{backgroundColor:"#0095FA",color:"#FFFFFF",padding:"0.7rem 1rem",borderRadius:"0.5rem",border:"none"}}>See more use cases</button>
    </article>
  );
}
export default Fourth;

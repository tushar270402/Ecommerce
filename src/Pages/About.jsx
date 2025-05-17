import Navbar from "../Components/Navbar";
import "./About.css"

export default function About() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="about-container">
                <h1>About Us</h1>
                <p className="intro">
                    Welcome to <strong>ShopEase</strong> — your one-stop destination for the latest and greatest products across fashion, electronics, lifestyle, and more.
                </p>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At ShopEase, our mission is to deliver an exceptional shopping experience to customers worldwide. We believe in providing high-quality products, unbeatable prices, and top-tier customer service.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Why Shop With Us?</h2>
                    <ul>
                        <li>✔️ Handpicked, quality-tested products</li>
                        <li>✔️ Fast and secure shipping</li>
                        <li>✔️ Easy returns and refunds</li>
                        <li>✔️ 24/7 customer support</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2025, ShopEase started as a small team passionate about creating a better online shopping experience. Over the years, we've grown into a trusted brand serving thousands of happy customers every day.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Join Our Community</h2>
                    <p>
                        Stay connected with us through social media and our newsletter. We're always launching new products, offering exciting deals, and sharing tips to enhance your lifestyle.
                    </p>
                </section>
            </div>
        </>
    )
}
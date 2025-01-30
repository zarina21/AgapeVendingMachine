import Image from "next/image";

const AboutUsPage = () => {
    return (
        <div className="centrado">
            <div className="content m-6 filas">
                <div className="m-2">
                    <h1 className="title has-text-primary">About Us</h1>
                    <p>Agape Vending Machine is dedicated to providing easy access to quality snacks and essential products where people need them most. Our mission is to deliver convenience to customers and offer practical solutions in high-traffic areas, from offices and gyms to schools and shopping centers.</p>
                </div>
                <div className="m-2">
                    <Image width={500} height={500} src={"/Logo.jpg"} alt="About Us" />
                </div>
            </div>
            <div className="content m-6 filas">
                <div className="column">
                    <p>We believe in the power of accessibility and convenience. That’s why our machines are strategically placed to ensure they are always near those who need them. We are committed to keeping our machines well-stocked, clean, and fully operational, ensuring the best experience for our users.</p>
                </div>
                <div className="column">
                    <p>Partnering with Agape Vending Machine means transforming spaces into centers of convenience. We provide a full-service solution, including installation, maintenance, and product restocking, all at no cost to our partners. Our goal is to create lasting partnerships that benefit both businesses and their customers.</p>
                </div>
            </div>

        </div>
    );
}
export default AboutUsPage;
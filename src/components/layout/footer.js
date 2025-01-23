import Link from "next/link"

const Footer = () => {
    return (
        <>
         <footer className="has-text-primary footer">
            <div className="separado mb-6">
                <Link  className=" has-text-primary mt-1 mb-1" href="/">Home</Link>
                <Link className="has-text-primary mt-1 mb-1" href="/terms-and-conditions">terms & conditions</Link>
                <Link className="has-text-primary mt-1 mb-1" href="/contact">contact</Link>
                <Link className="has-text-primary mt-1 mb-1" href="/about-us">about us</Link>
            </div>
            <div className="separado mb-6">
                <div>
                    <p>Email:</p>
                    <a className="has-text-Link" href="mailto:mailto:chummi620@gmail.com">chummi620@gmail.com</a>
                </div>
                <div>
                    <p>phone:</p>
                    <a href="tel:+1(949) 566-4664">+1(949) 566-4664</a>
                </div>
            </div>
            <div className="centrado content linea">
                <small className="mt-4">© 2025 Agape Vending Machine. All rights reserved.</small>
            </div>
         </footer>
        </>
    )
}

export default Footer
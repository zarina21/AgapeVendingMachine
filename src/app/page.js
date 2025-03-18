"use client";
import Image from "next/image";
import "../styles/page.scss";
import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes incluir más estilos si es necesario
});


export default function Home() {
  return (
    <>
      <section className=" section centrado">
       <div className="centrado">
          <h1 className="title has-text-black is-1 colums mb-6">
            <span className="column block"><h1 className={kanit.className}>The new generation of vending machines.</h1></span>
            <span className="column block has-text-primary titulo">Agape Vending Machine!</span>
          </h1>
        </div>
        <div className="filas centrado">
          <Image width={450} height={300} src={"/maquinaBebidas.jpg"} alt={"maquina de bebidas"} className="marco"/>
          <div className="ml-6 mr-6 mt-6 mb-6">
            <h1 className="title is-2 has-text-primary">
              Who are we?
            </h1>
            <p className="has-text-black mt-3 mb-2">
              We are a vending machine company, and our growth is based in California. Our goal is to provide you and your community with the convenience and efficiency of having a store just a few steps away, saving you both time and money.
            </p>
            <p className="has-text-black mt-3 mb-2">
              We believe in constant innovation to meet the needs of our customers. That’s why our machines are equipped with advanced technology to ensure a seamless, fast, and secure payment experience.
            </p>
            <p className="has-text-black mt-3 mb-2">
              Additionally, we offer a wide variety of products to cater to the tastes and preferences of each community. Whether you need a quick snack, a refreshing drink, or essential items, you’ll find it with us!
            </p>
            <div className="botoneslineal mt-6">
              <button
                className="button is-primary has-text-white bordeButton is-rounded pl-5 pr-5 mr-4"
                onClick={() => window.location.href = 'tel:+1(949) 566-4664'}
              >
                Call Us
              </button>
              <button
                className="button is-link has-text-primary bordeButton is-rounded pl-5 pr-5 mr-4"
                onClick={() => window.location.href = 'mailto:edgar558@agapevendingmachines.com'}
              >
                Email
              </button>
          </div>
          </div>
        </div>
      </section>
      <section className="section separado has-background-primary has-text-white filas">
        <div className="columna left">
          <h1 className={kanit.className}><p className="has-text-white">Our team is responsible for:</p></h1>
          <div>
            <div className="content left mb-6">
              <ul>
                <li>Defining inventory management</li>
                <li>Mapping the current and future state of the machines</li>
                <li>Creating cost models and data analysis for pricing and products</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image width={450} height={300} src={"/agapeTeamIconWhite.png"} alt={"maquina de bebidas"} className="marco"/>
        </div>
      </section>
      <section className="section centrado">
        <div>
          <div className="filas m-6">
            <div>
              <h1 className="title is-1 has-text-primary">Grab & Go Snacks 🍫🥨🥤</h1>
              <p>Our vending machines are stocked with a variety of delicious snacks to satisfy your cravings anytime, anywhere. Whether you need a quick energy boost, a salty treat, or something sweet, we’ve got you covered!</p>
              <p>With easy access, modern technology, and secure payment options, getting your favorite snack has never been easier.</p>
              <p>Pick, pay, and enjoy! 🚀</p>
            </div>
            <Image width={450} height={300} src={"/maquinaSnack.jpg"} alt={"maquina de bebidas"} className="marco"/>
          </div>
          <div className="filas m-6">
            <div>
              <h1 className="title is-1 has-text-primary">Instant Hydration 💧⚡🥤</h1>
              <p>Our vending machines offer a selection of beverages for every moment of the day. From pure, refreshing water to energy drinks that keep you going and sodas to enjoy anytime.</p>
              <p>With modern technology and fast, secure payment options, we ensure a smooth and convenient experience.</p>
              <p>Pick your favorite and keep moving with energy! 🚀</p>
            </div>
            <Image width={450} height={300} src={"/maquinaBebidas.jpg"} alt={"maquina de bebidas"} className="marco"/>
          </div>
        </div>
      </section>
    </>
  );
}
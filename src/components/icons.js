import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const enlaces = {
  facebook: "https://www.facebook.com/agapecleaningus",
  instagram: "https://www.instagram.com/agapecleaningus/",
  tiktok: "https://www.tiktok.com/@agapecleaningservices",
  google: "https://g.co/kgs/7WCqKdj",
};

const Icono = ({ nombre }) => {
  const iconos = {
    facebook: <FaFacebook size={30} />,
    instagram: <FaInstagram size={30} />,
    tiktok: <FaTiktok size={30} />,
    google: <FaGoogle size={30} />,
  };

  return (
    <a
      href={enlaces[nombre] || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {iconos[nombre] || null}
    </a>
  );
};

export default Icono;

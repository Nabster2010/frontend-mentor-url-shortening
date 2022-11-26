import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-VeryDarkViolet">
      <footer className="pt-10 pb-8 md:mx-16  md:grid md:grid-cols-6 justify-between md:items-start justify-items-start">
        <div className=" flex flex-col justify-center items-center  col-span-2">
          <a href="/" className="text-white font-bold text-2xl tracking-wide">
            Shortly
          </a>
        </div>
        <nav className="text-center md:text-start mt-12 md:mt-0">
          <h1 className="text-white text-sm">Features</h1>
          <ul className="text-Gray mt-6 text-xs space-y-2">
            <li className="hover:text-Cyan">
              <a href="#">Link Shortening</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#">Branded Links</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#">Analytics</a>
            </li>
          </ul>
        </nav>
        <nav className="text-center md:text-start mt-12 md:mt-0">
          <h1 className="text-white text-sm">Resources</h1>
          <ul className="text-Gray mt-6 text-xs space-y-2">
            <li className="hover:text-Cyan">
              <a href="#"> Blog</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#"> Developers</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#"> Support</a>
            </li>
          </ul>
        </nav>
        <nav className="text-center md:text-start mt-12 md:mt-0">
          <h1 className="text-white text-sm">Company</h1>
          <ul className="text-Gray mt-6 text-xs space-y-2">
            <li className="hover:text-Cyan">
              <a href="#"> About</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#"> Our Team</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#"> Careers</a>
            </li>
            <li className="hover:text-Cyan">
              <a href="#"> Contact</a>
            </li>
          </ul>
        </nav>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Footer;

const SocialLinks = () => {
  return (
    <nav className="flex gap-4 text-white justify-center items-center  mt-12 md:mt-0">
      <FaFacebookSquare
        size="1.2em"
        className="hover:text-Cyan transition cursor-pointer"
      />
      <FaTwitter
        size="1.2em"
        className="hover:text-Cyan transition cursor-pointer"
      />
      <FaPinterest
        size="1.2em"
        className="hover:text-Cyan transition cursor-pointer"
      />
      <FaInstagram
        size="1.2em"
        className="hover:text-Cyan transition cursor-pointer"
      />
    </nav>
  );
};

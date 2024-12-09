import { socialIcons, categoryLinks, supportLinks } from "./data/footerData";
import FooterLinkSection from "./components/FooterLinkSection";
import NewsletterSection from "./components/NewsletterSection";
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="flex flex-col" role="contentinfo">
      <div className="flex flex-col justify-center items-center p-8 w-full bg-white shadow-sm max-md:px-5">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start w-full max-w-[1320px]">
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center text-2xl font-semibold leading-tight whitespace-nowrap text-slate-800">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/76c2ec019029b499e2ccf419eb4889b640801bf10c7a1cb723407392aebdae8c?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
                className="object-contain w-10 aspect-square"
                alt="Comforty logo"
              />
              <div>Comforty</div>
            </div>
            <div className="mt-6 text-base leading-6 opacity-60 text-slate-800">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum.
              <br />
              Cras egestas purus
            </div>
            <div className="flex gap-1 items-start mt-6">
              {socialIcons.map((icon) => (
                <Image
                  key={icon.id}
                  loading="lazy"
                  src={icon.src}
                  className="object-contain aspect-square w-[38px]"
                  alt={icon.alt}
                />
              ))}
            </div>
          </div>

          <FooterLinkSection title="Category" links={categoryLinks} />
          <FooterLinkSection title="Support" links={supportLinks} />
          <NewsletterSection />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-center py-6 px-4 w-full text-sm bg-white shadow-sm text-slate-800">
        <div className="text-gray-800">
          @ 2024 - Designed &amp; Develop by{" "}
          <span className="text-slate-800">Kaif</span>
        </div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/c045856198636f4085b930bfacb6e8017ef5aae7324653b6f7c2c0ef9af67249?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
          className="object-contain aspect-[8.4] w-[227px]"
          alt="Payment methods"
        />
      </div>
    </footer>
  );
}

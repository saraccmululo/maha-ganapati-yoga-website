
//import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = "+5522998180012";
  //const instagramUrl = "https://www.instagram.com/mahaganapatiyoga"; 

  return (
    <footer className="mt-16 text-center py-6 bg-background text-foreground">
      {/* WhatsApp */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          className="text-sm md:text-base flex items-center gap-2 text-primary hover:opacity-80 transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mahaganapatiyoga/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base flex items-center gap-2 text-primary hover:opacity-80 transition"
        >
          <InstagramIcon className="w-5 h-5" />
          <span>@mahaganapatiyoga</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-(--foreground)/70">
        &copy; {year} Maha Ganapati Yoga • Bom Jardim – RJ • Aulas presenciais e
        online • All rights reserved.
      </div>
    </footer>
  );
}


 
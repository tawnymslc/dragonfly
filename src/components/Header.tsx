  import { useState } from 'react';
  
  export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="relative mb-4 font-proxima">
             <nav className="hidden md:flex absolute top-0 left-0 w-full flex justify-center gap-16 py-6 px-4 font-semibold text-green1 text-sm tracking-wide z-10">
                <a href="#appointments" className="hover:underline">APPOINTMENTS</a>
                <a href="#card-info" className="hover:underline">MEDICAL CARD INFO</a>
                <a href="#faqs" className="hover:underline">FAQs</a>
                <a href="#pharmacies" className="hover:underline">PHARMACIES</a>
                <a href="#about" className="hover:underline">ABOUT</a>
            </nav>
            {isOpen && (
                <div className="md:hidden px-4 p-6 flex flex-col gap-2 text-green1 text-sm font-semibold">
                <a href="#">Appointments</a>
                <a href="#">Medical Card Info</a>
                <a href="#">FAQs</a>
                <a href="#">Pharmacies</a>
                <a href="#">About</a>
                </div>
            )}
            <button
                className="absolute top-4 right-4 md:hidden font-boldtext-green1 z-20"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            <div className="relative w-full h-auto z-0">
                <img src="/assets/TopHeaderImage.png" />
            </div>
            <div className="w-full h-[35px] bg-green1" />
            <div className="absolute bottom-0 md:bottom-[-20px] left-1/2 transform -translate-x-1/2">
                <img src="/assets/utahGrownLogoWhiteBorderTrim.png" className="w-[600px] " />
            </div>
        </header>
    );
  }
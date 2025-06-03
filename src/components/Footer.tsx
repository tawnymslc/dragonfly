export default function Footer() {
    return(
        <footer className="relative font-proxima">
            <div className="flex justify-center md:justify-start items-end gap-4 mb-4 px-48">
                <img src="/assets/utahGrownLogo-Green.png" alt="" className="w-full max-w-[100px] md:max-w-[200px]"  />
                <span className="text-green1 text-sm md:text-md"> UTAH'S CANNABIS COMMUNITY</span>
            </div>
            <div className="w-full h-[75px] bg-green1" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center gap-8 text-white text-sm py-4 px-6">
                <span className="text-sm text-white font-semibold">2023 All Right Reserved</span>
                <span className="text-sm text-white font-semibold">Terms and Conditions</span>
                <span className="text-sm text-white font-semibold">Privacy Policy</span>
            </div>
        </footer>
    );
}
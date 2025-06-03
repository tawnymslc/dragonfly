import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white ">
      <Header />
      <section className="mb-4 px-4">
        <h4 className="text-green1 text-center text-2xl font-medium tracking-wide mb-10">
          Utah’s Cannabis Community
        </h4>
        <h2 className="text-green1 text-center text-3xl md:text-4xl font-bold mb-10">
          Upcoming Utah Medical Card Events
        </h2>
        <div className="max-w-3-4xl mx-auto space-y-8">
          <div className="flex items-center py-4 bg-grey3 border border-green1 rounded-xl gap-4"> 
            <h6 className="w-1/4 text-green2 font-bold text-center text-md">Downtown<br />SLC</h6>
            <div className="w-2/4 text-green1 text-left min-w-[200px] leading-tight">
              <h3 className="font-extrabold md:text-2xl">
                  Tuesday, October 3<sup>rd</sup> 2023
              </h3>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">9:00 am – 2:00 pm</h5>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">New Patients and Renewals</h5>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green2 px-2 py-1  md:px-6 md:py-2 rounded-full font-semibold md:text-lg">
                <h5>Book Time</h5>
              </button>
            </div>
          </div>
          <div className="flex items-center py-4 bg-grey3 border border-green1 rounded-xl gap-4"> 
            <h6 className="w-1/4 text-green2 font-bold text-center text-md">Price UT</h6>
            <div className="w-2/4 text-green1 text-left min-w-[200px]">
              <h5 className="font-extrabold md:text-2xl leading-tight">
                  Thursday, October 19<sup>th</sup> 2023
              </h5>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">9:00 am – 4:00 pm</h5>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">Renewals Only</h5>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green2 px-2 py-1 md:px-6 md:py-2 rounded-full font-semibold md:text-lg">
                <h5>Book Time</h5>
              </button>
            </div>
          </div>
          <div className="flex items-center py-4 bg-grey3 border border-green1 rounded-xl gap-4"> 
            <h6 className="w-1/4 text-green2 font-bold text-center text-md">&lt;Other Location&gt;</h6>
            <div className="w-2/4 text-green1 text-left min-w-[200px]">
              <h5 className="font-extrabold md:text-2xl leading-tight">
                  Friday, November 10<sup>th</sup> 2023
              </h5>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">10:00 am – 2:00 pm</h5>
              <h5 className="text-green2 font-bold md:text-lg leading-tight">Special Event for Veterans</h5>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green2 px-2 py-1 md:px-6 md:py-2 rounded-full font-semibold md:text-lg">
                <h5>Book Time</h5>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="mb-4 py-8 px-4">
        <h3 className="text-green1 text-center text-2xl md:text-3xl font-bold mb-4">
          Things to know before your appointment
        </h3>
          <div className="max-w-3-4xl mx-auto space-y-8 text-green1 text font-proxima font-semibold">
            <div className="flex items-start gap-8">
              <div className="w-12 min-w-[48px]">
                <img src="../assets/Number1.png" alt="Step 1" />
              </div>
              <div className="flex-1 space-y-4">
                <p className="mt-3 text-green1 font-semibold text-lg">
                  You’re going to register with the state of Utah. You can start this before you arrive.
                </p>
                {/* Row: Buttons + Description */}
                <div className="px-8 flex flex-wrap items-center gap-4">
                  <button className="bg-tan2 text-green2 px-4 py-2 rounded-full text-sm min-w-[160px]">UtahID.org</button>
                  <span className="text-sm">Obtain access to your Utah Digital ID</span>
                </div>
                <div className="px-8 flex flex-wrap items-center gap-4">
                  <button className="bg-tan2 text-green2 px-4 py-2 rounded-full text-sm min-w-[160px]">EVS.Utah.gov</button>
                  <span className="text-sm">Fill out all the fields until you get to “Awaiting Certification” status</span>
                </div>
                {/* Image under text (slider graphic) */}
                <div className="pt-4">
                  <img src="../assets/AwaitingCert-Image.png" alt="Awaiting Certification"  className="max-w-[200px] md:w-[30%] mx-auto w-full max-w-xs md:max-w-md"/>
                </div>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="flex items-start leading-normal gap-8">
              {/* Left: Number Image */}
              <div className="w-12 min-w-[48px]">
                <img src="../assets/Number2.png" alt="Step 2" />
              </div>
              {/* Right: Title + List side-by-side */}
              <div className="mt-3 flex-1 items-center">
                <div className="flex flex-col md:flex-row gap-4">
                  <p className="md:w-1/3 font-semibold text-lg">Check in with your QMP</p>
                  <ul className="leading-relaxed list-decimal list-inside md:w-2/3 space-y-1 text-sm">
                    <li>QMP Registration</li>
                    <li>Medical Evaluation/Consultation</li>
                    <li>Payment</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* STEP 3 */}
            <div className="flex items-start gap-8">
              <div className="w-12 min-w-[48px]">
                <img src="../assets/Number3.png" alt="Step 3" />
              </div>
              <div className="mt-3 flex-1 space-y-2">
                <div className="flex flex-col md:flex-row gap-4">
                <p className="md:w-1/3 font-semibold text-lg">Renewal or New Patient?</p>
                  <div className="leading-loose md:w-2/3 text-sm">
                    <p>If this is a renewal, congratulations you are ready to shop…</p>
                    <p>If you are a new patient, here are some helps to get you started…</p>
                    <ul className="list-decimal list-inside pl-14">
                      <li>Meet with Pharmacist</li>
                      <li>Set up your Portal Account</li>
                      <li>Start Shopping</li>
                    </ul>
                    <p className="pl-14">**Don't forget to take advantage of new patient deals**</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* SECTION 3 */}
      <section className="mb-4 py-8 px-4">
        <div className="max-w-3-4xl mx-auto space-y-12 font-proxima">
          <div>
            <img src="/assets/MockBannerAd.png" alt="Leaf Nation Banner" className="w-full h-auto rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/assets/Consultation.png" alt="Doctor Consultation" className="w-full h-auto rounded-lg" />
            <div className="self-start md:pl-6">
              <h2 className="text-green1 font-bold text-2xl md:text-4xl mb-4 pt-4">Utah Medical Cards</h2>
              <p className="text-grey2 font-bold text-sm leading-loose">
                A medical cannabis card, also known as a medical marijuana card, is a state-issued identification card
                that allows qualified patients to legally purchase and use medical cannabis for the treatment of specific
                medical conditions. In Utah, a card is required to access and purchase medical cannabis products from
                state-licensed dispensaries. Having a medical card does not allow you to possess any cannabis product
                but only the products you purchased under your PAT (Medical Card ID number).
              </p>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <img
              src="/assets/Review Banner.png"
              alt="Review Banner"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center px-8">
              <div className="text-white max-w-sm">
                <h3 className="font-bold md:mb-2 md:text-2xl">We’d love to hear from you!</h3>
                <button className="bg-tan2 text-green2 px-2 py-1 md:px-6 md:py-2 rounded-full font-semibold md:text-xl">
                  Review us here!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section4*/}
      <section className="mb-4 px-4">
        <div className="max-w-3-4xl mx-auto space-y-4 font-proxima">
          <h2 className="text-green1 font-bold text-2xl md:text-4xl">FAQs...</h2>
          <ul className="space-y-2 md:space-y-1 text-green2 text-sm md:text-lg font-bold leading-none">
            <li>If I don’t qualify, do I still have to pay the QMP?</li>
            <li>What are Utah’s qualifying medical conditions?</li>
            <li>Is documentation required to prove you have a medical condition?</li>
            <li>If I have a medical cannabis card, can I consume in public?</li>
            <li>What are the eligibility requirements for a Utah medical cannabis card?</li>
            <li>What is the complete cost to get a medical cannabis card?</li>
            <li>How long does it take to receive your card?</li>
            <li>Where can I purchase medical cannabis in Utah?</li>
            <li>Can I grow my own cannabis plants with a medical cannabis card?</li>
            <li>How long is a medical cannabis card valid?</li>
            <li>Is my personal information confidential when applying for a medical cannabis card?</li>
          </ul>
        </div>
      </section>
      {/*Section5*/}
      <section className="mb-4 py-8 px-4">
        <div className="max-w-3-4xl mx-auto space-y-4 font-proxima">
          <h2 className="text-green1 font-bold text-2xl md:text-4xl">Utah Medical Cannabis Pharmacies</h2>
          <div className="space-y-4">
            {/* Row: Dragonfly Wellness */}
            <div className="flex flex-col md:flex-row">
              {/* Column 1 */}
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Dragonfly Wellness</p>
                <p className="text-grey2 font-semibold text-sm">711 South State Street, Salt Lake City UT 84111</p>
                <p className="text-grey2 font-semibold text-sm">20 Main Street, Price UT 84501</p>
                <button className="bg-tan2 text-green1 px-4 py-1 mt-2 rounded-full text-sm font-semibold">
                  New Patient Specials
                </button>
              </div>
              {/* Column 2 */}
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">801-413-6945</p>
                <p className="text-grey2 font-semibold text-sm">435-637-3770</p>
              </div>
              {/* Column 3 */}
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.dragonflywellness.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.dragonflywellness.com
                </a>
              </div>
            </div>
            {/* Repeat for each pharmacy */}
            {/* Bloc Pharmacy */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Bloc Pharmacy</p>
                <p className="text-grey2 font-semibold text-sm">10392 South Jordan Gateway South Jordan UT 84095</p>
                <p className="text-grey2 font-semibold text-sm">1624 S Convention Center Dr. St. George UT 84790</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">385-249-9400</p>
                <p className="text-grey2 font-semibold text-sm">435-216-3400</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.blocdispensary.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.blocdispensary.com
                </a>
              </div>
            </div>
            {/* Repeat this block for Beehive, Cannabist, Curaleaf, etc. */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Beehive Pharmacy</p>
                <p className="text-grey2 font-semibold text-sm">1991 S 3600 W Salt Lake City UT 84007</p>
                <p className="text-grey2 font-semibold text-sm">870 W 1150 S Suite C Brigham City UT 84032</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">385-212-0088</p>
                <p className="text-grey2 font-semibold text-sm">435-919-0966</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.beehivefarmacy.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.beehivefarmacy.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Cannabist</p>
                <p className="text-grey2 font-semibold text-sm">484 South 1750 West Springville UT 84663</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">385-249-9400</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.gocannabist.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.gocannabist.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Curaleaf</p>
                <p className="text-grey2 font-semibold text-sm">3633 N Thanksgiving Way, Lehi UT 84043</p>
                <p className="text-grey2 font-semibold text-sm">1351 Kearns Blvd Suite 110-B Park City UT 84060</p>
                <p className="text-grey2 font-semibold text-sm">222 N Draper Ln Provo UT 84601</p>
                <p className="text-grey2 font-semibold text-sm">757 S 1040 W Payson UT 84651</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">385-338-8010</p>
                <p className="text-grey2 font-semibold text-sm">435-252-1052</p>
                <p className="text-grey2 font-semibold text-sm">801-872-7447</p>
                <p className="text-grey2 font-semibold text-sm">385-404-4422</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.curaleaf.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.curaleaf.com
                </a>
              </div>
            </div>
            {/* Repeat this block for Beehive, Cannabist, Curaleaf, etc. */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">The Flower Shop</p>
                <p className="text-grey2 font-semibold text-sm">3775 S Wall Ave South Ogden UT 84005</p>
                <p className="text-grey2 font-semibold text-sm">2150 N Main St. Suite 1 North Logan UT 84341</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">385-289-1800(Ext1)</p>
                <p className="text-grey2 font-semibold text-sm">385-289-1800(Ext2)</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.theflowershopusa.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.theflowershopusa.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">WholesomeCo</p>
                <p className="text-grey2 font-semibold text-sm">580 W 100 N Suite 1, West Bountiful UT 84010</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">801-695-4480</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.wholesome.co" className="text-grey2 font-semibold hover:underline text-sm">
                  www.wholesome.co
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[45%]">
                <p className="text-green2 font-semibold text-lg">Zion Medicinial</p>
                <p className="text-grey2 font-semibold text-sm">301 S Main St. Cedar City UT 84720</p>
              </div>
              <div className="mt-4 md:mt-[28px] md:mt-[24px] md:w-[20%]">
                <p className="text-grey2 font-semibold text-sm">435-244-4485</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:flex-1">
                <a href="https://www.blocdispensary.com" className="text-grey2 font-semibold hover:underline text-sm">
                  www.zionmed.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 relative">
        <div className="max-w-3-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-proxima">
          {/* Left content */}
          <div>
            <h2 className="text-green1 font-bold text-2xl md:text-4xl mb-6">About Utah Grown</h2>
            <p className="text-grey2 text-grey2 font-semibold text-sm leading-loose">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam- corper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.
            </p>
            <h2 className="text-green1 font-bold text-2xl md:text-3xl mt-8">Utah Grown Office</h2>
            <p className="text-grey2 font-semibold md:text-xl">730 State Street</p>
            <p className="text-grey2 font-semibold md:text-xl">Salt Lake City, Utah 84111</p>
          </div>
          {/* Right image */}
          <div className="relative z-10">
            <img
              src="/assets/NormalizeItUtah@2x.png"
              alt="Normalize"
              className="w-full max-w-xs mx-auto md:w-[120%] md:max-w-none -mt-16"
            />
          </div>
           <div className="absolute bottom-[100px] md:bottom-[135px] left-0 w-full h-[2px] bg-green1" />
        </div>  
        <div className="h-0 md:h-16" />
      </section>
      <Footer />
    </main>
  );
}
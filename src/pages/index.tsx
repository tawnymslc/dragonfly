


export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-16 px-4 bg-white">
        <h3 className="text-green1 text-center text-xl font-medium tracking-wide mb-10">
          Utah’s Cannabis Community
        </h3>
        <h2 className="text-green1 text-center text-4xl font-bold mb-10">
          Upcoming Utah Medical Card Events
        </h2>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center p-6 bg-grey3 border border-green1 rounded-lg gap-4"> 
            <div className="w-1/4 text-green1 font-semibold text-center text-sm">Downtown<br />SLC</div>
            <div className="w-2/4 text-green1 text-left min-w-[200px]">
              <p className="font-bold text-xl">
                  Tuesday, October 3<sup>rd</sup> 2023
              </p>
              <p className="text-sm">9:00 am – 2:00 pm</p>
              <p className="text-green2 text-sm">New Patients and Renewals</p>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green1 px-6 py-2 rounded-full font-semibold text-sm">
                Book Time
              </button>
            </div>
          </div>
          <div className="flex items-center p-6 bg-grey3 border border-green1 rounded-lg gap-4"> 
            <div className="w-1/4 text-green1 font-semibold text-center text-sm">Downtown<br />SLC</div>
            <div className="w-2/4 text-green1 text-left min-w-[200px]">
              <p className="font-bold text-xl">
                  Tuesday, October 3<sup>rd</sup> 2023
              </p>
              <p className="text-sm">9:00 am – 2:00 pm</p>
              <p className="text-green2 text-sm">New Patients and Renewals</p>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green1 px-6 py-2 rounded-full font-semibold text-sm">
                Book Time
              </button>
            </div>
          </div>
          <div className="flex items-center p-6 bg-grey3 border border-green1 rounded-lg gap-4"> 
            <div className="w-1/4 text-green1 font-semibold text-center text-sm">Downtown<br />SLC</div>
            <div className="w-2/4 text-green1 text-left min-w-[200px]">
              <p className="font-bold text-lg">
                  Tuesday, October 3<sup>rd</sup> 2023
              </p>
              <p className="text-sm">9:00 am – 2:00 pm</p>
              <p className="text-green2 text-sm">New Patients and Renewals</p>
            </div>
            <div className="w-1/4 flex justify-center shrink-0">
              <button className="bg-tan2 text-green1 px-6 py-2 rounded-full font-semibold text-sm">
                Book Time
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-green1 text-center text-3xl font-bold mb-12">
          Things to know before your appointment
        </h3>
        <div className="mb-12 max-w-6xl mx-auto space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-12 min-w-[48px]">
              <img src="../assets/Number1.png" alt="Step 1" />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-green1 font-semibold">
                You’re going to register with the state of Utah. You can start this before you arrive.
              </p>
              {/* Row: Buttons + Description */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-tan2 text-green1 px-6 py-2 rounded-full text-sm font-semibold">UtahID.org</button>
                <span className="text-sm text-green1">Obtain access to your Utah Digital ID</span>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-tan2 text-green1 px-6 py-2 rounded-full text-sm font-semibold">EVS.Utah.gov</button>
                <span className="text-sm text-green1">Fill out all the fields until you get to “Awaiting Certification” status</span>
              </div>
              {/* Image under text (slider graphic) */}
              <div className="pt-4">
                <img src="../assets/AwaitingCert-Image.png" alt="Awaiting Certification" />
              </div>
            </div>
          </div>
        </div>
        {/* STEP 2 */}
        <div className="mb-12 max-w-6xl mx-auto space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-12 min-w-[48px]">
              <img src="../assets/Number2.png" alt="Step 2" />
            </div>
            <div className="flex-1 space-y-1 text-green1">
              <p className="font-semibold">Check in with your QMP</p>
              <ul className="list-decimal list-inside text-sm">
                <li>QMP Registration</li>
                <li>Medical Evaluation/Consultation</li>
                <li>Payment</li>
              </ul>
            </div>
          </div>
        </div>
        {/* STEP 3 */}
        <div className="mb-12 max-w-6xl mx-auto space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-12 min-w-[48px]">
              <img src="../assets/Number3.png" alt="Step 3" />
            </div>
            <div className="flex-1 space-y-2 text-green1 text-sm">
              <p className="font-semibold">Renewal or New Patient?</p>
              <p>If this is a renewal, congratulations you are ready to shop…</p>
              <p>If you are a new patient, here are some helps to get you started…</p>
              <ul className="list-decimal list-inside">
                <li>Meet with Pharmacist</li>
                <li>Set up your Portal Account</li>
                <li>Start Shopping</li>
              </ul>
              <p className="font-semibold text-green2">**Don't forget to take advantage of new patient deals**</p>
            </div>
          </div>
        </div>
      </section>
        {/*Section 3*/}
      <section className="py-16 px-4 bg-white">
        <div className="mb-12 max-w-6xl mx-auto space-y-12">
          <div>
            <img src="/assets/MockBannerAd.png" alt="Leaf Nation Banner" className="w-full h-auto rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/assets/Consultation.png" alt="Doctor Consultation" className="w-full h-auto rounded-lg" />
            <div className="self-start md:pl-6">
              <h4 className="text-green1 font-bold text-4xl mb-4 pt-4">Utah Medical Cards</h4>
              <p className="text-gray-800 font-medium text-lg leading-9">
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
                <h3 className="text-3xl font-semibold mb-4">We’d love to hear from you!</h3>
                <button className="bg-tan2 text-green1 px-10 py-3 rounded-full font-semibold text-2xl">
                  Review us here!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section4*/}
      <section className=" bg-white">
        <div className="mb-6 max-w-6xl mx-auto space-y-12">
          <h3 className="text-green1 font-bold text-4xl mb-1">FAQs...</h3>
          <ul className="space-y-4 text-green1 text-lg font-medium leading-relaxed">
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
      <section className="py-16 px-4 bg-white">
        <div className="mb-6 max-w-6xl mx-auto space-y-12">
          <h2 className="text-green1 font-bold text-4xl mb-10">Utah Medical Cannabis Pharmacies</h2>
          <div className="space-y-10">
            {/* Row: Dragonfly Wellness */}
            <div className="flex flex-col md:flex-row md:gap-6">
              {/* Column 1 */}
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">Dragonfly Wellness</p>
                <p>711 South State Street, Salt Lake City UT 84111</p>
                <p>20 Main Street, Price UT 84501</p>
                <button className="bg-tan2 text-green1 px-4 py-1 mt-2 rounded-full text-sm font-semibold">
                  New Patient Specials
                </button>
              </div>
              {/* Column 2 */}
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>801-413-6945</p>
                <p>435-637-3770</p>
              </div>
              {/* Column 3 */}
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.dragonflywellness.com" className="text-gray-600 hover:underline">
                  www.dragonflywellness.com
                </a>
              </div>
            </div>
            {/* Repeat for each pharmacy */}
            {/* Bloc Pharmacy */}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">Bloc Pharmacy</p>
                <p>10392 South Jordan Gateway South Jordan UT 84095</p>
                <p>1624 S Convention Center Dr. St. George UT 84790</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>385-249-9400</p>
                <p>435-216-3400</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.blocdispensary.com" className="text-gray-600 hover:underline">
                  www.blocdispensary.com
                </a>
              </div>
            </div>
            {/* Repeat this block for Beehive, Cannabist, Curaleaf, etc. */}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">Beehive Pharmacy</p>
                <p>1991 S 3600 W Salt Lake City UT 84007</p>
                <p>870 W 1150 S Suite C Brigham City UT 84032</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>385-212-0088</p>
                <p>435-919-0966</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.beehivefarmacy.com" className="text-gray-600 hover:underline">
                  www.beehivefarmacy.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green1 font-semibold text-lg">Cannabist</p>
                <p>484 South 1750 West Springville UT 84663</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>385-249-9400</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.gocannabist.com" className="text-gray-600 hover:underline">
                  www.gocannabist.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">Curaleaf</p>
                <p>3633 N Thanksgiving Way, Lehi UT 84043</p>
                <p>1351 Kearns Blvd Suite 110-B Park City UT 84060</p>
                <p>222 N Draper Ln Provo UT 84601</p>
                <p>757 S 1040 W Payson UT 84651</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>385-338-8010</p>
                <p>435-252-1052</p>
                <p>801-872-7447</p>
                <p>385-404-4422</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.curaleaf.com" className="text-gray-600 hover:underline">
                  www.curaleaf.com
                </a>
              </div>
            </div>
            {/* Repeat this block for Beehive, Cannabist, Curaleaf, etc. */}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">The Flower Shop</p>
                <p>3775 S Wa;; Ave South Ogden UT 84005</p>
                <p>2150 N Main St. Suite 1 North Logan UT 84341</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p>385-289-1800(Ext1)</p>
                <p>385-289-1800(Ext2)</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.theflowershopusa.com" className="text-gray-600 hover:underline">
                  www.theflowershopusa.com
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">WholesomeCo</p>
                <p className="text-grey2 font-interstate font-semibold">580 W 100 N Suite 1, West Bountiful UT 84010</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p className="text-grey2 font-interstate font-semibold">801-695-4480</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.wholesome.co" className="text-grey2 font-interstate font-semibold hover:underline">
                  www.wholesome.co
                </a>
              </div>
            </div>
            {/*next*/}
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-[40%]">
                <p className="text-green2 font-semibold text-lg">Zion Medicinial</p>
                <p className="text-grey2 font-interstate font-semibold">301 S Main St. Cedar City UT 84720</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[20%]">
                <p className="text-grey2 font-interstate font-semibold">435-244-4485</p>
              </div>
              <div className="mt-4 md:mt-[24px] md:w-[40%]">
                <a href="https://www.blocdispensary.com" className="text-grey2 font-interstate font-semibold hover:underline">
                  www.zionmed.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-4">
          {/* Left content */}
          <div>
            <h3 className="text-green1 font-proxima font-bold text-4xl mb-6">About Utah Grown</h3>
            <p className="text-grey2 text-grey2 font-semibold leading-9 mb-12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam- corper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.
            </p>
            <h3 className="text-green1 font-proxima font-bold text-4xl mb-2">Utah Grown Office</h3>
            <p className="text-grey2 font-proxima font-semibold text-xl">730 State Street</p>
            <p className="text-grey2 font-proxima font-semibold text-xl">Salt Lake City, Utah 84111</p>
          </div>
          {/* Right image */}
          <div className="relative z-10">
            <img
              src="/assets/NormalizeItUtah@2x.png"
              alt="Normalize"
              className="w-full max-w-[700px] mx-auto -mt-16 relative"
            />
          </div>
        </div>  
       <div className="absolute bottom-0 left-0 w-full border-t-2 border-green1 z-[-1]" />
      </section>
    </main>
  );
}
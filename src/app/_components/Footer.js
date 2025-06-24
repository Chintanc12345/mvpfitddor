import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#093630] text-white py-10 px-6 mt-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div>
            <div className="relative top-[-30px]">
              <Image
                src="/logo.png"
                alt="Garage Door"
                width={100}
                height={100}
                className="rounded-md"
              />
              <p className="text-sm text-white font-bold">
                Quality garage door services for your home
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/under">Products</Link>
              </li>
              <li>
                <Link href="/under">About</Link>
              </li>
              <li>
                <Link href="/under">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2">
              FixDoor LLC - Main Office
            </h4>
            <p className="text-sm text-gray-200">
              1000 RM 1431, Marble Falls, TX 78654
              <br />
              (830) 362-2763
              <br />
              office@fixdoor.com
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">
                FixDoor LLC - Far North Dallas
              </h4>
              <p className="text-sm text-gray-200">
                1413 Shelby Ln, Celina, TX 75009
                <br />
                (469) 778-4241
                <br />
                office@fixdoor.com
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">
                FixDoor LLC - North Ft. Worth
              </h4>
              <p className="text-sm text-gray-200">
                120 Boeing, Ronake, TX 76262
                <br />
                (817) 986-0563
                <br />
                office@fixdoor.com
              </p>
            </div>
          </div>
        </div>
      
      </div>
     <div className="mt-8 w-[90%] mx-auto">
     <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.6807946898125!2d-96.84952152491196!3d33.30101297344908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c46da19cf83fd%3A0x1f922f3651ef5ac5!2s1413%20Shelby%20Ln%2C%20Celina%2C%20TX%2075009%2C%20USA!5e0!3m2!1sen!2sin!4v1750675929512!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          style={{borderRadius:"10px"}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
     </div>
      <div className="my-8 text-center text-white font-bold">
        © 2023 FixDoor LLC. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;


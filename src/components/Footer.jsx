import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { IoIosMail } from "react-icons/io"

const Footer = () => {
  return (
    <footer>
    <section className="text-white bg-black p-5 py-10 flex flex-col gap-10 md:flex-row md:justify-between">
      <article className="md:w-1/3">
        <span className="flex items-center gap-2 mb-2">
          <img src="/assets/foodbank-logo.png" alt="foodbank logo" />
          <p className="font-bold text-secondary text-xl">FOODBANK</p>
        </span>
        <p className="leading-8">
          Our mission is to empower individuals with accessible, flexible
          food loans to promote financial wellness and ensure everyone has
          access to nutritious meals.
        </p>
      </article>
      <article>
        <h4 className="font-semibold text-gray-500">Legal</h4>
        <ul className="flex flex-col gap-3 mt-2">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Return Policy</li>
        </ul>
      </article>
      <article>
        <h4 className="font-semibold text-gray-500 mb-2">Contact</h4>
        <ul className="flex flex-col gap-3 ">
          <li className="flex items-center gap-2">
            <FaPhoneAlt className="text-secondary" />
            +2349159855709
          </li>

          <li className="flex items-center gap-2">
            <IoIosMail className="text-secondary w-5 h-5" />
            cs@foodbank4u.com
          </li>

          <li className="flex items-center gap-2">
            <HiLocationMarker className="text-secondary w-5 h-5" />G & M
            Place, Igbo-Efon, Lekki, Lagos, Nigeria.
          </li>

          <li className="flex items-center gap-2">
            <HiLocationMarker className="text-secondary w-5 h-5" />
            1703 Rockhill Rd, #6311, McKinney TX 75069, U.S.A.
          </li>
        </ul>
      </article>
    </section>
    <section className="bg-white p-3 text-center text-sm flex flex-col md:flex-row md:items-center md:justify-between">
      <p>© 2024 Copyright, All Right Reserved, Foodbank</p>
      <div className="flex items-center gap-3 justify-center my-3">
        <FaTwitter className="w-6 h-6 text-secondary" />
        <FaFacebook className="w-6 h-6 text-secondary" />
        <FaInstagram className="w-6 h-6 text-secondary" />
        <FaLinkedin className="w-6 h-6 text-secondary" />
      </div>
    </section>
  </footer>

  )
}

export default Footer
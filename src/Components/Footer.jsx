import React from 'react'
import logo from "../Images/logo.png"

const Footer = () => {
  return (
    <div>
        <footer class="bg-gradient-to-r from-rose-300 to-rose-500 text-white py-10 font-[sml]">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* <!-- Company Info --> */}
        <div>
            <img src={logo} alt="UthsMaya GiftWorkz" class="w-32 mb-4" />
            <p class="text-sm">No.27, 2nd Floor, 2nd Main Rd, Sri Ayyappa Nagar, Virugambakkam, Chennai, Tamil Nadu 600020.</p>
            <p class="text-sm mt-2">New no.2 / plot B, old no.20, 4th cross street, 2nd canal cross street, Gandhi nagar, Adyar, 600020.</p>
            <div class="flex gap-4 mt-4">
                <a href="#" class="text-white text-xl"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-white text-xl"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-white text-xl"><i class="fas fa-envelope"></i></a>
                <a href="#" class="text-white text-xl"><i class="fas fa-globe"></i></a>
            </div>
        </div>

        {/* <!-- Contact Us --> */}
        <div>
            <h3 class="font-semibold text-lg mb-3">Contact Us</h3>
            <p class="text-sm">official@uthsmayagiftworkz.com</p>
            <p class="text-sm mt-2">+91 9944314899</p>
            <p class="text-sm mt-2">Dubai - Al Bursha, Chennai - Koyembedu / Perungudi / Adyar</p>
        </div>

        {/* <!-- Popular Links --> */}
        <div>
            <h3 class="font-semibold text-lg mb-3">Popular</h3>
            <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-white">T-Shirts</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Bags</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Gadgets</a></li>
                <li><a href="#" class="text-gray-300 hover:text-white">Corporate Gifts</a></li>
            </ul>
        </div>

        {/* <!-- Location (Google Map) --> */}
        <div>
            <h3 class="font-semibold text-lg mb-3">Location</h3>
            <iframe 
                class="w-full h-40 rounded-lg"
                src="https://www.google.com/maps/embed?..." 
                allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>

    {/* <!-- Copyright --> */}
    <div class="text-center text-white text-sm mt-8 border-t border-white pt-4">
        Copyright © 2025 All Rights Reserved | Powered by <a href="#" class="text-[#fff8ef] hover:underline">Disha Medias</a>
    </div>
</footer>

    </div>
  )
}

export default Footer
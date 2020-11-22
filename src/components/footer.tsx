import React from 'react';
import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaTwitch, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="pb-12">
      <section className="flex flex-col items-center">
        <div className="flex max-w-xs">
          <a
            href="https://github.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
          >
            <FiTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://twitch.tv/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
          >
            <FaTwitch className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
          >
            <FiInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-gray-400 text-center mt-8">
          &copy; {new Date().getFullYear()} 0xhjohnson. Some rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;

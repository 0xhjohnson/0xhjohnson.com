import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaTwitch, FaLinkedin } from 'react-icons/fa';
import CustomLink from '@/components/custom-link';

function Footer() {
  return (
    <footer className="pb-12">
      <section className="flex flex-col items-center">
        <div className="flex max-w-xs">
          <CustomLink
            href="https://github.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </CustomLink>
          <CustomLink
            href="https://twitter.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
            aria-label="Twitter"
          >
            <FiTwitter className="w-5 h-5" />
          </CustomLink>
          <CustomLink
            href="https://twitch.tv/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
            aria-label="Twitch"
          >
            <FaTwitch className="w-5 h-5" />
          </CustomLink>
          <CustomLink
            href="https://instagram.com/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150 mr-5"
            aria-label="Instagram"
          >
            <FiInstagram className="w-5 h-5" />
          </CustomLink>
          <CustomLink
            href="https://linkedin.com/in/0xhjohnson"
            className="text-gray-400 hover:text-gray-300 transition ease-in duration-150"
            arai-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </CustomLink>
        </div>
        <p className="text-gray-400 text-center mt-8">
          &copy; {new Date().getFullYear()} 0xhjohnson. Some rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;

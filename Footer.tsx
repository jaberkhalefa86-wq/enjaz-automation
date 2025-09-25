
import React from 'react';
import { TwitterIcon, LinkedInIcon, GitHubIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} إنجاز للأتمتة. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

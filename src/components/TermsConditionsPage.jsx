import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TermsConditionsPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      
      <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Company Name */}
        <Link to="/" className="font-semibold text-lg text-red-500">
          Select Maid
        </Link>
        {/* Navigation */}
        <nav>
          <Link to="/" className="text-white hover:text-gray-400 ml-4">
            Return to Home
          </Link>
        </nav>
      </div>
    </header>
        <div className="prose dark:prose-dark container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
          <h2>Introduction</h2>
          <p>
            These terms and conditions govern your use of the Select Maid
            website and services. By accessing or using the website, you agree
            to comply with these terms and conditions.
          </p>
          <h2>Service Description</h2>
          <p>
            Select Maid provides professional maid services in various
            locations including Delhi, Noida, and Gurugram. Our services include
            household chores, babysitting, elderly care, and more.
          </p>
          <h2>Disclaimer</h2>
          <p>
            The information contained in this website is for general information
            purposes only. The information is provided by Select Maid and while
            we endeavor to keep the information up to date and correct, we make
            no representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, suitability, or
            availability with respect to the website or the information,
            products, services, or related graphics contained on the website for
            any purpose. Any reliance you place on such information is therefore
            strictly at your own risk.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <h2>Changes to Terms</h2>
          <p>
            Select Maid reserves the right to revise these terms and conditions
            at any time without notice. By using this website you are agreeing
            to be bound by the then current version of these terms and
            conditions.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at{' '}
            <a href="mailto:selectmaid@gmail.com">selectmaid@gmail.com</a>.
          </p>
        </div>
      

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;

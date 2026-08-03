/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Trainer } from './components/Trainer';
import { MondayChallenge } from './components/MondayChallenge';
import { Reviews } from './components/Reviews';
import { BmiCalculator } from './components/BmiCalculator';
import { Enquiry } from './components/Enquiry';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white relative">
      {/* Animated Preloader */}
      <Preloader />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Animated Statistics Section */}
        <Stats />

        {/* About Gym Section */}
        <About />

        {/* 6 Premium Services Section */}
        <Services />

        {/* Head Trainer Anmol Pandit Section */}
        <Trainer />

        {/* Monday Fitness Challenge Section */}
        <MondayChallenge />

        {/* 10 Member Reviews Slider with Cartoon Muscular Avatars */}
        <Reviews />

        {/* Interactive BMI & Fitness Calculator Tool */}
        <BmiCalculator />

        {/* Instant WhatsApp Enquiry Form */}
        <Enquiry />

        {/* Contact Details & Google Maps Embed */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp, Phone Call, Back-To-Top) */}
      <FloatingButtons />
    </div>
  );
}

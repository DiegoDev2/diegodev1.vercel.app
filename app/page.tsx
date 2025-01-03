"use client";
import React, { useState } from 'react';

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import ThingsSection from '@/components/Things';




const Home: React.FC = () => {
  return (
    <>
      <section className="section-down blur-progressive"></section>
      <Header/>
      <Landing />
      <ThingsSection />

    </>
  );
};
export default Home;

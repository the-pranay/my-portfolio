"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const ClientOnly = ({ children, fallback = null }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return fallback;
  }

  return children;
};

export default ClientOnly;

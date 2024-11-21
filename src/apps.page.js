import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Loading fallback component
const LoadingFallback = () => <div>Loading...</div>;

const Apps = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Suspense>
  );
};

export default Apps;

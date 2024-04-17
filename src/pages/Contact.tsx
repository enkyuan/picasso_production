import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function WaitList() {
  return (
    <div style={{ position: 'relative' }}>
      <Spline scene="https://prod.spline.design/GFAU3fGESbgO-jqZ/scene.splinecode" />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '2em'
      }}>
        <h1>Contact Us</h1>
        <a href="mailto:company@company.com" style={{ fontSize: '1.5em', color: '#fff' }}>
          contact@picassocard.com
        </a>
      </div>
    </div>
  );
}
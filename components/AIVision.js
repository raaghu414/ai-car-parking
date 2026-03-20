"use client";
import { useState, useEffect } from "react";
import { Scan, ShieldAlert, Cpu } from "lucide-react";

export default function AIVision() {
  const [scanning, setScanning] = useState(false);
  const [lastPlate, setLastPlate] = useState("KAE-2042");

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setTimeout(() => {
        const plates = ["KAE-2042", "TX-9021", "B-8821LX", "AZ-552", "PL-0091"];
        setLastPlate(plates[Math.floor(Math.random() * plates.length)]);
        setScanning(false);
      }, 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vision-container glass-card">
      <div className="header">
        <Cpu size={20} className="icon" />
        <h3 className="gradient-text">AI Vision Feed</h3>
      </div>
      
      <div className="camera-feed">
        <div className="scan-line" style={{ display: scanning ? 'block' : 'none' }}></div>
        <div className="overlay-info">
          <div className="status">AI ACTIVE</div>
          <div className="recognition">
            <Scan size={16} />
            <span>Scanning: {scanning ? "Analyzing..." : lastPlate}</span>
          </div>
        </div>
        <div className="mock-video"></div>
      </div>

      <div className="alerts">
        <div className="alert-item">
          <ShieldAlert size={16} color="#fbbf24" />
          <span>No anomalies detected</span>
        </div>
      </div>

      <style jsx>{`
        .vision-container {
          width: 100%;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .camera-feed {
          width: 100%;
          height: 200px;
          background: #000;
          border-radius: 0.75rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .mock-video {
          width: 100%;
          height: 100%;
          opacity: 0.3;
          background: repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.1),
            rgba(0,0,0,0.1) 1px,
            transparent 1px,
            transparent 2px
          );
        }
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--primary);
          box-shadow: 0 0 15px var(--primary);
          top: 0;
          animation: scan 1.5s linear infinite;
          z-index: 2;
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .overlay-info {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 3;
          font-family: monospace;
          color: var(--primary);
          font-size: 0.8rem;
        }
        .recognition {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          background: rgba(0,0,0,0.5);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        .alerts {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .alert-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}

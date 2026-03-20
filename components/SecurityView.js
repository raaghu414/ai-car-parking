"use client";
import { ShieldCheck, Eye, Lock, Bell } from "lucide-react";

export default function SecurityView() {
  const logs = [
    { time: "20:42:15", event: "Unauthorized access prevented at Entrance A", severity: "High" },
    { time: "20:38:02", event: "Standard plate verification successful - KAE-2042", severity: "Low" },
    { time: "20:15:44", event: "Motion detected in Sector 4 (Zone C)", severity: "Medium" },
    { time: "19:55:21", event: "System health check - All sensors operational", severity: "Low" },
  ];

  return (
    <div className="security-view">
      <div className="top-grid">
        <div className="security-card glass-card">
          <ShieldCheck size={32} color="#10b981" />
          <div className="info">
            <h3>System Secure</h3>
            <p>Active protection enabled 24/7</p>
          </div>
          <div className="toggle-switch"></div>
        </div>
        <div className="security-card glass-card">
          <Eye size={32} color="#3b82f6" />
          <div className="info">
            <h3>AI Surveillance</h3>
            <p>8 active camera feeds monitoring</p>
          </div>
          <span className="live-dot">LIVE</span>
        </div>
      </div>

      <div className="logs-section glass-card">
        <div className="header">
          <h3><Bell size={18} /> Security Logs</h3>
          <button className="clear-btn">Clear History</button>
        </div>
        <div className="logs-list">
          {logs.map((log, i) => (
            <div key={i} className="log-item">
              <span className="log-time">{log.time}</span>
              <span className="log-event">{log.event}</span>
              <span className={`log-severity ${log.severity.toLowerCase()}`}>
                {log.severity}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .security-view { display: flex; flex-direction: column; gap: 2rem; }
        .top-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .security-card { padding: 2rem; display: flex; align-items: center; gap: 1.5rem; position: relative; }
        .info h3 { margin-bottom: 0.25rem; }
        .info p { font-size: 0.8rem; color: #94a3b8; }
        
        .live-dot {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(244, 63, 94, 0.1);
          color: #f43f5e;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: bold;
        }
        .live-dot::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #f43f5e;
          border-radius: 50%;
          margin-right: 0.4rem;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }

        .logs-section { padding: 2rem; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .header h3 { display: flex; align-items: center; gap: 0.75rem; }
        .clear-btn { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #64748b; padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer; }

        .logs-list { display: flex; flex-direction: column; }
        .log-item { display: flex; align-items: center; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.03); gap: 1.5rem; }
        .log-time { font-family: monospace; color: #64748b; font-size: 0.8rem; }
        .log-event { flex: 1; font-size: 0.85rem; color: #cbd5e1; }
        .log-severity { padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: bold; }
        .log-severity.high { background: rgba(244, 63, 94, 0.1); color: #f43f5e; }
        .log-severity.medium { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .log-severity.low { background: rgba(16, 185, 129, 0.1); color: #10b981; }
      `}</style>
    </div>
  );
}

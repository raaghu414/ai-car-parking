"use client";
import { TrendingUp, BarChart3, PieChart, Info } from "lucide-react";

export default function AnalyticsView() {
  const hourlyData = [
    { hour: "08:00", value: 30 },
    { hour: "10:00", value: 55 },
    { hour: "12:00", value: 85 },
    { hour: "14:00", value: 95 },
    { hour: "16:00", value: 70 },
    { hour: "18:00", value: 40 },
  ];

  return (
    <div className="analytics-view">
      <div className="stats-row">
        <div className="stat-card glass-card">
          <PieChart size={24} color="#3b82f6" />
          <div className="stat-info">
            <h3>82%</h3>
            <p>Avg. Daily Occupancy</p>
          </div>
        </div>
        <div className="stat-card glass-card">
          <TrendingUp size={24} color="#10b981" />
          <div className="stat-info">
            <h3>+12%</h3>
            <p>Revenue Increase</p>
          </div>
        </div>
        <div className="stat-card glass-card">
          <BarChart3 size={24} color="#f59e0b" />
          <div className="stat-info">
            <h3>14.2m</h3>
            <p>Avg. Parking Time</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="main-chart glass-card">
          <div className="header">
            <h3>Occupancy Trends</h3>
            <Info size={16} color="#64748b" />
          </div>
          <div className="chart-container">
            {hourlyData.map((d, i) => (
              <div key={i} className="bar-wrapper">
                <div className="bar" style={{ height: `${d.value}%` }}>
                  <div className="tooltip">{d.value}%</div>
                </div>
                <span className="label">{d.hour}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-card glass-card">
          <h3>AI Predictions</h3>
          <ul className="predictions-list">
            <li>
              <div className="dot green"></div>
              <span>Optimal vacancy expected at <strong>09:15</strong></span>
            </li>
            <li>
              <div className="dot yellow"></div>
              <span>Moderate queue likely after <strong>17:30</strong></span>
            </li>
            <li>
              <div className="dot red"></div>
              <span>Peak congestion alert: <strong>14:00 - 15:30</strong></span>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .analytics-view {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
        }
        .stat-info h3 { font-size: 1.75rem; margin-bottom: 0.25rem; }
        .stat-info p { font-size: 0.8rem; color: #94a3b8; }

        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }
        .main-chart {
          height: 350px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .header { display: flex; justify-content: space-between; }
        .chart-container {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding-top: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .bar-wrapper {
          flex: 1;
          max-width: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .bar {
          width: 100%;
          background: linear-gradient(180deg, var(--primary) 0%, rgba(59, 130, 246, 0.1) 100%);
          border-radius: 8px 8px 0 0;
          position: relative;
          transition: all 0.3s;
        }
        .bar:hover {
          filter: brightness(1.2);
          transform: scaleX(1.1);
        }
        .tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: black;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: bold;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .bar:hover .tooltip { opacity: 1; }
        .label { font-size: 0.7rem; color: #64748b; margin-bottom: -1rem; }

        .summary-card { padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .predictions-list { list-style: none; display: flex; flex-direction: column; gap: 1.25rem; }
        .predictions-list li { display: flex; align-items: flex-start; gap: 1rem; font-size: 0.9rem; color: #cbd5e1; }
        .dot { width: 10px; height: 10px; border-radius: 50%; margin-top: 0.4rem; flex-shrink: 0; }
        .dot.green { background: var(--accent); }
        .dot.yellow { background: #f59e0b; }
        .dot.red { background: #f43f5e; }
      `}</style>
    </div>
  );
}

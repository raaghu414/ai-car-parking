"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ParkingGrid from "@/components/ParkingGrid";
import AIVision from "@/components/AIVision";
import BookingsView from "@/components/BookingsView";
import AnalyticsView from "@/components/AnalyticsView";
import SecurityView from "@/components/SecurityView";
import { Info, TrendingUp, Users, Clock } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const stats = [
    { label: "Total Slots", value: "24", icon: <Info size={16} /> },
    { label: "Occupancy", value: "65%", icon: <TrendingUp size={16} /> },
    { label: "Daily Users", value: "142", icon: <Users size={16} /> },
    { label: "Peak Time", value: "14:00", icon: <Clock size={16} /> },
  ];

  return (
    <div className="layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1 className="gradient-text">{activeTab}</h1>
            <p className="subtitle">
              {activeTab === "Dashboard" ? "Real-time AI monitoring and slot management." : `View and manage your ${activeTab.toLowerCase()}.`}
            </p>
          </div>
          <div className="user-profile">
            <div className="avatar">JD</div>
            <span>John Doe</span>
          </div>
        </header>

        {activeTab === "Dashboard" && (
          <>
            <section className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card glass-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <p className="stat-label">{stat.label}</p>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                </div>
              ))}
            </section>

            <div className="main-content-row">
              <ParkingGrid />
              <div className="right-panels">
                <AIVision />
                <div className="analytics-card glass-card">
                  <h3 className="gradient-text">Predictive Analytics</h3>
                  <div className="mock-chart">
                    <div className="bar" style={{height: '40%'}}></div>
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '95%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '40%'}}></div>
                  </div>
                  <p className="prediction-text">
                    High demand expected between <strong>14:00 - 16:00</strong>.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "Bookings" && <BookingsView />}
        {activeTab === "AI Analytics" && <AnalyticsView />}
        {activeTab === "Security" && <SecurityView />}
        {(activeTab === "Parking Slots" || activeTab === "Settings") && (
          <div className="placeholder-view glass-card">
            <h2 className="gradient-text">{activeTab} Section</h2>
            <p>This section is under development for the {activeTab} module.</p>
          </div>
        )}
      </main>

      <style jsx>{`
        .layout {
          display: flex;
          padding: 2rem;
          gap: 2rem;
          min-height: 100vh;
        }
        .dashboard-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .subtitle {
          color: #64748b;
          font-size: 0.9rem;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
        }
        .avatar {
          width: 32px;
          height: 32px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .stat-icon {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-label { font-size: 0.75rem; color: #94a3b8; }
        .stat-value { font-size: 1.25rem; font-weight: bold; }

        .main-content-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        .right-panels {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .analytics-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mock-chart {
          height: 100px;
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }
        .bar {
          flex: 1;
          background: linear-gradient(135deg, var(--primary) 0%, #1e293b 100%);
          border-radius: 4px 4px 0 0;
          transition: height 0.5s ease;
        }
        .prediction-text {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .placeholder-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 1rem;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}

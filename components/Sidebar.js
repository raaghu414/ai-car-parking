"use client";
import { LayoutDashboard, Car, Calendar, Settings, Activity, ShieldCheck } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <Car size={20} />, label: "Parking Slots" },
    { icon: <Calendar size={20} />, label: "Bookings" },
    { icon: <Activity size={20} />, label: "AI Analytics" },
    { icon: <ShieldCheck size={20} />, label: "Security" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <aside className="sidebar glass-card">
      <div className="brand">
        <div className="logo-container">
          <img src="/ai-car-parking/logo.jpg" alt="Logo" className="logo-img" />
        </div>
        <h2 className="gradient-text">ParkAI</h2>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
            onClick={() => setActiveTab(item.label)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="credit">Developed by</p>
        <p className="developer">Raghavendra Prasad D G</p>
      </div>

      <style jsx>{`
        .sidebar {
          width: 280px;
          height: calc(100vh - 4rem);
          position: sticky;
          top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
        }
        .logo-container {
          width: 44px;
          height: 44px;
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid var(--primary);
        }
        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
          color: #94a3b8;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
        .nav-item.active {
          background: var(--primary);
          color: white;
        }
        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
        }
        .credit {
          font-size: 0.65rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .developer {
          font-size: 0.85rem;
          font-weight: bold;
          color: var(--primary);
          margin-top: 0.25rem;
        }
      `}</style>
    </aside>
  );
}

"use client";
import { CheckCircle2, Clock, User, Hash } from "lucide-react";

export default function BookingsView() {
  const recentBookings = [
    { id: "BK-7701", slot: "A-102", user: "Michael Chen", time: "10:30 AM", status: "Active" },
    { id: "BK-7702", slot: "A-115", user: "Sarah Jenkins", time: "11:15 AM", status: "Completed" },
    { id: "BK-7703", slot: "A-108", user: "David Miller", time: "12:00 PM", status: "Active" },
    { id: "BK-7704", slot: "A-121", user: "Emma Wilson", time: "12:45 PM", status: "Active" },
    { id: "BK-7705", slot: "A-104", user: "James Taylor", time: "01:30 PM", status: "Pending" },
  ];

  return (
    <div className="bookings-view glass-card">
      <div className="header">
        <h2 className="gradient-text">Recent Reservations</h2>
        <div className="badge">LIVE UPDATES</div>
      </div>

      <table className="bookings-table">
        <thead>
          <tr>
            <th><Hash size={14} /> ID</th>
            <th><User size={14} /> USER</th>
            <th>SLOT</th>
            <th><Clock size={14} /> TIME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td className="user-cell">{booking.user}</td>
              <td><span className="slot-badge">{booking.slot}</span></td>
              <td>{booking.time}</td>
              <td>
                <span className={`status-badge ${booking.status.toLowerCase()}`}>
                  {booking.status === "Completed" && <CheckCircle2 size={12} />}
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .bookings-view {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .badge {
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.7rem;
          font-weight: bold;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .bookings-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        th {
          color: #64748b;
          font-size: 0.75rem;
          text-transform: uppercase;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        th :global(svg) { vertical-align: middle; margin-right: 0.5rem; }
        td {
          padding: 1.25rem 1rem;
          font-size: 0.9rem;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .user-cell { color: white; font-weight: 500; }
        .slot-badge {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-family: monospace;
          color: var(--primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.6rem;
          border-radius: 20px;
          font-size: 0.75rem;
        }
        .status-badge.active { background: rgba(16, 185, 129, 0.1); color: var(--accent); }
        .status-badge.completed { background: rgba(59, 130, 246, 0.1); color: var(--primary); }
        .status-badge.pending { background: rgba(251, 191, 36, 0.1); color: #fbbf24; }
      `}</style>
    </div>
  );
}

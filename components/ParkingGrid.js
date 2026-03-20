"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";

export default function ParkingGrid() {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Generate 24 slots
    const initialSlots = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      occupied: Math.random() > 0.4,
      type: i < 4 ? "EV" : "Normal",
      number: `A-${100 + i}`,
    }));
    setSlots(initialSlots);

    // Dynamic AI updates simulation
    const interval = setInterval(() => {
      setSlots(prev => prev.map(slot => 
        Math.random() > 0.95 ? { ...slot, occupied: !slot.occupied } : slot
      ));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlotClick = (slot) => {
    if (!slot.occupied) {
      setSelectedSlot(slot);
      setIsModalOpen(true);
    }
  };

  const handleBookingConfirm = () => {
    if (selectedSlot) {
      setSlots(prev => prev.map(slot => 
        slot.id === selectedSlot.id ? { ...slot, occupied: true } : slot
      ));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="grid-container glass-card">
      <div className="grid-header">
        <h3 className="gradient-text">Live Parking Map</h3>
        <div className="legend">
          <span className="dot available"></span> Available
          <span className="dot occupied"></span> Occupied
        </div>
      </div>
      <div className="grid">
        {slots.map((slot) => (
          <motion.div
            key={slot.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`slot ${slot.occupied ? 'occupied' : 'available'}`}
            onClick={() => handleSlotClick(slot)}
          >
            <div className="slot-id">{slot.number}</div>
            <div className="slot-type">{slot.type}</div>
            {slot.occupied && <div className="car-icon">🚗</div>}
          </motion.div>
        ))}
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleBookingConfirm}
        slot={selectedSlot} 
      />
      <style jsx>{`
        .grid-container {
          flex: 1;
        }
        .grid-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .legend {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot.available { background: var(--accent); }
        .dot.occupied { background: #f43f5e; }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 1.5rem;
        }
        .slot {
          aspect-ratio: 2/3;
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s;
          position: relative;
        }
        .slot.occupied {
          border-style: solid;
          border-color: rgba(244, 63, 94, 0.3);
          background: rgba(244, 63, 94, 0.05);
        }
        .slot.available {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.05);
          cursor: pointer;
        }
        .slot.available:hover {
          background: rgba(16, 185, 129, 0.15);
          transform: translateY(-5px);
        }
        .slot-id { font-size: 0.7rem; font-weight: bold; }
        .slot-type { font-size: 0.6rem; color: #64748b; }
        .car-icon { font-size: 1.5rem; }
      `}</style>
    </div>
  );
}

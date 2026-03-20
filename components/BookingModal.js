"use client";
import { X, Calendar, Clock, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingModal({ isOpen, onClose, onConfirm, slot }) {
  if (!slot) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="modal-content glass-card"
          >
            <div className="modal-header">
              <h3 className="gradient-text">Reserve Slot {slot.number}</h3>
              <button onClick={onClose} className="close-btn"><X size={20} /></button>
            </div>

            <div className="modal-body">
              <div className="info-row">
                <Calendar size={18} />
                <span>Today, March 20, 2026</span>
              </div>
              <div className="info-row">
                <Clock size={18} />
                <span>Duration: 2 Hours (Est.)</span>
              </div>
              <div className="info-row">
                <CreditCard size={18} />
                <span>Rate: $5.00 / hour</span>
              </div>

              <div className="payment-summary">
                <div className="summary-item">
                  <span>Base Fare</span>
                  <span>$10.00</span>
                </div>
                <div className="summary-item total">
                  <span>Total Amount</span>
                  <span>$10.00</span>
                </div>
              </div>

              <button className="confirm-btn" onClick={onConfirm}>
                Confirm Reservation
              </button>
            </div>
          </motion.div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.7);
              backdrop-filter: blur(4px);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
              padding: 1rem;
            }
            .modal-content {
              width: 100%;
              max-width: 400px;
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            }
            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .close-btn {
              background: transparent;
              border: none;
              color: #94a3b8;
              cursor: pointer;
            }
            .modal-body {
              display: flex;
              flex-direction: column;
              gap: 1.25rem;
            }
            .info-row {
              display: flex;
              align-items: center;
              gap: 1rem;
              color: #cbd5e1;
              font-size: 0.9rem;
            }
            .payment-summary {
              background: rgba(255, 255, 255, 0.03);
              padding: 1rem;
              border-radius: 0.75rem;
              border: 1px solid rgba(255, 255, 255, 0.05);
            }
            .summary-item {
              display: flex;
              justify-content: space-between;
              font-size: 0.85rem;
              color: #94a3b8;
              margin-bottom: 0.5rem;
            }
            .summary-item.total {
              margin-top: 0.5rem;
              padding-top: 0.5rem;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              color: white;
              font-weight: bold;
              font-size: 1rem;
            }
            .confirm-btn {
              width: 100%;
              padding: 1rem;
              background: var(--primary);
              color: white;
              border: none;
              border-radius: 0.75rem;
              font-weight: bold;
              cursor: pointer;
              transition: background 0.2s;
            }
            .confirm-btn:hover {
              background: var(--primary-hover);
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}

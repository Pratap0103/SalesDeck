import { useState, useEffect } from 'react';
import { CONFIG } from './data/config';
import CoverSlide from './components/slides/CoverSlide';
import TimelineSlide from './components/slides/TimelineSlide';
import StatsSlide from './components/slides/StatsSlide';
import CapacitySlide from './components/slides/CapacitySlide';
import CertsSlide from './components/slides/CertsSlide';
import PillarsSlide from './components/slides/PillarsSlide';
import DeptMapSlide from './components/slides/DeptMapSlide';
import EscalationSlide from './components/slides/EscalationSlide';
import FlowSlide from './components/slides/FlowSlide';
import CloseSlide from './components/slides/CloseSlide';

const TOTAL_SLIDES = 12;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (n) => {
    setActiveIndex(Math.max(0, Math.min(TOTAL_SLIDES - 1, n)));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === ' ') go(activeIndex + 1);
      if (e.key === 'ArrowLeft') go(activeIndex - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="deck" id="deck">
        <CoverSlide isActive={activeIndex === 0} />
        <TimelineSlide isActive={activeIndex === 1} />
        <StatsSlide isActive={activeIndex === 2} />
        <CapacitySlide isActive={activeIndex === 3} />
        <CertsSlide isActive={activeIndex === 4} />
        <PillarsSlide isActive={activeIndex === 5} />
        <DeptMapSlide isActive={activeIndex === 6} />
        <EscalationSlide isActive={activeIndex === 7} />
        
        <FlowSlide 
          isActive={activeIndex === 8}
          eyebrow="Live system &middot; click to play"
          title='Watch an order move <span class="accent">on its own.</span>'
          flows={[{
            id: 'order',
            steps: CONFIG.orderFlow,
            altSteps: CONFIG.orderComplaint,
            runLabel: 'Run the system',
            altLabel: 'Simulate complaint',
            idPrefix: 'IC-',
            idLabel: 'Order',
            previewHd: 'What the client sees',
            previewBig: 'Order #—',
            previewMeta: 'Press “Run the system” to start a live order.',
            doneMeta: (isAlt) => isAlt ? 'Complaint resolved and tracked. Client kept informed throughout.' : 'Order delivered on schedule. Everything logged automatically.',
          }]}
        />

        <FlowSlide 
          isActive={activeIndex === 9}
          eyebrow="Smart inventory &middot; click to play"
          title='Stock runs low? <span class="accent">It refills itself.</span>'
          flows={[{
            id: 'inventory',
            compact: true,
            steps: CONFIG.invFlow,
            runLabel: 'Trigger a refill',
            idPrefix: 'IND-',
            idLabel: 'Indent',
            previewHd: 'What the store sees',
            previewBig: 'Indent #—',
            previewMeta: 'Press “Trigger a refill” to watch raw material restock end to end.',
            doneMeta: () => 'Raw material back in stock and fully accounted for — production never stalls.',
          }]}
        />

        <FlowSlide 
          isActive={activeIndex === 10}
          eyebrow="Every department &middot; click to play"
          title='Same system runs <span class="accent">the whole plant.</span>'
          flows={[
            {
              id: 'maint',
              tab: '🛠️ Maintenance',
              steps: CONFIG.maintFlow,
              altSteps: CONFIG.maintAlt,
              runLabel: 'Run a repair',
              altLabel: 'Simulate a delay',
              idPrefix: 'JOB-',
              idLabel: 'Job',
              previewHd: 'Maintenance board',
              previewMeta: 'Run a breakdown-to-back-online cycle, or simulate a delay to see escalation.',
              doneMeta: (isAlt) => isAlt ? 'Escalated, reallocated and resolved — downtime kept to a minimum.' : 'Machine repaired, QC-cleared and back online. Downtime logged.',
            },
            {
              id: 'parts',
              tab: '🔩 Spare Parts',
              steps: CONFIG.partsFlow,
              runLabel: 'Restock a part',
              idPrefix: 'SP-',
              idLabel: 'Part indent',
              previewHd: 'Store view',
              previewMeta: 'Watch a low spare part get indented, approved, received and issued to a job.',
              doneMeta: () => 'Part back on the shelf and issued to the right job — no machine waits on stores.',
            },
            {
              id: 'hr',
              tab: '👥 Manpower & HR',
              steps: CONFIG.hrFlow,
              runLabel: 'Run an HR cycle',
              idPrefix: 'EMP-',
              idLabel: 'Record',
              previewHd: 'HR desk',
              previewMeta: 'Watch attendance flow through shifts, leave, overtime and payroll — hands-free.',
              doneMeta: () => 'Attendance to payroll handled on live data — no registers, no disputes.',
            }
          ]}
        />

        <CloseSlide isActive={activeIndex === 11} />
      </div>

      <div className="fixed top-[20px] right-[24px] font-mono text-[12px] text-muted tracking-[.1em] z-50">
        <b className="text-ink">{String(activeIndex + 1).padStart(2, '0')}</b> / {String(TOTAL_SLIDES).padStart(2, '0')}
      </div>

      <div className="fixed bottom-[22px] left-0 right-0 flex items-center justify-center gap-[16px] z-50">
        <button 
          onClick={() => go(activeIndex - 1)}
          aria-label="Previous"
          className="w-[42px] h-[42px] rounded-full border border-line bg-[rgba(18,27,36,.85)] backdrop-blur-[6px] text-ink cursor-pointer text-[18px] transition-[.18s] hover:border-amber hover:text-amber"
        >
          &#8249;
        </button>
        <div className="flex gap-[7px]">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <i 
              key={i}
              onClick={() => go(i)}
              className={`h-[8px] rounded-[5px] bg-line cursor-pointer transition-[.2s] ${i === activeIndex ? 'w-[22px] bg-amber' : 'w-[8px]'}`}
            ></i>
          ))}
        </div>
        <button 
          onClick={() => go(activeIndex + 1)}
          aria-label="Next"
          className="w-[42px] h-[42px] rounded-full border border-line bg-[rgba(18,27,36,.85)] backdrop-blur-[6px] text-ink cursor-pointer text-[18px] transition-[.18s] hover:border-amber hover:text-amber"
        >
          &#8250;
        </button>
      </div>

      <div className="fixed bottom-[6px] left-0 right-0 text-center font-mono text-[9px] md:text-[10px] text-muted tracking-[.08em] z-50">
        Powered by{' '}
        <a 
          href="https://www.botivate.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber hover:underline transition-all"
        >
          botivate
        </a>
      </div>
    </>
  );
}

export default App;

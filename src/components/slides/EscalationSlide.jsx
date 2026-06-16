import { useState, useRef, useEffect } from 'react';
import Slide from '../Slide';

export default function EscalationSlide({ isActive }) {
  const [status, setStatus] = useState('idle'); // idle, onTimeStart, onTimeDone, lateStart, lateWarn, lateBreach, lateEscalate, lateResolved
  const timers = useRef([]);
  
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    return clearTimers;
  }, []);

  const reset = () => {
    clearTimers();
    setStatus('idle');
  };

  const handleOnTime = () => {
    if (status !== 'idle' && !status.includes('Done') && !status.includes('Resolved')) return;
    reset();
    setStatus('onTimeStart');
    timers.current.push(setTimeout(() => setStatus('onTimeDone'), 1500));
  };

  const handleGoLate = () => {
    if (status !== 'idle' && !status.includes('Done') && !status.includes('Resolved')) return;
    reset();
    setStatus('lateStart');
    timers.current.push(setTimeout(() => setStatus('lateWarn'), 1700));
    timers.current.push(setTimeout(() => setStatus('lateBreach'), 3500));
    timers.current.push(setTimeout(() => setStatus('lateEscalate'), 5000));
    timers.current.push(setTimeout(() => setStatus('lateResolved'), 6600));
  };

  const getBarStyles = () => {
    if (status === 'idle') return { width: '0%', transition: 'none' };
    if (status === 'onTimeStart' || status === 'onTimeDone') return { width: status === 'onTimeStart' ? '40%' : '40%', transition: 'width 1.4s ease' };
    if (status.includes('late')) return { width: '100%', transition: 'width 3.4s linear' };
    return { width: '0%', transition: 'none' };
  };

  const getBarClass = () => {
    if (status === 'lateWarn') return 'bg-[linear-gradient(90deg,var(--color-amber),#ffb066)]';
    if (status === 'lateBreach' || status === 'lateEscalate') return 'bg-[linear-gradient(90deg,var(--color-red),#ff8d86)]';
    if (status === 'lateResolved') return 'bg-[linear-gradient(90deg,var(--color-green),#9be8b8)]';
    return 'bg-[linear-gradient(90deg,var(--color-green),#9be8b8)]';
  };

  const getStatusText = () => {
    switch (status) {
      case 'idle': return { text: 'Waiting to start...', color: 'text-ink' };
      case 'onTimeStart': return { text: 'In progress...', color: 'text-ink' };
      case 'onTimeDone': return { text: 'Closed in 12 min — within TAT', color: 'text-green' };
      case 'lateStart': return { text: 'In progress...', color: 'text-ink' };
      case 'lateWarn': return { text: 'In progress...', color: 'text-ink' };
      case 'lateBreach': return { text: 'TAT breached', color: 'text-red' };
      case 'lateEscalate': return { text: 'Still pending — escalating', color: 'text-red' };
      case 'lateResolved': return { text: 'HOD cleared it — task closed', color: 'text-green' };
      default: return { text: 'Waiting to start...', color: 'text-ink' };
    }
  };
  const getRungClass = (rungIndex) => {
    const base = "flex gap-[10px] md:gap-[16px] items-center border border-line rounded-[14px] p-[8px_12px] md:p-[16px_18px] bg-panel opacity-45 transition-[.3s]";
    if (rungIndex === 0) {
      if (status === 'onTimeStart' || status === 'lateStart' || status === 'lateWarn') return base + " opacity-100 border-amber shadow-[0_0_22px_rgba(255,125,26,.18)]";
      if (status === 'onTimeDone') return base + " opacity-100 border-green shadow-[0_0_22px_rgba(70,209,126,.18)]";
    }
    if (rungIndex === 1) {
      if (status === 'lateBreach') return base + " opacity-100 border-red shadow-[0_0_22px_rgba(255,90,82,.2)]";
    }
    if (rungIndex === 2) {
      if (status === 'lateEscalate') return base + " opacity-100 border-red shadow-[0_0_22px_rgba(255,90,82,.2)]";
      if (status === 'lateResolved') return base + " opacity-100 border-green shadow-[0_0_22px_rgba(70,209,126,.18)]";
    }
    return base;
  };

  const statusText = getStatusText();
  const isBusy = status !== 'idle' && !status.includes('Done') && !status.includes('Resolved');

  return (
    <Slide isActive={isActive}>
      <div className="flex justify-between items-end gap-[16px] md:gap-[20px] flex-wrap">
        <div>
          <div className="eyebrow">Time-bound tasks &middot; click to play</div>
          <h2 className="text-[clamp(24px,3.4vw,44px)]">No task ever <span className="accent">goes quiet.</span></h2>
        </div>
        <div className="flex gap-[6px] md:gap-[10px] flex-nowrap">
          <button 
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={handleOnTime} disabled={isBusy}
          >
            <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>Finish on time
          </button>
          <button 
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:border-red hover:text-red disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            onClick={handleGoLate} disabled={isBusy}
          >
            Watch a delay
          </button>
          <button 
            className="font-mono text-[11px] md:text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[6px_10px] md:p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[6px] md:gap-[8px] hover:border-amber hover:text-amber shrink-0"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-[10px] md:gap-[22px] mt-[12px] md:mt-[28px]">
        <div className="border border-line rounded-[16px] bg-panel p-[12px_14px] md:p-[24px]">
          <div className="font-mono text-[10px] md:text-[11px] tracking-[.16em] uppercase text-muted">Active task</div>
          <div className="font-disp font-bold text-[18px] md:text-[22px] m-[8px_0_4px] leading-[1.15]">Confirm dispatch &mdash; Order #IC-1042</div>
          <div className="text-muted text-[12.5px] md:text-[13.5px]">Owner: Dispatch desk &middot; TAT: 30 min</div>
          
          <div className="mt-[10px] md:mt-[22px]">
            <div className="flex justify-between font-mono text-[11px] md:text-[12px] text-muted mb-[8px]">
              <span>Time used</span>
              <span className={statusText.color}>{statusText.text}</span>
            </div>
            <div className="h-[10px] md:h-[12px] rounded-[8px] bg-[#0a0f14] border border-line overflow-hidden">
              <i 
                className={`block h-full w-0 ${getBarClass()}`}
                style={getBarStyles()}
              ></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] md:gap-[14px]">
          <div className={getRungClass(0)}>
            <div className="flex-none w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-[12px] grid place-items-center text-[18px] md:text-[22px] bg-panel2 border border-line">&#128100;</div>
            <div>
              <b className="font-disp text-[15px] md:text-[17px] block">Task owner</b>
              <span className="text-muted text-[12px] md:text-[13px] leading-[1.4]">Assigned with a 30-minute clock running in the background.</span>
            </div>
          </div>
          <div className={getRungClass(1)}>
            <div className="flex-none w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-[12px] grid place-items-center text-[18px] md:text-[22px] bg-panel2 border border-line">&#128222;</div>
            <div>
              <b className="font-disp text-[15px] md:text-[17px] block">Auto reminder & call</b>
              <span className="text-muted text-[12px] md:text-[13px] leading-[1.4]">The moment the TAT breaches, the system pings and calls the owner to clear it.</span>
            </div>
          </div>
          <div className={getRungClass(2)}>
            <div className="flex-none w-[36px] h-[36px] md:w-[46px] md:h-[46px] rounded-[12px] grid place-items-center text-[18px] md:text-[22px] bg-panel2 border border-line">&#11014;&#65039;</div>
            <div>
              <b className="font-disp text-[15px] md:text-[17px] block">Escalated to HOD</b>
              <span className="text-muted text-[12px] md:text-[13px] leading-[1.4]">Still pending? It jumps to the Head of Department with the full history.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}

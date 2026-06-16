import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function DeptMapSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">The complete automated plant</div>
      <h2>Every department, <span className="accent">one system.</span></h2>
      <p className="lede">Same connected flow, same TAT clock, same auto-escalation &mdash; running in every corner of the plant, not just the front office.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(8px,1.2vh,14px)] mt-[clamp(14px,2vh,24px)]">
        {CONFIG.deptMap.map((d, i) => (
          <div key={i} className="border border-line rounded-[10px] bg-panel p-[clamp(10px,1.5vh,16px)]">
            <div className="flex items-center gap-[8px] mb-[4px] md:block md:mb-0">
              <div className="text-[20px] md:mb-[4px]">{d.ic}</div>
              <b className="font-disp text-[15px] block md:m-[4px_0_2px]">{d.nm}</b>
            </div>
            <span className="text-muted text-[11.5px] leading-[1.3]">{d.d}</span>
            <div className="inline-block mt-[6px] font-mono text-[8.5px] tracking-[.1em] uppercase text-amber bg-amber-soft rounded-[4px] p-[3px_6px]">
              TAT + auto-escalate
            </div>
          </div>
        ))}
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}

import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function CloseSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Let's build together</div>
      <h2>Reliable steel, run by a system <span className="accent">that never sleeps.</span></h2>
      <p className="lede">From your enquiry to dispatch &mdash; and every machine, part and person behind it &mdash; it all moves on the clock, on one system.</p>
      
      <div className="flex gap-[14px] mt-[30px] flex-wrap">
        <a href={`mailto:${CONFIG.email}`} className="no-underline">
          <span className="font-mono text-[12.5px] tracking-[.06em] cursor-pointer border border-amber bg-amber text-[#1a0d02] font-semibold p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[8px] hover:brightness-105">
            &#9993; {CONFIG.email}
          </span>
        </a>
        <a href={`tel:${CONFIG.phone.replace(/\s/g,'')}`} className="no-underline">
          <span className="font-mono text-[12.5px] tracking-[.06em] cursor-pointer border border-line bg-panel2 text-ink p-[11px_16px] rounded-[10px] transition-[.18s] inline-flex items-center gap-[8px] hover:border-amber hover:text-amber">
            &#128222; {CONFIG.phone}
          </span>
        </a>
      </div>
      
      <div className="mt-[36px] flex flex-col sm:flex-row gap-[8px] sm:gap-[30px] font-mono text-[12px] text-muted">
        <div>{CONFIG.company}</div>
        <div>{CONFIG.location}</div>
      </div>
    </Slide>
  );
}

import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function TimelineSlide({ isActive }) {
  const yrs = new Date().getFullYear() - CONFIG.founded;
  
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">Who we are</div>
      <h2>{yrs} years of getting <span className="accent">one thing right.</span></h2>
      <p className="lede">
        From a single rolling line to a multi-plant operation supplying builders, 
        dealers and infrastructure projects &mdash; the standard has never moved.
      </p>
      
      <div className="flex flex-col md:flex-row mt-[18px] md:mt-[40px] gap-[14px] md:gap-0">
        <div className="flex-1 relative pl-[20px] md:pl-0 md:pr-[18px] after:content-[''] after:absolute after:left-[4.5px] md:after:left-[6px] after:top-[13px] md:after:top-[46px] after:w-[2px] md:after:w-auto after:h-[100%] md:after:h-[2px] after:bottom-0 md:after:right-0 after:bg-[linear-gradient(180deg,var(--color-amber),var(--color-line))] md:after:bg-[linear-gradient(90deg,var(--color-amber),var(--color-line))] after:block">
          <div className="font-disp font-extrabold text-[22px] md:text-[26px] text-amber">{CONFIG.founded}</div>
          <div className="absolute md:relative left-0 md:left-auto top-[8px] md:top-auto w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full bg-amber md:my-[14px] shadow-[0_0_0_5px_var(--color-amber-soft)] z-10"></div>
          <div className="text-[13.5px] md:text-[14px] text-muted leading-[1.45] pt-[2px] md:pt-[6px]">Founded with a single TMT rolling line.</div>
        </div>
        
        <div className="flex-1 relative pl-[20px] md:pl-0 md:pr-[18px] after:content-[''] after:absolute after:left-[4.5px] md:after:left-[6px] after:top-0 md:after:top-[46px] after:w-[2px] md:after:w-auto after:h-[100%] md:after:h-[2px] after:bottom-0 md:after:right-0 after:bg-line md:after:bg-[linear-gradient(90deg,var(--color-amber),var(--color-line))] after:block">
          <div className="font-disp font-extrabold text-[22px] md:text-[26px] text-amber">2014</div>
          <div className="absolute md:relative left-0 md:left-auto top-[8px] md:top-auto w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full bg-amber md:my-[14px] shadow-[0_0_0_5px_var(--color-amber-soft)] z-10"></div>
          <div className="text-[13.5px] md:text-[14px] text-muted leading-[1.45] pt-[2px] md:pt-[6px]">BIS / ISI licence secured; dealer network crosses 300.</div>
        </div>
        
        <div className="flex-1 relative pl-[20px] md:pl-0 md:pr-[18px] after:content-[''] after:absolute after:left-[4.5px] md:after:left-[6px] after:top-0 md:after:top-[46px] after:w-[2px] md:after:w-auto after:h-[100%] md:after:h-[2px] after:bottom-0 md:after:right-0 after:bg-line md:after:bg-[linear-gradient(90deg,var(--color-amber),var(--color-line))] after:block">
          <div className="font-disp font-extrabold text-[22px] md:text-[26px] text-amber">2019</div>
          <div className="absolute md:relative left-0 md:left-auto top-[8px] md:top-auto w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full bg-amber md:my-[14px] shadow-[0_0_0_5px_var(--color-amber-soft)] z-10"></div>
          <div className="text-[13.5px] md:text-[14px] text-muted leading-[1.45] pt-[2px] md:pt-[6px]">Second plant commissioned; capacity doubles.</div>
        </div>
        
        <div className="flex-1 relative pl-[20px] md:pl-0 md:pr-[18px] after:content-[''] after:absolute after:left-[4.5px] after:top-0 after:w-[2px] after:h-[13px] after:bg-line md:after:hidden">
          <div className="font-disp font-extrabold text-[22px] md:text-[26px] text-amber">Today</div>
          <div className="absolute md:relative left-0 md:left-auto top-[8px] md:top-auto w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full bg-amber md:my-[14px] shadow-[0_0_0_5px_var(--color-amber-soft)] z-10"></div>
          <div className="text-[13.5px] md:text-[14px] text-muted leading-[1.45] pt-[2px] md:pt-[6px]">Fully connected, software-run operation end to end.</div>
        </div>
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}

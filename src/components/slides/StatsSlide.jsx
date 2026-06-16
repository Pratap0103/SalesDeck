import { CONFIG } from '../../data/config';
import Slide from '../Slide';

export default function StatsSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">How big we are today</div>
      <h2>Scale you can <span className="accent">rely on.</span></h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[18px] mt-[18px] md:mt-[34px]">
        {CONFIG.scale.map((c, i) => (
          <div key={i} className="bg-[linear-gradient(180deg,var(--color-panel),var(--color-panel2))] border border-line rounded-[16px] p-[14px_16px] md:p-[24px_22px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[46px] h-[46px] bg-[radial-gradient(60px_60px_at_100%_0,var(--color-amber-soft),transparent_70%)]"></div>
            <div className="font-disp font-extrabold text-[24px] md:text-[clamp(28px,3.4vw,46px)] leading-none text-amber">{c.num}</div>
            <div className="font-mono text-[10px] md:text-[11px] tracking-[.16em] uppercase text-muted mt-[8px] md:mt-[10px]">{c.lab}</div>
            <div className="text-muted text-[12px] md:text-[13px] mt-[4px] md:mt-[6px] leading-[1.4]">{c.sub}</div>
          </div>
        ))}
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}

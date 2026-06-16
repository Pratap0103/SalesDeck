import Slide from '../Slide';

export default function PillarsSlide({ isActive }) {
  return (
    <Slide isActive={isActive}>
      <div className="eyebrow">How we run</div>
      <h2>One system. <span className="accent">Three promises.</span></h2>
      <p className="lede">Everything lives in a single automated system. People decide; the system does the chasing.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[18px] mt-[16px] md:mt-[38px]">
        <div className="border border-line rounded-[16px] p-[14px_18px] md:p-[24px_22px] bg-panel">
          <div className="flex items-center gap-[10px] mb-[8px] md:block md:mb-0">
            <div className="text-[22px] md:text-[30px] md:mb-[14px]">&#128279;</div>
            <b className="font-disp text-[17px] md:text-[20px] block md:mb-[6px]">Connected flow</b>
          </div>
          <span className="text-muted text-[12.5px] md:text-[14px] leading-[1.45]">Every job moves on its own from start to finish. Nothing is lost between desks.</span>
        </div>
        <div className="border border-line rounded-[16px] p-[14px_18px] md:p-[24px_22px] bg-panel">
          <div className="flex items-center gap-[10px] mb-[8px] md:block md:mb-0">
            <div className="text-[22px] md:text-[30px] md:mb-[14px]">&#9201;&#65039;</div>
            <b className="font-disp text-[17px] md:text-[20px] block md:mb-[6px]">Time-bound, escalated</b>
          </div>
          <span className="text-muted text-[12.5px] md:text-[14px] leading-[1.45]">Every task has a TAT. If it runs late, the system calls the owner and escalates to the HOD.</span>
        </div>
        <div className="border border-line rounded-[16px] p-[14px_18px] md:p-[24px_22px] bg-panel">
          <div className="flex items-center gap-[10px] mb-[8px] md:block md:mb-0">
            <div className="text-[22px] md:text-[30px] md:mb-[14px]">&#127981;</div>
            <b className="font-disp text-[17px] md:text-[20px] block md:mb-[6px]">Whole plant, automated</b>
          </div>
          <span className="text-muted text-[12.5px] md:text-[14px] leading-[1.45]">Sales, production, stores, maintenance, HR &mdash; all on the same connected system.</span>
        </div>
      </div>
      
      {/* Spacer to prevent navigation overlap on mobile */}
      <div className="h-[90px] md:hidden shrink-0"></div>
    </Slide>
  );
}

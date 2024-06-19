import { Content1 } from "./components/content1";
import { Content } from "./components/content";

const Desktop = () => {
  return (
    <div className="w-full relative [background:linear-gradient(116.84deg,_rgba(176,_208,_247,_0.8)_16.44%,_rgba(229,_178,_196,_0.8)_40.44%)] overflow-hidden flex flex-row items-start justify-center py-[8.562rem] px-[1.25rem] box-border leading-[normal] tracking-[normal]">
      <div className="w-[69.75rem] rounded-2xl bg-gainsboro overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq925:flex-wrap">
        <Content1 />
        <Content />
      </div>
    </div>
  );
};

export default Desktop;


import { ANNOUNCEMENTS } from "./constants";

function Announcement() {
  return (
    <marquee behavior="scroll" direction="left" className = "h-10 flex items-center bg-gray-100 text-xs font-semibold text-gray-700">
      <div className="flex gap-10">
        {ANNOUNCEMENTS.map((point,idx)=> {
            return <span key={idx}>{point.label}</span>
        })}
      </div>
    </marquee>
  );

}
export default Announcement;
function Footer() {
  return (
    <div className="gap-5 flex justify-between items-center p-4 bg-gray-200 border-t overflow-x-hidden">
      <div className="flex flex-col">
        <input type="text" className="border-b" />
        <span className="text-wrap">FACTORY SUPERVISOR</span>
      </div>
      <div className="flex flex-col">
        <input type="text" className="border-b" />
        <span className="text-wrap">GODOWN SUPERVISOR</span>
      </div>
    </div>
  );
}
export default Footer;

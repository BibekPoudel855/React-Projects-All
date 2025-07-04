function Footer() {
  return (
    <div className="gap-5 flex justify-between items-end p-4 bg-gray-200 border-t overflow-x-hidden">
      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          className="border-b border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500 transition-colors" 
          placeholder="Signature"
        />
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          FACTORY SUPERVISOR
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          className="border-b border-gray-400 bg-transparent px-2 py-1 focus:outline-none focus:border-blue-500 transition-colors" 
          placeholder="Signature"
        />
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          GODOWN SUPERVISOR
        </span>
      </div>
    </div>
  );
}
export default Footer;
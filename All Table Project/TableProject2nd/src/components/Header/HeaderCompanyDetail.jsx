import { MdFactory } from "react-icons/md";

function HeaderCompanyDetails() {
  return (
    <div className="m-4">
      <div className="flex items-center gap-3 bg-white shadow border rounded border-teal-600 w-full p-4">
        <div className="bg-teal-600 p-4 rounded-full">
          <MdFactory className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col justify-evenly text-left">
          <h1 className="text-1xl font-bold text-slate-800">
            APPL SMARTWOOD FOAM BOARD PRODUCTION DETAILS
          </h1>
        </div>
      </div>
    </div>
  );
}
export default HeaderCompanyDetails;

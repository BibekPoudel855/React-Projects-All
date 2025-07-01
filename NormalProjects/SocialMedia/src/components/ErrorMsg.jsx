function ErrorMsg({fetchData}){
    return <>
    <h1>No Data Found</h1>
    <button type="button" className="btn btn-success" onClick={fetchData}>Fetch Data</button>
    </>
}
export default ErrorMsg;
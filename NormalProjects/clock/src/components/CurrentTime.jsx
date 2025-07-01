import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";

function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return ()=>{
        clearInterval(timer);
    }
  }, []);
  return (
    <>
      <p>current time {date.toString()}</p>
    </>
  );
}

export default CurrentTime;

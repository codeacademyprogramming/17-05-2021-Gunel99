import { createRef } from "react";
import rates from "./rates.json";

function Exchange() {
  const inputCurRef = createRef();
  const inputCurCodeRef = createRef();
  const outputCurRef = createRef();
  const outputCurCodeRef = createRef();

  const exchange = () => {
    const input = rates.find(rate => rate.code === inputCurCodeRef.current.value).value;
    const output = rates.find(rate => rate.code === outputCurCodeRef.current.value).value;

    outputCurRef.current.value = ((input * inputCurRef.current.value) / output).toFixed(4);
  };

  return (
    <div id="exchanger" className="py-4">
      <div className="container">
        <div className="row">
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">From</label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
                  id="from"
                  defaultValue="1"
                  ref={inputCurRef}
                />
                <select
                  className="form-select"
                  defaultValue="USD"
                  ref={inputCurCodeRef}
                >
                  {rates.map((c, key) => 
                    <option value={c.code} key={key}>
                      {c.code}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <img
              src={process.env.PUBLIC_URL + "../imgs/switch.png"}
              style={{ width: "100%" }}
            />
            <div className="mb-3">
              <label className="form-label">To</label>
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
                  id="to" defaultValue="1.7002"
                  ref={outputCurRef}
                  disabled
                />
                <select 
                  className="form-select"
                  defaultValue="AZN"
                  ref={outputCurCodeRef}
                >
                  {rates.map((c, key) => 
                    <option value={c.code} key={key}>
                      {c.code}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div className="mt-5 mb-3">
              <button className="btn btn-primary" onClick={exchange}>
                Exchange
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Exchange;

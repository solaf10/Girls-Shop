import React from "react";

export default function ResetFilters({ handleReset }) {
  return (
    <>
      <div className="reset" onClick={handleReset}>
        <p>Reset Filter</p>
      </div>
      <hr />
    </>
  );
}

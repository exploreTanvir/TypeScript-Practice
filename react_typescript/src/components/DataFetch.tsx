type DataFetchProps = {
  status: "loading" | "error" | "success"; // union type
};
const DataFetch = ({ status }: DataFetchProps) => {
  if (status == "loading") {
    return <h2>Data is loading</h2>;
  } else if (status == "error") {
    return <h2>Error . Data could not fetch</h2>;
  }
  return (
    <div>
      <h1>DataFecth.Tsx file</h1>
      <h2>Data fetch successfull</h2>
    </div>
  );
};

export default DataFetch;

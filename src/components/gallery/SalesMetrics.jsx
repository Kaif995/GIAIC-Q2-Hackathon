export function SalesMetrics({ metrics }) {
  return (
    <div className="sales-metrics bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Product Performance</h2>
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">Total Sales</span>
        <span className="font-medium">{metrics.sales.toLocaleString()}</span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Sales Target
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              75%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: "75%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

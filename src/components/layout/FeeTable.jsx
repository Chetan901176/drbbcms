import React from 'react';

const FeeTable = ({ standard, feeData }) => {
  const total = feeData.reduce((acc, item) => acc + (item.amount || 0), 0);

  return (
    <div className="min-h-[60vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-primary text-white p-8 sm:p-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Fee Structure
            </h1>
            <p className="text-secondary text-lg sm:text-xl font-medium opacity-90">
              {standard}
            </p>
          </div>

          {/* Table */}
          <div className="p-6 sm:p-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/10">
                    <th className="py-4 px-4 text-primary font-bold text-lg">Particulars</th>
                    <th className="py-4 px-4 text-primary font-bold text-lg text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors group">
                      <td className="py-4 px-4 text-gray-700 font-medium">
                        {item.label}
                        {item.note && (
                          <span className="block text-xs text-gray-400 mt-1 font-normal italic">
                            {item.note}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-primary font-semibold text-right">
                        {item.amount.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-secondary/30 border-t-2 border-primary/20">
                    <td className="py-5 px-4 text-primary font-extrabold text-xl">Total Fee</td>
                    <td className="py-5 px-4 text-primary font-extrabold text-xl text-right">
                      ₹ {total.toLocaleString('en-IN')} /-
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Note Section */}
            <div className="mt-10 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-blue-800 font-bold text-lg mb-1 italic">Important Note:</h3>
                  <div className="text-blue-700 text-sm leading-relaxed">
                    <ul className="list-disc list-inside space-y-1">
                      <li>The above fee structure is subject to change as per the school management's decision.</li>
                      <li>Admission fee is a one-time charge at the time of entry.</li>
                      <li>Textbooks and notebooks are not included in the stationery charges.</li>
                      <li>Fees once paid are non-refundable.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact info redirect */}
        <div className="mt-8 text-center bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <p className="text-gray-600 mb-3 font-medium">
            Have questions about the admission process?
          </p>
          <a 
            href="/admission" 
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-lightGreen transition-all shadow-md active:scale-95"
          >
            Go to Admission Page
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeeTable;

import FeeTable from '@/components/layout/FeeTable';

const Std57Fees = () => {
  const feeData = [
    { label: 'Admission Fee', amount: 5000 },
    { label: 'Tuition Fee', amount: 45000 },
    { label: 'Canteen and Hostel Fee', amount: 65000 },
    { label: 'Laundry Charges', amount: 20000 },
    { label: 'Activity Fee', amount: 10000 },
    { label: 'Sports Fees', amount: 10000 },
    { label: 'Stationaries / Uniforms', amount: 10000, note: '(Approximately)' },
  ];

  return <FeeTable standard="Standards 5th & 7th" feeData={feeData} />;
};

export default Std57Fees;

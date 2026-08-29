import { useMemo, useState } from 'react'

export default function EmiCalculator() {
  const [amount, setAmount] = useState(2500000)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(20)

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100
    const months = years * 12
    if (monthlyRate === 0) {
      const flatEmi = amount / months
      return { emi: flatEmi, totalInterest: 0, totalPayment: amount }
    }
    const emiValue =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    const totalPay = emiValue * months
    return {
      emi: emiValue,
      totalInterest: totalPay - amount,
      totalPayment: totalPay,
    }
  }, [amount, rate, years])

  const fmt = (n) =>
    Math.round(n).toLocaleString('en-IN', { maximumFractionDigits: 0 })

  return (
    <div className="rounded-xl border border-concrete-200 bg-white p-5">
      <h3 className="font-display text-lg font-semibold text-blueprint-900">
        EMI Calculator
      </h3>

      <div className="mt-4 flex flex-col gap-4">
        <Field
          label="Loan Amount"
          value={amount}
          onChange={setAmount}
          min={100000}
          max={20000000}
          step={50000}
          prefix="₹"
        />
        <Field
          label="Interest Rate"
          value={rate}
          onChange={setRate}
          min

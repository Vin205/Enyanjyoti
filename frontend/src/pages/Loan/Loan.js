import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Loan.css";

const Loan = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termInMonths = parseFloat(loanTerm) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(termInMonths)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const monthlyPayment =
      (principal * rate * Math.pow(1 + rate, termInMonths)) /
      (Math.pow(1 + rate, termInMonths) - 1);
    const totalPayment = monthlyPayment * termInMonths;
    const totalInterest = totalPayment - principal;

    setCalculationResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  const loanTypes = [
    {
      name: "Personal Loans",
      description: "For individual use, often unsecured",
    },
    {
      name: "Student Loans",
      description: "To finance education and related expenses",
    },
    { name: "Mortgage Loans", description: "For purchasing real estate" },
    { name: "Auto Loans", description: "Specifically for vehicle purchases" },
    {
      name: "Business Loans",
      description: "For business-related expenses and investments",
    },
    { name: "Payday Loans", description: "Short-term, high-interest loans" },
  ];

  const chartData = calculationResult
    ? [
        { name: "Principal", amount: parseFloat(loanAmount) },
        {
          name: "Interest",
          amount: parseFloat(calculationResult.totalInterest),
        },
      ]
    : [];

  return (
    <div className="loan-container">
      <header className="loan-header">
        <h1 className="loan-title">Understanding Loans and Grants</h1>
        <p className="loan-subtitle">
          Your comprehensive guide to financial assistance
        </p>
      </header>

      <main className="loan-main">
        <section className="loan-info-grid">
          <div className="loan-info-card">
            <h2>What is a Loan?</h2>
            <p>
              A loan is a sum of money that is borrowed and is expected to be
              paid back with interest. Loans can be secured (backed by
              collateral) or unsecured.
            </p>
          </div>
          <div className="loan-info-card">
            <h2>What is a Grant?</h2>
            <p>
              A grant is a financial award given by a government agency,
              organization, or individual for a specific purpose, and it does
              not need to be paid back.
            </p>
          </div>
        </section>

        <section className="loan-types-section">
          <h2>Types of Loans</h2>
          <div className="loan-types-grid">
            {loanTypes.map((loan, index) => (
              <div key={index} className="loan-type-card">
                <h3>{loan.name}</h3>
                <p>{loan.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="loan-tips-section">
          <h2>Tips for Applying</h2>
          <ul className="loan-tips-list">
            <li>Check your credit score before applying</li>
            <li>Research various options to find the best terms</li>
            <li>Gather necessary documentation in advance</li>
            <li>
              Be clear about your purpose and how you plan to use the funds
            </li>
            <li>Consider the long-term impact on your finances</li>
            <li>Read and understand all terms and conditions</li>
          </ul>
        </section>

        <section className="loan-calculator-section">
          <h2>Loan Calculator</h2>
          <div className="calculator-content">
            <form
              className="calculator-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <label htmlFor="loanAmount">Loan Amount:</label>
                <input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="interestRate">Annual Interest Rate (%):</label>
                <input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="Enter rate"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loanTerm">Loan Term (years):</label>
                <input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="Enter term"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="paymentFrequency">Payment Frequency:</label>
                <select
                  id="paymentFrequency"
                  value={paymentFrequency}
                  onChange={(e) => setPaymentFrequency(e.target.value)}
                >
                  <option value="monthly">Monthly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <button onClick={calculateLoan} className="calculate-button">
                Calculate
              </button>
            </form>
            {calculationResult && (
              <div className="calculator-result">
                <h3>Loan Summary:</h3>
                <p>Monthly Payment: ${calculationResult.monthlyPayment}</p>
                <p>Total Payment: ${calculationResult.totalPayment}</p>
                <p>Total Interest: ${calculationResult.totalInterest}</p>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="loan-footer">
        <p>&copy; 2024 Loan Information Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Loan;

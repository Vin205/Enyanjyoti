import React, { useState } from 'react';
import './Loan.css'; // Import your custom CSS file

const Loan = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [paymentFrequency, setPaymentFrequency] = useState('monthly');
    const [calculationResult, setCalculationResult] = useState(null);

    const calculateLoan = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const termInMonths = parseFloat(loanTerm) * 12;

        if (isNaN(principal) || isNaN(rate) || isNaN(termInMonths)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        const monthlyPayment = (principal * rate * Math.pow(1 + rate, termInMonths)) / (Math.pow(1 + rate, termInMonths) - 1);
        const totalPayment = monthlyPayment * termInMonths;
        const totalInterest = totalPayment - principal;

        setCalculationResult({
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            totalInterest: totalInterest.toFixed(2)
        });
    };

    return (
        <div className="loan-container">
            <h1 className="loan-title">Understanding Loans and Grants</h1>
            
            <div className="horizontal-cards">
                <section className="loan-section">
                    <h2>What is a Loan?</h2>
                    <p>
                        A loan is a sum of money that is borrowed and is expected to be paid back with interest. 
                        Loans can be secured (backed by collateral) or unsecured (not backed by collateral).
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Loan" target="_blank" rel="noopener noreferrer">
                        <button className="loan-button">Learn More</button>
                    </a>
                </section>

                <section className="loan-section">
                    <h2>What is a Grant?</h2>
                    <p>
                        A grant is a financial award given by a government agency, organization, or individual for a specific purpose, 
                        and it does not need to be paid back.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Grant_(law)" target='_blank' rel="noopener noreferrer">
                        <button className="loan-button">Learn More</button>
                    </a>
                </section>

                <section className="loan-section types-of-loans">
                    <h2>Types of Loans</h2>
                    <ul>
                        <li>Personal Loans</li>
                        <li>Student Loans</li>
                        <li>Mortgage Loans</li>
                        <li>Auto Loans</li>
                    </ul>
                    <a href="https://en.wikipedia.org/wiki/Loan#Types" target='_blank' rel="noopener noreferrer">
                        <button className="loan-button">View Details</button>
                    </a>
                </section>
            </div>

            <section className="loan-section tips">
                <h2>Tips for Applying for Loans and Grants</h2>
                <ul>
                    <li>Check your credit score before applying.</li>
                    <li>Research various options to find the best terms.</li>
                    <li>Gather necessary documentation in advance.</li>
                    <li>Be clear about your purpose and how you plan to use the funds.</li>
                </ul>
            </section>

            <section className="loan-calculator">
                <h2>Loan Calculator</h2>
                <form className="calculator-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="loanAmount">
                        Loan Amount:
                        <input
                            id="loanAmount"
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            placeholder="Enter amount"
                            required
                        />
                    </label>
                    <label htmlFor="interestRate">
                        Annual Interest Rate (%):
                        <input
                            id="interestRate"
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            placeholder="Enter rate"
                            required
                        />
                    </label>
                    <label htmlFor="loanTerm">
                        Loan Term (years):
                        <input
                            id="loanTerm"
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            placeholder="Enter term"
                            required
                        />
                    </label>
                    <label htmlFor="paymentFrequency">
                        Payment Frequency:
                        <select
                            id="paymentFrequency"
                            value={paymentFrequency}
                            onChange={(e) => setPaymentFrequency(e.target.value)}
                        >
                            <option value="monthly">Monthly</option>
                            <option value="biweekly">Bi-weekly</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </label>
                    <button onClick={calculateLoan} className="loan-button">Calculate</button>
                </form>
                {calculationResult && (
                    <div className="calculator-result">
                        <h3>Loan Summary:</h3>
                        <p>Monthly Payment: ${calculationResult.monthlyPayment}</p>
                        <p>Total Payment: ${calculationResult.totalPayment}</p>
                        <p>Total Interest: ${calculationResult.totalInterest}</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Loan;

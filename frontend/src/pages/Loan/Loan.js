// src/LoanPage.js
import React, { useState } from 'react';
import './Loan.css'; // Import your custom CSS file

const Loan = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [totalPayment, setTotalPayment] = useState(null);

    const calculateTotalPayment = () => {
        const principal = parseFloat(loanAmount);
        const calculatedInterest = (principal * (parseFloat(interestRate) / 100)) * parseFloat(loanTerm);
        const total = principal + calculatedInterest;
        setTotalPayment(total.toFixed(2));
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
                <div className="calculator-form">
                    <label>
                        Loan Amount:
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                    </label>
                    <label>
                        Interest Rate (%):
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            placeholder="Enter rate"
                        />
                    </label>
                    <label>
                        Loan Term (years):
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            placeholder="Enter term"
                        />
                    </label>
                    <button onClick={calculateTotalPayment} className="loan-button">Calculate</button>
                </div>
                {totalPayment && (
                    <div className="calculator-result">
                        <h3>Total Amount to be Paid: ${totalPayment}</h3>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Loan;

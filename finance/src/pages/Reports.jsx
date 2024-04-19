import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      income: '',
      expenditure: '',
      note: '',
      errors: {}
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted with data:', this.state);
      // Handle form submission here
    } else {
      this.setState({ errors });
    }
  }

  validate = () => {
    const { date, income, expenditure } = this.state;
    let errors = {};
    if (!date.trim()) {
      errors.date = 'Date is required';
    }
    if (!income.trim()) {
      errors.income = 'Income amount is required';
    }
    if (!expenditure.trim()) {
      errors.expenditure = 'Amount of expenditure is required';
    }
    return errors;
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="bg-75975e p-8 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-center">Financial Report</h3>
        <div className="max-w-sm mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="date" className="block mb-2">Date</label>
              <input
                type="text"
                id="date"
                name="date"
                placeholder="YYYY-MM-DD"
                value={this.state.date}
                onChange={this.handleChange}
                className="w-full px-3 py-2 rounded border-gray-400 bg-gray-200 focus:bg-gray-100"
              />
              {errors.date && <div className="text-red-500 mt-1">{errors.date}</div>}
            </div>
    
            <div className="mb-4">
              <label htmlFor="income" className="block mb-2">Income Amount</label>
              <input
                type="text"
                id="income"
                name="income"
                placeholder="Enter income amount"
                value={this.state.income}
                onChange={this.handleChange}
                className="w-full px-3 py-2 rounded border-gray-400 bg-gray-200 focus:bg-gray-100"
              />
              {errors.income && <div className="text-red-500 mt-1">{errors.income}</div>}
            </div>
    
            <div className="mb-4">
              <label htmlFor="expenditure" className="block mb-2">Amount of Expenditure</label>
              <input
                type="text"
                id="expenditure"
                name="expenditure"
                placeholder="Enter amount of expenditure"
                value={this.state.expenditure}
                onChange={this.handleChange}
                className="w-full px-3 py-2 rounded border-gray-400 bg-gray-200 focus:bg-gray-100"
              />
              {errors.expenditure && <div className="text-red-500 mt-1">{errors.expenditure}</div>}
            </div>

            <div className="mb-4">
              <label htmlFor="note" className="block mb-2">Special Note</label>
              <textarea
                id="note"
                name="note"
                placeholder="Enter special note (optional)"
                value={this.state.note}
                onChange={this.handleChange}
                className="w-full px-3 py-2 rounded border-gray-400 bg-gray-200 focus:bg-gray-100"
              />
            </div>
          
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormComponent;

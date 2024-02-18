
  // Initialize global variables and array bills
  let annualLimit = 20000;
  let bills = [];
  
  // Function to fetch bills data fron JSON 
  const fetchBills = async () =>{

    const response = await fetch ("https://run.mocky.io/v3/7194064d-35fd-4630-a728-b5e7222710b5")
    if (response.ok) {
        const billsData = await response.json();
        bills = billsData
        console.log(bills);
        updateBillList();
        updateTotalAmount(); }
  }

  // Function to add a new bill
  function addBill() {
    const month = document.querySelector('#billMonth').value;
    const amount = parseFloat(document.querySelector('#billAmount').value);
    
    if (!month || !amount) {
      alert('Please fill in both fields.');
      return;
    }
    
    // Calculate total yearly amount including new bill
    const totalYearlyAmount = bills.reduce((acc, curr) => {
      if (curr.month.startsWith(month.substring(0, 4))) {
        acc += curr.amount;
      }
      return acc;
    }, 0) + amount;

    // Check if adding new bill exceeds annual limit
    if (totalYearlyAmount > annualLimit) {
      alert(`Adding this bill will exceed the annual limit of $${annualLimit}.`);
      return;
    }
    // Add new bill to bills array
    bills.push({ month, amount });
    updateBillList();
    updateTotalAmount();
  }
  
  // Function to delete a bill
  const deleteBill = (index) => {
    bills.splice(index, 1);
    updateBillList();
    updateTotalAmount();
  }
  // Function to update bill list in the DOM
  const updateBillList = () => {
    const billList = document.getElementById('billList');
    billList.innerHTML = '';
    bills.forEach((bill, index) => {
      const li = document.createElement('li');
      li.textContent = `${bill.month}: $${bill.amount.toFixed(2)}`;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteBill(index));
      li.appendChild(deleteButton);
      billList.appendChild(li);
    });
  }
  
  // Function to update total amount display in the DOM
  const updateTotalAmount= () => {
    const totalAmount = document.getElementById('totalAmount');
    const total = bills.reduce((acc, curr) => acc + curr.amount, 0);
    totalAmount.textContent = total.toFixed(2);
  }

  // Event Listener 
  document.addEventListener("DOMContentLoaded", function() {
    fetchBills();
  })


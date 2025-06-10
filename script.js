document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Please check your email for the whitepaper.");
});

  
    function showTable(event) {
      event.preventDefault(); // Prevent form from submitting normally

      // Check if form is valid
      const form = document.getElementById("infoForm");
      if (!form.checkValidity()) {
        form.reportValidity(); // Show browser's default validation message
        return false;
      }

      // Transfer values to table
      document.getElementById("outFirstName").innerText = document.getElementById("firstName").value;
      document.getElementById("outLastName").innerText = document.getElementById("lastName").value;
      document.getElementById("outJobTitle").innerText = document.getElementById("jobTitle").value;
      document.getElementById("outJobFunction").innerText = document.getElementById("jobFunction").value;
      document.getElementById("outPhone").innerText = document.getElementById("phone").value;
      document.getElementById("outCompany").innerText = document.getElementById("company").value;
      document.getElementById("outRole").innerText = document.getElementById("role").value;

      // Hide form, show table
      document.getElementById("formSection").style.display = "none";
      document.getElementById("tableSection").style.display = "block";

      return true;
    }
   function validateForm() {
      const fields = ['fname', 'lname', 'jobTitle', 'jobFunction', 'phone', 'company', 'role', 'checked01', 'checked02'];
      for (let id of fields) {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
          alert('Please fill all required fields.');
          return false;
        }else{
          true;
        }
      }
      alert('Form submitted successfully!');
      return false;  
    }


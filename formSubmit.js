document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    // Get form input values
    const firstName = form.querySelector("#first_name").value;
    const lastName = form.querySelector("#last_name").value;
    const phoneNumber = form.querySelector("#phone").value;

    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("mobile_number", phoneNumber);

    try {
      const response = await fetch(
        "http://3.111.52.245:8000/api/v1/leads-web",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.error) {
        alert("Something went wrong, please try again");
      } else {
        alert("Form submitted successfully");
       
      }
      // form.reset();
    } catch (error) {
      // Show error message
      alert("Something went wrong, please try again");
    }
  });
});

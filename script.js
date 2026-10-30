import { db, collection, addDoc } from "./firebase.js";

const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    document.getElementById("message").textContent = "";

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const services = document.getElementById("services").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    //date & time
    const now = new Date();
    const today =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0");

    if (date < today) {
      document.getElementById("message").textContent =
        "Please Select today or future date";
      return;
    }

    console.log("Time:", time);
    console.log("Before opening:", time < "10:00");
    console.log("After closing:", time > "20:00");

    // time validation
    if (time < "10:00" || time > "20:00") {
      document.getElementById("message").textContent =
        "Please Select a time between 10 Am and 8Pm ";
      return;
    }

    //date
    const selectedDateTime = new Date(date + "T" + time);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
      document.getElementById("message").textContent =
        "Please select a future appointment";
      return;
    }
    console.log(name, phone, email, services, date, time);

    const booking = {
      name: name,
      phone: phone,
      email: email,
      service: services,
      date: date,
      time: time,
    };

    try {
      const docRef = await addDoc(collection(db, "appointments"), booking);
      document.getElementById("message").textContent =
        "Appointment request saved successfully! ";

      console.log("Booking saves! ID:", docRef.id);
      form.reset();
    } catch (error) {
      console.log("Firestore error:", error);
      document.getElementById("message").textContent =
        "Could not save your appointment. Please try again.";
    }

    // document.getElementById("message").textContent =
    //   "Your appointment request has been submitted successfully! 🌸";
    // form.reset();
  });
}

//allow html document to run before running javaScript
document.addEventListener("DOMContentLoader", () => {
  //DOM element reference key
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-name");
  const list = document.getElementById("guest-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (!name) return;

    if (list.children.length >= 10) {
      alert("Guest list limit reached(10 people)");
      return;
    }

    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Not Attending";
    rsvpBtn.className = "not-attending";

    rsvpBtn.addEventListener("Click", () => {
      const attending = rsvpBtn.classList.toggle("attending");
      rsvpBtn.classList.toggle("not attending", !attending);
      rsvpBtn.textContent = attending ? "Attending" : "Not attending";
    });
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn,
      addEventListener("click", () => {
        list.removeChild(li);
      });

    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = "Added at: ${new Date().toLocaleTimeString()}";
    li.append(nameSpan, rsvpBtn, removeBtn, timestamp);
    list.appendChild(li);
    input.value = "";
  });
});

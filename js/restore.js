// public/js/restore.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("restore-form");
  const inputsDiv = document.getElementById("inputs");

  // create 12 numbered inputs
  for (let i = 0; i < 12; i++) {
    const inp = document.createElement("input");
    inp.type = "text";
    inp.name = `word${i}`;
    inp.maxLength = 12;
    inp.pattern = "[a-z]+";
    inp.required = true;
    inp.placeholder = (i + 1).toString();
    inputsDiv.appendChild(inp);
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const words = Array.from(form.querySelectorAll("input"))
      .map(i => i.value.trim());

    // send to server
    const res = await fetch("/api/restore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ words })
    });
    const { result, error } = await res.json();
    if (error) return alert(error);

    // highlight inputs
    const inputs = form.querySelectorAll("input");
    let allCorrect = true;
    inputs.forEach((inp, i) => {
      inp.classList.remove("correct", "wrong");
      if (result[i]) {
        inp.classList.add("correct");
      } else {
        inp.classList.add("wrong");
        allCorrect = false;
      }
    });

    if (allCorrect) {
      // all matched: go to Page 3
      window.location.href = "/success";
    } else {
      // after flash, clear wrong ones and let user retry
      setTimeout(() => {
        inputs.forEach((inp, i) => {
          if (!result[i]) inp.value = "";
          inp.classList.remove("correct", "wrong");
        });
        inputs[0].focus();
      }, 1000);
    }
  });
});

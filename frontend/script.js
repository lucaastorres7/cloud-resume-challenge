const api_url = "https://api.lucastorres.cloud/saveValueToDDBTable";

async function updateCounter() {
  const response = await fetch(api_url, {
    method: "POST",
  });
  const json = await response.json();

  document.getElementById("counter").textContent = json.visitorCounter;
}

document.addEventListener("DOMContentLoaded", updateCounter);

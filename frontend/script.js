const api_url = "https://api.lucastorres.cloud/saveValueToDDBTable";

async function updateCounter() {
  const response = await fetch(api_url, {
    method: "POST",
  });
}

document.addEventListener("DOMContentLoaded", updateCounter);

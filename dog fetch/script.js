const btn = document.getElementById("btn");
const dogImg = document.getElementById("dogImg");

async function fetchDogImage() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    dogImg.src = data.message;
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}

btn.addEventListener("click", fetchDogImage);

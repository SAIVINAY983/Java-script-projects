const btn = document.getElementById("btn");
const title = document.getElementById("title");
const date = document.getElementById("date");
const image = document.getElementById("image");
const description = document.getElementById("description");

btn.addEventListener("click", async () => {
    try {
        const response = await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=rsxYU9mz2UPp8KQCA7fSBBblrXAwcdTRNhL1lv9G"
        );

        const data = await response.json();

        title.innerText = data.title;
        date.innerText = data.date;
        description.innerText = data.explanation;

        if (data.media_type === "image") {
            image.src = data.url;
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    } catch (error) {
        console.log("Error:", error);
    }
});
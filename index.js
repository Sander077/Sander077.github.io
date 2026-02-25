const $list = document.querySelector(".projects");

async function loadProject() {
    try{
        const response = await fetch("./project.json");
        const data = response.json;
        console.log(data);

    }
}
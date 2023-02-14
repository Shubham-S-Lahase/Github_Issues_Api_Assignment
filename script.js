let PageNumber = 1;
const PageNumberLabel = document.getElementById("page_num");
const issuesDiv = document.getElementById("issues");
const list = document.getElementById("resultlist");

function getFirstPage(){
    let loadpage = PageNumber;
    PageNumberLabel.innerHTML = `Page Number: ${loadpage}`;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${loadpage}&per_page=5`)
    .then((response) => response.json())
    .then((res) => {
        const dataset = res.map(data => {
            console.log(data.title);
            const linode = document.createElement("li");
            linode.innerHTML = data.title;
            list.appendChild(linode);
        });
    })
}


function nextPage(){
    list.innerHTML = "";
    PageNumber = PageNumber + 1;
    let nextpage = PageNumber;
    PageNumberLabel.innerHTML = `Page Number: ${nextpage}`;
    console.log(nextpage);
    fetch(`https://api.github.com/repositories/1296269/issues?page=${nextpage}&per_page=5`)
    .then((response) => response.json())
    .then((res) => {
        const dataset = res.map(data => {
            console.log(data.title);
            const linode = document.createElement("li");
            linode.innerHTML = data.title;
            list.appendChild(linode);
        });
    })
}

function prevPage(){
    list.innerHTML = "";
    if(PageNumber >= 2){
        PageNumber = PageNumber  - 1;
    }
    let prevpage = PageNumber;
    PageNumberLabel.innerHTML = `Page Number: ${prevpage}`;
    console.log(prevpage);
    fetch(`https://api.github.com/repositories/1296269/issues?page=${prevpage}&per_page=5`)
    .then((response) => response.json())
    .then((res) => {
        const dataset = res.map(data => {
            console.log(data.title);
            const linode = document.createElement("li");
            linode.innerHTML = data.title;
            list.appendChild(linode);
        });
    })
}
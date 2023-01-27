function buildResult(data){
    let details = document.getElementById('actor-details')
    details.innerHTML = ` <p>${data["name"]}</p> `;
}

function getActorInfo(){
    let characterDetails = document.getElementById('actor-details')
        return fetch(`http://127.0.0.1:5000/api/actor/`+ characterDetails[i].id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                buildResult(data[0]);
            })
    })
}

}
getActorInfo()
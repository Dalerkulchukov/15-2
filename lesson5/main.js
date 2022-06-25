const list = [];
const addbutton = document.getElementById("button");
const input = document.getElementById("input");

function render() {
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock')
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "change";
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";

        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);

          deleteButton.onclick = (e)=>{
            e.target.parentElement.parentElement.remove()
        };
        changeButton.onclick = ()=>{
            const a = prompt('')
            p.innerText = a;
        }

    }

    const form = document.querySelector('.form');
    document.querySelector(".list").remove();
    form.append(mainDiv)
}
addbutton.onclick = function (){
    const obj = {
        id:list.length+1,
        text: input.value
    }
    list.push(obj)
    render();

};
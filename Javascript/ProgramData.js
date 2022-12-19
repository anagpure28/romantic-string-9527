    let pcard = document.getElementById("p-cards");

    let url = ("./ProgramData/program.json");

    let filterSelect = document.getElementById("filter");
    let fetchedData = [];   

    function search(){
        pcard.innerHTML=null;
        let a=document.querySelector("#search").value;
        let newData=fetchedData.filter((el)=>{
            return el.title.toLowerCase().includes(a.toLowerCase());
        })
        if(newData.length===0){
            pcard.innerText="No result found"
        }
        console.log(newData)
        DisplayCard(newData);
    }

    async function fetchCard(){
        try{
            let res = await fetch(url);
            let data = await res.json();
            // let jk=data;
            // add(jk)
            fetchedData = data;
            DisplayCard(data);
            // console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    fetchCard();
    
    
    function DisplayCard(data){
        pcard.innerHTML = null;
        data.forEach((el,index) => {
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.setAttribute("src", el.image);

            let div1 = document.createElement("div");
            div1.setAttribute("id", "div1");

            let week = document.createElement("p");
            week.innerText = el.week;

            let title = document.createElement("h4");
            title.innerText = el.title;

            let div2 = document.createElement("div");
            div2.setAttribute("id","div2");

            // -----div3-----
            let div3 = document.createElement("div");
            div3.setAttribute("id","div3");

            let text = document.createElement("p");
            text.innerText = el.text;

            let price = document.createElement("h4");
            price.innerText = "$" + el.price;

            let btn = document.createElement("button");
            btn.innerText = "🛍️"+" "+"ADD TO BAG";

            div3.append(text,price)
            div2.append(div3,btn);
            div1.append(week,title)
            div.append(img,div1,div2);
            pcard.append(div);
        });
    }
    
    // function add(data){
        filterSelect.addEventListener("change",(e) =>{
            let filtered = data.filter((el) =>{
                if(el.week === filterSelect.value){
                    return el.week;
                }
            })   
            DisplayCard(filtered);         
        })
        console.log(filtered)
        console.log(data)
    // }
   
    // console.log(fetchedData)
    // DisplayCard();
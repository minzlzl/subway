const con2Ul = document.querySelector('.con2_wrap>ul'),
      con2H2 = document.querySelector('.con2_wrap h2');
      

fetch("js/sandwich.json")
.then(res=>res.json())
.then(json=>{
  json.sandwich.forEach((v,k)=>{
    con2Ul.innerHTML += `
                        <li>
                          <div class="con2_box">
                            <figure><img src="${json.sandwich[k].img}" alt=""/></figure>
                            <p>${json.sandwich[k].name}</p>
                          </div>
                          <span>자세히 보기 ></span>
                        </li>
                        `
    con2H2.innerHTML = `전체상품(${json.sandwich.length}개)`
    });
})
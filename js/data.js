const con2Ulsandwich = document.querySelector('.sandwich .con2_wrap>ul'),
      con2H2sandwich = document.querySelector('.sandwich .con2_wrap h2');
fetch("js/sandwich.json")
.then(res=>res.json())
.then(json=>{
  json.sandwich.forEach((v,k)=>{
    con2Ulsandwich.innerHTML += `
                                <li>
                                  <div class="con2_box">
                                    <figure><img src="${json.sandwich[k].img}" alt=""/></figure>
                                    <p>${json.sandwich[k].name}</p>
                                  </div>
                                  <span>자세히 보기 ></span>
                                </li>
                                `
    con2H2sandwich.innerHTML = `전체상품(${json.sandwich.length}개)`
    });
})


const con2Ulunit = document.querySelector('.unit .con2_wrap>ul'),
      con2H2unit = document.querySelector('.unit .con2_wrap h2');
fetch("js/unit.json")
.then(res=>res.json())
.then(json=>{
  json.unit.forEach(function(v2,k2){
    con2Ulunit.innerHTML += `
                            <li>
                              <div class="con2_box">
                                <figure><img src="${json.unit[k2].img}" alt=""/></figure>
                                <p>${json.unit[k2].name}</p>
                              </div>
                              <span>자세히 보기 ></span>
                            </li>
                            `
  con2H2unit.innerHTML = `전체상품(${json.unit.length}개)`
  })
})
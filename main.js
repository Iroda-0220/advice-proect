const btn = document.querySelector('.site-btn')
const siteText = document.querySelector('.site-text')
const advice = document.querySelector('.site-title')


let url =  "https://api.adviceslip.com/advice";

async function fetchBtnData() {
    try {
      const response = await fetch(url);
      const data = await response.json()
      console.log(data)



     renderBtn(data)

      
    } catch (error) {
      console.log("xatolik",error)
    }
  
  
  }


  function renderBtn(data) {
   
    siteText.innerHTML = `
    ${data.slip.advice}
    `
    advice.innerHTML =`
    ADVICE #${data.slip.id}
    `
}



btn.addEventListener('click',() => {

    location.reload()



})


fetchBtnData()



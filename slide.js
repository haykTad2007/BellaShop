export function slide(){

  
  let slidePrevious = document.getElementById('slidePrevious')
  let slideNext = document.getElementById('slideNext')
  let sliderImg = document.getElementById('sliderImg')
  let slideTextSale = document.getElementById('slideTextSale')
  let text = document.getElementById('text')
  let text1 = document.getElementById('text1')
  let slideArr = ['https://static-basket-01.wb.ru/vol1/crm-bnrs/adsf/1683190499774416944.webp',
  'https://static-basket-01.wb.ru/vol1/crm-bnrs/adsf/1683209947909313458.webp',
  'https://static-basket-01.wb.ru/vol1/crm-bnrs/bners1/big_smart_0505.webp']
  let o = 0
  
  let textColor1 =  'rgb(140, 83, 25)'
  let textColor2 = 'rgb(25, 25, 140)' 
  let textColor3 =  'rgb(203, 86, 131)'
  let saleColor1 = 'rgb(224, 224, 64)'
  let saleColor2 = 'rgb(64, 224, 64)'
  let saleColor3 = 'rgb(35, 177, 177)'

  sliderImg.src = slideArr[o]
  
  slidePrevious.onclick = () => {
  
    if(o === 0){
      o = slideArr.length - 1
      sliderImg.src = slideArr[o]
      slideTextSale.style.color = saleColor1
      text.style.color = textColor1
      text1.style.color = textColor1
      
      
      
      
    }else{
      o--
      sliderImg.src = slideArr[o]
    }
    if(o === 0){
      slideTextSale.style.color = saleColor2
      text.style.color = textColor2
      text1.style.color = textColor2
    }
    if(o === 1){
      slideTextSale.style.color = saleColor3
      text.style.color = textColor3
      text1.style.color = textColor3
    }
  }
  slideNext.onclick = () => {
    if(o === slideArr.length - 1){
      o = 0
      sliderImg.src = slideArr[o]
      // slider.appendChild(slideText)
    }else{
      o++
      sliderImg.src = slideArr[o]
      // slider.removeChild(slideText)
    }  
    if(o === 0){
      slideTextSale.style.color = saleColor2
      text.style.color = textColor2
      text1.style.color = textColor2
    }
    if(o === 1){
      slideTextSale.style.color = saleColor3
      text.style.color = textColor3
      text1.style.color = textColor3
    }
    if(o === 2){
      slideTextSale.style.color =  saleColor1 
      text.style.color = textColor1
      text1.style.color = textColor1
    }
  }
  setInterval(() =>{
    if(o === 0){
      o = slideArr.length - 1
      sliderImg.src = slideArr[o]
      slideTextSale.style.color = saleColor1
      text.style.color = textColor1
      text1.style.color = textColor1
      
      
    }else{
      o--
      sliderImg.src = slideArr[o]
    }
    if(o === 0){
      slideTextSale.style.color = saleColor2
      text.style.color = textColor2
      text1.style.color = textColor2
      
    }
    if(o === 1){
      slideTextSale.style.color = saleColor3
      text.style.color = textColor3
      text1.style.color = textColor3
    }
  
  },2500)
  }
  slide()
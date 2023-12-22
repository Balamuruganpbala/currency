
let main=document.querySelectorAll(".currency")
let buttons=document.getElementById("convert")



 fetch('https://api.frankfurter.app/currencies')

.then((res)=>(res.json()))
.then((mes)=>displayDrop(mes))

function displayDrop(mes){
    let object1=Object.entries(mes)
   
    
    for (let i=0;i<object1.length;i++){
        let opt=` <option value="${object1[i][0]}">${object1[i][0]}</option>`
        main[0].innerHTML+=opt
        main[1].innerHTML+=opt
    }
    

    }


   buttons.addEventListener('click',()=>{
              let select1=main[0].value
              let select2=main[1].value
         let number1=document.getElementById("number1").value
         let number2=document.getElementById("number2").value
         let spaned=document.getElementById("action")
         
        
         if(select1==select2){
            spaned.innerHTML="select different currencies"
        }
        else{ 
           
            converter(select1,select2,number1)
           
        }
      
    })
    
    
    function converter(select1,select2,number1){
        let spaned=document.getElementById("action")
        let number2=document.getElementById("number2")
        const host = 'api.frankfurter.app';
        spaned.innerHTML=""
   

      fetch(`https://${host}/latest?amount=${number1}&from=${select1}&to=${select2}`)
  .then(resp => resp.json())
  .then((data) => {
    let valued=Object.values(data.rates)[0]
    number2.value=valued


     
           
  });
  
 

}





    
    

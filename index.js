document.addEventListener('DOMContentLoaded', function(){
    let yourName = document.querySelector('#your-name')
    let partnerName = document.querySelector('#partner-name')
    const evaluateButton = document.querySelector('#evaluate')
    const successRate = document.querySelector('.rate')
    const result = document.querySelector('.result')
    let evalForm = document.querySelector('#evalForm')
    let textResult = document.querySelector('.textResult')


    yourName.addEventListener('change', event => {
        yourName = event.target.value
        console.log(yourName)
    })
    partnerName.addEventListener('change', event => {
        partnerName = event.target.value
        console.log(partnerName)
    })
    evaluateButton.addEventListener('click', (event, yourName, partnerName)=>{
        event.preventDefault();
        if(yourName==='' && partnerName===''){
            textResult.innerHTML = 
            `Enter two names`
        } else {
            
            getMatch(yourName, partnerName);
            textResult.innerHTML = 
            `These are the results for ${yourName} and ${partnerName}`
        }
        
        //evalForm.reset()
        
    })

   function getMatch(name1, name2){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ac7bdfed04mshacf733bfbf50588p133f52jsn9ae86e2b0c99",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.result)
        console.log(response.percentage)
        successRate.innerHTML = `Your possible success is: ${response.percentage} %`
        result.innerHTML = `"${response.result}"`
    })
    .catch(err => {
        console.error(err);
    });
   }
    


})

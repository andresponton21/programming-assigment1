document.addEventListener('DOMContentLoaded', function(){
    // getting the html values
    let yourName = document.querySelector('#your-name')
    let partnerName = document.querySelector('#partner-name')
    const evaluateButton = document.querySelector('#evaluate')
    const successRate = document.querySelector('.rate')
    const result = document.querySelector('.result')
    let evalForm = document.querySelector('#evalForm')
    let textResult = document.querySelector('.textResult')

   // adding an event listener to the form
    evaluateButton.addEventListener('click', (event)=>{
        event.preventDefault();
        // works only if inputs have values
        if( yourName.value && partnerName ){
        //invoke the getMatch function defined below using input values as parameters
            getMatch(yourName.value, partnerName.value);
            textResult.innerHTML = 
            `These are the results for "${yourName.value.toUpperCase()}" and "${partnerName.value.toUpperCase()}"`
        // reseting the form's input
            evalForm.reset()
        // timeout function encouraging the user to try again
            setTimeout(() => {
            textResult.innerHTML='Try different names!!!'
                
            }, 4000);
        }
        
    })


   function getMatch(name1, name2){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d01bef06d8msh65491a939b54f7cp109236jsn8b8d29335c4d",
            "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            
        }
    })
    // getting response and appliying json method
    .then(response => response.json())
    .then(response => {
        // displaying data in document
        successRate.innerHTML = `Your possible success is: ${response.percentage}%`
        result.innerHTML = `"${response.result}"`

        // timeout function encouraging the user to try again

        setTimeout(() => {
            successRate.innerHTML ='TRY'
            result.innerHTML = 'AGAIN'
        }, 3500);
    })
    // catch function for possible errors
    .catch(err => {
        console.error(err);
    });
   }
    


})

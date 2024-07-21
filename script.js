
document.addEventListener('DOMContentLoaded', () =>{
    //dice button
    const dice = document.getElementById('dice');
    //random colors
    const colorsBg = ['#225763','#41d8bf','#2f89b3','#e3c4a8'];
    const mainColors = ['#3b50b2','#4592af','#f6f5f5','#f8aa27','#fac55b'];
    //root element                
    const root = document.documentElement;
    //background color
    let BGcolor = getComputedStyle(root).getPropertyValue('--dark-blue');
    //neon green
    let neon =    getComputedStyle(root).getPropertyValue('--neon-green');
    //changing colors randomly
     function randomColors(){

        root.style.setProperty('--dark-blue', colorsBg[Math.floor((Math.random()*3))]);
        root.style.setProperty('--neon-green', mainColors[Math.floor((Math.random()*4))]);
        
     }
    
    dice.addEventListener('click', async function getAdvice(){
        //html elements
        randomColors();
        const output = document.getElementById('output');
        const adviceId = document.getElementById('advice-id');
        //api url
        const apiUrl = 'https://api.adviceslip.com/advice';
        //getting response
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
         
        try {
            
                adviceId.textContent = data.slip.id;
                output.textContent =  data.slip.advice;
           
        } catch (error) {
            alert('somthing went wrong, try again');
            }
    } );
    
});
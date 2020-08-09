// Generate Pin
const pinGenerator = document.querySelector('.generated-pin-value');
const triedEl = document.querySelector('#tried');
const wrngSbt = document.querySelector('#wrong-submission');
const crtSbt = document.querySelector('#correct-submission');
document.querySelector('.generate-btn').addEventListener('click', () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    pinGenerator.value = randomNum;
    document.querySelector('.action-left').style.display = "block"; 
    triedEl.textContent = '3';
    wrngSbt.style.display = "none";
    crtSbt.style.display = "none";
});

//handling Input Pin and Generated Pin
const inputValue = document.querySelector('#inputPin');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    if(pinGenerator.value === ''){
        alert('Please, Generate Pin First');
        inputValue.value = "";
    }else if(inputValue.value === ''){
        alert('Please, Submit your Pin');
    }else if(pinGenerator.value !== inputValue.value){
        let triedValue = parseFloat(triedEl.textContent);
        triedValue--;
        triedEl.textContent = triedValue.toString();
        if(triedValue <= 0){
            submitBtn.setAttribute('disabled',true);
            submitBtn.textContent = "Blocked for 24 Hours!";
            submitBtn.style.fontSize = "20px";
        }
        wrngSbt.style.display = "block";
        crtSbt.style.display = "none";
        inputValue.value = "";
    }else if(pinGenerator.value === inputValue.value){
        crtSbt.style.display = "block";
        wrngSbt.style.display = "none";
        inputValue.value="";
        pinGenerator.value="";
        document.querySelector('.action-left').style.display = "none"; 
    }
})
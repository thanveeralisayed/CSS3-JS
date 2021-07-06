var uName = document.getElementById('name');
var rForm = document.getElementById('re-form');
var error = document.getElementById('error');


uName.addEventListener('input',function(e){

    var pattern = /^[\w]{6,8}$/;
    var cVal = e.target.value;

    var res = pattern.test(cVal);

    if (cVal !== '')
    {
        // console.log(cVal);
        if(res == false)
        {
        // error.classList.add('show');
        error.style.display = 'block';
        }
        else
         {
        // error.classList.remove('show');
        error.style.display = 'none';
        }
    }
    else
    {
        error.style.display = 'none';
    }

})
 
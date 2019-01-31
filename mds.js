
let mds = {
  textField: function(element){
    //Finding elements
    let input = element.querySelector('input');
    let label = element.querySelector('p');

    function onBlur(e) {
      if(input.value) {
        //Making the label stay in place
        label.style.height = '20px';
        label.style.fontSize = '12px';
        label.style.color = 'black';
      }
    }

    //Listening to blur
    input.addEventListener('blur', onBlur);
  },
  switch: function(element){},
  checkbox: function(element){},
  radioButton: function(element){},
}

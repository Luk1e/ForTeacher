   
//             F I L E         R E A D I N G
   

        var file = document.getElementById('file');
          var list=[];
          var texts=[];
file.addEventListener('change', () => {
    var txtArr = [];
    var fr = new FileReader();
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            txtArr = [...txtArr, ...(lines[line].split(" "))];
        }
    }
    fr.onloadend = function() {
  for (var element in txtArr){
      list.push(txtArr[element].replace(/[a-z]/gi, '').replace(/[0-9]/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
      )
  }
}

read();

    fr.readAsText(file.files[0]);
})


//                F         U         N        C       T       I        O        N     S

//                M A I N        L  I S T  - > u n i q u e A r r a y
function removeNumbers(list){
        list=list.filter(e =>e);
    var uniqueArray=[];
     for(var i=0;i<list.length;i++){
         if(i%2==0){
             uniqueArray.push(list[i]+" "+list[i+1])
         }
       } 
      
        uniqueArray = uniqueArray.filter(function(item, pos) {
            return uniqueArray.indexOf(item) == pos;
        })
        return uniqueArray;
    
}
//                  C O M P A R E
function compare(list1,list2){
     var k=[];
       
     for (var i in list1){
         
            if(!list2.includes(list1[i])){
                
             k.push(list1[i]+"     არა");
            }  else{
                k.push(list1[i]);
            }
            
     }
     return k.join('\r\n');

}


  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(compare(texts,removeNumbers(list))));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
 
  function downloadTxt(){
    download("name",removeNumbers(list));
}




function read(){
var lines = $('#textarea').val().split(/\n/);
    for (var i=0; i < lines.length; i++) {
      if (/\S/.test(lines[i])) {
        texts.push($.trim(lines[i]));
      }
    }
}
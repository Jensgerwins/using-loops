function oddnumbers(zahl, zahl1) 
{
  let Ungradezahl ="";
    for(let index = zahl ;index <= zahl1; index++)
    {
      
      //console.log(index)
      if(index % 2 !== 0)
      {
        Ungradezahl += index + ",";
      }  


      
    
    }
    return Ungradezahl.slice(0, -1);
}
console.log(oddnumbers(0, 4));
console.log(oddnumbers(10, 33));
console.log(oddnumbers(9, 12));

    function charCount(word, letter)
    {
      let zeahlen=0;
      for(let i = 0;i < word.length; i++)
      {
        if(word[i] === letter){
         zeahlen++;
        }
      }
    return zeahlen;
    
    }
console.log(charCount("hello", "l"));
console.log(charCount("mama", "m"));
console.log(charCount("Resümee", "e"));
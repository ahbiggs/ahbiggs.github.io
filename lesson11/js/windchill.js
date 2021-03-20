function doInputOutput()
{
    var a = 5;
    var b = 3;

    degrees = 35.74 + 0.6215*a - 35.75 * Math.pow(b, 0.16) + 0.4275*a*Math.pow(b, 0.16);
   
    document.getElementById("wc").innerHTML = a;

}
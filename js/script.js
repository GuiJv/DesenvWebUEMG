function scrollDown(){
    document.getElementById("frame1").style.visibility = "visible"
    document.getElementById("frame1").classList.add("style")
    document.getElementById("1").style.visibility="hidden"
    document.getElementById("2").style.visibility="hidden"
    document.getElementById("3").style.visibility="hidden"
    
}

function unscroll(){
    document.getElementById("frame1").classList.remove("style")
    document.getElementById("frame1").style.visibility = "hidden"
    document.getElementById("1").style.visibility="visible"
    document.getElementById("2").style.visibility="visible"
    document.getElementById("3").style.visibility="visible"
}
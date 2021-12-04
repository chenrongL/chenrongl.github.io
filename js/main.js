function truncateText(element, maxLength) {
    truncated = element.innerText;
    if(truncated){
        if (truncated.length > maxLength) {
            element.innerText = truncated.substr(0,maxLength) + '...';
        }
        return truncated;
    }else{
        return "";
    }
}

function truncateTextReadMore(maxLength,index) {
    let element = to_truncate_read_more[index];
    truncated = element.innerText;
    //to_truncate_read_more[index].classList.remove("smooth-borders");  
    if(truncated){
        if (truncated.length > maxLength) {
            element.innerHTML = truncated.substr(0,maxLength) + "...<button onclick='expandReadMore("+index.toString()+")'>Expand Section</button>";
        }
        return truncated;
    }else{
        return "";
    }    
}
function expandReadMore(index){
    window.location.hash = to_truncate_read_more[index].id;
    to_truncate_read_more[index].innerHTML = to_truncate_read_more[index].fullHTML+"<button onclick='truncateTextReadMore(200,"+index.toString()+")'>Collapse Section</button>";
    //to_truncate_read_more[i].classList.add("smooth-borders");  
    /*
    for(var i =0;i<to_truncate_read_more.length;i++){
        if(index!=i){
        }else{
        }
    }*/
}
 


var to_truncate = document.getElementsByClassName("truncate");

for(var ele in to_truncate){
    truncateText(to_truncate[ele],200);
}
var to_truncate_read_more = document.getElementsByClassName("truncate-readmore");
for(var i =0;i<to_truncate_read_more.length;i++){
    to_truncate_read_more[i].fullHTML = to_truncate_read_more[i].innerHTML;
    truncateTextReadMore(200,i);
}

function toggleSection(section_id,toggle_button){
    let section = document.getElementById(section_id+'-content');
    window.location.hash = section_id+"-nav";
    if(section.visible){        
        section.style = "display:none;";
        section.visible = false;
        toggle_button.innerHTML = `Expand Section &nbsp;&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
        `;
    }else{
        section.style = "display:block;";
        section.visible = true;
        toggle_button.innerHTML = `Collapse Section &nbsp;&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-up"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>
        `;
    }    
}

/*
var quotes = [  "凡學者、 大義為先， 物名為復 。大義舉而物名從之",
                "治学不为媚时语，独寻真知启后人",
                "在最近这两个破烂的世纪里，生活本身已经变得多么孱弱呀，<br> &nbsp;我们哪里还能碰到一个纯真的，有独创性的人呢？"]
var index = Math.floor(Math.random() *quotes.length);

document.getElementById("quote").innerHTML = quotes[index];
*/
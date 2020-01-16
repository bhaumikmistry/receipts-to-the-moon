
window.onload = function() {
    var link = 'https://bhaumikmistry.github.io/receipts-to-the-moon/json/list.json'
    $.getJSON(link, function( data ) {
        console.log(data);  
        var arr=Object.entries(data); // this turns data into an array arr
        display_list(arr);
    });    
};

function display_list(data)
{
    console.log(data[0]);
    var list = data[0][1];
    console.log(list);

    // <h1 class="row-name"> CVS </h1>
    // <h1 class="row-size row-number"> 3' </h1>
    // <h1 class="row-count row-number"> 420,000,000 </h1>

    for (index = 0; index < list.length; index++) { 
        console.log(list[index].name); 

        var div = document.createElement("div");
        div.classList.add("row")

        var div_name = document.createElement("h1");
        div_name.classList.add("row-name");
        var text_name = document.createTextNode(list[index].name);
        div_name.appendChild(text_name);

        var div_size = document.createElement("h1");
        div_size.classList.add("row-size");
        div_size.classList.add("row-number");
        var text_size = document.createTextNode(list[index].size);
        div_size.appendChild(text_size);

        var div_count = document.createElement("h1");
        div_count.classList.add("row-count");
        div_count.classList.add("row-number");
        var text_count = document.createTextNode(list[index].size);
        div_count.appendChild(text_count);

        div.appendChild(div_name);
        div.appendChild(div_size);
        div.appendChild(div_count);
        
        var holder = document.getElementById("Holder");
        holder.appendChild(div)

    } 

}

// First , initialize vars with globals
// Use vars in text processing
let notifier = global('NOTIFIER');
let app = global('NOTAPP');
let title = global('NOTTITLE');
let text = global('NOTTEXT');
let textbig = global('NOTTEXTBIG');
let inline = global('NOTINLINE');
let ignore = global('SAYIGNORE');


// Then, determine if text or inline is being used
//title = (title.indexOf(',') == -1)? title : " ";
flash("Title in: "+ title);
flash("text in: "+text);

text = textOrInline();
getLast();

//text = text.replace(title, "");

// process ignored words
title = removeIgnored(title);
text = removeIgnored(text);
text = (text)? text : "";

// save to tasker vars
saveVars(title, text);
flash('exit');

function textOrInline(){
    textinline = textbig.indexOf('%nlqbigtext1');

    if(textinline == -1){
        return text;
    }else{ 
        return inline;
    }
}


function getLast(){
    // Remove extra vars passed by plugin
    text = text.replace(/%\w+/gi, "");

    switch(notifier){

        case "org.telegram.messenger":
            title = title.split(",");
            title = title[0];
            title = title.replace(/,\w+/gi, "") + "...";

            text = text.split("||");
            text = text[0];
        break;

        case "com.whatsapp":
            title = title.split(",");
            title = title[0];
            title = title.replace(/,\w+/gi, "") + "...";

            text = text.split("||");
            text = text[text.length-1];
        break;

        case "com.google.android.apps.inbox":
            title = title.split(",");
            title = title[0];
            title = "Email " + title.replace(/,\w+/gi, "") + "...";

            text = text.split("||");
            text = text[text.length-1];
        break;

        default:
    }

    if (notifier == "com.google.android.talk"){
        text = text.split("\n");
        text = text[text.length-1];
    }
}


//+------------------------------------------
//| Replace ignored words
//+------------------------------------------
function removeIgnored(string){
    //return string;

    ignored = ignore.split(",");
    for(i in ignored){
        word = ignored[i];
        regex = new RegExp( '(' + word + ')', 'gi' );
        string = string.replace( regex, "" );
    }
    return string;
}


//+------------------------------------------
//| Save vars to global vars
//+------------------------------------------
function saveVars(title, text){
    setGlobal("SAYTITLE", title);
    setGlobal("SAYBODY", text);

    flash("Title out: "+ title);
    flash("Text out: " + text);
}
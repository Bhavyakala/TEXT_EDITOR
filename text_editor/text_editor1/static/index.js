$(document).ready(function(e){
    $(document).keypress(function(e){   
        var value='3';
        value=$('#fs').val();
        document.execCommand("fontSize",false, value);
        var value1=$('#ff').val();
        document.execCommand("fontName",false, value1);
    });
    $(document).on('click','#B', function(){
        document.execCommand("bold");
    });
    $(document).on('click','#I', function(){
        document.execCommand("italic");
    });
    $(document).on('click','#U', function(){
        document.execCommand("underline");
    });
    $(document).on('click','#cj', function(){
        document.execCommand("justifyCenter");
    });
    $(document).on('click','#rj', function(){
        document.execCommand("justifyRight");
    });
    $(document).on('click','#lj', function(){
        document.execCommand("justifyLeft");
    });
    $(document).on('click','#j', function(){
        document.execCommand("justifyFull");
    });
    $(document).on('click','#sup', function(){
        document.execCommand("superscript");
    });
    $(document).on('click','#sub', function(){
        document.execCommand("subscript");
    });
    $(document).on('click','#st', function(){
        document.execCommand("strikethrough");
    });
    $(document).on('change','#ii', function(){
        var src1=$('#ii'.val);
        document.execCommand( "insertImage", false,src1 ); 
    });
});

                                                    

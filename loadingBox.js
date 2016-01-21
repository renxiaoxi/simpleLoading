function loading(settings){
        var defaults= {
            num:3,
            color:"#333333",
            bgColor:"#cccccc",
            margin:"1px"
        };
        var opts = extands(defaults,settings)
        
        var settings = settings || {},
            loadingBox = document.createElement("ul"),
            li_num = opts.num,            
            li_Temp = "<li></li>",
            li_html = "",
            liBox,
            color = opts.color,
            bgColor = opts.bgColor,
            margin = opts.margin,
            borderWidth = 0,
            i = 0;


        loadingBox.className = "loadingBox";
        //createli
        for(var i=0;i<li_num;i++){            
            li_html+= li_Temp;
        }

        loadingBox.innerHTML = li_html;
        document.body.appendChild(loadingBox);
        liBox = loadingBox.getElementsByTagName("li");

        borderWidth = getBorderWidth();

        function getBorderWidth(){
            var bw=0,temp_width=0;
            //百分比
            
            if(margin.indexOf("px")!=-1){
                temp_width = parseInt(window.getComputedStyle(loadingBox).width);
                bw = ((temp_width - parseInt(margin)*2*opts.num)/opts.num)/temp_width * 100;
            }
            else{
                bw = (100 - (margin*opts.num*2)) / opts.num
            }

            return bw;
        }


        initLayout(li_num,borderWidth);

        function initLayout(n,bw){            
            for(var i=0;i<n;i++){
                liBox[i].style.height = bw+"%";
                liBox[i].style.flex = "0 0 "+bw+"%";                
                liBox[i].style.margin =(margin.indexOf("px") != -1) ? margin : margin + "%";
            }            
        }
        
        function action(){
            setTimeout(function(){
                if(i===li_num)
                    i=0;         
                liBox[i].style.backgroundColor = color;
                if(i!=0)
                    liBox[i-1].style.backgroundColor = bgColor;
                else
                    liBox[li_num-1].style.backgroundColor = bgColor;
                i+=1;
                  action();
                },500);          
        }
        action();


        this.remove = function(){
            loadingBox.remove()
        }
        
    }
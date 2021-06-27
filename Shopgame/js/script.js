window.onload = function(){
    let zong = $(".zongame").html();
   let title = document.querySelectorAll("h2");
   for(let i = 0; i<title.length; i++){
       if(title[i].innerHTML.length == 20){
           title[i].style.textAlign = "left";
           title[i].style.fontSize = "25px";
       }
       else if(title[i].innerHTML.length >= 21){
           title[i].style.textAlign = "left";
           title[i].style.fontSize = "23px";
       }
   }
    class Games{
       constructor(){
        this.godofwar = {
            title: "GOD OF WAR",
            descr: "Years have passed since Kratos took his revenge against the Olympian Gods . Having survived the final fight against his father Zeus , Kratos now lives with his young son Atreus in the world of the Norse Gods , a hostile land inhabited by fierce monsters and warriors. Kratos must act as his son's mentor and protector, and he will have to master the anger and rage that he had for many years and tie up loose ends.",
            cover: "https://files.soniccdn.com/files/2019/04/30/god%20of%20war.jpg"
          };
          this.sanandreas = {
            title: "GTA SAN ANDREAS",
            descr: "The plot of the game takes place in San Andreas, a fictional state that contains three metropolitan cities: Los Santos, San Fierro and Las Venturas; three based in the cities of Los Angeles , San Francisco and Las Vegas , respectively, the second largest map of the saga behind GTA V . Set in 1992 , the play tells the story of Carl Johnson “CJ” , who decides to return to Los Santos after five years of being absent from Liberty City, the city of other Grand Theft Auto video games such as GTA III , GTA Liberty City Stories or GTA IV; after learning of her mother's murder. Upon arrival, CJ attempts to restore power to his former gang and family, while slowly unraveling the truth behind his mother's death. Its plot is loosely based on events such as the rivalry between the Bloods and Crips gangs , the crack epidemic , the Rampart scandal, and the Los Angeles riots of 1992 .",
            cover: "https://static.wikia.nocookie.net/esgta/images/c/c2/Grand_Theft_Auto_San_Andreas.JPG/revision/latest?cb=20161127211015"
          };
             this.godofwar = {
             title: "GOD OF WAR",
             descr: "Years have passed since Kratos took his revenge against the Olympian Gods . Having survived the final fight against his father Zeus , Kratos now lives with his young son Atreus in the world of the Norse Gods , a hostile land inhabited by fierce monsters and warriors. Kratos must act as his son's mentor and protector, and he will have to master the anger and rage that he had for many years and tie up loose ends.",
             cover: "https://files.soniccdn.com/files/2019/04/30/god%20of%20war.jpg"
           };
           
          this.fornite = {
            title: "FORTNITE",
            descr: "Fortnite is a video game of the year 2017 developed by the company Epic Games , released as different software packagesthat present different game modes, but that share the same game engine and mechanics. It was announced at the Spike Video Game Awards in 2011.Published game modes include Fortnite Battle Royale , a free-to-play game where up to one hundred players fight on an island, in increasingly smaller spaces due to the storm, to be the last persons",
            cover: "https://www.ecured.cu/images/7/7a/Fortnite-3787420.jpg"
          };
          this.callofdutyw = {
            title: "CALL OF DUTY WARZONE",
            descr: "Call of Duty: Warzone is a first-person shooter , part of the Battle royale free, released on March 10, 2020 for PlayStation 4 , Xbox One and Microsoft Windows . The game is available on those platforms plus PlayStation 5 and Xbox Series X | S , and is part of the 2019 video game, Call of Duty: Modern Warfare , but does not require purchase and was featured during season 2 of Modern Warfare content.Call of Duty: Warzone was developed by Infinity Ward and Raven Software and published by Activision . Warzone allows online multiplayer combat between 150 players, although some limited-time game modes support 200 players. The game features both a cross-platform game and a cross-platform progression between three games.",
            cover: "https://static.wikia.nocookie.net/cod/images/6/67/Call_of_Duty_Warzone.png/revision/latest/top-crop/width/360/height/450?cb=20200311112324&path-prefix=es"
          };
          this.minecraft = {
            title: "MINECRAFT",
            descr: "Minecraft is aconstruction video game , of the « open world » or sandbox type, originally created by the Swede Markus Persson (commonly known as Notch), 2 and later developed by his company, Mojang Studios . It was publicly released on May 17, 2009, after various changes its full version was released on November 18, 2011.",
            cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
          };
       }
       WriteData = () =>{
        
       }
   }
   let covers;
   class UI{ 
       constructor(){
           this.btn = document.querySelector(".btn");
           this.menu = document.querySelector(".menu");
           this.tit = document.querySelectorAll(".menu section h3");
           this.icons = document.querySelectorAll(".menu .material-icons");
           this.conti = document.querySelectorAll(".menu .conicons");
           this.settings = document.querySelector(".s1");
           this.subs = document.querySelector(".s2");
           this.contact = document.querySelector(".s3");
           this.mapps = document.querySelector(".s4");
           this.settings.addEventListener("click",this.setting);
           this.subs.addEventListener("click",this.sub);
           this.contact.addEventListener("click",this.conta);
           this.mapps.addEventListener("click",this.mapp);
           this.history = [2];
           this.history[0] = $(".menu").html();
           this.h22 = document.querySelectorAll("h2");
           this.h33 = document.querySelectorAll("h3");
           this.dat = new Date();
           this.info = document.querySelector(".info");
           this.info.addEventListener("click",this.godOF);
           this.info2 = document.querySelector(".info2");
           this.info2.addEventListener("click",this.sanAN);
           this.info3 = document.querySelector(".info3");
           this.info3.addEventListener("click",this.forNa);
           this.info4 = document.querySelector(".info4");
           this.info4.addEventListener("click",this.callofWa);
           this.info5 = document.querySelector(".info5");
           this.info5.addEventListener("click",this.mineCra); 
           this.sectc = document.querySelector(".cont1");
           this.cd = document.querySelectorAll(".closgg");
           this.topgames = document.querySelector("#comp");
           this.zongame = $(".zongame").html();
           this.about = document.getElementById("about");
           this.about.addEventListener("click",this.searchGame);
           this.covers = {
            title: "",
            descr: "",
            cover: ""
           };     
       }
        
        godOF = () =>{
            this.table(this.covers2);
            var covers2 = Object.create(this.covers); 
            this.cov = new Games();
            covers2.title = this.cov.godofwar.title;
            covers2.descr = this.cov.godofwar.descr;
            covers2.cover = this.cov.godofwar.cover;
            $(".cont22").html(`
            <section class="ppan d-flex">
            <h2>${covers2.title}</h2><span class="closgg material-icons">highlight_off</span>
            </section>
                    <div class="infop" ng-controller="maincontroller">
                    <div class="img">
                    <img src="${covers2.cover}">
                    </div>
                    <h3>${covers2.descr}</h3>
                    </div>
            `);
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".closgg").css("position","relative");
            $(".closgg").css("width","40px");
            $(".closgg").css("height","40px");
            $(".closgg").css("background","#EF1A3B");
            $(".closgg").css("cursor","context-menu");
            $(".closgg").css("font-size","40px");
            $(".closgg").css("left","46%");
            $(".cont22").css("visibility","visible");
            $(".infop h3").css("color","#000000");
            $(".closgg").on("click",function(){
                $(".cont22").remove();
                new UI();
              }); 
        }   
        sanAN = () =>{
            var covers2 = Object.create(this.covers);
            this.cov = new Games();
            this.table(this.covers2);
            covers2.title = this.cov.sanandreas.title;
            covers2.descr = this.cov.sanandreas.descr;
            covers2.cover = this.cov.sanandreas.cover;
            $(".cont22").html(`
            <section class="ppan d-flex">
            <h2>${covers2.title}</h2><span class="closgg material-icons">highlight_off</span>
            </section>
                    <div class="infop">
                    <div class="img">
                    <img src="${covers2.cover}">
                    </div>
                    <h3>${covers2.descr}</h3>
                    </div>
            `); 
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".closgg").css("position","relative");
            $(".closgg").css("width","40px");
            $(".closgg").css("height","40px");
            $(".closgg").css("background","#EF1A3B");
            $(".closgg").css("cursor","context-menu");
            $(".closgg").css("font-size","40px");
            $(".closgg").css("left","25%");
            $(".cont22").css("visibility","visible");
            $(".infop h3").css("color","#000000");
            $(".closgg").on("click",function(){
                $(".cont22").remove();
              }); 
        }
        forNa = () =>{
            var covers2 = Object.create(this.covers);
            this.cov = new Games();
            this.table(this.covers2);
            covers2.title = this.cov.fornite.title;
            covers2.descr = this.cov.fornite.descr;
            covers2.cover = this.cov.fornite.cover; 
            $(".cont22").html(`
            <section class="ppan d-flex">
            <h2>${covers2.title}</h2><span class="closgg material-icons">highlight_off</span>
            </section>
                    <div class="infop">
                    <div class="img">
                    <img src="${covers2.cover}">
                    </div>
                    <h3>${covers2.descr}</h3>
                    </div>
            `); 
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".closgg").css("position","relative");
            $(".closgg").css("width","40px");
            $(".closgg").css("height","40px");
            $(".closgg").css("background","#EF1A3B");
            $(".closgg").css("cursor","context-menu");
            $(".closgg").css("font-size","40px");
            $(".closgg").css("left","57%");  
            $(".cont22").css("visibility","visible");
            $(".infop h3").css("color","#000000");
            $(".closgg").on("click",function(){
                $(".cont22").remove();
              }); 
        }
        callofWa = () =>{
            var covers2 = Object.create(this.covers);
            this.cov = new Games();
            this.table(this.covers2);
            covers2.title = this.cov.callofdutyw.title;
            covers2.descr = this.cov.callofdutyw.descr;
            covers2.cover = this.cov.callofdutyw.cover;
            $(".cont22").html(`
            <section class="ppan d-flex">
            <h2>${covers2.title}</h2><span class="closgg material-icons">highlight_off</span>
            </section>
                    <div class="infop">
                    <div class="img">
                    <img src="${covers2.cover}">
                    </div>
                    <h3>${covers2.descr}</h3>
                    </div>
            `);  
            $(".infop .img").css("margin","0px 20px 30px 20px"); 
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".closgg").css("position","relative");
            $(".closgg").css("width","40px");
            $(".closgg").css("height","40px");
            $(".closgg").css("background","#EF1A3B");
            $(".closgg").css("cursor","context-menu");
            $(".closgg").css("font-size","40px");
            $(".closgg").css("left","4%");
            $(".cont22").css("visibility","visible");
            $(".infop h3").css("color","#000000");
            $(".closgg").on("click",function(){
                $(".cont22").remove();
              });   
         }
         mineCra = () =>{
            var covers2 = Object.create(this.covers);
            this.cov = new Games();
            this.table(this.covers2);
            covers2.title = this.cov.minecraft.title;
            covers2.descr = this.cov.minecraft.descr;
            covers2.cover = this.cov.minecraft.cover; 
            $(".cont22").html(`
            <section class="ppan d-flex">
            <h2>${covers2.title}</h2><span class="closgg material-icons">highlight_off</span>
            </section>
                    <div class="infop">
                    <div class="img">
                    <img src="${covers2.cover}">
                    </div>
                    <h3>${covers2.descr}</h3>
                    </div>
            `);  
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".infop .img").css("margin","0px 20px 30px 20px");
            $(".closgg").css("position","relative");
            $(".closgg").css("width","40px");
            $(".closgg").css("height","40px");
            $(".closgg").css("background","#EF1A3B");
            $(".closgg").css("cursor","context-menu");
            $(".closgg").css("font-size","40px");
            $(".closgg").css("left","50%");
            $(".cont22").css("visibility","visible");
            $(".infop h3").css("color","#000000");
            $(".closgg").on("click",function(){
                $(".cont22").remove();
              }); 
         }
         table = () =>{
         $(".cont1").html($(".cont1").html() + `<div class="cont22"></div>`);
                     $(".cont22").css("position","absolute");
                     $(".cont22").css("visibility","hidden"); 
                     $(".cont22").css("top","1%");
                     $(".cont22").css("left","40%");
                     $(".cont22").css("width","60vh");
                     $(".cont22").css("height","60vh");
                     $(".cont22").css("background-color","#FFFFFF33");
                     $(".cont22").css("backdrop-filter","blur(6px)");
                     $(".cont22").css("overflow","scroll");
                     $(".cont23 h2").css("text-align","center"); 
                     $(".pann .clos").css("position","relative");   
                     new UI();
        } 
        clicki = () =>{
                $(".cont2").on("click",function(){
                    new UI;
                });  
        }
        clicki2 = () =>{
            $(".cont3").on("click",function(){
                 new UI;
            });
        }
        searchGame = () =>{
            let titl = document.querySelectorAll(".title");
            $(".menunav").html(`
             <div class="ssearch d-flex">
             <input type="text" id="search"><span class="serchi material-icons">search</span>
             </div>
            `);
            $("#search").css("height","23.5px");
            $("#search").css("width","300px");
            $("#search").css("border-radius","12px");
            $(".serchi").css("cursor","pointer");
            let val = 
            $(".serchi").on("click",function(){
            for(let i = 0; i<titl.length; i++){
               if($(title[i]).html() == $("#search").val()){
                   let sectionSerch = title[i].parentElement;
                   $(".zongame").html(sectionSerch.innerHTML);
                   $(".zongame").css("width","30%");
                   $(".zongame").css("margin-top","40px");
                   $(".zongame").css("margin-left","20%");
                   $(".img").css("margin","0px 20px 0px 20px");
                   $(".title").css("text-align","center");
                   window.history.pushState({id: 1},null,"?q=1234&u=beware");
               }
            }
            window.addEventListener("popstate",function(){
                window.location.href = "file:///C:/Users/Usuario/OneDrive/Documentos/Shopgame/index.html";
            })
        }); 
        }
       regisWidth = () =>{
           var result = parseInt($(this.tit[0]).css("width"));
           var result2 = parseInt($(this.conti[0]).css("width"));
           let total = result / result2;
           let totals = String(total);
           let totali = totals.substring(2,4);
           this.icons[0].style.left = totali+"%";
           result = parseInt($(this.tit[2]).css("width"));
           result2 = parseInt($(this.conti[2]).css("width"));
           total = result / result2;
           totals = String(total);
           totali = totals.substring(2,4);
           this.icons[2].style.left = totali+"%";
           result = parseInt($(this.tit[3]).css("width"));
           result2 = parseInt($(this.conti[3]).css("width"));
           total = result / result2;
           totals = String(total);
           totali = totals.substring(2,4);
           this.icons[3].style.left = totali+"%";
    }
    modIcons(){
        for(let i = 0; i<this.icons.length; i++){
        $(this.icons[i]).css("color","#333");
        }
    }
    setting = () =>{
       $(".menu").html(
          `<div class="sectionss"></div>
           <div class="pann d-flex">
           <h2>SETTINGS</h2>
           <div class="clos material-icons">highlight_off</div>
           </div>
           <div class="settin">
           <div class="d-flex">
           <p class="sett">Dark mode</p><span class="iconac material-icons" id="ico">toggle_off</span>
           </div>
           <div class="d-flex">
           <p class="sett">Close page</p><div class="radi"></div>
           </div>
           <div class="d-flex">
           <p class="sett">Letters color</p><span class="palle material-icons" id="ico">palette</span>
           </div>
           <div class="d-flex">
           <p class="sett">Show date</p><span class="date material-icons" id="ico">today</span>
           </div>
           </div>
          `);

          $(".pann").css("border-bottom","3px solid #111");
          $(".pann").css("height","40px");
          $(".pann h2").css("margin-left","40px");
          $(".pann h2").css("font-size","35px");
          $(".sett").css("color","#000");
          $(".sett").css("font-size","19px");
          $(".sett").css("margin-left","8px");
          $(".settin").css("margin-top","20px");
          $(".d-flex #ico").css("font-size","35px");
          $(".d-flex #ico").css("width","10px");
          $(".d-flex #ico").css("margin-left","15px");
          $(".d-flex .radi").css("width","25px");
          $(".d-flex .radi").css("height","25px");
          $(".d-flex .radi").css("margin-left","15px");
          $(".d-flex .radi").css("background","#000");
          $(".d-flex .radi").css("cursor","context-menu");
          $(".d-flex #ico").css("cursor","context-menu");
          $(".pann .clos").css("position","relative");
          $(".pann .clos").css("width","40px");
          $(".pann .clos").css("height","40px");
          $(".pann .clos").css("background","#EF1A3B");
          $(".pann .clos").css("cursor","context-menu");
          $(".pann .clos").css("font-size","40px");
          $(".pann .clos").css("left","33%");
          $(".pann .clos").on("click",this.closeSett);
          $(".d-flex .iconac").on("click",this.clickactive);
          $(".d-flex .radi").on("click",this.closepag);
          $(".d-flex .palle").on("click",this.colorLetter);
          $(".d-flex .date").on("click",this.getDate);
      }
      closeSett = () =>{
          $(".menu").html(this.history[0]);
          this.regisWidth();
          new UI();
          $(".palett").remove();
      }
      clickactive = () =>{
          let h2 = document.querySelector(".zongame h2");
          if(true){
          if($(".d-flex .iconac").html() == "toggle_off"){
              $(".d-flex .iconac").html("toggle_on");
              $(".zongame .card").css("background","#000");
              $(".zongame .card h3").css("color","#1ADF44");
              $(".zongame h2").css("color","#1ADF44");
              $(".zongame h2").css("padding-top","20px");
              $(".main .containp").css("background","#000");
              $(".zongame").css("border-color","#000");
          }
          else{
              $(".d-flex .iconac").html("toggle_off");
              $(".zongame .card").css("background","#FFF");
              $(".zongame .card h3").css("color","#000");
              $(".zongame h2").css("color","#000");
              $(".zongame .card h2").css("padding-top","0px");
              $(".main .containp").css("background","#FFF");
              $(".zongame").css("border-color","#D6D6D6");
          }
        }
      }
      closepag = () =>{
          window.history.back();
      }
      colorLetter = () =>{
          let size = 0;
          let colors = [
              "#1A33FC",
              "#F6D610",
              "#11BB11",
              "#DD3A00",
              "#700AF1",
              "#FBB949",
              "#000000",
              "#FFFFFF",
              "#999999",
              "#11DFF9",
              "#00FDCA"
          ];
          const nameColor = {
              blue: "#1A33FC",
              yellow: "#F6D610",
              green: "#11BB11",
              orange: "#DD3A00",
              purple: "#700AF1",
              coffe: " #FBB949",
              black: "#000000",
              white: "#FFFFFF",
              grey: "#999999",
              aqua: "#11DFF9",
              mar: "#00FDCA"
          };
          if($(".palett").length == 0){
          $(".zongame").html($(".zongame").html() + 
          `<div class='palett'>
          <div class='pann d-flex'>
          <h2 class="onc">PALLETTE</h2>
          </div>
          <div class='sectioncolo container row'>
          </div>
          </div>`);
          }
          else{
              $(".palett").remove();
          }
          $(".palette").ready(function(){
              for(let i =0; i<colors.length; i++){
                 for(const property in nameColor){
            $(".sectioncolo").html($(".sectioncolo").html() +
            `<section class='ang col-sm-16 col-md-6 col-lg-4' id="${property}"></section>`
            );
            $("#blue").on("click",function(){
                $("#blue").css("z-index","4");
                $("#blue").css("transition","scale(0,5)");
                $("#blue").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.blue}`);
                $("h3").css("color",`${nameColor.blue}`);
            });
            $("#yellow").on("click",function(){
                $("#yello").css("z-index","4");
                $("#yellow").css("transition","scale(0,5)");
                $("#yellow").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.yellow}`);
                $("h3").css("color",`${nameColor.yellow}`);
            }); 
            $("#green").on("click",function(){
                $("#green").css("z-index","4");
                $("#green").css("transition","scale(0,5)");
                $("#green").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.green}`);
                $("h3").css("color",`${nameColor.green}`);
            });  
            $("#orange").on("click",function(){
                $("#orange").css("z-index","4");
                $("#orange").css("transition","scale(0,5)");
                $("#orange").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.orange}`);
                $("h3").css("color",`${nameColor.orange}`);
            }); 
            $("#purple").on("click",function(){
                $("#purple").css("z-index","4");
                $("#purple").css("transition","scale(0,5)");
                $("#purple").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.purple}`);
                $("h3").css("color",`${nameColor.purple}`);
            }); 
            $("#coffe").on("click",function(){
                $("#coffe").css("z-index","4");
                $("#coffe").css("transition","scale(0,5)");
                $("#coffe").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.coffe}`);
                $("h3").css("color",`${nameColor.coffe}`);
            }); 
            $("#black").on("click",function(){
                $("#black").css("z-index","4");
                $("#black").css("transition","scale(0,5)");
                $("#black").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.black}`);
                $("h3").css("color",`${nameColor.black}`);
            }); 
            $("#white").on("click",function(){
                $("#white").css("z-index","4");
                $("#white").css("transition","scale(0,5)");
                $("#white").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.white}`);
                $("h3").css("color",`${nameColor.white}`);
            });
            $("#grey").on("click",function(){
                $("#grey").css("z-index","4");
                $("#grey").css("transition","scale(0,5)");
                $("#grey").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.grey}`);
                $("h3").css("color",`${nameColor.grey}`);
            });  
            $("#aqua").on("click",function(){
                $("#aqua").css("z-index","4");
                $("#aqua").css("transition","scale(0,5)");
                $("#aqua").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.aqua}`);
                $("h3").css("color",`${nameColor.aqua}`);
            }); 
            $("#mar").on("click",function(){
                $("#mar").css("z-index","4");
                $("#mar").css("transition","scale(0,5)");
                $("#mar").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.mar}`);
                $("h3").css("color",`${nameColor.mar}`);
            }); 
        }
            let ang = document.querySelectorAll(".ang");
            $(ang[i]).css({"background": `${colors[i]}`});
            }
            $(".sectioncolo").css("flex-wrap","wrap");
            $(".ang").css("width","40px");
            $(".ang").css("height","25px");
            $(".ang").css("padding","0px 0px 30px 10px");
            $(".ang").css("margin","8px 10px 0px 10px");
            $(".ang").css("opacity","1");
            });
            $(".sectioncolo").css("width","75%");
            $(".sectioncolo").addClass("palette");
            $(".palett").css("position","fixed");
            $(".palett").css("top","30%");
            $(".palett").css("left","45%");
            $(".palett").css("width","20%");
            $(".palett").css("height","70%");
            $(".palett").css("background","#DDD");
            $(".palett").css("opacity","0.900");
            $("[class=onc]").css("margin-left","30%");
            $(".pann").css("margin-bottom","20px"); 
        }
        getDate = () =>{
            let pri = this.history[0];
            if($(".tim").length == 0){
                $(".menu").html(`
                <div class="closetime"><span class="icontime material-icons d-flex">highlight_off</span></div>
                <div class="time container">
                <div class="display">
                <h3 class="tim"><h3>
                </div>
                </div> 
                `);
                }
                else{
                    $(".tim").remove();
                }
                $(".icontime").on("click",function(){
                    $(".menu").html(pri);
                    new UI();
                });
                $(".time").css("background","black");
                $(".time").css("width","50%");
                $(".time").css("height","8%");
                $(".time").css("border-radius","10%");
                $(".time").addClass("times");
                $(".display").css("position","relative");
                $(".display").css("top","40%");
                $(".display").css("width","100%");
                $(".display").css("height","30%");
                $(".display").css("background","red");
                $(".display").css("margin","0px 0px 0px 0px");
                $(".tim").addClass("tims");
                $(".tim").css("color","#FFF");
                $(".navp img").css("left","36%");
                $(".icontime").css("margin-left","90%");
                $(".icontime").css("width","35px");
                $(".icontime").css("height","35px");
                $(".icontime").css("background","#FF2000");
                $(".icontime").css("cursor","context-menu");
                $(".icontime").css("font-size","32px");
                $(".icontime").css("border-radius","23%");
                setInterval(function Timet(){
                    let datee = new Date();
                    $(".tim").html(datee.getHours() + ":" + datee.getMinutes() + ":" + datee.getSeconds());
                },1000);
        }
    sub = () =>{
        $(".menu").html(
            `<div class="sectionsu">
             <div class="pann2 d-flex">
             <h2>subscribe</h2>
             <div class="clos material-icons">highlight_off</div>
             </div> 
             <section class="money d-flex">
             <p>click to subscribe games</p><button class="join">join</button>
             </section>
             <section class="intro">
             <h4>Premium</h4>
             <ul>
             <li>discounts on all games</li>
             <li>try beta version games</li>
             <li>contribute to the gaming community</li>
             <li>get some paid stuff from any game</li>
             <li>get some paid stuff from any game</li>
             <li>modify any game</li>
             </ul>
             </section>
             </div>
            `
        );
        $(".pann2").css("border-bottom","3px solid #111");
        $(".pann2").css("height","40px");
        $(".pann2 h2").css("margin-left","40px");
        $(".pann2 h2").css("font-size","35px");
        $(".pann2 .clos").css("position","relative");
        $(".pann2 .clos").css("left","120px");
        $(".pann2 .clos").css("width","40px");
        $(".pann2 .clos").css("height","40px");
        $(".pann2 .clos").css("background","#EF1A3B");
        $(".pann2 .clos").css("border-radius","5px");
        $(".pann2 .clos").css("font-size","40px");
        $(".pann2 .clos").css("cursor","context-menu");
        $(".money").css("margin-top","10px");
        $(".money").css("margin-left","10px");
        $(".money p").css("font-size","30px");
        $(".money p").css("font-family","Stint Ultra Condensed,cursive");
        $(".intro").css("margin-top","59.5px");
        $(".intro").css("margin-left","10px");
        $(".intro h4").css("color","#FCC213");
        $(".pann2 .clos").on("click",this.closeSub);
        $(".money .join").on("click",this.Joining);
        this.history[1] = $(".menu").html();
    }
    closeSub = () =>{
        $(".menu").html(this.history[0]);
        this.regisWidth();
        new UI();
    }
    Joining = () =>{
        $(".menu").html(`
        <div class="joining">
        <div class="pannel d-flex">
        <h2 class="title">JOIN</h2>
        <span class="joinigc material-icons">highlight_off</span>
        </div>
        <div class="content">
        <div class="reti">
        <input type="text" id="nume" min="15">
        <div class="numbers row"><button class="submit"><span class="material-icons">schedule_send</span></button></div>
        </div>
        </div>
        </div>
        `);
        for(let i = 0; i<10; i++){
            $(".numbers").html($(".numbers").html() + 
            `<section id="but" class="${i} col-sm-12 col-md-6 col-lg-4">${i}</section>
            `
            );
        }
        let buut = document.querySelectorAll("#but");
        $(".pannel h2").css("margin-left","35%");
        $(".pannel h2").css("margin-bottom","0px");
        $(".pannel span").css("margin-left","32%");
        $(".pannel span").css("width","50px");
        $(".pannel span").css("height","50px");
        $(".pannel span").css("background","#FF0A00");
        $(".pannel span").css("border-radius","7%");
        $(".pannel span").css("font-size","50px");
        $(".pannel").css("border-bottom","3px solid #000");
        $(".reti").css("background","#BBB");
        $(".reti").css("margin-top","30px");
        $(".reti").css("width","40vh");
        $(".reti").css("height","50vh");
        $(".reti").css("padding-top","30px");
        $(".reti").css("padding-left","50px");
        $("#nume").css("width","245px");
        $(".numbers").css("width","180px");
        $(".numbers").css("margin-left","4vh");
        $(".submit").css("position","relative");
        $(".submit").css("top","20vh");
        $(".submit").css("background","#F9B11A");
        $(".submit").css("width","14vh");
        $(".submit").css("cursor","pointer");
        $(".pannel span").css("cursor","context-menu");
        for(let i = 0; i<10; i++){
            $(buut[i]).css("background","#FFF");
            $(buut[i]).css("width","30px");
            $(buut[i]).css("height","30px");
            $(buut[i]).css("border","3px solid #000");
            var size = 0;
            var txt = [];
            
            $("."+i).on("click",function(){    
               txt[0] = "$";
              if($("#nume").val().length == 0){
                    $("#nume").val(txt[0]);
                }
               $("#nume").val($("#nume").val() + $("."+i).html());
               if($("#nume").val()[1] == "0"){
                  $("#nume").val(txt[0]);
               } 
              size = size +1;
            });
            
        }
        $(".pannel span").on("click",this.closeJoinin);
        $(".submit").on("click",this.submitMoney);
    }
    closeJoinin = () =>{
        this.sub();
    }
    submitMoney = () =>{
        const valid = /^\$.[10-999999999]/g;
       if(valid.test($("#nume").val())){
        let conf = confirm("are you sure you want to transfer "+$("#nume").val());
        $("#nume").val(null);
        if(conf == true){
            alert("¡your consignment has been successful!");
        }
        else{
            console.log("€€");
        }
       }
       else{
           alert("the consignment must be a minimum of $10");
       }
    }
    conta = () =>{
        $(".menu").html(
          `<div class="sectioncontac">
           <div class="pann3 d-flex">
           <h2>Contact</h2><div class="clos material-icons">highlight_off</div>
           </div>
           <section class="ics">
           <section class="face d-flex" id="ico">
           <span class="material-icons">facebook</span><a id="face">FACEBOOK</a>
           </section>
           <section class="cel d-flex" id="ico">
           <span class="material-icons">smartphone</span><a id="cel">CEl</a>
           </section>
           <section class="insta d-flex" id="ico">
           <img src="img/instagram.png"><a id="insta">instagram</a>
           </section>
           <section class="gmail d-flex" id="ico">
           <img src="img/gmail.png"><a id="gmail">gmail</a>
           </section>
           </section>
           </div>
          `
        );
        $(".pann3").css("border-bottom","3px solid #111");
        $(".pann3").css("height","40px");
        $(".pann3").css("margin-bottom","20px");
        $(".pann3 h2").css("margin-left","40px");
        $(".pann3 h2").css("font-size","35px");
        $(".pann3 .clos").css("position","relative");
        $(".pann3 .clos").css("left","145px");
        $(".pann3 .clos").css("width","40px");
        $(".pann3 .clos").css("height","40px");
        $(".pann3 .clos").css("background","#EF1A3B");
        $(".pann3 .clos").css("border-radius","5px");
        $(".pann3 .clos").css("font-size","40px");
        $(".pann3 .clos").css("cursor","context-menu");
        $(".insta img").css("width","30.5px");
        $(".insta img").css("height","30.5px");
        $(".gmail img").css("width","30.5px");
        $(".gmail img").css("height","30.5px");
        $(".insta img").css("margin-top","0px");
        $(".gmail img").css("margin-top","0px");
        $(".ics").css("margin-top","35px");
        $(".ics #ico").css("margin-bottom","25px");
        $("#face").attr("href","https://www.facebook.com/harold.castano.54/");
        $("#face").html("HAROLD SKRT");
        $("#cel").attr("href","https://web.whatsapp.com/");
        $("#cel").html("+573006397804");
        $("#insta").attr("href","https://www.instagram.com/?hl=es-la");
        $("#insta").html("har_alvarez16");
        $("#gmail").attr("href","https://mail.google.com/mail/u/0/?pli=1#inbox");
        $("#gmail").html("haroldc2005@gmail.com");
        $(".pann3 .clos").on("click",this.closeCon);
    }
    closeCon = () =>{
        $(".menu").html(this.history[0]);
        new UI();
    }
    mapp = () =>{
       $(".menu").html(
         `<div class="sectionapp">
          <div class="pann4 d-flex">
          <h2>More Apps</h2><div class="clos material-icons">highlight_off</div>
          </div>
          <section class="card">
          <h2>Dcoder</h2>
          <div class="imgapp">
          <img src="https://img.utdstc.com/icon/ba9/817/ba9817e08cd922f22abf927c9f6ef3726994d5cfef4bc5db94218c2f644e77e6:200">
          </div>
          <div class="info">
          <h3>web or mobile application developed to program and create software systems<h3>
          </div>
          </section>
          </div>
         `
       );
       $(".pann4").css("border-bottom","3px solid #111");
       $(".pann4").css("height","40px");
       $(".pann4").css("margin-bottom","20px");
       $(".pann4 h2").css("margin-left","40px");
       $(".pann4 h2").css("font-size","35px");
       $(".pann4 .clos").css("position","relative");
       $(".pann4 .clos").css("left","97px");
       $(".pann4 .clos").css("width","40px");
       $(".pann4 .clos").css("height","40px");
       $(".pann4 .clos").css("background","#EF1A3B");
       $(".pann4 .clos").css("border-radius","5px");
       $(".pann4 .clos").css("font-size","40px");
       $(".pann4 .clos").css("cursor","context-menu");
       $(".imgapp").css("width: 100%","!important");
       $(".imgapp img").css("width: 100%","!important");
       $(".imgapp img").css("margin-left","25%");
       $(".imgapp img").css("margin-top","0px");
       $(".sectionapp .card").css("width","100%");
       $(".info h3").css("margin-left","10px");
       $(".pann4 .clos").on("click",this.closeAPP);
    }
    closeAPP = () =>{
        $(".menu").html(this.history[0]);
        new UI();
    }
   }
   let obj = new UI;
   obj.regisWidth();
   obj.clicki();
   obj.clicki2();
   $(".btn").on("click",activeMen);
   function activeMen(){
       var menu = document.querySelector(".menu");
       if($(".menu").css("visibility") == "hidden"){ 
           menu.classList.toggle("active");
           obj.regisWidth();
           obj.modIcons();
        }
        else{
            menu.classList.toggle("active");
            $(".palett").remove();
        }    
   }
} 
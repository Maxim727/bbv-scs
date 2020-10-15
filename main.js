// Red color white
// Grey font #313330

/////////////////////////////////
/*Right panel canvas*/
/////////////////////////////////

// $(function(){
//   $.rect({ x: 823, y: 0, width: 500, height: 900, fill:'#262825' }).addTo('svg');


// })


var numberAndwindows = [
{
  windows: '10',
  number: '0001',
  isNext: true,
  id: '1'
},
{
  windows: '16',
  number: '0002',
  isNext: false,
  id: '2'
},
{
  windows: '24',
  number: '0003',
  isNext: false,
  id: '3'
},
{
  windows: '26',
  number: '0004',
  isNext: false,
  id: '4'
},
{
  windows: '42',
  number: '0005',
  isNext: false,
  id: '5'
},
{
  windows: '62',
  number: '0006',
  isNext: false,
  id: '6'
},
{
  windows: '92',
  number: '0007',
  isNext: false,
  id: '7'
},
{
  windows: '12',
  number: '0008',
  isNext: false,
  id: '8'
},
{
  windows: '22',
  number: '0009',
  isNext: false,
  id: '9'
},
{
  windows: '32',
  number: '0010',
  isNext: false,
  id: '10'
},
];

/////////////////////////////////
/*Commercial video*/
/////////////////////////////////

// $(function(){  
//   $('svg').add( 
//     $.video({
//       href: 'media/video-sample.mov',
//       id: 'media2',
//       repeatCount: 'indefinite',
//       left: '3px',
//       top: '10px',
//       width: '820px',
//       height: '100%',
//     }) 
//   ); 
// });

/////////////////////////////////
/*Icon of CSC*/
/////////////////////////////////

// $(function(){  
//   $('svg').add( 
//     $.image({
//       href: 'media/logo.png',
//       layerFit: 'both',
//       width: '40px',
//       height: '40px',
//       top: '20px',
//       left: '980px'
//     }) 
//   ); 
// });

// /////////////////////////////////
// /*Current time*/
// /////////////////////////////////

// function showHHMM() {
//   var now = new Date();
//   var time = "".concat(now.getHours(), ":").concat(now.getMinutes(), " ");
//   $('#time').text( time );
// }
 
// $(function(){ 
//   $('svg').add( 
//     $.textArea( { top: '10px', height: '50px', left: '880px' , fontSize: '30px', id: 'time', fill: 'white'} )
//   );
//   $.setInterval( showHHMM, 1000 );
// });

// function showDate(){
//   var now = new Date();
//   var date = "".concat(now.getDate(), ".").concat(now.getMonth(), ".").concat(now.getFullYear());
//   $('#date').text(date);
// }

// $(function(){ 
//   $('svg').add( 
//     $.textArea( { top: '10px', height: '50px', left: '1100px' , fontSize: '30px', id: 'date', fill: '#1bbc1c'} )
//   );
//   $.setInterval( showDate, 1000 );
// });

// /////////////////////////////////
// /*Names and green undrelines*/
// /////////////////////////////////

// $(function(){ 
//   $('svg').add( 
//     $.textArea({ id: 'kaz',  height: '100px', top: '40px', left: '825px', fontSize: '40px', fill: '#1bbc1c'})
//      .text("НӨМІР      ТЕРЕЗЕ"),
//      $.line({ x1: 800, y1: 900, x2: 900, y2: 1000, stroke: '#1bbc1c'})
//   );
// });

// $(function(){
//   $('svg').add(
//     $.line({ x1: 850, y1: 125, x2: 1035, y2: 125, stroke: '#1bbc1c', strokeWidth: 2
// }).addTo('svg')
//     )
// })

// $(function(){
//   $('svg').add(
//     $.line({ x1: 1080, y1: 125, x2: 1260, y2: 125, stroke: '#1bbc1c', strokeWidth: 2
// }).addTo('svg')
//     )
// })

// $(function(){ 
//   $('svg').add( 
//     $.textArea({ id: 'rus',  height: '200px', top: '40px', left: '811px', fontSize: '40px', fill: '#1bbc1c'})
//      .text("НОМЕР       ОКНО")
//   );
// });

// $(function(){
//   $('svg').add(
//     $.line({ x1: 850, y1: 175, x2: 1260, y2: 175, stroke: '#1bbc1c', strokeWidth: 3
// }).addTo('svg')
//     )
// })

// setInterval(function(){ addElementToSchedule();}, 2500);



function showHHMM() {
  var now = new Date();
  var time = "".concat(now.getHours(), ":").concat(now.getMinutes(), " ");
  $('#time').text( time );
}
 
$(function(){ 
  $('svg').add( 
    $.textArea( { top: '10px', height: '50px', left: '880px' , fontSize: '30px', id: 'time', fill: 'white'} )
  );
  $.setInterval( showHHMM, 1000 );
});

function showDate(){
  var now = new Date();
  var date = "".concat(now.getDate(), ".").concat(now.getMonth(), ".").concat(now.getFullYear());
  $('#date').text(date);
}

$(function(){ 
  $('svg').add( 
    $.textArea( { top: '10px', height: '50px', left: '1100px' , fontSize: '30px', id: 'date', fill: '#1bbc1c'} )
  );
  $.setInterval( showDate, 1000 );
});





var numberAndWindowArr = [];

function Initiate(){
  setInterval(function(){
  if (numberAndwindows.length > 0){
    // alert('Checkoint 0')
    var number = numberAndwindows[0].number;
    var windows = numberAndwindows[0].windows;
    // alert(numberAndwindows[0].windows + ' ' +numberAndwindows[0].number)
    numberAndWindowArr.unshift(numberAndwindows[0])
    if (numberAndWindowArr.length > 5){
      numberAndWindowArr.length = 5;
    }
    addElementToSchedule(number, windows, "numbers_group_left");
    numberAndwindows.shift()
  } 
}, 2500);

  var data_custom_slides = createScoreBoardBlock();
  $.slideshow({
    id:"slides",
    begin:'0s',
    data: data_custom_slides,
    defaultSlideDur: 360,
    top:50,
    left:0,
    width:575,
    height:1080,
    repeatDur: 'indefinite',
    defaultTransition: $.fade({ dur: '0.6s', color: 'white' }),
    renderToSVG: function( index ){
      return $.g({dur: this.dur}).add([
        this.object
      ]);
    }
  }).addTo('svg');
}

Initiate();

$(function(){  
  $('svg').add( 
    $.image({
      href: 'media/logo.png',
      layerFit: 'both',
      width: '40px',
      height: '40px',
      top: '20px',
      left: '980px'
    }) 
  ); 
});

$(function(){  
  $('svg').add( 
    $.video({
      href: 'media/video-sample.mov',
      id: 'media2',
      repeatCount: 'indefinite',
      left: '3px',
      top: '10px',
      width: '820px',
      height: '100%',
    }) 
  ); 
});

function createScoreBoardBlock() {
    var bg = $.rect({x: 823, y: -40, width: 500, height: 1080, fill:'#262825' });
    var bg_text = $.rect({fill: "#262825",  x: 823, y: 52, width: 575, height: 120});
    var kaz = $.textArea({ id: 'kaz',  height: '50px', top: '40px', left: '825px', fontSize: '40px', fill: '#1bbc1c'}).text("НӨМІР      ТЕРЕЗЕ");
    var lie =  $.line({ x1: 800, y1: 900, x2: 900, y2: 1000, stroke: '#1bbc1c'});
    var rus =  $.textArea({ id: 'rus',  height: '120px', top: '40px', left: '811px', fontSize: '40px', fill: '#1bbc1c'})  .text("НОМЕР       ОКНО")
    var numbers_group_left = $.g({id:'numbers_group_left', width:540, left:0});
    var numbers_group_right = $.g({id:'numbers_group_right', width:540, left:540});
    $.g({id:'scoreboard_group', left:0, top:40}).add([bg ,numbers_group_left, numbers_group_right, bg_text, rus, kaz]).addTo("svg");
}


function addElementToSchedule(number, table, tableid){
  // alert(tableid)
    $.g({top: 50, left: 800, width: 477}).add([
        $.rect({fill: "#333333", x: 35, y: 4, width: 415, height: 80}),
        $.textArea({
            textAlign: 'left',
            width: 515,
            height: 120,
            top: -20,
            left: 95,
            fill:"#ff4545"
        }).text($.tspan(number, {
            "fontFamily": "Roboto",
            "fontWeight": 'bold',
            "fontSize": "50px"
        })),
        $.textArea({
            textAlign: 'center',
            width: 105,
            height: 100,
            top: -10,
            left: 315,
            fill:"#ff4545"
        }).text($.tspan(table, {
            "fontFamily": "Roboto",
            "fontWeight": 'bold',
            "fontSize": "50px"
        })),
      
    ]).animateMotion( {
        begin:0.2, dur: 0.3,from:'0, 50', to: '0, 115', fill: 'freeze'
    } ).addTo("#"+tableid);
    moveElementsInTable("numbers_group_left")
}

function moveElementsInTable(tableid){
    var el_0 = $('#'+tableid).children('g')[0];
    var el_1 = $('#'+tableid).children('g')[1];
    var el_2 = $('#'+tableid).children('g')[2];
    var el_3 = $('#'+tableid).children('g')[3];
    var el_4 = $('#'+tableid).children('g')[4];
    var el_5 = $('#'+tableid).children('g')[5];
    var el_6 = $('#'+tableid).children('g')[6];
    var child_len = $('#'+tableid).children('g').length;
    var begin = document.documentElement.getCurrentTime();
    var textarea_0;
    var textarea_1;
    if(child_len ==  2){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_0).children('textarea')[0];
        textarea_1= $(el_0).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
    }
    if(child_len ==  3){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_1).children('textarea')[0];
        textarea_1= $(el_1).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');

    }
    if(child_len ==  4){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,375',
            to: '0,505',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_2, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_2).children('textarea')[0];
        textarea_1= $(el_2).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
    }
    if(child_len ==  5){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,505',
            to: '0,635',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,375',
            to: '0,505',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_2, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_3, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_3).children('textarea')[0];
        textarea_1= $(el_3).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
    }
    if(child_len ==  6){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,635',
            to: '0,765',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,505',
            to: '0,635',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_2, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,375',
            to: '0,505',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_3, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_4, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_4).children('textarea')[0];
        textarea_1= $(el_4).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
    }
    if(child_len ==  7){
        $.svgAnimation( el_0, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,765',
            to: '0,895',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,635',
            to: '0,765',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_2, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,505',
            to: '0,635',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_3, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,375',
            to: '0,505',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_4, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_5, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_5).children('textarea')[0];
        textarea_1= $(el_5).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
    }
    if(child_len ==  8){
        $.svgAnimation( el_1, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,765',
            to: '0,895',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_2, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,635',
            to: '0,765',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_3, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,505',
            to: '0,635',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_4, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,375',
            to: '0,505',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_5, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,245',
            to: '0,375',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        $.svgAnimation( el_6, 'animateMotion', {
            attributeName: 'animateMotion',
            from: '0,115',
            to: '0,245',
            begin: begin,
            dur: 0.5,
            fill: 'freeze'
        });
        textarea_0= $(el_6).children('textarea')[0];
        textarea_1= $(el_6).children('textarea')[1];
        $(textarea_0).attr('fill','#f1f1f1');
        $(textarea_1).attr('fill','#f1f1f1');
        $(el_0).remove();
      };
    }
  
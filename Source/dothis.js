/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon btomich@csu.fullerton.edu

   File Description: This javascript file contains all functions
	1. Draw Grid
*/
var xValues = [];
var yValues =[];
var zValues =[];
// ======  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  )
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix/10, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy/10, 0, iy + 10 );}
    }
    rctx.restore( );
}

//Determines the direction for North, East, South, or West
//Displays white triangle


//Fills in Square of current Position
//Coordiante points are displayed
function fillSquare(square, xaxis,yaxis,zaxis){
	var PrintThis = '(' + xaxis/10 + ','+ yaxis/10 + ',' + zaxis/10 + ')';
	square.beginPath();
	square.rect(xaxis, yaxis, 10, 10);
	square.fillStyle = 'Red';
	square.fillText( PrintThis, xaxis+10, yaxis+10 );
	square.fill();
}

function passPoint(context, xaxis, yaxis, zaxis){
	var i=xaxis/10;
	var j=yaxis/10;
	var k=zaxis/10;
    var counter=0;
	var temp
	//xaxis loop
	for(;i>=0;){
		//yaxis looop
		for(;j<=8;){
			//zaxis loop
			for(;k<=7;){
				temp=i+j+k;
				//Sum Rule
				if(temp == 15){
					//Zero-Max Rule
					if(i==0 || j==0 || k==0 || i==15 || j==8 || k==7){
						//Simple Same RUle
						/*if(i==xValues[counter-1] && j!=yValues[counter-1] && k!=zValues[counter-1]){
								xValues[counter]=i;
								yValues[counter]=j;
								zValues[counter]=k;
								counter++;

						}
						else if(j==yValues[counter-1] && i!=xValues[counter-1] && k!=zValues[counter-1]){
							xValues[counter]=i;
							yValues[counter]=j;
							zValues[counter]=k;
							counter++;
						}
						else if(k==zValues[counter-1] && i!=xValues[counter-1] && j!=yValues[counter-1]){
							xValues[counter]=i;
							yValues[counter]=j;
							zValues[counter]=k;
							counter++;
						}
						else if(counter==0){
							xValues[counter]=i;
							yValues[counter]=j;
							zValues[counter]=k;
							counter++;
						}*/
						xValues[counter]=i;
							yValues[counter]=j;
							zValues[counter]=k;
							counter++;

					}

				}
				k++
			}
			if(k == 8){
				k=0;
			}
			j++
		}
		if(j==9){
			j=0;
		}
		i--;
	}
}


function print(square)
{
	//var count=0
	for (var count = 0; count < 50; ++count)
  {
    (function (count)
    {
      setTimeout(function()
      {
		if(count>0 && xValues[count]!=null){
			var temp4=xValues[count-1]*10;
			var temp5=yValues[count-1]*10;
			var PrintThis = '(' + xValues[count-1] + ','+ yValues[count-1] + ',' + zValues[count-1] + ')';
			square.beginPath();
			square.rect(temp4, temp5, 10, 10);
			square.fillStyle = 'Grey';
			square.fillText( PrintThis, temp4+10, temp5+10 );
			square.fill();
		}
    		var temp1=xValues[count]*10;
    		var temp2=yValues[count]*10;
    		var temp3=zValues[count]*10;
    		var PrintThis = '(' + xValues[count] + ','+ yValues[count] + ',' + zValues[count] + ')';
    		square.beginPath();
    		square.rect(temp1, temp2, 10, 10);
    		square.fillStyle = 'Red';
    		square.fillText( PrintThis, temp1+10, temp2+10 );
    		square.fill();
	      	if(count>0){
			DrawLine(context, xValues[count-1],yValues[count-1],xValues[count],yValues[count]);
		}

      }, 100*count);
    })(count);
  }

}

function DrawLine(square, x1,y1,x2,y2)
{
	square.beginPath();
	square.moveTo(x1*10+2, y1*10+2);
	square.lineTo(x2*10+2, y2*10+2);
	square.strokeStyle = "aqua";
	square.stroke();
}

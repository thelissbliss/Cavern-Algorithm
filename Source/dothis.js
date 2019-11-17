/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon Tomich btomich@csu.fullerton.edu

   File Description: This javascript file contains all functions
	1. Draw Grid: Draws/Displays grid
	2. Passpoint: Finds next node that meets all requirements. The requirements followed include
	   verification of residue distance, the sum rule, zer-max rule, single same rule
	3. Draw Line: Displays edge(line) from current node<-> previous node
	4. Print: Prints out all values of the node to the grid
  		  We have inserted a delay before the next node is displayed
   		  The draw line function is called to display the edge from current node<-> prvious node
	5. Test Residue: Tests residue distance of current node. 
			 Returns true if the node's current residue is not less then previous
	6. Print Residue: Stores Residue values of all nodes that meet the requirements
	
	
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
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix/40, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy/20, 0, iy,10 );}
    }
    rctx.restore( );
}

function passPoint(context, xaxis, yaxis, zaxis){
	var i=xaxis/10;
	var j=yaxis/10;
	var k=zaxis/10;
    var counter=0;
	var temp;

  //tests residue distance
  var residueTemp = 31;
	//xaxis loop
	for(;i>=0;){
		//yaxis looop
		for(;j<=8;){
			//zaxis loop
			for(;k<=7;){
				temp=i+j+k;
				//Sum Rule
				if(temp == 15)
        {
					//Zero-Max Rule
					if(i==0 || j==0 || k==0 || i==15 || j==8 || k==7)
          {
						//Single Same Rule
						if(i==xValues[counter-1] && j!=yValues[counter-1] && k!=zValues[counter-1])
						    {
						      console.log("testing residue 1")
						      if(testResidue(i,j,k,residueTemp))
						      {
									console.log("passed residue 1")
									xValues[counter]=i;
									yValues[counter]=j;
									zValues[counter]=k;
									residueTemp = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
									counter++;
						      }

						}
						else if(j==yValues[counter-1] && i!=xValues[counter-1] && k!=zValues[counter-1])
						    {
						      console.log("testing residue 2")
						      if(testResidue(i,j,k,residueTemp))
						      {
									console.log("passed residue 2")
									xValues[counter]=i;
									yValues[counter]=j;
									zValues[counter]=k;
									residueTemp = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
									counter++;
						      }
						}
						else if(k==zValues[counter-1] && i!=xValues[counter-1] && j!=yValues[counter-1])
						    {
						      console.log("testing residue 3")
						      if(testResidue(i,j,k,residueTemp))
						      {
								console.log("passed residue 3")
								xValues[counter]=i;
								yValues[counter]=j;
								zValues[counter]=k;
								residueTemp = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
								counter++;
						      }
						}
						else if(counter==0)
						    {
						      console.log("testing residue 4")
						      if(testResidue(i,j,k,residueTemp))
						      {
									console.log("passed residue 4")
									xValues[counter]=i;
									yValues[counter]=j;
									zValues[counter]=k;
									residueTemp = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
									console.log("residue distance is " + residueTemp)
									counter++;
						      }
						}


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

/* Prints out all values of the node to the grid
   We have inserted a delay before the next node is displayed
   The draw line function is called to display the edge from current node<-> prvious node
   */
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
				square.rect(temp4*4.5-110, temp5*3, 8, 8);
				square.fillStyle = 'white';
				square.fillText( PrintThis, temp4*4.5-110, temp5*3+20 );
				square.fill();
			}
			var temp1=xValues[count]*10;
			var temp2=yValues[count]*10;
			var temp3=zValues[count]*10;
			var PrintThis = '(' + xValues[count] + ','+ yValues[count] + ',' + zValues[count] + ')';
			square.beginPath();
			square.rect(temp1*4.5-110, temp2*3, 8,8);
			square.fillStyle = 'Red';
				square.fillText( PrintThis, temp1*4.5-110, temp2*3+20 );
			square.fill();
			if(count>0){
				DrawLine(context, xValues[count-1],yValues[count-1],xValues[count],yValues[count]);
			}

	  }, 100*count);
    	})(count);
  }

}

//Displays edge(line) from current node<-> previous node
function DrawLine(square, x1,y1,x2,y2)
{
	square.beginPath();
	square.moveTo(x1*45-105, y1*30+2);
	square.lineTo(x2*45-105, y2*30+2);
	square.strokeStyle = "aqua";
	square.stroke();
}

//Stores Residue values of all nodes that meet the requirements
function printResidue()
{
  var newArray = [];

  var len = xValues.length

  for(i = 0; i < len; ++i)
  {
    newArray[i] = Math.abs(xValues[i] - yValues[i]) + Math.abs(yValues[i] - zValues[i]) + Math.abs(zValues[i] - xValues[i])
    console.log("Array at " + i + " " + newArray[i]);
  }
}

//Tests residue distance of current node. 
//Returns true if the node's current residue is not less then previous
function testResidue(i,j,k, previous)
{
  var test = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i)

  if(test < previous)
  {
    console.log("this is true")
    return true
  }
  else
  {
    console.log("this is false")
    return false
  }
}

/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu
   Brandon 

   File Description: This javascript file contains all functions
	1. Draw Grid
*/

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

Array.from( document.getElementsByTagName( 'a' ) ).forEach( e => {
    if( window.location.href.indexOf("localhost") == -1 ) return
    var href = e.getAttribute('href'), uri = href.split('#')[0] + '.html'
    if( href.split('#').length > 1 ) uri += '#' + href.split('#')[ 1 ]
    e.setAttribute( 'href', uri  ) 
})

var blocks = document.getElementsByClassName( 'block' )
var subblocks = document.getElementsByClassName( 'subblock' )
var render = function( time ){
    requestAnimationFrame ( render )
    var current
    var actuators = []
    var maxy = -10000
    for( var i = 0 ; i < blocks.length ; i++ ){
        actuators.push( blocks[ i ] )
    }

    for( var i = 0 ; i < subblocks.length ; i++ ){
        actuators.push( subblocks[ i ] )
    }
    current = actuators[ 0 ]
    for( var i = 0 ; i < actuators.length ; i++ ){
        if( actuators[ i ].getBoundingClientRect().y < 0 && actuators[ i ].getBoundingClientRect().y > maxy ) {
            current = actuators[ i ]
            maxy = actuators[ i ].getBoundingClientRect().y
        }
    }
    // console.log( current )
    document.getElementById( 'header' ).style.backgroundColor = current.dataset.bg || '#ff00ff'
    // console.log( current.dataset.bg )
}
render()
$.widget("tk.dotify", {
    _options: {
        delimiter: 'word'   
    }
    , _create: function() {
        var self = this;
        
        self.el = $( self.element );
        self.el.blast({ delimiter: self.options.delimiter });
        
        self.blasts = self.el.find( '.blast' );

        self.idx = self.__binarySearch( self.blasts, self.el.height() );
        
        if ( self.idx === 0 ) return;
        if ( self.idx === self.blasts.length ) return;
        
        self.__findAndSwapDots();
    }
    , __binarySearch: function( ar, find ) {
        var self = this;
        
        var low = 0
            , high = ar.length - 1
            , i
            , comparison;
        while ( low <= high ) {
             i = Math.floor( ( low + high ) / 2 );
             var top = $( ar[ i ] ).position().top - self.el.position().top;
             if ( top < find ) {
                 low = i + 1;
                 continue;
             }
             if ( top > find ) {
                 high = i - 1;
                 continue;
             }
             return i;
        }
        return low;
    }
    , __findAndSwapDots: function() {
        var self = this
            , curr = $( self.blasts[ self.idx - 1 ] )
            , dots = $( '<span/>' )
            , currWidth = curr.width()
            , currTop = curr.position().top  - self.el.position().top
            , currHeight = curr.height()
            , selfHeight = self.el.height();

        if ( currHeight + currTop > selfHeight ) {
            var diff = (currHeight + currTop ) - selfHeight;
            self.el.css('height', selfHeight+diff);
        }
        
        for ( var i = self.blasts.length; i >= self.idx; i-- ) {
            var blast = $( self.blasts[ i ] );
            blast.hide();
        }
        
        dots
            .attr('class', 'blast-dots' )
            .css({
                'width': currWidth+'px'
                , 'overflow': 'hidden'
            })
            .text('...');
        if ( curr.position().left + currWidth + dots.width() <= self.el.width() ) {
            curr.append( dots );
        } else {
            curr.before( dots );
            curr.hide();
        }
    }
});

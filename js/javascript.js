window.addEvent('domready', function() {
    $$('.toggleSection').each(function(item) {
        var thisSlider = new Fx.Slide(item.getElement('.toggleInfo'), {
            duration: 800
        });
        if(!item.getElement('#toggleTrick')){
        	thisSlider.hide();
        }
        
        item.getElement('.toggler').addEvent('click', function() {
            thisSlider.toggle();
        });        
    });    
});


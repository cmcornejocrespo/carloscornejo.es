/**
 * @author Carlos M.
 * snippet of code modified from original's mootools demos
 */
window.addEvent('domready', function() {

	$$('.toggleSection').each(function(el){
	    var slidetrigger = el.getElements('.toggler');
	    var slidebody = el.getElement('.toggleInfo');
	    if(slidebody!=null && slidetrigger.length>0){
	        var slidewrapper = new Element('div').wraps(slidebody);
	        var linkClass = (el.hasClass('expanded') ? 'expanded' : 'collapsed');
	        var slideTween = new Fx.Tween(slidewrapper, {
	            duration: 'long',
	            transition: 'bounce:out',
	            link: 'cancel',
	            onComplete: function(){if(linkClass=='expanded'){slidewrapper.erase('style');}}
	        });
	        el.addClass(linkClass);
	        slidetrigger.setStyle('cursor', 'pointer');
	        slidetrigger.addEvent('click', function(e){
	            slidewrapper.get('tween').removeEvents('complete');
	            slidewrapper.setStyle('overflow', 'hidden');
	            el.removeClass(linkClass);
	            if(linkClass=='expanded'){
	                linkClass = 'collapsed';
	                slideTween.start('height', 0);
	            } else {
	                linkClass = 'expanded';
	                slideTween.start('height', slidebody.getSize().y);
	            }
	            el.addClass(linkClass);
	        });
	        if(linkClass=='collapsed'){slidewrapper.setStyles({'height': '0', 'overflow':'hidden'});}
	    }
	});
	
	$$('.toggleSectionInner').each(function(el){
	    var slidetrigger = el.getElements('.togglerInner');
	    var slidebody = el.getElement('.toggleInfoInner');
	    if(slidebody!=null && slidetrigger.length>0){
	        var slidewrapper = new Element('div').wraps(slidebody);
	        var linkClass = (el.hasClass('expanded') ? 'expanded' : 'collapsed');
	        var slideTween = new Fx.Tween(slidewrapper, {
	            duration: 'long',
	            transition: 'bounce:out',
	            link: 'cancel',
	            onComplete: function(){if(linkClass=='expanded'){slidewrapper.erase('style');}}
	        });
	        el.addClass(linkClass);
	        slidetrigger.setStyle('cursor', 'pointer');
	        slidetrigger.addEvent('click', function(e){
	            slidewrapper.get('tween').removeEvents('complete');
	            slidewrapper.setStyle('overflow', 'hidden');
	            el.removeClass(linkClass);
	            if(linkClass=='expanded'){
	                linkClass = 'collapsed';
	                slideTween.start('height', 0);
	            } else {
	                linkClass = 'expanded';
	                slideTween.start('height', slidebody.getSize().y);
	            }
	            el.addClass(linkClass);
	        });
	        if(linkClass=='collapsed'){slidewrapper.setStyles({'height': '0', 'overflow':'hidden'});}
	    }
	});
});
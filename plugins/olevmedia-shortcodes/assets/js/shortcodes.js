var omShortcodes = {
	
	init: function(modules) {
		if(typeof(modules) != 'undefined') {
			for(var i = 0; i < modules.length; i++) {
				if(typeof(this.modules[modules[i]]) != 'undefined')
					this.modules[modules[i]].init();
			}
		}
		
	},
	
	modules: { }
};

omShortcodes.modules.buttons = {
	init: function() {
		jQuery('.omsc-button.omsc-custom-hover').each(function(){
			jQuery(this).data('def-bg-color',jQuery(this).css('background-color'));
			jQuery(this).data('def-text-color',jQuery(this).css('color'));
			jQuery(this).data('def-border-color',jQuery(this).css('border-top-color'));
		}).hover(function(){
			var color;

			color=jQuery(this).data('hover-bg-color');
			if(color)
				jQuery(this).css('background-color',color);

			color=jQuery(this).data('hover-text-color');
			if(color)
				jQuery(this).css('color',color);

			color=jQuery(this).data('hover-border-color');
			if(color)
				jQuery(this).css('border-color',color);
				
		}, function(){
			jQuery(this).css('background-color',jQuery(this).data('def-bg-color'));
			jQuery(this).css('border-color',jQuery(this).data('def-border-color'));
			jQuery(this).css('color',jQuery(this).data('def-text-color'));
		});
		
	}
}

omShortcodes.modules.tooltips = {
	init: function() {
		
		jQuery('.omsc-add-tooltip').each(function(){
			var text=jQuery(this).data('tooltip');
			if(typeof(text) == 'undefined')
				return;
				
			jQuery(this).mouseenter(function(){
				
				var $tt=jQuery(this).data('omsc-tooltip');
				if($tt) {
					$tt.stop();
				} else {
					var pos=jQuery(this).offset();
					$tt=jQuery('<div class="omsc-tooltip"><div class="omsc-tooltip-inner">'+text+'</div></div>');
					jQuery(this).data('omsc-tooltip', $tt);
					$tt.appendTo('body');
					$tt.css('left',pos.left + Math.round(jQuery(this).outerWidth()/2));
					$tt.css('top',pos.top - $tt.outerHeight());
				}
				$tt.show();
				$tt.animate({opacity:1, marginTop: '-13px'}, 200);
			});
	
			jQuery(this).mouseleave(function(){
				var $this=jQuery(this);
				var $tt=$this.data('omsc-tooltip');
				if($tt) {
					$tt.stop().animate({opacity:0, marginTop: '-22px'}, 200, function(){
						jQuery(this).remove();
						$this.data('omsc-tooltip',false);
					});
				}
			});
	
		});

	}
}

omShortcodes.modules.toggle = {
	init: function() {

		jQuery('.omsc-accordion .omsc-toggle').addClass('omsc-in-accordion').find('.omsc-toggle-title').click(function(){
			
			var $toggle=jQuery(this).parent();
			
			if($toggle.hasClass('omsc-expanded')) {
				$toggle.removeClass('omsc-expanded');
				$toggle.find('.omsc-toggle-inner').slideUp(300);
				return false;
			}
	
			var $acc=$toggle.parents('.omsc-accordion');
			if(!$acc.hasClass('omsc-multiopen'))
				$acc.find('.omsc-toggle.omsc-expanded').removeClass('omsc-expanded').find('.omsc-toggle-inner').slideUp(300);
	
			$toggle.find('.omsc-toggle-inner').slideDown(300,function(){
				var h=jQuery(this).parent().height();
				var pos=jQuery(this).parent().find('.omsc-toggle-title').offset();
				var scroll=jQuery(window).scrollTop();
				var wh=jQuery(window).height();
				if(pos.top < scroll || (pos.top > scroll && pos.top+h > scroll+wh))
					jQuery('html,body').animate({ scrollTop: pos.top+'px' }, 200);
			}).find('iframe[src*="maps.google"]').each(function(){
				jQuery(this).attr('src',jQuery(this).attr('src'));
			});
			$toggle.addClass('omsc-expanded');
			
		});
		
		jQuery('.omsc-toggle').not('.in-accordion').find('.omsc-toggle-title').click(function(){
			
			var $toggle=jQuery(this).parent();
			
			var $inner=$toggle.find('.omsc-toggle-inner');
			if(!$inner.length)
				return false;
			if($inner.is(':animated'))
				return false;
			
			$toggle.toggleClass('omsc-expanded');
			$inner.slideToggle(300);
			if($toggle.hasClass('omsc-expanded')) {
				$inner.find('iframe[src*="maps.google"]').each(function(){
					jQuery(this).attr('src',jQuery(this).attr('src'));
				});
			}
			
			return false;
		});
		
	}
}

omShortcodes.modules.tabs = {
	init: function() {

		var hash=window.location.hash.replace('#','');
		jQuery('.omsc-tabs').each(function(){
			if(hash != '' && jQuery(this).find('.omsc-tabs-tabs .omsc-tabs-tab.omsc-'+hash).length ) {
				jQuery(this).find('.omsc-tabs-control a[href$=#'+hash+']').parent().addClass('omsc-active');
				jQuery(this).find('.omsc-tabs-tabs .omsc-tabs-tab').hide().filter('.omsc-'+hash).addClass('omsc-active').show();
			} else {
				jQuery(this).find('.omsc-tabs-control li:first').addClass('omsc-active');
				jQuery(this).find('.omsc-tabs-tabs .omsc-tabs-tab:first').addClass('omsc-active').show();
			}
		});
		
		jQuery('.omsc-tabs .omsc-tabs-control a').click(function(){

			var $tabs=jQuery(this).parents('.omsc-tabs');
			var $tabstabs=$tabs.find('.omsc-tabs-tabs');
			var $li=jQuery(this).parent();

			if($li.hasClass('omsc-active'))
				return false;
				
			var tabname=jQuery(this).attr('href').split('#');
			tabname=tabname[(tabname.length-1)];
			
			$tabs.find('.omsc-tabs-control li').removeClass('omsc-active');
			$li.addClass('omsc-active');
			
			var $newtab=$tabs.find('.omsc-tabs-tabs .omsc-tabs-tab.omsc-'+tabname);
			
			$tabstabs.stop(true);
			var cur_h=$tabstabs.height();
			$tabstabs.css('height',cur_h+'px');
			
			$tabstabs.find('.omsc-tabs-tab.omsc-active').hide().removeClass('omsc-active');
			$newtab.addClass('omsc-active').fadeIn(300);
			
			$newtab.find('iframe[src*="maps.google"]').each(function(){
				jQuery(this).attr('src',jQuery(this).attr('src'));
			});
	
			var new_h=$newtab.outerHeight();
			if(Math.abs(cur_h - new_h) > 4) {
				$tabstabs.animate({height: new_h + 'px'}, 300, function(){
					jQuery(this).css('height','auto');
				});
			} else {
				$tabstabs.css('height','auto');
			}
			
			
			return false;
		});
		
	}
}

omShortcodes.modules.responsivebox = {
	init: function() {

		jQuery('.omsc-responsive-box').each(function(){
			var $obj=jQuery(this).children(':first');
			if($obj.length) {
				var w=parseInt($obj.attr('width'));
				var h=parseInt($obj.attr('height'));
				if(!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
					var r=h/w;
					jQuery(this).css('padding-bottom',(r*100)+'%');
				}
			}
		});
		
	}
}

omShortcodes.modules.counter = {
	init: function() {
		
		var interval=30;
		
		function om_tick(args) {
			args.obj.html([args.prefix, args.current, args.suffix].join(''));
			if(args.current < args.count) {
				args.current+=args.step;
				if(args.current > args.count)
					args.current=args.count;
					
				setTimeout(function(){
					om_tick(args);
				}, args.interval);
			}
		}
		
		function om_start_item(obj) {
			var $this=jQuery(obj);
			var count=$this.data('count');
			var duration=$this.data('animation');
			if(count && duration) {
				if(duration > interval) {
					
					var step=Math.ceil( count / (duration/interval) );
					if(step < 1)
						step=1;
					om_tick({
						obj: $this.find('.omsc-counter-number'),
						current: 0,
						count: count,
						step: step,
						interval: interval,
						prefix: $this.data('prefix'),
						suffix: $this.data('suffix')
					});

				}
			}
		}
		
		
		if(jQuery.waypoints) {
			jQuery('.omsc-counter').each(function(){
	
				jQuery(this).waypoint(function(){
					om_start_item(this);
				},{
					offset: '100%',
					triggerOnce: true
				});			
				
			});
		} else {
			jQuery('.omsc-counter').each(function(){

				om_start_item(this);
				
			});
		}
		
	}
}

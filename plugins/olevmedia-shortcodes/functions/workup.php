<?php

include_once( 'workup-shortcodes.php' );

/**
 * Include Styles & Scripts
 */

function omsc_enqueue_scripts() {
	
	if($GLOBALS['omShortcodesPlugin']['config']['load_font_awesome_files'])
		wp_enqueue_style('fontawesome', $GLOBALS['omShortcodesPlugin']['path_url'].'assets/css/font-awesome.min.css');
	
	wp_enqueue_script('jquery');
	
	$min_postfix='';
	if($GLOBALS['omShortcodesPlugin']['config']['include_minified']) {
		$min_postfix='.min';
	}
	wp_enqueue_style('omsc-shortcodes', $GLOBALS['omShortcodesPlugin']['path_url'].'assets/css/shortcodes'.$min_postfix.'.css');
	if($GLOBALS['omShortcodesPlugin']['config']['responsive_mode']) {
		if(is_array($GLOBALS['omShortcodesPlugin']['config']['responsive_bounds'])) {
			foreach($GLOBALS['omShortcodesPlugin']['config']['responsive_bounds'] as $k=>$v) {
				if(!isset($v['from']))
					$v['from']=false;
				if(!isset($v['to']))
					$v['to']=false;
				if($v['from'] || $v['to'])
					wp_enqueue_style('omsc-shortcodes-'.$k, $GLOBALS['omShortcodesPlugin']['path_url'].'assets/css/shortcodes-'.$k.$min_postfix.'.css', array(), false, 'screen'.($v['from']?' and (min-width: '.$v['from'].'px)':'').($v['to']?' and (max-width: '.$v['to'].'px)':''));
			}
		}
	}
	
	wp_enqueue_script('omsc-shortcodes', $GLOBALS['omShortcodesPlugin']['path_url'].'assets/js/shortcodes'.$min_postfix.'.js', array('jquery'), false, $GLOBALS['omShortcodesPlugin']['config']['scripts_in_footer']);
}
add_action('wp_enqueue_scripts', 'omsc_enqueue_scripts');

/**
 * JsvaScript initialization
 */
 
function omsc_shortcodes_js_init() {
	
	$modules=array('buttons', 'tooltips', 'toggle', 'tabs', 'responsivebox', 'counter');
	$modules=apply_filters('omsc_shortcodes_js_init_modules', $modules);
	
	if(!empty($modules))
		$code='<script type="text/javascript">jQuery(function(){omShortcodes.init(["'.implode('","',$modules).'"]);});</script>';
	else
		$code='';
	$code=apply_filters('omsc_shortcodes_js_init_code', $code);
	
	echo $code;
		
}
add_action('wp_footer', 'omsc_shortcodes_js_init');
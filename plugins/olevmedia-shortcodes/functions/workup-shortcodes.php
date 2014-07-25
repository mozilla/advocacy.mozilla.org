<?php

/*************************************************************************************
 *	Columns
 *************************************************************************************/

function omsc_sc_columns_workup_content($content) {

	if(substr($content,0,4) == '</p>')
		$content=substr($content,4);

	if(substr($content,0,6) == '<br />')
		$content=substr($content,6);
		
	$content .= '<div class="clear"></div>';
			
	return $content;
}

/****************/
 
function omsc_sc_one_half( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_half'))
		return apply_filters('omsc_sc_one_half', $atts, $content);
		
	return '<div class="omsc-one-half">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('one_half', 'omsc_sc_one_half');
add_shortcode('two_fourth', 'omsc_sc_one_half');
add_shortcode('two_fourths', 'omsc_sc_one_half');
add_shortcode('three_sixth', 'omsc_sc_one_half');
add_shortcode('three_sixths', 'omsc_sc_one_half');

function omsc_sc_one_half_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_half_last'))
		return apply_filters('omsc_sc_one_half_last', $atts, $content);

	return '<div class="omsc-one-half omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('one_half_last', 'omsc_sc_one_half_last');
add_shortcode('two_fourth_last', 'omsc_sc_one_half_last');
add_shortcode('two_fourths_last', 'omsc_sc_one_half_last');
add_shortcode('three_sixth_last', 'omsc_sc_one_half_last');
add_shortcode('three_sixths_last', 'omsc_sc_one_half_last');

/****************/

function omsc_sc_one_third( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_third'))
		return apply_filters('omsc_sc_one_third', $atts, $content);

	return '<div class="omsc-one-third">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('one_third', 'omsc_sc_one_third');
add_shortcode('two_sixth', 'omsc_sc_one_third');
add_shortcode('two_sixths', 'omsc_sc_one_third');

function omsc_sc_one_third_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_third_last'))
		return apply_filters('omsc_sc_one_third_last', $atts, $content);

	return '<div class="omsc-one-third omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('one_third_last', 'omsc_sc_one_third_last');
add_shortcode('two_sixth_last', 'omsc_sc_one_third_last');
add_shortcode('two_sixths_last', 'omsc_sc_one_third_last');

function omsc_sc_two_third( $atts, $content = null ) {
	if(has_filter('omsc_sc_two_third'))
		return apply_filters('omsc_sc_two_third', $atts, $content);

	return '<div class="omsc-two-third">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('two_third', 'omsc_sc_two_third');
add_shortcode('two_thirds', 'omsc_sc_two_third');
add_shortcode('four_sixth', 'omsc_sc_two_third');
add_shortcode('four_sixths', 'omsc_sc_two_third');

function omsc_sc_two_third_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_two_third_last'))
		return apply_filters('omsc_sc_two_third_last', $atts, $content);

	return '<div class="omsc-two-third omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('two_third_last', 'omsc_sc_two_third_last');
add_shortcode('two_thirds_last', 'omsc_sc_two_third_last');
add_shortcode('four_sixth_last', 'omsc_sc_two_third_last');
add_shortcode('four_sixths_last', 'omsc_sc_two_third_last');

/****************/

function omsc_sc_one_fourth( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_fourth'))
		return apply_filters('omsc_sc_one_fourth', $atts, $content);

	return '<div class="omsc-one-fourth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('one_fourth', 'omsc_sc_one_fourth');

function omsc_sc_one_fourth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_fourth_last'))
		return apply_filters('omsc_sc_one_fourth_last', $atts, $content);

	return '<div class="omsc-one-fourth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('one_fourth_last', 'omsc_sc_one_fourth_last');

function omsc_sc_three_fourth( $atts, $content = null ) {
	if(has_filter('omsc_sc_three_fourth'))
		return apply_filters('omsc_sc_three_fourth', $atts, $content);

	return '<div class="omsc-three-fourth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('three_fourth', 'omsc_sc_three_fourth');
add_shortcode('three_fourths', 'omsc_sc_three_fourth');

function omsc_sc_three_fourth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_three_fourth_last'))
		return apply_filters('omsc_sc_three_fourth_last', $atts, $content);

	return '<div class="omsc-three-fourth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('three_fourth_last', 'omsc_sc_three_fourth_last');
add_shortcode('three_fourths_last', 'omsc_sc_three_fourth_last');

/****************/

function omsc_sc_one_fifth( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_fifth'))
		return apply_filters('omsc_sc_one_fifth', $atts, $content);

	return '<div class="omsc-one-fifth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('one_fifth', 'omsc_sc_one_fifth');

function omsc_sc_one_fifth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_fifth_last'))
		return apply_filters('omsc_sc_one_fifth_last', $atts, $content);

	return '<div class="omsc-one-fifth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('one_fifth_last', 'omsc_sc_one_fifth_last');

function omsc_sc_two_fifth( $atts, $content = null ) {
	if(has_filter('omsc_sc_two_fifth'))
		return apply_filters('omsc_sc_two_fifth', $atts, $content);

	return '<div class="omsc-two-fifth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('two_fifth', 'omsc_sc_two_fifth');
add_shortcode('two_fifths', 'omsc_sc_two_fifth');

function omsc_sc_two_fifth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_two_fifth_last'))
		return apply_filters('omsc_sc_two_fifth_last', $atts, $content);

	return '<div class="omsc-two-fifth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('two_fifth_last', 'omsc_sc_two_fifth_last');
add_shortcode('two_fifths_last', 'omsc_sc_two_fifth_last');

function omsc_sc_three_fifth( $atts, $content = null ) {
	if(has_filter('omsc_sc_three_fifth'))
		return apply_filters('omsc_sc_three_fifth', $atts, $content);

	return '<div class="omsc-three-fifth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('three_fifth', 'omsc_sc_three_fifth');
add_shortcode('three_fifths', 'omsc_sc_three_fifth');

function omsc_sc_three_fifth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_three_fifth_last'))
		return apply_filters('omsc_sc_three_fifth_last', $atts, $content);

	return '<div class="omsc-three-fifth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('three_fifth_last', 'omsc_sc_three_fifth_last');
add_shortcode('three_fifths_last', 'omsc_sc_three_fifth_last');

function omsc_sc_four_fifth( $atts, $content = null ) {
	if(has_filter('omsc_sc_four_fifth'))
		return apply_filters('omsc_sc_four_fifth', $atts, $content);

	return '<div class="omsc-four-fifth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('four_fifth', 'omsc_sc_four_fifth');
add_shortcode('four_fifths', 'omsc_sc_four_fifth');

function omsc_sc_four_fifth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_four_fifth_last'))
		return apply_filters('omsc_sc_four_fifth_last', $atts, $content);

	return '<div class="omsc-four-fifth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('four_fifth_last', 'omsc_sc_four_fifth_last');
add_shortcode('four_fifths_last', 'omsc_sc_four_fifth_last');

/****************/

function omsc_sc_one_sixth( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_sixth'))
		return apply_filters('omsc_sc_one_sixth', $atts, $content);

	return '<div class="omsc-one-sixth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('one_sixth', 'omsc_sc_one_sixth');

function omsc_sc_one_sixth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_one_sixth_last'))
		return apply_filters('omsc_sc_one_sixth_last', $atts, $content);

	return '<div class="omsc-one-sixth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('one_sixth_last', 'omsc_sc_one_sixth_last');

function omsc_sc_five_sixth( $atts, $content = null ) {
	if(has_filter('omsc_sc_five_sixth'))
		return apply_filters('omsc_sc_five_sixth', $atts, $content);

	return '<div class="omsc-five-sixth">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div>';
}
add_shortcode('five_sixth', 'omsc_sc_five_sixth');
add_shortcode('five_sixths', 'omsc_sc_five_sixth');

function omsc_sc_five_sixth_last( $atts, $content = null ) {
	if(has_filter('omsc_sc_five_sixth_last'))
		return apply_filters('omsc_sc_five_sixth_last', $atts, $content);

	return '<div class="omsc-five-sixth omsc-last">' . do_shortcode( omsc_sc_columns_workup_content($content) ) . '</div><div class="omsc-clear"></div>';
}
add_shortcode('five_sixth_last', 'omsc_sc_five_sixth_last');
add_shortcode('five_sixths_last', 'omsc_sc_five_sixth_last');

/*************************************************************************************
 *	Buttons
 *************************************************************************************/

function omsc_sc_button( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_button'))
		return apply_filters('omsc_sc_button', $atts, $content);
	
	extract(shortcode_atts(array(
		'url'     	 => '',
		'link'     	 => '',
		'href'     	 => '',
		'target'     => '',
		'color'   => '',
		'hovercolor'   => '',
		'textcolor'   => '',
		'texthovercolor'   => '',
		'size' => 'medium',
		'title' => '',
		'tooltip' => '',
		'icon' => '',
		'iconcolor' => '',
		'width' => false,
		'style' => '',
	), $atts));
	
	if(!$textcolor) {
		if($style != 'border')
			$textcolor='#ffffff';
	}
	
	if(!$href && $url)
		$href=$url;
	elseif(!$href && $link)
		$href=$link;
	
	if(!$href)
		$href='#';
	
	if($target)
		$target=' target="'.$target.'"';
		
	if(!$icon && $size == 'xlarge') {
		$icon='omsc-button-xlarge';
	}
	
	if(!$style) {
		$style="emboss";
	}
		
	$styles=array();
	$classes=array('omsc-button');
	
	if($content == '') {
		$classes[]='omsc-no-content';
	}
	
	if($color) {
		if($style != 'border')
			$styles[]='background-color:'.$color;
		$styles[]='border-color:'.$color;
	}
	
	if($width) {
		if(is_numeric($width))
			$width.='px';
		$styles[]='width:'.$width;
	}

	if($hovercolor || $texthovercolor) {
		$classes[]='omsc-custom-hover';
	} else {
		$classes[]='omsc-no-custom-hover';
	}

	if($size) {
		$classes[]='omsc-size-'.$size;
	}
	
	if($icon) {
		$classes[]='omsc-with-icon';
	}
	
	if($tooltip) {
		$classes[]='omsc-add-tooltip';
	}
	
	if($style) {
		$classes[]='omsc-style-'.$style;
	}
	
	if($textcolor) {
		$styles[]='color:'.$textcolor;
				
		$tmp=str_replace('#','',$textcolor);
		if(max(base_convert(substr($tmp,0,2),16,10),base_convert(substr($tmp,2,2),16,10),base_convert(substr($tmp,4,2),16,10)) > 127)
			$classes[]='omsc-text-bright';
		else
			$classes[]='omsc-text-dark';
	}
	
	$hover_border_color=false;
	
	if($hovercolor)
		$hover_border_color=$hovercolor;
		
	//if($style == 'border')
	//	$hover_border_color=false;
	
	$out='<a class="'.implode(' ',$classes).'" href="'.$href.'"'.$target.(!empty($styles)?' style="'.implode(';',$styles).'"':'').($tooltip?' data-tooltip="'.esc_attr($tooltip).'"':'').($hovercolor?' data-hover-bg-color="'.$hovercolor.'"':'').($texthovercolor?' data-hover-text-color="'.$texthovercolor.'"':'').($hover_border_color?' data-hover-border-color="'.$hover_border_color.'"':'').'>';

	if($icon) {
		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];
		$out.='<i class="fa fa-'.$icon.'"'.($iconcolor?' style="color:'.$iconcolor.'"':'').'></i>';
	}
				
	if($size == 'xlarge') {
		$out.= '<span class="omsc-button-title">'.$title.'</span>';
		if($content)
			$out.='<span class="omsc-button-text">' . $content . '</span>';
	} else {
		$out.= $content;
	}
	
	$out .= '</a>';
	
	return $out;
}
add_shortcode('button', 'omsc_sc_button');

/*************************************************************************************
 *	Divider
 *************************************************************************************/

function omsc_sc_divider( $atts, $content = null ) {

	if(has_filter('omsc_sc_divider'))
		return apply_filters('omsc_sc_divider', $atts, $content);		
	
	extract(shortcode_atts(array(
		'style'     	 => '',
		'color'     => '',
		'border' => '',
		'icon' => '',
		'width' => '',
		'full_width' => '',
	), $atts));
	
	$styles=array();
	$classes=array('omsc-divider');
	
	if($border) {
		if(in_array($border,array('small','medium','large')))
			$classes[]='omsc-border-'.$border;
	}
	
	if($style)
		$classes[]='omsc-style-'.$style;
	if($color == 'theme')
		$classes[]='omsc-theme-color';
	elseif($color) {
		$styles[]='color:'.$color;
		$classes[]='omsc-custom-color';
	}
	
	if($width) {
		if(is_numeric(trim($width)))
			$width=trim($width).'px';
		$styles[]='width:'.$width;
	}
	
	if($full_width) {
		$classes[]='omsc-divider-full-width';
	}

	$out='';
	
	$out .= '<div class="'.implode(' ',$classes).'" style="'.implode(';',$styles).'">';
	
	if($icon && in_array($style,array('icon-left','icon-center','icon-right'))) {
		$out .= '<div class="omsc-divider-icon"><i class="fa fa-'.$icon.'"></i></div>';
	}
	
	$out .= '</div>';
		
	return $out;

}
add_shortcode('divider', 'omsc_sc_divider');

/*************************************************************************************
 *	Dropcaps
 *************************************************************************************/

function omsc_sc_dropcap( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_dropcap'))
		return apply_filters('omsc_sc_dropcap', $atts, $content);
			
	extract(shortcode_atts(array(
		'size'     	 => '220%',
		'textcolor'     	 => '',
		'color'     => '',
		'shape'     => ''
	), $atts));
	
	$style=array();
	$classes=array('omsc-dropcap');
	
	if($textcolor)
		$style[]='color:'.$textcolor;
		
	if($color && $color != 'theme')
		$style[]='background-color:'.$color;
	
	if($size) {
		if(is_numeric($size))
			$size.='px';
		$style[]='font-size:'.$size;
	}
	
	if($color=='theme')
		$classes[]='omsc-bgcolor-theme';

	if($color)
		$classes[]='omsc-with-bg-color';
	
	if($shape)
		$classes[]='omsc-shape-'.$shape;
	
	return
		'<span class="'.implode(' ',$classes).'"'.(!empty($style)?' style="'.implode(';',$style).'"':'').'>'.do_shortcode($content).'</span>'	
		;

}
add_shortcode('dropcap', 'omsc_sc_dropcap');

/*************************************************************************************
 *	Toggle
 *************************************************************************************/

function omsc_sc_toggle( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_toggle'))
		return apply_filters('omsc_sc_toggle', $atts, $content);
	
	extract(shortcode_atts(array(
		'title'    	 => '&nbsp;',
		'state'		 => ''
	), $atts));

	if($state == 'opened' || $state == 'expanded'  || $state == 'expand')
		$state='open';

	return
		'<div class="omsc-toggle'.($state=='open'?' omsc-expanded':'').'">'.
			'<div class="omsc-toggle-title">'.$title.'</div>'.
			'<div class="omsc-toggle-inner"'.($state=='open'?' style="display:block"':'').'>'.
				do_shortcode($content).
			'</div>'.
		'</div>'
	;
	
}
add_shortcode('toggle', 'omsc_sc_toggle');

/*************************************************************************************
 *	Accordion
 *************************************************************************************/

function omsc_sc_accordion( $atts, $content = null ) {

	if(has_filter('omsc_sc_accordion'))
		return apply_filters('omsc_sc_accordion', $atts, $content);	

	extract(shortcode_atts(array(
		'multiopen'    	 => false,
	), $atts));
	
	return
		'<div class="omsc-accordion'.($multiopen?' omsc-multiopen':'').'">'.
			do_shortcode($content).
		'</div>'
	;
	
}
add_shortcode('accordion', 'omsc_sc_accordion');

/*************************************************************************************
 *	Tabs
 *************************************************************************************/

function omsc_sc_tab( $atts, $content = null ) {

	if(has_filter('omsc_sc_tab'))
		return apply_filters('omsc_sc_tab', $atts, $content);	
		
	extract(shortcode_atts(array(
		'title' => 'Tab'
	), $atts ));
	
	$tab_name=preg_replace('/[^A-Za-z0-9-]/' ,'', sanitize_title( $title ) );
	if(!$tab_name)
		$tab_name=md5($title);
										
	return '<div class="omsc-tabs-tab omsc-tab-'. $tab_name .'">'. do_shortcode( $content ) .'</div>';
}
add_shortcode( 'tab', 'omsc_sc_tab' );

function omsc_sc_tabs( $atts, $content = null ) {

	if(has_filter('omsc_sc_tabs'))
		return apply_filters('omsc_sc_tabs', $atts, $content);	
		
	$titles='';
	if( preg_match_all( '/\[tab[^\]]*title="([^\"]+)"[^\]]*\]/i', $content, $m ) ) {
		
		foreach($m[1] as $v) {
			$tab_name=preg_replace('/[^A-Za-z0-9-]/' ,'', sanitize_title( $v ) );
			if(!$tab_name)
				$tab_name=md5($v);
				
			$titles.='<li><a href="#tab-'. $tab_name .'"><span>'.$v.'</span></a></li>';
		}
	}
			
	return 
		'<div class="omsc-tabs">'.
			'<ul class="omsc-tabs-control omsc-clearfix">'.
				$titles.
			'</ul>'.
			'<div class="omsc-tabs-tabs">'.
				do_shortcode( $content ).
			'</div>'.
			'<div class="omsc-clear"></div>'.
		'</div>'
	;
}
add_shortcode( 'tabs', 'omsc_sc_tabs' );

/*************************************************************************************
 *	Animation
 *************************************************************************************/

function omsc_sc_animation( $atts, $content = null ) {

	if(has_filter('omsc_sc_animation'))
		return apply_filters('omsc_sc_animation', $atts, $content);		
	
	extract(shortcode_atts(array(
		'effect'     	 => '',
		'delay'     	 => '',
	), $atts));
	
	$classes=array('omsc-animation','omsc-animation-almost-visible');
	$style=array();

	if($effect) {
		$classes[]='omsc-effect-'.$effect;
	}
	
	$delay=intval($delay);
		
	return '<div class="'.implode(' ',$classes).'"'.(!empty($style)?' style="'.implode(';',$style).'"':'').($delay?' data-animation-delay="'.$delay.'"':'').'>' . do_shortcode($content) . '</div>';

}
add_shortcode('animation', 'omsc_sc_animation');

/*************************************************************************************
 *	Infobox
 *************************************************************************************/

function omsc_sc_infobox( $atts, $content = null ) {

	if(has_filter('omsc_sc_infobox'))
		return apply_filters('omsc_sc_infobox', $atts, $content);		
	
	extract(shortcode_atts(array(
		'color'     	 => '',
		'icon'     	 => '',
		'textcolor' => '',
	), $atts));
	
	$classes=array('omsc-infobox');
	$style=array();

	if($icon) {
		$classes[]='omsc-with-icon';
		
		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];
	}
	
	if($color) {
		$style[]='background:'.$color;
		$style[]='border-color:'.$color;
	}
		
	if($textcolor)
		$style[]='color:'.$textcolor;
		
	return '<div class="'.implode(' ',$classes).'"'.(!empty($style)?' style="'.implode(';',$style).'"':'').'>'.($icon?'<i class="fa fa-'.$icon.' omsc-infobox-icon"></i>':'') . do_shortcode($content) . '</div>';

}
add_shortcode('infobox', 'omsc_sc_infobox');

/*************************************************************************************
 *	Biginfopane
 *************************************************************************************/

function omsc_sc_biginfobox( $atts, $content = null ) {

	if(has_filter('omsc_sc_biginfobox'))
		return apply_filters('omsc_sc_biginfobox', $atts, $content);	
	
	extract(shortcode_atts(array(
		'url'     	 => '',
		'href'     	 => '',
		'target'     => '',
		'color'   => '',
		'textcolor'   => '#ffffff',
		'title' => '',
		'button_title' => '',
		'layout' => '',
	), $atts));
	
	if(!$href && $url)
		$href=$url;
	
	if(!$href)
		$href='#';

	if($target)
		$target=' target="'.$target.'"';
	
	$style=array();
	
	$textshadowclass='';
	if($textcolor)
	{
		$tmp=str_replace('#','',$textcolor);
		if(max(base_convert(substr($tmp,0,2),16,10),base_convert(substr($tmp,2,2),16,10),base_convert(substr($tmp,4,2),16,10)) > 127)
			$textshadowclass=' omsc-text-bright';
		else
			$textshadowclass=' omsc-text-dark';
		$style[]='color:'.$textcolor;
	}
	if($color) {
		$style[]='background-color:'.$color;
		$style[]='border-color:'.$color;
	}
			

	return
		'<div class="omsc-biginfobox'.($layout?' omsc-layout-'.$layout:'').'"'.(!empty($style)?' style="'.implode(';',$style).'"':'').'>'.
			'<div class="omsc-inner">'.
				'<div class="omsc-text-block'.$textshadowclass.'">'.($title?'<div class="omsc-text-block-title">'.$title.'</div>':'').$content.'</div>'.
				($button_title?'<div class="omsc-button-block"><a href="'.$href.'"'.$target.'>'.$button_title.'</a></div>':'').
			'</div>'.
		'</div>'	
		;

}
add_shortcode('biginfobox', 'omsc_sc_biginfobox');

/*************************************************************************************
 *	Box
 *************************************************************************************/

function omsc_sc_box( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_box'))
		return apply_filters('omsc_sc_box', $atts, $content);	
	
	extract(shortcode_atts(array(
		'title' => '',
		'border_width' => '',
		'border_color' => '',
		'border_style' => '',
		'bg_color' => '',
		'bg_image' => '',
		'bg_image_pos' => '',
		'icon' => '',
		'icon_style' => '',
		'icon_shape' => '',
		'align' => '',
		'text_color' => '',
		'height' => '',
	), $atts));
	
	$styles=array();
	$classes=array('omsc-box');
	
	$border_width=intval($border_width);
	$height=intval($height);
	
	
	if($title)
		$classes[]='omsc-with-title';
		
	if($border_width) {
		$classes[]='omsc-with-border';
		$styles[]='border-width:'.$border_width.'px';
	}
	if($border_color) {
		$styles[]='border-color:'.$border_color;
	}
	if($bg_color) {
		$classes[]='omsc-with-bg-color';
		if($bg_color == 'theme')
			$classes[]='omsc-bg-color-theme';
		else
			$styles[]='background-color:'.$bg_color;
	}
	if($bg_image) {
		$styles[]='background-image:url('.$bg_image.')';
	}
	if($bg_image_pos) {
		if($bg_image_pos == 'cover')
			$styles[]='-webkit-background-size:cover;background-size:cover';
		else
			$styles[]='background-position:'.$bg_image_pos;
	}
	if($align) {
		$styles[]='text-align:'.$align;
	}
	if($text_color) {
		$styles[]='color:'.$text_color;
	}
	if($height) {
		$styles[]='height:'.$height.'px';
	}
	
	if($icon) {
		$classes[]='omsc-with-icon';
		
		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];

		if($icon_style) {
			$classes[]='omsc-icon-style-'.$icon_style;
		}
		if($icon_shape) {
			$classes[]='omsc-icon-shape-'.$icon_shape;
		}
	}
	if($border_style == 'dotted') {
		$classes[]='omsc-border-style-dotted';
	}

		
	$out='<div class="'.implode(' ',$classes).'"'.(!empty($styles)?' style="'.implode(';',$styles).'"':'').'>';
	if($icon) {
		$out .= '<div class="omsc-box-icon-wrapper"><div class="omsc-box-icon" style="'.
			($icon_style=='border'&&$border_width?'border-width:'.$border_width.'px;':'').
			($border_width?'margin-top:-'.($border_width*1.5).'px;margin-left:-'.$border_width.'px;':'').
			($border_width==0&&$icon_style=='bg'&&$bg_color&&$bg_color!='theme'?'background-color:'.$bg_color.';':'').
			($border_width==0&&$icon_style=='border'&&$bg_color&&$bg_color!='theme'?'border-color:'.$bg_color.';color:'.$bg_color.';':'').
			($icon_style=='bg'&&$border_color?'background-color:'.$border_color.';':'').
			($icon_style=='border'&&$bg_color&&$bg_color!='theme'&&$border_width?'background-color:'.$bg_color.';':'').
			($icon_style=='border'&&$border_color?'border-color:'.$border_color.';color:'.$border_color.';':'').
			'"><i class="fa fa-'.$icon.'"></i></div></div>';
	}
	$out.='<div class="omsc-box-inner">';
	if($title)
		$out .= '<div class="omsc-box-title">'.$title.'</div>';
	$out.=do_shortcode($content).'</div></div>';
	
	return $out;

}
add_shortcode('box', 'omsc_sc_box');

/*************************************************************************************
 *	Icon
 *************************************************************************************/

function omsc_sc_icon( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_icon'))
		return apply_filters('omsc_sc_icon', $atts, $content);	

	extract(shortcode_atts(array(
		'icon' => '',
		'color' => '',
		'size' => '',
		'bordercolor' => '',
		'bgcolor' => '',
	), $atts));
	
	$classes=array('omsc-icon','fa');
	$styles=array();
	
	if(!in_array($size,array('large','2x','3x','4x','5x')))
		$size='';
	
	if($size == 'large')
		$size='lg';
	
	if($icon) {
		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];
			
		$classes[]='fa-'.$icon;
		
		if($size)
			$classes[]='fa-'.$size;
			
		if($color == 'theme') 
			$classes[]='omsc-icon-color-theme';
			
		if($color && $color != 'theme')
			$styles[]='color:'.$color;
	
		if($bordercolor) {
			$classes[]='omsc-with-border';
			if($bordercolor == 'theme')
				$classes[]='omsc-border-color-theme';
			else
				$styles[]='border-color:'.$bordercolor;
		}
		if($bgcolor) {
			$classes[]='omsc-with-bg';
			if($bgcolor == 'theme')
				$classes[]='omsc-bg-color-theme';
			else
				$styles[]='background-color:'.$bgcolor;
		}

		$out='<i class="'.implode(' ',$classes).'" style="'.implode(';',$styles).'"></i>';
	}
	return $out;

}
add_shortcode('icon', 'omsc_sc_icon');

/*************************************************************************************
 *	Marker
 *************************************************************************************/

function omsc_sc_marker( $atts, $content = null ) {

	if(has_filter('omsc_sc_marker'))
		return apply_filters('omsc_sc_marker', $atts, $content);		
	
	extract(shortcode_atts(array(
		'textcolor'     	 => '',
		'color'     => '',
		'tooltip' => ''
	), $atts));
	
	$style=array();
	if($textcolor)
		$style[]='color:'.$textcolor;
	if($color)
		$style[]='background-color:'.$color;
		
	return
		'<span class="omsc-marker'.($tooltip?' omsc-add-tooltip':'').'"'.(!empty($style)?' style="'.implode(';',$style).'"':'').($tooltip?' data-tooltip="'.esc_attr($tooltip).'"':'').'>'.do_shortcode($content).'</span>'	
		;

}
add_shortcode('marker', 'omsc_sc_marker');

/*************************************************************************************
 *	Custom list
 *************************************************************************************/

function omsc_sc_custom_list( $atts, $content = null ) {

	if(has_filter('omsc_sc_custom_list'))
		return apply_filters('omsc_sc_custom_list', $atts, $content);	
		
	extract(shortcode_atts(array(
		'icon' => '',
		'iconcolor' => '',
	), $atts));
	
	if($icon) {

		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];		
		
		$content=str_ireplace('<ul','<ul class="omsc-icons-ul fa-ul"',$content);
		$content=str_ireplace('<li>','<li><i class="fa-li fa fa-'.$icon.($iconcolor=='theme'?' omsc-icons-color-theme':'').'"'.($iconcolor&&$iconcolor!='theme'?' style="color:'.$iconcolor.'"':'').'></i>',$content);
	}


	$out=do_shortcode($content);
	
	return $out;
}
add_shortcode('custom_list', 'omsc_sc_custom_list');

/*************************************************************************************
 *	Custom list Icon per item
 *************************************************************************************/

function omsc_sc_ul( $atts, $content = null ) {

	if(has_filter('omsc_sc_ul'))
		return apply_filters('omsc_sc_ul', $atts, $content);		
		

	$content=preg_replace('#/li\][^\[]+?\[li#i','/li][li',$content);
	$content=preg_replace('#^[^\[]+?\[#','[',$content);
	$content=preg_replace('#\][^\]]+?$#',']',$content);
	$content='<ul class="omsc-icons-ul fa-ul">'.do_shortcode($content).'</ul>';

	return $content;
}
add_shortcode('ul', 'omsc_sc_ul');

function omsc_sc_li( $atts, $content = null ) {

	if(has_filter('omsc_sc_li'))
		return apply_filters('omsc_sc_li', $atts, $content);	
		
	extract(shortcode_atts(array(
		'icon' => '',
		'iconcolor' => '',
	), $atts));
	
	if($icon) {
		$aliases=omsc_get_fonawesome_backward_aliases();
		if(isset($aliases[$icon]))
			$icon=$aliases[$icon];
	}
	
	return '<li>'.($icon?'<i class="fa-li fa fa-'.$icon.($iconcolor=='theme'?' omsc-icons-color-theme':'').'"'.($iconcolor&&$iconcolor!='theme'?' style="color:'.$iconcolor.'"':'').'></i>':'').do_shortcode($content).'</li>';
}
add_shortcode('li', 'omsc_sc_li');

/*************************************************************************************
 *	Space
 *************************************************************************************/

function omsc_sc_space( $atts, $content = null ) {

	if(has_filter('omsc_sc_space'))
		return apply_filters('omsc_sc_space', $atts, $content);	
		
	extract(shortcode_atts(array(
		'size' => '',
	), $atts));
	
	$size=intval($size);
	if($size < 0)
		return '<div style="margin-top:'.$size.'px"></div>';
	elseif($size)
		return '<div class="omsc-clear" style="height:'.$size.'px"></div>';
	else
		return '<div class="omsc-clear" style="height:16px"></div>';
}
add_shortcode('space', 'omsc_sc_space');

/*************************************************************************************
 *	Table
 *************************************************************************************/

function omsc_sc_table( $atts, $content = null ) {

	if(has_filter('omsc_sc_table'))
		return apply_filters('omsc_sc_table', $atts, $content);	
		
	extract(shortcode_atts(array(
		'style' => '1',
	), $atts));
	
	$out='';
	
	if(preg_match_all('#[\s\S]*?\[tr\]([\s\S]*?)\[/tr\][\s\S]*?#',$content,$rows)) {
		
		$out.='<table class="omsc-custom-table omsc-style-'.$style.'">';
		
		foreach($rows[1] as $row) {
			
			$out.='<tr>';
			
			if(preg_match_all('#[\s\S]*?\[(td|th)\]([\s\S]*?)\[/(td|th)\][\s\S]*?#',$row,$cols)) {
				foreach($cols[2] as $k=>$col) {
					$out.='<'.$cols[1][$k].'>'.do_shortcode($col).'</'.$cols[1][$k].'>';
				}
			}
			
			$out.='</tr>';
			
		}
		
		$out.='</table>';
	}
	
	return $out;
}
add_shortcode('table', 'omsc_sc_table');


/*************************************************************************************
 *	Table Wrapper
 *************************************************************************************/
 
function omsc_sc_custom_table( $atts, $content = null ) {

	if(has_filter('omsc_sc_custom_table'))
		return apply_filters('omsc_sc_custom_table', $atts, $content);	
		
	extract(shortcode_atts(array(
		'style' => '1',
	), $atts));
	
	if(!$style)
		$style=1;
		
	return
		'<div class="omsc-custom-table-wrapper omsc-style-'.$style.'">'.
			do_shortcode($content).
		'</div>'
	;
	
}
add_shortcode('custom_table', 'omsc_sc_custom_table');

/*************************************************************************************
 *	Video Embed
 *************************************************************************************/

function omsc_sc_video_embed( $atts, $content = null ) {

	if(has_filter('omsc_sc_video_embed'))
		return apply_filters('omsc_sc_video_embed', $atts, $content);	
		
	extract(shortcode_atts(array(
		'maxwidth' => '0',
	), $atts));
	
	$maxwidth=intval($maxwidth);
	
	if(preg_match_all('#<iframe[^>]*src="(http://www\.youtube\.com[^"]+)"[^>]*>[\s\S]*?</iframe>#i',$content,$m)) {
		foreach($m[1] as $v) {
			if(strpos($v,'wmode=opaque') === false) {
				if(strpos($v,'?') === false)
					$content=str_replace($v,$v.'?wmode=opaque',$content);
				else
					$content=str_replace($v,$v.'&wmode=opaque',$content);
			}
		}
	}

	if($maxwidth)
		$out='<div style="max-width:'.$maxwidth.'px;margin:0 auto"><div class="omsc-responsive-box omsc-responsive-box-video">'.$content.'</div></div>';
	else
		$out='<div class="omsc-responsive-box omsc-responsive-box-video">'.$content.'</div>';
		
	return $out;
}
add_shortcode('video_embed', 'omsc_sc_video_embed');

/*************************************************************************************
 *	Map
 *************************************************************************************/

function omsc_sc_map( $atts, $content = null ) {

	if(has_filter('omsc_sc_map'))
		return apply_filters('omsc_sc_map', $atts, $content);	
		
	extract(shortcode_atts(array(
		'maxwidth' => '0',
		'type' => '',
	), $atts));
	
	$maxwidth=intval($maxwidth);
	
	if($type=='address') {
		$content='<iframe src="https://maps.google.com/maps?q='.urlencode($content).'&amp;output=embed" height="230" width="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';
	}
	
	if($maxwidth)
		$out='<div style="max-width:'.$maxwidth.'px;margin:0 auto"><div class="omsc-responsive-box omsc-responsive-box-map">'.$content.'</div></div>';
	else
		$out='<div class="omsc-responsive-box omsc-responsive-box-map">'.$content.'</div>';
		
	return $out;
}
add_shortcode('map', 'omsc_sc_map');

/*************************************************************************************
 *	Blockquote
 *************************************************************************************/

function omsc_sc_blockquote( $atts, $content = null ) {

	if(has_filter('omsc_sc_blockquote'))
		return apply_filters('omsc_sc_blockquote', $atts, $content);	
		
	extract(shortcode_atts(array(
		'author' => '',
	), $atts));
	
	$out='<blockquote class="omsc-blockquote"><div class="omsc-blockquote-inner">'.$content.'</div>'.($author?'<div class="omsc-blockquote-footer"><cite class="omsc-blockquote-author">'.$author.'</cite></div>':'').'</blockquote>';
		
	return $out;
}
add_shortcode('blockquote', 'omsc_sc_blockquote');

/*************************************************************************************
 *	Visibility
 *************************************************************************************/

function omsc_sc_visibility( $atts, $content = null ) {

	if(has_filter('omsc_sc_visibility'))
		return apply_filters('omsc_sc_visibility', $atts, $content);		
	
	extract(shortcode_atts(array(
		'show' => '',
		'display' => '',
	), $atts));
	
	if(!$display && $show)
		$display=$show;
	
	$out='';
	if($display) {
		$display=explode(' ',$display);
		$display_=array();
		$display_retina_=array();
		foreach($display as $v) {
			if(strcasecmp($v,'retina') == 0 || strcasecmp($v,'non-retina') == 0)
				$display_retina_[]='omsc-visibility-'.trim($v);
			else
				$display_[]='omsc-visibility-'.trim($v);
		}
		
		$out=do_shortcode($content);
		if(!empty($display_)) {
			$out='<div class="'.implode(' ',$display_).'">'.$out.'</div>';
		}
		if(!empty($display_retina_)) {
			$out='<div class="'.implode(' ',$display_retina_).'">'.$out.'</div>';
		}
	}
	
	return $out;

}
add_shortcode('visibility', 'omsc_sc_visibility');

/*************************************************************************************
 *	Pricing Table
 *************************************************************************************/

function omsc_sc_pricing( $atts, $content = null ) {

	if(has_filter('omsc_sc_pricing'))
		return apply_filters('omsc_sc_pricing', $atts, $content);	
		
	$out='';
	
	$cells=array();
	//$max_row=0;
	
	if(preg_match_all('#[\s\S]*?\[pricing_column([^]]*)\]([\s\S]*?)\[/pricing_column\][\s\S]*?#',$content,$cols)) {
		
		$i=0;
		foreach($cols[2] as $k=>$col) {
			
			if(preg_match_all('#[\s\S]*?\[(pricing_column_name[^]]*|price[^]]*|line|button[^]]*)\]([\s\S]*?)\[/(pricing_column_name|price|line|button)\][\s\S]*?#',$col,$rows)) {
				
				$cells[$i]=array('rows'=>array(),'atts'=>array());
				if(preg_match('#featured=".+"#',$cols[1][$k])) {
					$cells[$i]['atts']['featured']=true;
				}
								
				$j=0;
				foreach($rows[2] as $k_=>$row) {
					
					if(substr($rows[1][$k_],0,19) == 'pricing_column_name'){
						$comment='';
						if( preg_match('#comment="([^"]*)"#',$rows[1][$k_],$m) )
							$comment=$m[1];
						$cells[$i]['rows'][$j]='<li class="omsc-pricing-title">'.do_shortcode($row).($comment?'<div class="omsc-pricing-title-comment">'.$comment.'</div>':'').'</li>';
					} elseif($rows[1][$k_] == 'line') {
						$cells[$i]['rows'][$j]='<li>'.do_shortcode($row).'</li>';
					} elseif(substr($rows[1][$k_],0,5) == 'price') {
						$comment='';
						if( preg_match('#comment="([^"]*)"#',$rows[1][$k_],$m) )
							$comment=$m[1];
						$cells[$i]['rows'][$j]='<li class="omsc-pricing-price">'.do_shortcode($row).($comment?'<div class="omsc-price-comment">'.$comment.'</div>':'').'</li>';
					} elseif(substr($rows[1][$k_],0,6) == 'button')
						$cells[$i]['rows'][$j]='<li class="omsc-pricing-button">'.do_shortcode('['.$rows[1][$k_].']'.$row.'[/button]').'</li>';
					
					$j++;
				}

				$i++;				
			}
			
		}
		
		$out .= '<div class="omsc-pricing-table-wrapper"><div class="omsc-pricing-table">';

		foreach($cells as $c) {
			
			$out .= '<ul class="omsc-pricing-column'.(@$c['atts']['featured']?' omsc-pricing-column-featured':'').'">';
			
			foreach($c['rows'] as $r) {
				
				$out .= $r;
				
			}
			
			$out .='</ul>';
		}

		$out .= '<div class="omsc-clear"></div></div></div>';
		
	}
	
	
	return $out;
}
add_shortcode('pricing', 'omsc_sc_pricing');

/*************************************************************************************
 *	Recent Posts
 *************************************************************************************/

function omsc_sc_recent_posts( $atts, $content = null ) {
	global $post, $readmore;

	if(has_filter('omsc_sc_recent_posts'))
		return apply_filters('omsc_sc_recent_posts', $atts, $content);	
			
	$readmore_=$readmore;
	$readmore=false;

	extract(shortcode_atts(array(
		'count' => 3,
		'thumbnail' => false,
		'date' => false,
		'excerpt' => false,
		'category' => 0,
		'ids' => '',
	), $atts));
	
	$out='';

	$args=array('posts_per_page' => -1);

	if($ids) {
		$args['post__in']=explode(',',$ids);
		$args['orderby']='post__in';		
	} else {
		$count=intval($count);
		$args['posts_per_page']=$count;

		$category_=trim($category);
		
		$category=intval($category);
		/* Fetching category id by slug if slug specified */
		if( !$category && $category_ != '' && $category_ != '0' ) {
			if ($categoryObj = get_category_by_slug($category_))
				$category=$categoryObj->term_id;
		}
		
		if($category > 0)
			$args['category__in']=array($category);
	}

	$q = new WP_Query($args);
			
	if ($q->have_posts()) {

		$out .= '<div class="omsc-recent-posts">';
	
		$i=1;

		while ($q->have_posts()) {
			$q->the_post(); 
			
			$out .= '<div class="omsc-recent-posts-item omsc-one-third'.(($i%3==0)?' omsc-last':'').'">';

				$out .= '<div class="omsc-recent-posts-title"><h3><a href="'. get_permalink() .'">'. get_the_title() .'</a></h3></div>';
	
				if( $thumbnail && has_post_thumbnail() ) {
	
					$img = wp_get_attachment_image_src( get_post_thumbnail_id(), apply_filters('omsc_sc_recent_posts_img_size', 'medium'));
					if($img) {
						$img_html=apply_filters('omsc_sc_recent_posts_img', '<a href="'. get_permalink() .'"><img src="'.$img[0].'" alt="'.esc_attr($post->post_title).'" /></a>', array(
							'img_src' => $img[0],
							'link' => get_permalink(),
							'alt' => $post->post_title,
						));
						$out.='<div class="omsc-recent-posts-thumb">'.$img_html.'</a></div>';
					}
				}
				
				if($date) {
					$out.='<div class="omsc-recent-posts-date">'. get_the_time( get_option('date_format') ) .'</div>';
				}
				
				if($excerpt) {
					$out.='<div class="omsc-recent-posts-excerpt">'.apply_filters('omsc_sc_recent_posts_excerpt',get_the_excerpt()).'</div>';
				}
			
			$out .='</div>';
			
			$i++;
			
		}

		$out.='<div class="omsc-clear"></div>';
		$out.='</div>';

	}
	
	wp_reset_query();

	$readmore=$readmore_;
			
	return $out;
}
add_shortcode('recent_posts', 'omsc_sc_recent_posts');

/*************************************************************************************
 *	Clear
 *************************************************************************************/

function omsc_sc_clear( $atts, $content = null ) {
	
	if(has_filter('omsc_sc_clear'))
		return apply_filters('omsc_sc_clear', $atts, $content);	
		
	return '<div class="omsc-clear"></div>';
}
add_shortcode('clear', 'omsc_sc_clear');

/*************************************************************************************
 *	Logos
 *************************************************************************************/

function omsc_sc_logos( $atts, $content = null ) {

	if(has_filter('omsc_sc_logos'))
		return apply_filters('omsc_sc_logos', $atts, $content);
		
	$html = str_get_html($content);
	$logos='';
	foreach($html->find('img') as $img) {
		$img->removeAttribute('class');
		$img->removeAttribute('align');
		$img->removeAttribute('style');
		if($img->hasAttribute('data-original')) {
			$img->setAttribute('class','lazyload');
		}

		$parent=$img->parent();
		
		if($parent->tag == 'a') {
			$parent->removeAttribute('class');
			$parent->removeAttribute('align');
			$parent->removeAttribute('style');
			$parent->innertext = $img->outertext;
			
			$logos.='<div class="omsc-logos-item">'.$parent->outertext.'</div>';
		} else {
			$logos.='<div class="omsc-logos-item">'.$img->outertext.'</div>';
		}
	}
			
	return '<div class="omsc-logos">'.$logos.'<div class="omsc-clear"></div></div>';

}
add_shortcode('logos', 'omsc_sc_logos');

/*************************************************************************************
 *	Full width section
 *************************************************************************************/

function omsc_sc_full_width_section( $atts, $content = null ) {

	if(has_filter('omsc_sc_full_width_section'))
		return apply_filters('omsc_sc_full_width_section', $atts, $content);		
	
	// this is theme related shortcode, filter should be added in the theme
	
	return do_shortcode($content);

}
add_shortcode('full_width_section', 'omsc_sc_full_width_section');

/*************************************************************************************
 *	Counter
 *************************************************************************************/

function omsc_sc_counter( $atts, $content = null ) {

	if(has_filter('omsc_sc_counter'))
		return apply_filters('omsc_sc_counter', $atts, $content);		
	
	extract(shortcode_atts(array(
		'number' => '',
		'prefix' => '',
		'suffix' => '',
		'title' => '',
		'color' => '',
		'size' => '',
		'animation' => 0,
	), $atts));
	
	$animation=intval($animation);
	
	$out='';

	$classes=array('omsc-counter');
	
	$classes_number=array('omsc-counter-number');
	$styles_number=array();
	
	if($size)
		$classes[]='size-'.$size;
		
	if($color == 'theme') 
		$classes_number[]='omsc-theme-color';
	elseif($color)
		$styles_number[]='color:'.$color;
				
	$out.=
		'<div class="'.implode(' ',$classes).'"'.($number?' data-count="'.intval($number).'"':'').($prefix?' data-prefix="'.$prefix.'"':'').($suffix?' data-suffix="'.$suffix.'"':'').($animation?' data-animation="'.$animation.'"':'').'>'.
			'<div class="'.implode(' ',$classes_number).'"'.($styles_number ? ' style="'.implode(';',$styles_number).'"' : '').'>'.$prefix.$number.$suffix.'</div>'.
			($title ? '<div class="omsc-counter-title">'.$title.'</div>' : '').
		'</div>'
	;
	
	return $out;

}
add_shortcode('counter', 'omsc_sc_counter');
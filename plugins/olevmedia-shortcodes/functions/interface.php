<?php

include_once('interface-options.php');
include_once('interface-shortcodes-generator.php');

function omsc_admin_enqueue_scripts($hook){
	
	if( 'post.php' != $hook && 'post-new.php' != $hook && 'widgets.php' != $hook )
		return;

	wp_enqueue_script('jquery');
	wp_enqueue_script('omsc-core', $GLOBALS['omShortcodesPlugin']['path_url'].'assets/js/core.js', array('jquery'));	

	wp_enqueue_style( 'media-views' );
	wp_enqueue_style('omsc-admin-style', $GLOBALS['omShortcodesPlugin']['path_url'].'assets/css/admin-style.css', array(), $GLOBALS['omShortcodesPlugin']['version']);	
	
	wp_enqueue_style('wp-color-picker');
	wp_enqueue_script('wp-color-picker');
	
}
add_action( 'admin_enqueue_scripts', 'omsc_admin_enqueue_scripts' );


function omsc_popup_callback() {

	echo '<div class="omsc-popup-wrapper">';
		echo '<div class="omsc-popup-title"><h2>'. __('Insert shortcode: ', 'om_shortcodes') . $_POST['title'] . '</h2></div>';
		echo '<div class="omsc-clearfix">';
			echo '<div class="omsc-popup-button-box omsc-popup-button-box-top">';
				echo '<input type="button" class="omsc-popup-submit-button button button-primary button-large" data-shortcode-id="'.$_POST['id'].'" value="'.__('Insert Shortcode', 'om_shortcodes').'" />';
			echo '</div>';
			echo '<div class="omsc-popup-options-box">';
			echo omsc_shortcodes_options($_POST['id']);
			echo '</div>';
			echo '<div class="omsc-popup-button-box omsc-popup-button-box-bottom">';
				echo '<input type="button" class="omsc-popup-submit-button button button-primary button-large" data-shortcode-id="'.$_POST['id'].'" value="'.__('Insert Shortcode', 'om_shortcodes').'" />';
			echo '</div>';
		echo '</div>';
	echo '</div>';
	echo '<script>omsc_browse_button_init(".omsc-popup-wrapper");</script>';
	echo omsc_shortcodes_js_generator($_POST['id']);
	
	exit();

}
add_action('wp_ajax_omsc_popup', 'omsc_popup_callback');


function omsc_shortcodes_options($id) {
	global $omsc_shortcodes_options;
	
	$out='';
	
	if(@$omsc_shortcodes_options[$id]) {
		foreach($omsc_shortcodes_options[$id]['options'] as $id=>$opt) {
			
			$opt['id']=$id;
			
			$line='';

			if($opt['type'] == 'info') {
				
				$line.= $opt['desc'];
				
			} else {
				
				$line.= '<div class="omsc-popup-option-title">'.@$opt['title'];
				if(isset($opt['desc']) && $opt['desc'])
					$line.='<div class="omsc-popup-option-title-note">'.$opt['desc'].'</div>';
				$line.= '</div>';
				
				$line.='<div class="omsc-popup-option-content">';
				
				switch ($opt['type']) {
	

					case 'select':
						$line.='<select name="'.$opt['id'].'" id="'.$opt['id'].'">';
						foreach($opt['options'] as $k=>$v) {
							$line .= '<option value="'.$k.'"'.($k==$opt['std']?' selected="selected"':'').'>'.$v.'&nbsp;&nbsp;&nbsp;&nbsp;</option>';
						}
						$line.= '</select>';
					break;
	
					case 'fontawesomeicon':
						$line.= '
							<select name="'.$opt['id'].'" id="'.$opt['id'].'"><option value="">'.__('No icon','om_shortcodes').'</option>';
						$icons=omsc_get_fonawesome_list();
						foreach($icons as $v) {
							$line .= '<option value="'.$v.'"'.($v==$opt['std']?' selected="selected"':'').'>'.$v.'&nbsp;&nbsp;&nbsp;&nbsp;</option>';
						}
						$line.= '</select>';
						$line.= '<div class="omsc-popup-fontawesomepreview"><div class="omsc-popup-fontawesomepreview-title"><a href="#" id="omsc-popup-fontawesomepreview-link">'.__('Icons Preview','om_shortcodes').'</a></div><div class="omsc-popup-fontawesomepreview-content omsc-clearfix">';
						foreach($icons as $v) {
							$line .= '<div class="omsc-item" title="'.$v.'" data-icon="'.$v.'" data-option-id="'.$opt['id'].'"><i class="fa fa-'.$v.'"></i></div>';
						}
						$line.= '</div></div>';
					break;				
					
					case 'checkbox':
						$line.= '
							<input type="checkbox" name="'.$opt['id'].'" id="'.$opt['id'].'" value="true" '.('true'==$opt['std']?' checked="checked"':'').' />
						';
					break;
				
					case 'text':
						$line.= '
							<input type="text" class="widefat" name="'.$opt['id'].'" id="'.$opt['id'].'" value="'.esc_attr($opt['std']).'" />
						';
					break;
						
					case 'textarea':
						$r=8;
						if(isset($opt['rows']) && $opt['rows']) {
							$r=$opt['rows'];
						}
						$line.= '
							<textarea class="widefat" rows="'.$r.'" name="'.$opt['id'].'" id="'.$opt['id'].'" >'.esc_html($opt['std']).'</textarea>
						';
					break;
					
					case 'link_target':
						$line.='<select name="'.$opt['id'].'" id="'.$opt['id'].'">';
						$opt['options']=array(
							''=>__('Default','om_shortcodes'),
							'_blank'=>__('_blank','om_shortcodes'),
							'_parent'=>__('_parent','om_shortcodes'),
							'_top'=>__('_top','om_shortcodes'),
						);
						foreach($opt['options'] as $k=>$v) {
							$line .= '<option value="'.$k.'"'.($k==$opt['std']?' selected="selected"':'').'>'.$v.'&nbsp;&nbsp;&nbsp;&nbsp;</option>';
						}
						$line.= '</select>';
					break;
				
					case 'color':
						$line.= '
							<input class="wp-color-picker-field" name="'. $opt['id'] .'" id="'. $opt['id'] .'" type="text" value="'. $opt['std'] .'"  data-default-color="'. $opt['std'] .'" />
						';
					break;

					case 'text_browse':
						$line.= '
							<input class="widefat" style="width:75%" name="'. $opt['id'] .'" id="'. $opt['id'] .'" type="text" value="'. $opt['std'] .'" />
							<a href="#" class="button omsc-browse-button" rel="'.$opt['id'].'"'.(@$opt['library']?' data-library="'.$opt['library'].'"':'').' data-choose="'.__('Choose a file','om_theme').'" data-select="'.__('Select','om_theme').'">'.__('Browse','om_theme').'</a>
						';
					break;
/*						
					case 'choose_gallery':
						$line.= '
							<select name="'.$opt['id'].'" id="'.$opt['id'].'">';
								
						$galleries = get_posts( array(
								'numberposts' => -1,
						    'sort_order' => 'ASC',
						    'sort_column' => 'post_title',
						    'hierarchical' => false,
						    'post_type' => 'galleries'
						));
	
						if(!empty($galleries)) {
							foreach($galleries as $gallery) {
								$line .= '<option value="'.$gallery->ID.'">'.$gallery->post_title.'&nbsp;&nbsp;&nbsp;&nbsp;</option>';
							}
						} else {
							$line .= '<option value="0">&nbsp;&nbsp;&nbsp;&nbsp;</option>';
						}
						$line.= '</select>';
						if(empty($galleries))
							$line.= ' <b><i>'.__('No galleries found','om_shortcodes').'</i></b>';
					break;
*/					
					case 'posts_category':

						$args = array(
							'show_option_all'    => __('All Categories', 'om_theme'),
							'show_option_none'   => __('No Categories', 'om_theme'),
							'hide_empty'         => 0, 
							'echo'               => 0,
							'selected'           => @$opt['std'],
							'hierarchical'       => 0, 
							'name'               => $opt['id'],
							'id'         		     => $opt['id'],
							'class'              => '',
							'depth'              => 0,
							'tab_index'          => 0,
							'taxonomy'           => 'category',
							'hide_if_empty'      => false 	
						);
				
						$line .= wp_dropdown_categories( $args );
	
					break;

					
					case 'portfolio_category':

						$args = array(
							'show_option_all'    => __('All Categories', 'om_theme'),
							'show_option_none'   => __('No Categories', 'om_theme'),
							'hide_empty'         => 0, 
							'echo'               => 0,
							'selected'           => @$opt['std'],
							'hierarchical'       => 0, 
							'name'               => $opt['id'],
							'id'         		     => $opt['id'],
							'class'              => '',
							'depth'              => 0,
							'tab_index'          => 0,
							'taxonomy'           => 'portfolio-type',
							'hide_if_empty'      => false 	
						);
				
						$line .= wp_dropdown_categories( $args );

					break;

/*					
					case 'testimonials_category':

						$args = array(
							'show_option_all'    => __('All Categories', 'om_theme'),
							'show_option_none'   => __('No Categories', 'om_theme'),
							'hide_empty'         => 0, 
							'echo'               => 0,
							'selected'           => @$opt['std'],
							'hierarchical'       => 0, 
							'name'               => $opt['id'],
							'id'         		     => $opt['id'],
							'class'              => '',
							'depth'              => 0,
							'tab_index'          => 0,
							'taxonomy'           => 'testimonials-type',
							'hide_if_empty'      => false 	
						);
				
						$line .= wp_dropdown_categories( $args );
	
					break;
									
*/									
									
				}
				
				if(isset($opt['fielddesc']) && $opt['fielddesc'])
					$line.='<div class="omsc-popup-option-field-note">'.$opt['fielddesc'].'</div>';
				
				$line.='</div>';
				
			}
			
			$line = apply_filters('omsc_shortcodes_option-'.$id.'-'.$opt['id'], $line, $opt);
			
			$out.='<div class="omsc-popup-option-line omsc-'.$opt['type'].' omsc-clearfix">'.$line.'</div>';
			
		}
	}
	
	return $out;
}
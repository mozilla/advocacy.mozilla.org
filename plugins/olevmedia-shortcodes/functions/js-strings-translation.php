<?php

function omsc_js_strings_translation() {
	$strings=array(
		'close' => __('Close', 'om_shortcodes'),
	);
	
	if(!empty($strings)) {
		$pairs=array();
		foreach($strings as $k=>$v) {
			$pairs[]=$k.':"'.esc_js($v).'"';
		}
		
		echo '<script>var omsc_translated_strings={'.implode(',',$pairs).'}</script>';
	}
}

add_action('admin_head', 'omsc_js_strings_translation');

?>
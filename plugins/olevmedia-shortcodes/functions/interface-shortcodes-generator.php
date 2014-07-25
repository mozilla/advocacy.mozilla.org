<?php

$omsc_shortcodes_generators=array();

$omsc_shortcodes_generators['columns'] = <<<EOF
	var size=$('#omsc_column_size').val();
	var last=$('#omsc_column_last').attr('checked');
	if(size.substr(0,6) == 'combo_') {
		if(size == 'combo_one_half') {
			code.before='[one_half]';
			code.after='<br />Column 1 content here<br />[/one_half][one_half_last]<br />Column 2 content here<br />[/one_half_last]';
		}
		else if(size == 'combo_one_third') {
			code.before='[one_third]';
			code.after='<br />Column 1 content here<br />[/one_third][one_third]<br />Column 2 content here<br />[/one_third][one_third_last]<br />Column 3 content here<br />[/one_third_last]';
		}
		else if(size == 'combo_one_fourth') {
			code.before='[one_fourth]';
			code.after='<br />Column 1 content here<br />[/one_fourth][one_fourth]<br />Column 2 content here<br />[/one_fourth][one_fourth]<br />Column 3 content here<br />[/one_fourth][one_fourth_last]<br />Column 4 content here<br />[/one_fourth_last]';
		}
	} else {
		if(last) {
			code.before='['+size+'_last]';
			code.after='[/'+size+'_last]';
		} else {
			code.before='['+size+']';
			code.after='[/'+size+']';
		}
	}
EOF;

$omsc_shortcodes_generators['buttons'] = <<<EOF
	var href=$('#omsc_button_href').val();
	var title=$('#omsc_button_title').val();
	var style=$('#omsc_button_style').val();
	var color=$('#omsc_button_customcolor').val();
	if($('#omsc_button_color').val() == 'theme')
		color='';
	var hovercolor=$('#omsc_button_hovercolor').val();
	var textcolor=$('#omsc_button_textcolor').val();
	var texthovercolor=$('#omsc_button_texthovercolor').val();
	var target=$('#omsc_button_target').val();
	var size=$('#omsc_button_size').val();
	var text=$('#omsc_button_text').val();
	var tooltip=$('#omsc_button_tooltip').val();
	var icon=$('#omsc_button_icon').val();
	var iconcolor=$('#omsc_button_icon_color').val();
	var iconcolor_color=$('#omsc_button_icon_color_color').val();
	var width=$('#omsc_button_width').val();
	
	tooltip=omsc_shortcodes_attr_esc(tooltip);

	if(size == 'xlarge') {
		title=omsc_shortcodes_attr_esc(title);
		code.before='[button href="'+href+'" style="'+style+'" size="'+size+'" title="'+title+'"'+(width!=''?' width="'+width+'"':'')+(color?' color="'+color+'"':'')+(hovercolor!=''?' hovercolor="'+hovercolor+'"':'')+(textcolor!=''?' textcolor="'+textcolor+'"':'')+(texthovercolor!=''?' texthovercolor="'+texthovercolor+'"':'')+(target!=''?' target="'+target+'"':'')+(tooltip!=''?' tooltip="'+tooltip+'"':'')+(icon!=''?' icon="'+icon+'"':'')+(iconcolor=='custom'&&iconcolor_color?' iconcolor="'+iconcolor_color+'"':'')+']'+text+'[/button]';
	}
	else
		code.before='[button href="'+href+'" style="'+style+'" size="'+size+'"'+(width!=''?' width="'+width+'"':'')+(color?' color="'+color+'"':'')+(hovercolor!=''?' hovercolor="'+hovercolor+'"':'')+(textcolor!=''?' textcolor="'+textcolor+'"':'')+(texthovercolor!=''?' texthovercolor="'+texthovercolor+'"':'')+(target!=''?' target="'+target+'"':'')+(tooltip!=''?' tooltip="'+tooltip+'"':'')+(icon!=''?' icon="'+icon+'"':'')+(iconcolor=='custom'&&iconcolor_color?' iconcolor="'+iconcolor_color+'"':'')+']'+title+'[/button]';
EOF;

$omsc_shortcodes_generators['animation'] = <<<EOF
	var effect=$('#omsc_animation_effect').val();
	var content=$('#omsc_animation_content').val();
	var delay=$('#omsc_animation_delay').val();

	var count=parseInt(delay);
	if(isNaN(delay))
		delay=0;
	
	code.before='[animation effect="'+effect+'"'+(delay?' delay="'+delay+'"':'')+']'+content;
	code.after='[/animation]';
EOF;

$omsc_shortcodes_generators['divider'] = <<<EOF
	var style=$('#omsc_divider_style').val();
	var color=$('#omsc_divider_customcolor').val();
	var bwidth=$('#omsc_divider_bwidth').val();
	var icon=$('#omsc_divider_icon').val();
	var width=$('#omsc_divider_width').val();
	var full_width=$('#omsc_divider_full_width').attr('checked');
		
	if($('#omsc_divider_color').val() == 'default')
		color='';
	else if($('#omsc_divider_color').val() == 'theme')
		color='theme';
	
	code.before='[divider'
		+(style?' style="'+style+'"':'')
		+(bwidth?' border="'+bwidth+'"':'')
		+(color?' color="'+color+'"':'')
		+(icon?' icon="'+icon+'"':'')
		+(width?' width="'+width+'"':'')
		+(full_width?' full_width="true"':'')
	+']';
	
EOF;

$omsc_shortcodes_generators['dropcaps'] = <<<EOF
	var title=$('#omsc_dropcap_title').val();
	var size=$('#omsc_dropcap_size').val();
	if($('#omsc_dropcap_bgcolor').length) {
		var bgcolor=$('#omsc_dropcap_bgcolor').val();
		if(bgcolor == 'custom')
			var bgcolor=$('#omsc_dropcap_custombgcolor').val();
	} else {
		var bgcolor=$('#omsc_dropcap_custombgcolor').val();
	}
	var textcolor=$('#omsc_dropcap_textcolor').val();
	var shape=$('#omsc_dropcap_shape').val();
	
	code.before='[dropcap '+(size!=''?'size="'+size+'"':'')+(bgcolor!=''?' color="'+bgcolor+'"':'')+(shape!=''?' shape="'+shape+'"':'')+(textcolor!=''?' textcolor="'+textcolor+'"':'')+']'+title+'[/dropcap]';
	
EOF;

$omsc_shortcodes_generators['toggle'] = <<<EOF
	var title=$('#omsc_toggle_title').val();
	var content=$('#omsc_toggle_content').val();
	var state=$('#omsc_toggle_state').val();
	
	title=omsc_shortcodes_attr_esc(title);

	code.before='[toggle title="'+title+'"'+(state!=''?' state="'+state+'"':'')+']'+content+'[/toggle]';
EOF;

$omsc_shortcodes_generators['accordion'] = <<<EOF
	var count=parseInt($('#omsc_accordion_count').val());
	var multi=$('#omsc_accordion_multiopen').attr('checked');
	if(isNaN(count))
		count=1;
	if(count < 1)
		count = 1;

	code.before='[accordion'+(multi?' multiopen="true"':'')+']'+"<br/>";
	for(i=1;i<=count;i++)
		code.before+='[toggle title="Item '+i+' Title"'+((i==1)?' state="opened"':'')+']<p>Content for item '+i+'</p>[/toggle]'+"<br/>";
	code.before+='[/accordion]';
EOF;

$omsc_shortcodes_generators['tabs'] = <<<EOF
	var count=parseInt($('#omsc_tabs_count').val());
	if(isNaN(count))
		count=1;
	if(count < 1)
		count = 1;

	code.before='[tabs]'+"<br/>";
	for(i=1;i<=count;i++)
		code.before+='[tab title="Tab '+i+' Title"]<p>Content for tab'+i+'</p>[/tab]'+"<br/>";
	code.before+='[/tabs]';
EOF;

/*
$omsc_shortcodes_generators['aligned'] = <<<EOF
	var desc=$('#omsc_aligned_desc').val();
	var content=$('#omsc_aligned_content').val();
	var align=$('#omsc_aligned_align').val();
	
	desc=omsc_shortcodes_attr_esc(desc);

	code.before='[align type="'+align+'" title="'+desc+'"]'+content+'[/align]';
EOF;
*/

$omsc_shortcodes_generators['infobox'] = <<<EOF

	var color=$('#omsc_infobox_customcolor').val();
	if($('#omsc_infobox_color').val() == 'theme') {
		color='';
	}
	var content=$('#omsc_infobox_text').val();
	var icon=$('#omsc_infobox_icon').val();
	var textcolor=$('#omsc_infobox_textcolor').val();

	code.before='[infobox'+(color?' color="'+color+'"':'')+(textcolor?' textcolor="'+textcolor+'"':'')+(icon?' icon="'+icon+'"':'')+']'+content+'[/infobox]';
EOF;

$omsc_shortcodes_generators['box'] = <<<EOF
	var title=$('#omsc_box_title').val();
	var content=$('#omsc_box_content').val();
	var border_width=$('#omsc_box_border_width').val();
	var border_style=$('#omsc_box_border_style').val();
	var border_color=$('#omsc_box_border_customcolor').val();
	var bg_color=$('#omsc_box_bg_customcolor').val();
	var bg_image=$('#omsc_box_bg_image').val();
	var bg_image_pos=$('#omsc_box_bg_image_pos').val();
	var icon=$('#omsc_box_icon').val();
	var icon_style=$('#omsc_box_icon_style').val();
	var icon_shape=$('#omsc_box_icon_shape').val();
	var align=$('#omsc_box_align').val();
	var text_color=$('#omsc_box_text_color').val();
	var height=$('#omsc_box_height').val();
	
	
	if(	$('#omsc_box_border_color').val() == 'theme' ) {
		border_color='';
	}
	if(	$('#omsc_box_bg_color').val() == 'theme' ) {
		bg_color='theme';
	} else if(	$('#omsc_box_bg_color').val() == 'none' ) {
		bg_color='';
	}
	
	border_width=parseInt(border_width);
	if(isNaN(border_width))
		border_width=0;
	if(border_width < 0)
		border_width=0;
		
	height=parseInt(height);
	if(isNaN(height))
		height=0;
	if(height < 0)
		height=0;
	
	code.before='[box '+
		'title="'+title+'"'+
		(border_width?' border_width="'+border_width+'"':'')+
		(border_width && border_color?' border_color="'+border_color+'"':'')+
		(border_width && border_style?' border_style="'+border_style+'"':'')+
		(bg_color?' bg_color="'+bg_color+'"':'')+
		(bg_image?' bg_image="'+bg_image+'"':'')+
		(bg_image && bg_image_pos?' bg_image_pos="'+bg_image_pos+'"':'')+
		(icon?' icon="'+icon+'"':'')+
		(icon && icon_style?' icon_style="'+icon_style+'"':'')+
		(icon && icon_shape?' icon_shape="'+icon_shape+'"':'')+
		(align?' align="'+align+'"':'')+
		(text_color?' text_color="'+text_color+'"':'')+
		(height?' height="'+height+'"':'')+
	']'+content+'[/box]';
EOF;

$omsc_shortcodes_generators['biginfobox'] = <<<EOF
	var color=$('#omsc_biginfobox_customcolor').val();
	if($('#omsc_biginfobox_color').val() == 'theme') {
		color='';
	}
	var textcolor=$('#omsc_biginfobox_textcolor').val();
	var content=$('#omsc_biginfobox_text').val();
	var full_width=$('#omsc_biginfobox_fullwidth').attr('checked');
	var title=$('#omsc_biginfobox_title').val();
	var button_title=$('#omsc_biginfobox_button_title').val();
	var href=$('#omsc_biginfobox_button_href').val();
	var target=$('#omsc_biginfobox_button_target').val();
	var layout=$('#omsc_biginfobox_layout').val();
	
	title=omsc_shortcodes_attr_esc(title);

	code.before='[biginfobox '+(color?'color="'+color+'"':'')+(textcolor!=''?' textcolor="'+textcolor+'"':'')+(title!=''?' title="'+title+'"':'')+(href!=''?' href="'+href+'"':'')+(button_title!=''?' button_title="'+button_title+'"':'')+(target!=''?' target="'+target+'"':'')+(layout?' layout="'+layout+'"':'')+']'+content+'[/biginfobox]';
	
EOF;

$omsc_shortcodes_generators['icons'] = <<<EOF
	var icon=$('#omsc_icon_icon').val();
	var color=$('#omsc_icon_color').val();
	if(color == 'custom')
		color=$('#omsc_icon_customcolor').val();
	var color_color=$('#omsc_icon_color_color').val();
	
	var bordercolor=$('#omsc_icon_bordercustomcolor').val();
	if($('#omsc_icon_bordercolor').val() == 'theme')
		bordercolor='theme';
	else if($('#omsc_icon_bordercolor').val() == 'none') 
		bordercolor='';

	var bgcolor=$('#omsc_icon_bgcustomcolor').val();
	if($('#omsc_icon_bgcolor').val() == 'theme')
		bgcolor='theme';
	else if($('#omsc_icon_bgcolor').val() == 'none') 
		bgcolor='';	
	
	var size=$('#omsc_icon_size').val();

	code.before='[icon'+(icon!=''?' icon="'+icon+'"':'')+(size!=''?' size="'+size+'"':'')+(color?' color="'+color+'"':'')+(bordercolor?' bordercolor="'+bordercolor+'"':'')+(bgcolor?' bgcolor="'+bgcolor+'"':'')+']';
EOF;

$omsc_shortcodes_generators['marker'] = <<<EOF
	var title=$('#omsc_marker_title').val();
	var color=$('#omsc_marker_custombgcolor').val();
	var textcolor=$('#omsc_marker_textcolor').val();
	var tooltip=$('#omsc_marker_tooltip').val();
	
	tooltip=omsc_shortcodes_attr_esc(tooltip);
	
	code.before='[marker '+(color!=''?' color="'+color+'"':'')+(textcolor!=''?' textcolor="'+textcolor+'"':'')+(tooltip!=''?' tooltip="'+tooltip+'"':'')+']'+title+'[/marker]';
	
EOF;

$omsc_shortcodes_generators['bullets'] = <<<EOF
	var count=parseInt($('#omsc_bullets_count').val());
	var icon=$('#omsc_bullets_icon').val();
	var color=$('#omsc_bullets_icon_color').val();
	if(color == 'custom')
		color=$('#omsc_bullets_icon_customcolor').val();
	
	if(isNaN(count))
		count=1;
	if(count < 1)
		count = 1;

	code.before='[custom_list'+(icon!=''?' icon="'+icon+'"':'')+(color?' iconcolor="'+color+'"':'')+']'+"<ul>";
	for(i=1;i<=count;i++)
		code.before+='<li>Item '+i+'</li>';
	code.before+='</ul>[/custom_list]';
EOF;

$omsc_shortcodes_generators['bullets_individual'] = <<<EOF
	var count=parseInt($('#omsc_bullets_individual_count').val());
	var icon=$('#omsc_bullets_individual_icon').val();
	var color=$('#omsc_bullets_individual_icon_color').val();
	if(color == 'custom')
		color=$('#omsc_bullets_individual_icon_customcolor').val();
	
	if(isNaN(count))
		count=1;
	if(count < 1)
		count = 1;

	code.before='[ul]<br />';
	for(i=1;i<=count;i++)
		code.before+='[li'+(icon!=''?' icon="'+icon+'"':'')+(color?' iconcolor="'+color+'"':'')+']Item '+i+'[/li]<br />';
	code.before+='[/ul]';
EOF;

$omsc_shortcodes_generators['space'] = <<<EOF
	var size=parseInt($('#omsc_space_size').val());
	
	if(isNaN(size))
		size=0;

	if(size > 0)
		code.before='[space size="'+size+'"]';
	else
		code.before='[space]';
EOF;

$omsc_shortcodes_generators['table'] = <<<EOF
	var cols=parseInt($('#omsc_table_columns').val());
	var rows=parseInt($('#omsc_table_rows').val());
	var first_th=$('#omsc_table_first_heading').attr('checked');
					
	
	if(isNaN(cols))
		cols=0;
	if(isNaN(rows))
		rows=0;
		
	if(cols && rows) {
		code.before+='[table]';
		for(i=0;i<rows;i++) {
			code.before+='<p>[tr]';
			for(j=0;j<cols;j++) {
				if(i == 0 && first_th)
					code.before+=(j>0?' ':'')+'[th]Cell_Heading[/th]';
				else
					code.before+=(j>0?' ':'')+'[td]Cell_Content[/td]';
			}
			code.before+='[/tr]</p>';
		}
		code.before+='[/table]';
	}

EOF;

$omsc_shortcodes_generators['video'] = <<<EOF
	var vcode=$('#omsc_video_code').val();
	var maxwidth=parseInt($('#omsc_video_max_width').val());
	
	if(isNaN(maxwidth))
		maxwidth=0;
		
	code.before='[video_embed'+(maxwidth>0?' maxwidth="'+maxwidth+'"':'')+']'+vcode+'[/video_embed]';
	
EOF;

$omsc_shortcodes_generators['map'] = <<<EOF
	var address=$('#omsc_map_address').val();
	var mcode=$('#omsc_map_code').val();
	var maxwidth=parseInt($('#omsc_map_max_width').val());

	if(isNaN(maxwidth))
		maxwidth=0;

	var type,content;
	if(mcode) {
		type='code';
		content=mcode;
	}
	else if(address) {
		type='address';
		content=address;
	}

	if(type)
		code.before='[map type="'+type+'"'+(maxwidth>0?' maxwidth="'+maxwidth+'"':'')+']'+content+'[/map]';

EOF;

$omsc_shortcodes_generators['blockquote'] = <<<EOF
	var text=$('#omsc_blockquote_text').val();
	var author=$('#omsc_blockquote_author').val();
	
	author=omsc_shortcodes_attr_esc(author);
	
	code.before='[blockquote'+(author!=''?' author="'+author+'"':'')+']'+text+'[/blockquote]';
	
EOF;

$omsc_shortcodes_generators['visibility'] = <<<EOF
	var vcode=$('#omsc_visibility_code').val();
	var desktop=$('#omsc_visibility_desktop').attr('checked');
	var tablet=$('#omsc_visibility_tablet').attr('checked');
	var mobile=$('#omsc_visibility_mobile').attr('checked');
	var retina=$('#omsc_visibility_retina').attr('checked');
	var non_retina=$('#omsc_visibility_non_retina').attr('checked');
	//var mobile_landscape=$('#omsc_visibility_mobile_landscape').attr('checked');
	//var mobile_portrait=$('#omsc_visibility_mobile_portrait').attr('checked');
	var show=[];
	if(desktop)
		show.push('desktop');
	if(tablet)
		show.push('tablet');
	if(mobile)
		show.push('mobile');
	if(retina)
		show.push('retina');
	if(non_retina)
		show.push('non-retina');
	//if(mobile_landscape)
	//	show.push('mobile-landscape');
	//if(mobile_portrait)
	//	show.push('mobile-portrait');
	
	if(show.length)
		code.before='[visibility display="'+show.join(' ')+'"]'+vcode+'[/visibility]';
	
EOF;

$omsc_shortcodes_generators['pricing'] = <<<EOF
	var cols=parseInt($('#omsc_pricing_columns').val());
	var rows=parseInt($('#omsc_pricing_rows').val());
	
	if(isNaN(cols))
		cols=0;
	if(isNaN(rows))
		rows=0;
		
	if(cols && rows) {
		code.before+='[pricing]';
		for(i=0;i<cols;i++) {
			code.before+='<p>[pricing_column'+(i==0?' featured="yes"':'')+']<br />[pricing_column_name comment="comment here"]Column '+(i+1)+' Name[/pricing_column_name]<br />[price comment="per month"]$100[/price]';
			for(j=0;j<rows;j++) {
				code.before+='<br />[line]Parameter'+(j+1)+'[/line]';
			}
			code.before+='<br />[button href="#"]SignUp[/button]<br />[/pricing_column]</p>';
		}
		code.before+='[/pricing]';
	}

EOF;

$omsc_shortcodes_generators['recent_posts'] = <<<EOF
	var count=$('#omsc_recent_posts_count').val();
	var category=$('#omsc_recent_posts_category').val();
	var date=$('#omsc_recent_posts_date').attr('checked');
	var thumbnail=$('#omsc_recent_posts_thumbnail').attr('checked');
	var excerpt=$('#omsc_recent_posts_excerpt').attr('checked');
	var ids=$('#omsc_recent_posts_ids').val();
	if(ids) {
		count='';
		category='';
	}					
	
	code.before='[recent_posts'+(ids?' ids="'+ids+'"':'')+(count?' count="'+count+'"':'')+(date?' date="true"':'')+(thumbnail?' thumbnail="true"':'')+(excerpt?' excerpt="true"':'')+(category!=0&&category!='-1'?' category="'+category+'"':'')+']';

EOF;

$omsc_shortcodes_generators['full_width'] = <<<EOF
	var color=$('#omsc_fullwidth_bg_color').val();
	var textcolor=$('#omsc_fullwidth_text_color').val();
	var image=$('#omsc_fullwidth_bg_image').val();
	var bgpos=$('#omsc_fullwidth_bg_image_pos').val();
	var bgatt=$('#omsc_fullwidth_bg_image_att').val();
	var video=$('#omsc_fullwidth_video_src').val();
	var text=$('#omsc_fullwidth_text').val();
	var video_mp4=$('#omsc_fullwidth_video_mp4').val();
	var video_m4v=$('#omsc_fullwidth_video_m4v').val();
	var video_webm=$('#omsc_fullwidth_video_webm').val();
	var video_ogv=$('#omsc_fullwidth_video_ogv').val();
	var video_wmv=$('#omsc_fullwidth_video_wmv').val();
	var video_flv=$('#omsc_fullwidth_video_flv').val();
	var no_paddings=$('#omsc_fullwidth_no_paddings').attr('checked');
	
	code.before='[full_width_section'
		+(color?' color="'+color+'"':'')
		+(textcolor?' textcolor="'+textcolor+'"':'')
		+(no_paddings?' no_paddings="true"':'')
		+(image?' image="'+image+'"':'')
		+(image&&bgpos?' bgpos="'+bgpos+'"':'')
		+(image&&bgatt?' bgatt="'+bgatt+'"':'')
		+(video?' video="'+video+'"':'')
		+(video_mp4?' video_mp4="'+video_mp4+'"':'')
		+(video_m4v?' video_m4v="'+video_m4v+'"':'')
		+(video_webm?' video_webm="'+video_webm+'"':'')
		+(video_ogv?' video_ogv="'+video_ogv+'"':'')
		+(video_wmv?' video_wmv="'+video_wmv+'"':'')
		+(video_flv?' video_flv="'+video_flv+'"':'')
	+']'+text+'[/full_width_section]';

EOF;

$omsc_shortcodes_generators['portfolio'] = <<<EOF
	var count_=$('#omsc_portfolio_count').val();
	var layout=$('#omsc_portfolio_layout').val();
	var size=$('#omsc_portfolio_size').val();
	var ratio=$('#omsc_portfolio_ratio').val();
	var category=$('#omsc_portfolio_category').val();
	var randomize=$('#omsc_portfolio_randomize').attr('checked');
	var ids=$('#omsc_portfolio_ids').val();
	
	code.before='[portfolio'
		+(count_?' count="'+count_+'"':'')
		+(layout?' layout="'+layout+'"':'')
		+(size?' size="'+size+'"':'')
		+(ratio?' ratio="'+ratio+'"':'')
		+(category && category != '0'?' category="'+category+'"':'')
		+(randomize?' randomize="true"':'')
		+(ids?' ids="'+ids+'"':'')
	+']';

EOF;

$omsc_shortcodes_generators['counter'] = <<<EOF
	var number=$('#omsc_counter_number').val();
	var prefix=$('#omsc_counter_prefix').val();
	var suffix=$('#omsc_counter_suffix').val();
	var title=$('#omsc_counter_title').val();
	var color=$('#omsc_counter_color').val();
	var size=$('#omsc_counter_size').val();
	var animation=$('#omsc_counter_animation').val();

	if(color == 'custom')
		color=$('#omsc_counter_customcolor').val();
	var color_color=$('#omsc_icon_color_color').val();

	if(number != '') {
		code.before='[counter'
			+(number?' number="'+number+'"':'')
			+(prefix?' prefix="'+prefix+'"':'')
			+(suffix?' suffix="'+suffix+'"':'')
			+(title?' title="'+title+'"':'')
			+(color?' color="'+color+'"':'')
			+(size?' size="'+size+'"':'')
			+(animation!=''?' animation="'+animation+'"':'')
		+']';
	}

EOF;

function omsc_shortcodes_generators_modify() {
	global $omsc_shortcodes_generators;

	$omsc_shortcodes_generators = apply_filters('omsc_shortcodes_generators', $omsc_shortcodes_generators);
	
}
add_action('init', 'omsc_shortcodes_generators_modify');


function omsc_shortcodes_js_generator($shortcode_id) {
	global $omsc_shortcodes_generators;
	
	$js='';
	$js.='<script type="text/javascript">function omsc_shortcode_generator_'.$shortcode_id.'(){var $=jQuery;var code={before:"", after: ""};';
	if(isset($omsc_shortcodes_generators[$shortcode_id]))
		$js.=$omsc_shortcodes_generators[$shortcode_id];
	$js.='return code;}</script>';
	
	return $js;
	
}
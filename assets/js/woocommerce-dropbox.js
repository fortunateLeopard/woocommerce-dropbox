jQuery(document).ready(function(e){if("object"==typeof Dropbox){var t='<tr><td class="sort"></td><td class="file_name"><input type="text" class="input_text" placeholder="<%= translation_filename %>" name="_wc_file_names[]" value="<%= filename %>"></td><td class="file_url"><input type="text" class="input_text" placeholder="<%= translation_url %>" name="_wc_file_urls[]" value="<%= fileurl %>"></td><td class="file_url_choose" width="1%"><a href="#" class="button upload_file_button" data-choose="<%= translation_choosefile %>" data-update="<%= translation_insertfileurl %>"><%= translation_choosefile %></a></td><td width="1%"><a href="#" class="delete"><%= translation_delete %></a></td></tr>',o=_.template(t),l={success:function(t){e.each(t,function(t,l){var a=l.link,n=a.replace("dl=0","dl=1").replace(" ","%20"),r=o({filename:l.name,fileurl:n,translation_filename:woocommerce_dropbox_translation.filename,translation_url:woocommerce_dropbox_translation.url,translation_choosefile:woocommerce_dropbox_translation.choosefile,translation_choosefilebutton:woocommerce_dropbox_translation.choosefilebutton,translation_insertfileurl:woocommerce_dropbox_translation.insertfileurl,translation_delete:woocommerce_dropbox_translation["delete"]});e(r).appendTo(".downloadable_files .ui-sortable")})},linkType:"preview",multiselect:!0},a=Dropbox.createChooseButton(l);e(".downloadable_files .button.insert").after(a),e(a).css({margin:"3px 10px 0 0","float":"right"})}});
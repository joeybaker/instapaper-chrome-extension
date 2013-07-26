var button = function(archive){
  return '<a href="#" class="' + (archive ? 'archivebutton' : 'textbutton') + '" onclick="setTimeout(\'archiveOrDelete(' + (archive ? 0 : 1) + ')\', 0)">' + (archive ? '&nbsp;' : 'Delete') + '</a>'
}
$('.archivebutton, #title_label').remove()
$('#left_buttons').css({width: 'auto'}).append(button(true) + button())

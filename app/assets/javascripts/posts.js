$(document).ready( function () {
  // Only run if this ID is on the page.
  if ( $('#body-edit-area').length ) {
    updateFormView();
    
    $('#body-edit-area').keyup( function () {
      updateFormView();
    });
  }
  
  // Only run if this Class is on the page.
  if ( $('.markdown-area').length ) {
    updateShowView();
  }
});

function updateFormView() {
  var markdownText = $('#body-edit-area').val();
  
  $('#body-preview').html( 
    markdown.toHTML( markdownText )
  );
}

function updateShowView() {
  var markdownText = $('.markdown-area').text().trim();
  $('.markdown-area').html( markdown.toHTML( markdownText ) );
}

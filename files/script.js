var pageid;
var culture;

queueViewModel.pageReady(function (data) {
  pageid = $('body').attr('data-pageid');
  culture = $('body').attr('data-culture');
  
  // Initialize iFrameResizer
  // iFrameResize({ checkOrigin: false }, '#rightpanel_iframe');

  if (culture === 'en-US') {
    // $('#aUpdateEmail').text('Notify me');
    $('#MainPart_lbExpectedServiceTimeTimeZonePostfix').text('GMT');
  }
});
// queueViewModel.modelUpdated(function (data) {
// });

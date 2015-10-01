define(function(require) {
  var formname               = require('text!templates/snippet/formname.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , calldialog               = require('text!templates/snippet/calldialog.html')
  , calendar                 = require('text!templates/snippet/calendar.html')
  , fileinput                = require('text!templates/snippet/fileinput.html')
  , button                   = require('text!templates/snippet/button.html')
  , buttondouble             = require('text!templates/snippet/buttondouble.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/snippet/multipleradios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , selectbasic              = require('text!templates/snippet/selectbasic.html')
  , selectmultiple           = require('text!templates/snippet/selectmultiple.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , textinput                = require('text!templates/snippet/textinput.html');

  return {
    formname                   : formname
    , textinput                : textinput
    , calldialog               : calldialog
    , calendar                 : calendar
    , fileinput                : fileinput
    , singlebutton             : button
    , doublebutton             : buttondouble
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , selectbasic              : selectbasic
    , selectmultiple           : selectmultiple
    , textarea                 : textarea
    , textinput                : textinput
  }
});

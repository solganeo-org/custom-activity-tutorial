define(["postmonger"], function (Postmonger) {
    "use strict";
  
    var connection = new Postmonger.Session();
    var payload = {};
  
    $(window).ready(onRender);
  
    connection.on("initActivity", initialize);
    connection.on("requestedTokens", onGetTokens);
    connection.on("requestedEndpoints", onGetEndpoints);
  
    connection.on("clickedNext", onClickedNext);
    connection.on("clickedBack", onClickedBack);
    connection.on("gotoStep", onGotoStep);
  
    function onRender() {
      // JB will respond the first time 'ready' is called with 'initActivity'
      connection.trigger("ready");
  
      connection.trigger("requestTokens");
      connection.trigger("requestEndpoints");
  
    }
  
    function initialize(data) {
      if (data) {
        payload = data;
      }
  
      var message;
      var hasInArguments = Boolean(
        payload["arguments"] &&
          payload["arguments"].execute &&
          payload["arguments"].execute.inArguments &&
          payload["arguments"].execute.inArguments.length > 0
      );
  
      var inArguments = hasInArguments
        ? payload["arguments"].execute.inArguments
        : {};
  
      $.each(inArguments, function (index, inArgument) {
        $.each(inArgument, function (key, val) {
          if (key === "message") {
            message = val;
          }
        });
      });
  
    }
  
    function onGetTokens(tokens) {
      // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
      // console.log(tokens);
    }
  
    function onGetEndpoints(endpoints) {
      // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
      // console.log(endpoints);
    }
  
    function onClickedNext() {
      save()
    }

    function save() {
  
  
      payload["metaData"].isConfigured = true;
  
      connection.trigger("updateActivity", payload);
    }
  

  });
$(document).ready(function() {
  $("input[type='checkbox']").each(function() {
    var checkbox = $(this);
    var id = checkbox.attr("id");
    chrome.storage.sync.get(id, function(result) {
      for (key in result) {
        checkbox.prop("checked", result[key]);
      }
    });
  });
});

$("input[type='checkbox']").each(function() {
  var checkbox = $(this);
  checkbox.change(function() {
    var change = {};
    change[checkbox.attr("id")] = checkbox.is(":checked");
    chrome.storage.sync.set(change);
  });
});

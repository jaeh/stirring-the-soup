<script>
  //this script replaces the text of some menu items on soup
  var people = document.getElementById("menu")
     , as = people ? people.getElementsByTagName("a") : [];

  for (var a in as) {
    if ( as.hasOwnProperty(a) && as[a].href  ) {
      href = as[a].href;

      if ( href.indexOf('friends') > -1 && href.indexOf('tv') < 0   )  {
        as[a].innerHTML = 'Soup mates';
      } else if ( href.indexOf('/fof') > -1 && href.indexOf('tv') < 0 ) {
        as[a].innerHTML = 'Mates of mates';
      }
    }
  }
</script>

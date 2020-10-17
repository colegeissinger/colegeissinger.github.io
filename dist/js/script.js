(function() {
  const clicks = document.getElementById( 'dont-click' );
  const msg    = document.getElementById( 'unimportant' );
  let count    = 0;
  let dp       = false;

  const clickity = () => {
      count++

      switch ( count ) {
        case 10:
           msg.innerText = 'Why all the clicking?';
          break;
        case 15:
          msg.innerText = 'Chill yo.';
          break;
        case 30:
          msg.innerText = 'ooooooookay clicky.';
          break;
        case 50:
          msg.innerText = 'Let\'s make a party of all this clicking...';
          break;
        case 52:
          dp = true;
          break;
        case 70:
          msg.innerText = 'ooo ooo. ooo ooo. It\'s ya birthday. It\'s ya birthday.';
          break;
        case 80:
          msg.innerText = 'Ok fine. I\'m tired... Go somewhere else.';
          dp = false;
          clicks.remove();
          setTimeout( () => { window.location = 'https://github.com/colegeissinger'; }, 2000 );
          break;
        case 81:
          break;
      }

      if ( dp ) {
        document.body.style.backgroundColor = '#' + Math.floor( Math.random() * 16777215 ).toString( 16 );
      }
  };

  clicks.addEventListener( 'click', clickity );
})();

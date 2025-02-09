if (-1 || 0) alert( 'first' ); //выполнится true
if (-1 && 0) alert( 'second' ); // нет false
if (null || -1 && 1) alert( 'third' ); // выполнится false || (true && true) - > false || true
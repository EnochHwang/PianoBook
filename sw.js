var CACHE_NAME = 'PianoBook-cache-v2';

// include all the files for offline access
// do not include sw.js
const CACHE_FILES = [
  'index.html', 'manifest.json', 'styles.css', 'app.js', 'file_lists.js',
  'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
  'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js',
  
  'icons/icon-16.png',
  'icons/icon-32.png',
  'icons/icon-192.png',
  "icons/icon-512.png",
  'icons/ic_bookmark.png',
  'icons/ic_drag.png',
  'icons/ic_edit.png',
  'icons/ic_number.png',
  'icons/ic_pause.png',
  'icons/ic_play.png',
  'icons/ic_search.png',
  'icons/ic_settings.png',
  'icons/ic_stop.png',
  'icons/ic_title.png',
  'icons/ic_trash.png',
  
  "songsheets/about.png",
  "songsheets/A Love Dream - Liszt.png",
  "songsheets/A Love Dream - Liszt2.png",
  "songsheets/A Love Dream - Liszt3.png",
  "songsheets/A Love Dream - Liszt4.png",
  "songsheets/A Love Dream - Liszt5.png",
  "songsheets/A Love Dream - Liszt6.png",
  "songsheets/A Love Dream - Liszt7.png",
  "songsheets/A Love Dream - Liszt8.png",
  // "songsheets/Air on the G String - Bach.png",
  // "songsheets/Air on the G String - Bach2.png",
  // "songsheets/Air on the G String - Bach3.png",
  // "songsheets/Air on the G String - Bach4.png",
  // "songsheets/Arioso - Bach.png",
  // "songsheets/Au Clair de la lune.png",
  // "songsheets/Auld Lang Syne.png",
  // "songsheets/Ave Maria - Bach-Gounod.png",
  // "songsheets/Ave Maria - Bach-Gounod2.png",
  // "songsheets/Ave Maria - Bach-Gounod3.png",
  // "songsheets/Ave Maria - Schubert.png",
  // "songsheets/Ave Maria - Schubert2.png",
  // "songsheets/Bridal March - Wagner.png",
  // "songsheets/Bridal March - Wagner2.png",
  "songsheets/Clair de Lune - Debussy.png",
  "songsheets/Clair de Lune - Debussy2.png",
  "songsheets/Clair de Lune - Debussy3.png",
  "songsheets/Clair de Lune - Debussy4.png",
  "songsheets/Clair de Lune - Debussy5.png",
  "songsheets/Clair de Lune - Debussy6.png",
  // "songsheets/Consolation No 3 - Liszt.png",
  // "songsheets/Consolation No 3 - Liszt2.png",
  // "songsheets/Consolation No 3 - Liszt3.png",
  // "songsheets/Consolation No 3 - Liszt4.png",
  // "songsheets/Cradle Song - Hauser.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton2.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton3.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton4.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton5.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton6.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton7.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton8.png",
  // "songsheets/CS Theme and Variations PRIMO - Compton9.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton2.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton3.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton4.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton5.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton6.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton7.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton8.png",
  // "songsheets/CS Theme and Variations SECONDO - Compton9.png",
  // "songsheets/Edelweiss - Rodgers and Hammerstein.png",
  // "songsheets/Edelweiss - Rodgers and Hammerstein2.png",
  // "songsheets/Etude Op 10 No 3 - Chopin.png",
  // "songsheets/Etude Op 10 No 3 - Chopin2.png",
  // "songsheets/Etude Op 10 No 3 - Chopin3.png",
  // "songsheets/Etude Op 10 No 3 - Chopin4.png",
  // "songsheets/Etude Op 10 No 3 - Chopin5.png",
  // "songsheets/Etude Op 10 No 3 - Chopin6.png",
  // "songsheets/Etude Op 10 No 3 - Chopin7.png",
  // "songsheets/Fantaisie-Impromptu - Chopin.png",
  // "songsheets/Fantaisie-Impromptu - Chopin2.png",
  // "songsheets/Fantaisie-Impromptu - Chopin3.png",
  // "songsheets/Fantaisie-Impromptu - Chopin4.png",
  // "songsheets/Fantaisie-Impromptu - Chopin5.png",
  // "songsheets/Fantaisie-Impromptu - Chopin6.png",
  // "songsheets/Fantaisie-Impromptu - Chopin7.png",
  // "songsheets/Fantaisie-Impromptu - Chopin8.png",
  // "songsheets/Fantaisie-Impromptu - Chopin9.png",
  // "songsheets/Fantaisie-Impromptu - Chopin10.png",
  // "songsheets/Fantaisie-Impromptu - Chopin11.png",
  // "songsheets/Fantaisie-Impromptu - Chopin12.png",
  // "songsheets/Fantaisie-Impromptu - Chopin13.png",
  // "songsheets/Fantaisie-Impromptu - Chopin14.png",
  "songsheets/Fur Elise - Beethoven.png",
  "songsheets/Fur Elise - Beethoven2.png",
  "songsheets/Fur Elise - Beethoven3.png",
  "songsheets/Fur Elise - Beethoven4.png",
  // "songsheets/God Save the King.png",
  "songsheets/Happy Birthday.png",
  "songsheets/Happy Birthday2.png",
  "songsheets/Happy Birthday3.png",
  "songsheets/Happy Birthday4.png",
  // "songsheets/Home Sweet Home - Bishop.png",
  "songsheets/Humoreske - Dvorak.png",
  "songsheets/Humoreske - Dvorak2.png",
  "songsheets/Humoreske - Dvorak3.png",
  "songsheets/I Can\'t Help Falling In Love With You.png",
  "songsheets/I Can\'t Help Falling In Love With You2.png",
  // "songsheets/Impromptu in G flat major - Schubert.png",
  // "songsheets/Impromptu in G flat major - Schubert2.png",
  // "songsheets/Impromptu in G flat major - Schubert3.png",
  // "songsheets/Impromptu in G flat major - Schubert4.png",
  // "songsheets/Impromptu in G flat major - Schubert5.png",
  // "songsheets/Impromptu in G flat major - Schubert6.png",
  // "songsheets/Impromptu in G flat major - Schubert7.png",
  // "songsheets/Impromptu in G flat major - Schubert8.png",
  // "songsheets/Impromptu in G flat major - Schubert9.png",
  // "songsheets/In a Monastery Garden - Ketelbey.png",
  // "songsheets/In a Monastery Garden - Ketelbey2.png",
  // "songsheets/In a Monastery Garden - Ketelbey3.png",
  // "songsheets/In a Monastery Garden - Ketelbey4.png",
  // "songsheets/In a Monastery Garden - Ketelbey5.png",
  // "songsheets/In a Monastery Garden - Ketelbey6.png",
  "songsheets/Intermezzo - Mascagni.png",
  "songsheets/Intermezzo - Mascagni2.png",
  "songsheets/Intermezzo - Mascagni3.png",
  // "songsheets/Jesu, Joy of Man\'s Desiring - JS Bach.png",
  // "songsheets/Jesu, Joy of Man\'s Desiring - JS Bach2.png",
  // "songsheets/Jesu, Joy of Man\'s Desiring - JS Bach3.png",
  // "songsheets/Jesu, Joy of Man\'s Desiring - JS Bach4.png",
  // "songsheets/Jesu, Joy of Man\'s Desiring - JS Bach5.png",
  // "songsheets/Joyous Farmer - Schumann.png",
  // "songsheets/La Paloma - Yradier.png",
  // "songsheets/La Paloma - Yradier2.png",
  // "songsheets/La Vie En Rose.png",
  // "songsheets/La Vie En Rose2.png",
  // "songsheets/Largo - Handel.png",
  // "songsheets/Largo - Handel2.png",
  "songsheets/Londonderry Air.png",
  "songsheets/Londonderry Air2.png",
  // "songsheets/Long, Long Ago.png",
  "songsheets/Love Story.png",
  "songsheets/Love Story2.png",
  "songsheets/Love Story3.png",
  // "songsheets/Meditation - Massenet.png",
  // "songsheets/Meditation - Massenet2.png",
  // "songsheets/Meditation - Massenet3.png",
  // "songsheets/Meditation - Massenet4.png",
  // "songsheets/Melody in F - Rubinstein.png",
  // "songsheets/Melody in F - Rubinstein2.png",
  // "songsheets/Minuet - Boccherini.png",
  // "songsheets/Minuet - Boccherini2.png",
  // "songsheets/Minuet - Mozart.png",
  // "songsheets/Minuet In G - Beethoven.png",
  // "songsheets/Minuet In G - Beethoven2.png",
  "songsheets/Moonlight Sonata 1st Movement - Beethoven.png",
  "songsheets/Moonlight Sonata 1st Movement - Beethoven2.png",
  "songsheets/Moonlight Sonata 1st Movement - Beethoven3.png",
  "songsheets/Moonlight Sonata 1st Movement - Beethoven4.png",
  // "songsheets/Moonlight Sonata 2nd Movement - Beethoven.png",
  // "songsheets/Moonlight Sonata 2nd Movement - Beethoven2.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven2.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven3.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven4.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven5.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven6.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven7.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven8.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven9.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven10.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven11.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven12.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven13.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven14.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven15.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven16.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven17.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven18.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven19.png",
  // "songsheets/Moonlight Sonata 3rd Movement - Beethoven20.png",
  // "songsheets/Musette - JS Bach.png",
  // "songsheets/My Old Kentucky Home.png",
  // "songsheets/My Tribute - Crouch.png",
  // "songsheets/My Tribute - Crouch2.png",
  // "songsheets/My Tribute - Crouch3.png",
  // "songsheets/My Tribute - Crouch4.png",
  // "songsheets/My Tribute - Crouch5.png",
  // "songsheets/My Tribute - Crouch6.png",
  // "songsheets/My Tribute - Crouch7.png",
  // "songsheets/My Tribute - Crouch8.png",
  // "songsheets/My Tribute - Crouch9.png",
  "songsheets/Nocturne Op 9 No 2 - Chopin.png",
  "songsheets/Nocturne Op 9 No 2 - Chopin2.png",
  "songsheets/Nocturne Op 9 No 2 - Chopin3.png",
  "songsheets/O Divine Redeemer - Gounod.png",
  "songsheets/O Divine Redeemer - Gounod2.png",
  "songsheets/O Divine Redeemer - Gounod3.png",
  "songsheets/O Divine Redeemer - Gounod4.png",
  "songsheets/O Divine Redeemer - Gounod5.png",
  // "songsheets/O Sole Mio - Eduardo di Capua.png",
  // "songsheets/O Sole Mio - Eduardo di Capua2.png",
  // "songsheets/O Sole Mio - Eduardo di Capua3.png",
  // "songsheets/Old Black Joe.png",
  // "songsheets/Passacaglia - Handel Halvorsen.png",
  // "songsheets/Passacaglia - Handel Halvorsen2.png",
  // "songsheets/Passacaglia - Handel Halvorsen3.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven2.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven3.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven4.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven5.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven6.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven7.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven8.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven9.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven10.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven11.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven12.png",
  // "songsheets/Pathetique Sonata 1st Movement - Beethoven13.png",
  // "songsheets/Pathetique Sonata 2nd Movement - Beethoven.png",
  // "songsheets/Pathetique Sonata 2nd Movement - Beethoven2.png",
  // "songsheets/Pathetique Sonata 2nd Movement - Beethoven3.png",
  // "songsheets/Pathetique Sonata 2nd Movement - Beethoven4.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven2.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven3.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven4.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven5.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven6.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven7.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven8.png",
  // "songsheets/Pathetique Sonata 3rd Movement - Beethoven9.png",
  // "songsheets/Plaisir d\'amour - Martini.png",
  // "songsheets/Plaisir d\'amour - Martini2.png",
  // "songsheets/Plaisir d\'amour - Martini3.png",
  // "songsheets/Plaisir d\'amour - Martini4.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff2.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff3.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff4.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff5.png",
  // "songsheets/Prelude in C-sharp Minor - Rachmaninoff6.png",
  // "songsheets/Prelude Op. 28, No. 7 - Chopin.png",
  // "songsheets/Prelude Op. 28, No. 20 - Chopin.png",
  // "songsheets/Reverie - Debussy.png",
  // "songsheets/Reverie - Debussy2.png",
  // "songsheets/Reverie - Debussy3.png",
  // "songsheets/Reverie - Debussy4.png",
  // "songsheets/Reverie - Debussy5.png",
  // "songsheets/River Flows In You - Yiruma.png",
  // "songsheets/River Flows In You - Yiruma2.png",
  // "songsheets/River Flows In You - Yiruma3.png",
  // "songsheets/Salut D\'Amour - Elgar.png",
  // "songsheets/Salut D\'Amour - Elgar2.png",
  // "songsheets/Salut D\'Amour - Elgar3.png",
  // "songsheets/Salut D\'Amour - Elgar4.png",
  // "songsheets/Salut D\'Amour - Elgar5.png",
  "songsheets/Serenade - Liszt.png",
  "songsheets/Serenade - Liszt2.png",
  "songsheets/Serenade - Liszt3.png",
  "songsheets/Serenade - Liszt4.png",
  "songsheets/Serenade - Liszt5.png",
  "songsheets/Serenade - Liszt6.png",
  // "songsheets/Serenade - Schubert.png",
  // "songsheets/Serenade - Schubert2.png",
  // "songsheets/Serenade - Schubert3.png",
  // "songsheets/Serenade - Schubert4.png",
  // "songsheets/Serenata - Toselli.png",
  // "songsheets/Serenata - Toselli2.png",
  // "songsheets/Serenata - Toselli3.png",
  // "songsheets/Silent Night, Holy Night - Gruber.png",
  // "songsheets/Spring Song - Mendelssohn.png",
  // "songsheets/Spring Song - Mendelssohn2.png",
  // "songsheets/Spring Song - Mendelssohn3.png",
  // "songsheets/Surprise Symphony - Haydn.png",
  // "songsheets/Swanee River.png",
  // "songsheets/The Beautiful Blue Danube - Strauss.png",
  // "songsheets/The Beautiful Blue Danube - Strauss2.png",
  // "songsheets/The Beautiful Blue Danube - Strauss3.png",
  // "songsheets/The Beautiful Blue Danube - Strauss4.png",
  // "songsheets/The Beautiful Blue Danube - Strauss5.png",
  // "songsheets/The Beautiful Blue Danube - Strauss6.png",
  // "songsheets/The Beautiful Blue Danube - Strauss7.png",
  // "songsheets/The Beautiful Blue Danube - Strauss8.png",
  // "songsheets/The Beautiful Blue Danube - Strauss9.png",
  // "songsheets/The Entertainer - Joplin.png",
  // "songsheets/The Entertainer - Joplin2.png",
  // "songsheets/The Entertainer - Joplin3.png",
  // "songsheets/The Entertainer - Joplin4.png",
  // "songsheets/The Holy City - Adams.png",
  // "songsheets/The Holy City - Adams2.png",
  // "songsheets/The Holy City - Adams3.png",
  // "songsheets/The Holy City - Adams4.png",
  // "songsheets/The Holy City - Adams5.png",
  // "songsheets/The Holy City - Adams6.png",
  // "songsheets/The Holy City - Adams7.png",
  "songsheets/The Lord\'s Prayer - Malotte.png",
  "songsheets/The Lord\'s Prayer - Malotte2.png",
  "songsheets/The Lord\'s Prayer - Malotte3.png",
  "songsheets/The Lord\'s Prayer - Malotte4.png",
  "songsheets/The Moon Represents My Heart - Teng.png",
  "songsheets/The Moon Represents My Heart - Teng2.png",
  // "songsheets/The Prayer - Sager and Foster.png",
  // "songsheets/The Prayer - Sager and Foster2.png",
  // "songsheets/The Prayer - Sager and Foster3.png",
  // "songsheets/The Prayer - Sager and Foster4.png",
  // "songsheets/The Prayer - Sager and Foster5.png",
  // "songsheets/The Prayer - Sager and Foster6.png",
  // "songsheets/The Prayer - Sager and Foster7.png",
  // "songsheets/The Star Spangled Banner.png",
  // "songsheets/The Swan - Saint-Saens.png",
  // "songsheets/The Swan - Saint-Saens2.png",
  // "songsheets/The Unfinished Symphony - Schubert.png",
  // "songsheets/Traumerei - Schumann.png",
  // "songsheets/Two Arabesques I - Debussy.png",
  // "songsheets/Two Arabesques I - Debussy2.png",
  // "songsheets/Two Arabesques I - Debussy3.png",
  // "songsheets/Two Arabesques I - Debussy4.png",
  // "songsheets/Two Arabesques I - Debussy5.png",
  // "songsheets/Two Arabesques I - Debussy6.png",
  // "songsheets/Two Arabesques I - Debussy7.png",
  // "songsheets/Waltz in A Flat - Brahms.png",
  // "songsheets/Waltz in A Flat - Brahms2.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin2.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin3.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin4.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin5.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin6.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin7.png",
  // "songsheets/Waltz in C Sharp Minor - Chopin8.png",
  // "songsheets/Wedding March - Mendelssohn.png",
  // "songsheets/Wedding March - Mendelssohn2.png",
  // "songsheets/Wedding March - Mendelssohn3.png",
  // "songsheets/Wedding March - Mendelssohn4.png",
  // "songsheets/Wedding March - Mendelssohn5.png",
  // "songsheets/Wedding March - Mendelssohn6.png",
  // "songsheets/You\'ll Never Walk Alone - Rodgers and Hammerstein.png",
  // "songsheets/You\'ll Never Walk Alone - Rodgers and Hammerstein2.png",
  // "songsheets/You\'ll Never Walk Alone - Rodgers and Hammerstein3.png",

  // "audios/A Love Dream - Liszt.mp3",
  // "audios/Air on the G String - Bach.mp3",
  // "audios/Arioso - Bach.mp3",
  // "audios/Au Clair de la lune.mp3",
  // "audios/Auld Lang Syne.mp3",
  // "audios/Ave Maria - Bach-Gounod.mp3",
  // "audios/Ave Maria - Schubert.mp3",
  // "audios/Bridal March - Wagner.mp3",
  "audios/Clair de Lune - Debussy.mp3",
  // "audios/Consolation No 3 - Liszt.mp3",
  // "audios/Cradle Song - Hauser.mp3",
  // "audios/CS Theme and Variations PRIMO - Compton.mp3",
  // "audios/CS Theme and Variations SECONDO - Compton.mp3",
  // "audios/Etude Op 10 No 3 - Chopin.mp3",
    /////"audios/Fantaisie-Impromptu - Chopin.mp3", // no audio yet
  // "audios/Fur Elise - Beethoven.mp3",
  // "audios/God Save the King.mp3",
  "audios/Happy Birthday.mp3",
  // "audios/Home Sweet Home - Bishop.mp3",
  "audios/Humoreske - Dvorak.mp3",
  "audios/I Can\'t Help Falling In Love With You.mp3",
  // "audios/Impromptu in G flat major - Schubert.mp3",
  // "audios/In a Monastery Garden - Ketelbey.mp3",
  // "audios/Intermezzo - Mascagni.mp3",
  // "audios/Jesu, Joy of Man\'s Desiring - JS Bach.mp3",
  // "audios/Joyous Farmer - Schumann.mp3",
  // "audios/La Paloma - Yradier.mp3",
  // "audios/La Vie En Rose.mp3",
  // "audios/Largo - Handel.mp3",
  // "audios/Londonderry Air.mp3",
  // "audios/Long, Long Ago.mp3",
  "audios/Love Story.mp3",
  // "audios/Meditation - Massenet.mp3",
  // "audios/Melody in F - Rubinstein.mp3",
  // "audios/Minuet - Boccherini.mp3",
  // "audios/Minuet - Mozart.mp3",
  // "audios/Minuet In G - Beethoven.mp3",
  // "audios/Moonlight Sonata 1st Movement - Beethoven.mp3",
  // "audios/Moonlight Sonata 2nd Movement - Beethoven.mp3",
  // "audios/Moonlight Sonata 3rd Movement - Beethoven.mp3",
  // "audios/Musette - JS Bach.mp3",
  // "audios/My Old Kentucky Home.mp3",
  // "audios/My Tribute - Crouch.mp3",
  // "audios/Nocturne Op 9 No 2 - Chopin.mp3",
  // "audios/O Divine Redeemer - Gounod.mp3",
  // "audios/O Sole Mio - Eduardo di Capua.mp3",
  // "audios/Old Black Joe.mp3",
    /////"audios/Passacaglia - Handel Halvorsen", // no audio yet
  // "audios/Pathetique Sonata 1st Movement - Beethoven.mp3",
  // "audios/Pathetique Sonata 2nd Movement - Beethoven.mp3",
  // "audios/Pathetique Sonata 3rd Movement - Beethoven.mp3",
  // "audios/Plaisir d\'amour - Martini.mp3",
  // "audios/Prelude in C-sharp Minor - Rachmaninoff.mp3",
  // "audios/Prelude Op. 28, No. 7 - Chopin.mp3",
  // "audios/Prelude Op. 28, No. 20 - Chopin.mp3",
  // "audios/Reverie - Debussy.mp3",
  // "audios/River Flows In You - Yiruma.mp3",
  // "audios/Salut D\'Amour - Elgar.mp3",
  "audios/Serenade - Liszt.mp3",
  // "audios/Serenade - Schubert.mp3",
  // "audios/Serenata - Toselli.mp3",
  // "audios/Silent Night, Holy Night - Gruber.mp3",
  // "audios/Spring Song - Mendelssohn.mp3",
  // "audios/Surprise Symphony - Haydn.mp3",
  // "audios/Swanee River.mp3",   
  // "audios/The Beautiful Blue Danube - Strauss.mp3",
  // "audios/The Entertainer - Joplin.mp3",
  // "audios/The Holy City - Adams.mp3",
  // "audios/The Lord\'s Prayer - Malotte.mp3",
  // "audios/The Moon Represents My Heart - Teng.mp3",
    /////"audios/The Prayer - Sager and Foster.mp3", // no audio yet
  // "audios/The Star Spangled Banner.mp3",
  // "audios/The Swan - Saint-Saens.mp3",
  // "audios/The Unfinished Symphony - Schubert.mp3",
  // "audios/Traumerei - Schumann.mp3",
  // "audios/Two Arabesques I - Debussy.mp3",
  // "audios/Waltz in A Flat - Brahms.mp3",
    /////"audios/Waltz in C Sharp Minor - Chopin.mp3", // no audio yet
    /////"audios/Wedding March - Mendelssohn.mp3", // no audio yet
  "audios/You\'ll Never Walk Alone - Rodgers and Hammerstein.mp3"

  ];
  

// Install the Service Worker
self.addEventListener("install", (event) => {
  console.log("SW: Install started");
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      
      // Manual fetch with 'cache: reload' to bypass HTTP cache
      const cachePromises = CACHE_FILES.map(async (url) => {
        try {
          const response = await fetch(new Request(url, { cache: 'reload' }));
          if (!response.ok) throw new Error(`Network response was not ok for ${url}`);
          return await cache.put(url, response);
        } catch (err) {
          console.error(`Failed to fetch and cache ${url}:`, err);
        }
      });

      await Promise.all(cachePromises);
      console.log("SW: All files cached fresh from server");

    } catch (error) {
      console.error("Service Worker installation failed:", error);
    }
  })());
});

// this is executed when the 'update' message is sent by user clicking on an update button
self.addEventListener('message', function (event) {
  console.log("SW 5:User acknowledged new updates");
  if (event.data.action === 'update') {
    self.skipWaiting(); // forces the waiting service worker (i.e. with the new updates) to become the active one immediately
  }
});

// delete old cache after updating files
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("SW 7:Deleting old cache", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Claim clients AFTER the old cache is purged
      console.log("SW 8:Claiming clients after old cache is purged");
      return self.clients.claim();
    })
  );
});

// Fetch resources from cache first then from server if not in cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const url = new URL(event.request.url);
      //const fileName = decodeURI(url.pathname.split('/').pop()) || 'index.html';  // this is only needed for debugging

      try {
        //console.log(`%cSW Fetching: ${fileName}`, "color: gray;");

        // 1. Try a Strict Match first
        let cachedResponse = await cache.match(event.request);

        // 2. If no strict match, try matching by URL String ignoring search params
        // This is crucial for audio and the ?refetch= logic
        if (!cachedResponse) {
          cachedResponse = await cache.match(event.request.url, { 
            ignoreSearch: true,
            ignoreVary: true 
          });
          if (cachedResponse) {
             //console.log(`%c[Cache Hit] ${fileName} (via URL String match)`, "color: green; font-weight: bold;");
          }
        } else {
          //console.log(`%c[Cache Hit] ${fileName} (via Request match)`, "color: green; font-weight: bold;");
        }

        if (cachedResponse) return cachedResponse;

        // 3. Not in cache so do a Network Fetch
        //console.log(`%c[Network Request] ${fileName}`, "color: orange;");
        const fetchResponse = await fetch(event.request);

        // 4. Handle Partial Content (206) for Audio Stream (url has mp3)
        if (fetchResponse.status === 206 && event.request.url.match(/\.(mp3|wav|m4a)$/i)) {
          const cleanUrl = event.request.url.split('?')[0]; // Strip timestamps for saving
          // fetch the full audio file
          return fetch(cleanUrl).then(fullResponse => {
            if (fullResponse.ok) {
              cache.put(cleanUrl, fullResponse.clone()); // Save the full version
              return fullResponse;      // Play the full version
            }
            return fetchResponse; // Fallback to original if full fetch fails
          });
          
        }

        // 5. Regular files (Status 200)
        if (fetchResponse.ok) {
          const cleanUrl = event.request.url.split('?')[0];
          await cache.put(cleanUrl, fetchResponse.clone());
          //console.log(`%c[Saved to Cache] ${fileName}`, "color: #28a745;");
        }
        
        return fetchResponse;

      } catch (error) {
        // If offline and not in cache, fallback
        //console.log(`%c[Offline Error] ${fileName}`, "color: red;");
        if (event.request.mode === 'navigate') {  // Check if the request is for a web page (navigation)
          const fallback = await cache.match("index.html");
          return fallback || new Response("Offline", { status: 503 });
        }
        // It's an image or audio that failed offline, just return a 404.
        return new Response(null, { status: 404, statusText: "Offline" });
      }
    })()
  );
});


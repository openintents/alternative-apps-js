var microdata = require('node-microdata-parser')
microdata.parseUrl('https://play.google.com/store/apps/details?id=com.glu.android.bonsai', function(err, items) {
  console.log('found', items);
});

var modules={'react-native': require('react-native'), 'react': require('react')};modules['@exponent/ex-navigation']=require('@exponent/ex-navigation');modules['@exponent/vector-icons']=require('@exponent/vector-icons');modules['react-native/Libraries/Components/Touchable/TouchableBounce']=require('react-native/Libraries/Components/Touchable/TouchableBounce');modules['./assets/fonts/SpaceMono-Regular.ttf']=require('./assets/fonts/SpaceMono-Regular.ttf');modules['./assets/images/example1.jpg']=require('./assets/images/example1.jpg');modules['./assets/images/example2.jpg']=require('./assets/images/example2.jpg');modules['./assets/images/example3.jpg']=require('./assets/images/example3.jpg');modules['./assets/images/exponent-icon.png']=require('./assets/images/exponent-icon.png');modules['./assets/images/exponent-wordmark.png']=require('./assets/images/exponent-wordmark.png');modules['./assets/images/react-native.png']=require('./assets/images/react-native.png');modules['./assets/videos/ace.mp4']=require('./assets/videos/ace.mp4');modules['exponent']=require('exponent');
require('figwheel-bridge').withModules(modules).start('main','android','192.168.1.114');

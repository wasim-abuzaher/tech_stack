import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';

// Enable animations for android.
UIManager.setLayoutAnimationEnabledExperimental(true)

AppRegistry.registerComponent('tech_stack', () => App);

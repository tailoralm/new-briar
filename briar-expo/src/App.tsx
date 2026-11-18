import { StyleSheet, Text, View } from 'react-native';
import { getAndroidApiLevel } from './foundation';

export default function App() {
  let status: string;
  try {
    status = `Native adapter ready (Android API ${getAndroidApiLevel()})`;
  } catch {
    status = 'Briar native adapter unavailable. Open the Android development build.';
  }

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>Briar Development</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f4f7f3',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#173227',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    color: '#173227',
  },
});

import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light solid background
    padding: 20,
  },

  headerText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  section: {
    marginVertical: 14,
    padding: 16,
    backgroundColor: '#FFFFFF', // solid white section
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007BFF',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007BFF',
    marginBottom: 12,
    textTransform: 'capitalize',
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // light blue background
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
  },

  itemName: {
    flex: 1,
    fontSize: 16,
    color: '#0D47A1',
    fontWeight: '500',
  },

  counter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D32F2F',
    marginHorizontal: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },

  button: {
    backgroundColor: '#007BFF', // solid blue button
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

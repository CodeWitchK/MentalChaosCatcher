
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  topBar: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  container: {
    padding: 5,
    marginTop: 50,
    alignItems: 'center',
  },

  label: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: {
    width: 300,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },

  textArea: {
    height: 200,
    textAlignVertical: 'top',
    marginBottom: 0,
  },

  button: {
    backgroundColor: 'purple',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 50,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 5,
  },

  saveButton: {
    backgroundColor: '#800080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'stretch',
    elevation: 3,
  },

  deleteButton: {
    backgroundColor: '#DB5A6B',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  noteCard: {
    backgroundColor: '#FAF3FF',
    borderColor: '#7D3C98',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 4,
    marginHorizontal: 8,
    width: 350,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },

  noteHeader: {
    borderBottomWidth: 2,
    borderColor: '#800080',
    alignItems: 'center',
    marginVertical: 6,
    paddingBottom: 2,
  },

  noteTitle: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#4B0082',
    fontFamily: 'Georgia',
    marginTop: 10,
  },

  timestamp: {
    fontSize: 12,
    color: '#4B0082',
    marginTop: 4,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  noteActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
});
export default function Styles() {
    return null;
}
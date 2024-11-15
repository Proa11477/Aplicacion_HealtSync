/* Datos requeridos para el inicio de sesion
Text title Create your account 
input First Name
input Last Name
input Email
input Password
input Confirm Password
Picker Role selection options : Senior, Family member, Doctor
Button Create Account
text Already have an account? Log In
*/
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const CustomPicker = ({ label, selectedValue, onValueChange, options }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
        <Text style={styles.pickerText}>
          {selectedValue || 'Seleccione'}
        </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => {
                  onValueChange(option.value);
                  setModalVisible(false);
                }}
              >
                <option.icon name={option.iconName} size={20} color="black" style={styles.optionIcon} />
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const SignUpForm = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Cuenta creada con éxito');
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.labelInput}>First Name</Text>
        <TextInput placeholder="First Name..." style={styles.input} value={firstName} onChangeText={setFirstName} />
        <Text style={styles.labelInput}>Last Name</Text>        
        <TextInput placeholder="Last Name..." style={styles.input} value={lastName} onChangeText={setLastName} />
        <Text style={styles.labelInput}>Email</Text>        
        <TextInput placeholder="Email..." style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        <Text style={styles.labelInput}>Password</Text>        
        <TextInput placeholder="Password..." style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        <Text style={styles.labelInput}>Confirm Password</Text>        
        <TextInput placeholder="Confirm Password..." style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

        <CustomPicker
            label="Role"
            selectedValue={role}
            onValueChange={setRole}
            options={[
            { label: 'Senior', value: 'Senior', icon: MaterialIcons, iconName: 'person' },
            { label: 'Family Member', value: 'Family Member', icon: MaterialIcons, iconName: 'group' },
            { label: 'Doctor', value: 'Doctor', icon: MaterialIcons, iconName: 'local-hospital' },
            ]}
      />
        <View style={{marginHorizontal: 40}}>
            <Button color='#187D97' title="Create Account" onPress={handleSignUp} />
        </View>
        <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink} >Log In</Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
},
  title: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    marginTop:90,
    marginBottom: 40, 
    textAlign: 'center' ,
    color: '#187D97'
},
  input: { 
    borderBottomWidth: 1, 
    marginBottom: 10, 
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 5,
    borderBottomColor: '#A9DDD1',
    marginBottom: 20,
    marginHorizontal: 40
},
  pickerContainer: { 
    marginBottom: 50, 
    marginHorizontal: 40
},
  label: { 
    fontSize: 16, 
    marginBottom: 5 
},
  pickerButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5 
},
  pickerText: { 
    flex: 1 
},
  modalOverlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
},
  modalContent: { 
    width: '80%',
    backgroundColor: 'white', 
    borderRadius: 5, 
    padding: 20 },
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10 
},
  optionIcon: { 
    marginRight: 10 
},
  optionText: { 
    fontSize: 16 
},
  loginText: { 
    textAlign: 'center', 
    marginTop: 20 
},
  loginLink: { 
    color: 'blue' 
},
labelInput:
 {
    fontSize: 16,
    marginBottom: 5,
    marginHorizontal: 40
}
});

export default SignUpForm;

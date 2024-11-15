import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';



const PatientForm = () => {
  // Variables para los datos básicos del paciente
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  
  // Control para el paso del formulario
  const [step, setStep] = useState(1);

  // Variables para el tipo de registro y los datos específicos
  const [selectedOption, setSelectedOption] = useState('');
  const [additionalData, setAdditionalData] = useState({
    bloodPressure: '',
    cholesterol: '',
    glucose: '',
    oxygenSaturation: '',
    respiratoryRate: '',
    pregnancies: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    heartBeatsPerSecond: '',
    heartRatePerMinute: '',
    temperature: '',
  });

  // Funciones para manejar los cambios de datos
  const handleNext = () => {
    if (!age || !gender) {
      Alert.alert("Por favor, completa todos los campos.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    resetForm();
    setStep(1);
  };

  const handleVerify = () => {
    Alert.alert('Resumen de la Medición: \n'+selectedOption+' Normal');
  };
  const resetForm = () => {
    setSelectedOption('Presión Arterial');
    setAdditionalData({
      bloodPressure: '',
      cholesterol: '',
      glucose: '',
      oxygenSaturation: '',
      respiratoryRate: '',
      pregnancies: '',
      skinThickness: '',
      insulin: '',
      bmi: '',
      heartBeatsPerSecond: '',
      heartRatePerMinute: '',
      temperature: '',
    });
  };

  // Este es basicamente para renderizar los inputs según la opción que se seleccione en el picker
  const renderAdditionalFields = () => {
    switch (selectedOption) {
      case 'Hipertension':
        return (
          <>
            <TextInput placeholder="Presión arterial" style={styles.input} value={additionalData.bloodPressure} onChangeText={(value) => setAdditionalData({ ...additionalData, bloodPressure: value })} />
            <TextInput placeholder="Nivel de colesterol" style={styles.input} value={additionalData.cholesterol} onChangeText={(value) => setAdditionalData({ ...additionalData, cholesterol: value })} />
            <TextInput placeholder="Nivel de glucosa" style={styles.input} value={additionalData.glucose} onChangeText={(value) => setAdditionalData({ ...additionalData, glucose: value })} />
            <TextInput placeholder="Saturación de oxígeno" style={styles.input} value={additionalData.oxygenSaturation} onChangeText={(value) => setAdditionalData({ ...additionalData, oxygenSaturation: value })} />
          </>
        );
      case 'Frecuencia Respiratoria':
        return (
          <TextInput placeholder="Frecuencia respiratoria" style={styles.input} value={additionalData.respiratoryRate} onChangeText={(value) => setAdditionalData({ ...additionalData, respiratoryRate: value })} />
        );
      case 'Presión Arterial':
        return (
          <>
            {gender === 'Femenino' && (
                
              <TextInput placeholder="Número de embarazos" style={styles.input} value={additionalData.pregnancies} onChangeText={(value) => setAdditionalData({ ...additionalData, pregnancies: value })} />
            )}
            <TextInput placeholder="Glucosa" style={styles.input} value={additionalData.glucose} onChangeText={(value) => setAdditionalData({ ...additionalData, glucose: value })} />
            <TextInput placeholder="Presión sanguínea" style={styles.input} value={additionalData.bloodPressure} onChangeText={(value) => setAdditionalData({ ...additionalData, bloodPressure: value })} />
            <TextInput placeholder="Grosor de piel" style={styles.input} value={additionalData.skinThickness} onChangeText={(value) => setAdditionalData({ ...additionalData, skinThickness: value })} />
            <TextInput placeholder="Insulina" style={styles.input} value={additionalData.insulin} onChangeText={(value) => setAdditionalData({ ...additionalData, insulin: value })} />
            <TextInput placeholder="IMC" style={styles.input} value={additionalData.bmi} onChangeText={(value) => setAdditionalData({ ...additionalData, bmi: value })} />
          </>
        );
      case 'Frecuencia Cardíaca':
        return (
          <>
            <TextInput placeholder="Latidos por segundo" style={styles.input} value={additionalData.heartBeatsPerSecond} onChangeText={(value) => setAdditionalData({ ...additionalData, heartBeatsPerSecond: value })} />
            <TextInput placeholder="Frecuencia cardíaca (minutos)" style={styles.input} value={additionalData.heartRatePerMinute} onChangeText={(value) => setAdditionalData({ ...additionalData, heartRatePerMinute: value })} />
            <TextInput placeholder="Frecuencia respiratoria" style={styles.input} value={additionalData.respiratoryRate} onChangeText={(value) => setAdditionalData({ ...additionalData, respiratoryRate: value })} />
            <TextInput placeholder="Saturación de oxígeno" style={styles.input} value={additionalData.oxygenSaturation} onChangeText={(value) => setAdditionalData({ ...additionalData, oxygenSaturation: value })} />
            <TextInput placeholder="Temperatura corporal" style={styles.input} value={additionalData.temperature} onChangeText={(value) => setAdditionalData({ ...additionalData, temperature: value })} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>Datos Del Paciente</Text>            
          <Text>Edad:</Text>
          <TextInput placeholder="Edad" style={styles.input} keyboardType="numeric" value={age} onChangeText={setAge} />
          
          <Text>Sexo:</Text>
          <Picker style={styles.picker} selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
            <Picker.Item label="Seleccione un Sexo" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Femenino" value="Femenino" />
          </Picker>
          

          <Text>Selecciona una opción para la medición:</Text>
          <Picker style={styles.picker} selectedValue={selectedOption} onValueChange={(itemValue) => setSelectedOption(itemValue)}>
            <Picker.Item label="Presión arterial" value="Presión Arterial" />
            <Picker.Item label="Frecuencia cardíaca" value="Frecuencia Cardíaca" />
            <Picker.Item label="Frecuencia respiratoria" value="Frecuencia Respiratoria" />
            <Picker.Item label="Hipertensión" value="Hipertension" />
          </Picker>
          
          <Button  title="Siguiente" onPress={handleNext} />
        </>
      )}
      
      {step === 2 && (
        <>
          <Text style={styles.title}>{selectedOption}</Text>
          {renderAdditionalFields()}
          <View style={
                {
                    justifyContent: "space-between", 
                    display: "flex", 
                    flexDirection: "row",
                    marginTop: 20
                }
                }>
            <Button title="Atrás" onPress={handleBack} />
            <Button title="Verificar" onPress={handleVerify} />
          </View>
          
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 60 },
  input: { 
    borderBottomWidth: 1, 
    marginBottom: 10, 
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 5,
    borderBottomColor: '#A9DDD1',
    marginBottom: 20
    },
  title: { 
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
},
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 10,
    marginVertical:10
  },
});

export default PatientForm;

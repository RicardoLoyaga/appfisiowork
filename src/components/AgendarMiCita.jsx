import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-native';
import { Text, StyleSheet,SafeAreaView,View, Image, Platform, TextInput, Alert } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { AuthContext } from "../auth/AuthContext";

const AgendarMiCita = () => {
    
    const { user } = useContext(AuthContext);

    const email = user.email;
    const idcliente = user.idcliente;

    const history = useNavigate();
    //const { idcliente } = useParams();
    const [fechaReserva, setFechaReserva] = useState('');
    const [observacion, setObservacion] = useState('');
    const [horaReserva, setHoraReserva] = useState('');
    const [especialistadata, setEspecialistaData] = useState([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [modeDate, setModeDate] = useState('date');
    const [modeTime, setModeTime] = useState('time');
    //const [fecha, setFecha] = useState('Empty');
    const [date, setDate] = useState(new Date());

    const today = new Date().toISOString().split('T')[0];

    var hora = new Date();
    var now = hora.getHours();
    var horaaumentada = now + 1;
    var horaagenda = horaaumentada + ':00';

    const onChangeDate = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' +(tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setFechaReserva(fDate);

    }

    const onChangeTime = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setShowTime(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fTime = tempDate.getHours() + ':'+ tempDate.getMinutes();
        setHoraReserva(fTime);

    }

    const showModeDate = (currentMode) => {
        setShowDate(true);
        setModeDate(currentMode);
    }

    const showModeHour = (currentMode) => {
        setShowTime(true);
        setModeTime(currentMode);
    }

    const URLBase = "http://192.168.0.104:44423/api/reserva/insertarreserva";

    useEffect(() => {
        axios.get('http://192.168.0.104:44423/api/especialista/obtenerespecialistas')
        .then(response => {
            console.log(JSON.stringify(response.data));
            var count = Object.keys(response.data).length;
            let especialistaArray = [];
            for(var i = 0; i< count; i++){
                especialistaArray.push({
                    value: response.data[i].idespecialista,
                    label: response.data[i].nombreespecialista + ' ' +response.data[i].apellidoespecialista
                });
            }
            setEspecialistaData(especialistaArray);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    const guardarReserva = async (e) => {
        e.preventDefault();
        if (horaReserva < horaagenda && fechaReserva == today) {
            Alert.alert('', 'No se puede elegir la cita de hoy en ese horario, por favor seleccione una nueva hora', [
                {text: 'OK', onPress: () => console.log('cerrar')}
            ]);

        } else {
            try {
                const options = {
                    headers: { "content-type": "application/json" }
                }

                const formularioData = new FormData()
                formularioData.append('idcliente', idcliente)
                formularioData.append('idespecialista', value)
                formularioData.append('fechareserva', fechaReserva)
                formularioData.append('observacionreserva', observacion.toUpperCase())
                formularioData.append('horareserva', horaReserva.toString())
                await axios.post("http://192.168.0.104:44423/api/reserva/validareserva", formularioData, options)
                    .then((res) => {
                        //Swal.fire('Atención', res.data, 'info');
                        Alert.alert('Atención', res.data, [
                            {text: 'OK', onPress: () => console.log('cerrar')}
                        ]);
                    })
                    .catch(err => {
                        console.log(err);
                        if (err.response.status == 404) {
                            async function guardarReserva() {
                                const options = {
                                    headers: { "content-type": "application/json" }
                                }
                                const formData = new FormData()
                                formData.append('idcliente', idcliente)
                                formData.append('idespecialista', especialista)
                                formData.append('fechareserva', fechaReserva)
                                formData.append('observacionreserva', observacion.toUpperCase())
                                formData.append('horareserva', horaReserva.toString())
                                await axios.post(URLBase, formData, options)
                                    .then((res) => {
                                        //Swal.fire('', res.data, 'success');
                                        Alert.alert('', res.data, [
                                            {text: 'OK', onPress: () => console.log('cerrar')}
                                        ]);
                                        setFechaReserva("");
                                        setHoraReserva("");
                                        setObservacion("");
                                        //setLoading(false);
                                        history('/');
                                    })
                                    .catch(error => { console.log(error); 
                                        //Swal.fire('Error', 'algo salió mal', 'warning') });
                                        Alert.alert('Error', 'algo salió mal', [
                                            {text: 'OK', onPress: () => console.log('cerrar')}
                                        ]);});
                            }

                            guardarReserva();
                        }

                    });

            } catch (e) {
                console.log("Error catch axios", e);
            }
        }


    }

  return (
    <SafeAreaView style={{marginHorizontal:10,}}>
        <View>
            <Text style={styles.title}>Agendar Cita</Text>
            <Text></Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={especialistadata}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Seleccione un especialista' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color={isFocus ? 'blue' : 'black'}
                    name="Safety"
                    size={20}
                    />
                )}
            />
            <View >
                <Text></Text>
                <Icon 
                type="material-community"
                name='calendar-month-outline'
                size={50}
                color='#283890' 
                onPress={()=> showModeDate('date')}
                style={{marginTop:10}}/>
            <Text>Fecha Reserva: {fechaReserva}</Text>
            
            </View>
            <View>
            <Text></Text>
            <Icon 
                type="material-community"
                name='calendar-clock-outline'
                size={50}
                color='#283890' 
                onPress={()=> showModeHour('time')}
                style={{margin:10}}/>
                <Text>Hora reserva: {horaReserva}</Text>
            </View>
            
            {showDate && (
            <DateTimePicker 
            testID='datePicker'
            value={date}
            mode={modeDate}
            is24Hour={true}
            display='default'
            //minimumDate={today}
            onChange={onChangeDate}
            />)}

            {showTime && (
            <DateTimePicker 
            testID='timePicker'
            value={date}
            mode={modeTime}
            is24Hour={true}
            display='default'
            onChange={onChangeTime}
            />)}
            
        </View>
        <View>
            <Text></Text>
            <Text>Observaciones:</Text>
            <Text></Text>
            <TextInput style={styles.input} 
                    onChangeText={e => setObservacion(e)}
                    value={observacion}
                    />
                    <Text></Text>
                    <Text></Text>
            <Button 
                    title="Guardar"
                    color="#283890"
                    onPress={guardarReserva} 
                    />
        </View>
    </SafeAreaView>
  )
}

export default AgendarMiCita;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      justifyContent:'center',
      alignContent:'center',
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    title:{
        fontSize:18,
        color:'#283890',
        justifyContent:'center',
        textAlign:'center',
    },
    input:{
        borderBottomWidth: 1, 
        borderBottomColor: "#283890",
        marginBottom: 3,
        marginTop:5
    }
  });

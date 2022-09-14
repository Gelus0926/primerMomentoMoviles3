import React, { useRef } from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles1,viewsChilds } from './assets/styles/myStyles';

const YourApp = () => {

  const [Identificacion, setIdentificacion] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Asignatura, setAsignatura] = useState('');
  const [Nota1, setNota1] = useState('');
  const [Nota2, setNota2] = useState('');
  const [Nota3, setNota3] = useState('');
  const [Definitiva, setDefinitiva] = useState(0);
  const [Observacion, setObservacion] = useState('');
  const [TextError, setTextError] = useState('');
  const [Datos , setDatos] = useState([]);
  let refIdentificacion = useRef();
  //const [radioButtons, setRadioButtons] = useState(radioButtonsData)



    /* function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    } */

  function Limpiar() {
    setIdentificacion('');
    setNombre('');
    setAsignatura('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinitiva('');
    setObservacion('');
    setTextError('');
  }

  const guardar = () => {
    if (Identificacion == "" || Nombre == "" || Asignatura == "" || Nota1 == "" || Nota2== "" || Nota3== "" ) {
      setTextError('TODOS LOS DATOS SON REQUERIDOS! ');
    }
    else{
      if (parseFloat(Nota1) >=0 && parseFloat(Nota1) <= 5 && parseFloat(Nota2) >=0 && parseFloat(Nota2) <= 5 && parseFloat(Nota3) >=0 && parseFloat(Nota3) <= 5) {
        let sumaNotas = (parseFloat(Nota1)+parseFloat(Nota2)+parseFloat(Nota3))
        let promedioNotas = (sumaNotas/3).toFixed(2);
        let obs="";
        setDefinitiva(promedioNotas);

        if (promedioNotas>3) {
          obs = `Aprueba: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }else if(promedioNotas>=2 && promedioNotas<=2.94){
          obs = `Habilita: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }else if(promedioNotas<2){
          obs = `Reprueba: Su definitiva es ${promedioNotas}`
          setObservacion(obs)
        }
        //Agregar datos al array a través del método setSalarios para el array salarios
        setDatos(misDatos => [...misDatos,{identificacion:Identificacion ,nombre:Nombre,asignatura:Asignatura ,nota1:Nota1 ,nota2:Nota2 ,nota3:Nota3 ,definitiva:promedioNotas ,observacion:obs}] );
        //console.log(salarios);
      }else{
        setTextError('TODAS LAS NOTAS DEBEN SER ENTRE 0 Y 5! ');
      }
    }

  }

  let buscar = (nombuscar) =>{
    let busca = ""
    for(let dat of Datos){
      console.log(dat)
      if (dat.identificacion == Identificacion) {
        setNombre(dat.nombre);
        setAsignatura(dat.asignatura);
        setNota1(dat.nota1);
        setNota2(dat.nota2);
        setNota3(dat.nota3);
        setDefinitiva(dat.definitiva);
        setObservacion(dat.observacion);
        busca ="aca"
      }
  }
    if(busca == ""){
      alert("Identificacion no hallada");
    }
  }

  
  
  return (
    <View style={[styles1.container,styles1.alignViews,{borderRadius:10,flexDirection: 'column'}]}>
     <View>
          <Text>Identificacion</Text>
          <TextInput
            placeholder='Ingrese su identificacion'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Identificacion => setIdentificacion(Identificacion)}
            value={Identificacion}
            ref={refIdentificacion}
          />
          <Text>{'\n'}</Text>
          <Text>Nombres</Text>
          <TextInput
            placeholder='Ingrese su nombre'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nombre => setNombre(Nombre)}
            value={Nombre}
          />
          <Text>{'\n'}</Text>
          <Text>Asignatura</Text>
          <TextInput
            placeholder='Ingrese la asignatura'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Asignatura => setAsignatura(Asignatura)}
            value={Asignatura}
          />
          {/* <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        /> */}
          <Text>{'\n'}</Text>
          <Text>Nota Momento 1 (30%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nota1 => setNota1(Nota1)}
            value={Nota1}
          />
          <Text>{'\n'}</Text>
          <Text>Nota Momento 2 (35%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nota2 => setNota2(Nota2)}
            value={Nota2}
          />
          <Text>{'\n'}</Text>
          <Text>Nota Momento 3 (35%)</Text>
          <TextInput
            placeholder='Ingrese la nota'
            style={{fontSize:15, borderWidth:2, borderColor:'#38B4FA',padding:10, textAlign:'center',borderRadius:10}}
            onChangeText={Nota3 => setNota3(Nota3)}
            value={Nota3}
          />
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>Definitiva</Text>
          <Text>{Definitiva}</Text>
          {/* <Text>{Definitiva}</Text> */}

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>Observacion</Text>
          <Text>{Observacion}</Text>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text>{TextError}</Text>
          


          <Button
            title='Calcular/Guardar'
            onPress={guardar}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Buscar'
            onPress={buscar}
          />
          <Text>{'\n'}</Text>
          <Button
            title='Limpiar'
            onPress={()=>Limpiar()}
          />
      </View>

      </View>
  );
}



export default YourApp;
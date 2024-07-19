import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener('change', updateOrientation);
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleCalculation = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <View style={isPortrait ? styles.containerPortrait : styles.containerLandscape}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            key={7}
            style={[styles.button, styles.buttonOp]}
            
          >
            <Text style={[styles.buttonText, styles.buttonOpText]}>⟳</Text>
          </TouchableOpacity>
          <TouchableOpacity key={8} style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'%'} style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            key={7}
            style={styles.button}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity key={8} style={styles.button} >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'%'} style={styles.button} >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>x</Text>
          </TouchableOpacity>
        </View><View style={styles.row}>
          <TouchableOpacity
            key={7}
            style={styles.button}
            onPress={() => setInput('')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity key={8} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'%'} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>-</Text>
          </TouchableOpacity>
        </View><View style={styles.row}>
          <TouchableOpacity
            key={7}
            style={styles.button}
            onPress={() => setInput('')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity key={8} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'%'} style={styles.button} >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>+</Text>
          </TouchableOpacity>
        </View><View style={styles.row}>
          <TouchableOpacity
            key={7}
            style={[styles.button, styles.buttonOp]}
            onPress={() => setInput('')}
          >
            <Text style={[styles.buttonText, styles.buttonOpText]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity key={8} style={styles.button} >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'%'} style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOp]} >
            <Text style={[styles.buttonText, styles.buttonOpText]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  containerLandscape: {
    height: '100vh',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  input: {
    fontSize: 30,
    marginBottom: 10,
    color: '#fff',
  },
  result: {
    fontSize: 24,
    color: '#fff',
  },
  buttonContainer: {
    width: '80%',
    height: '10vh',
    borderTopColor: '#fff',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#FF7900',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  buttonOp: {
    backgroundColor: '#FFF',
  },
  buttonOpText:{
    color: '#FF7900'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;

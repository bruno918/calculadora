import { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { keysStyles } from "../assets/styles/keys.style";

export function CalculadoraKeys() {
  const [digitos, onChangeDigitos] = useState([""]);
  const [expressao, onChangeExpressao] = useState("");

  const limpar = () => {
    onChangeDigitos([""]);
    onChangeExpressao("");
  };
  const digito = (valor: number) => {
    if (!expressao) {
      const novoValor = digitos[0].concat(String(valor));
      onChangeDigitos([novoValor]);
    } else {
      if (digitos[1] == null) {
        digitos[1] = "";
      }
      digitos[1] = digitos[1].concat(String(valor));
      onChangeDigitos(digitos);
    }
  };

  const calcular = () => {
    switch (expressao) {
      case "+":
        {
          var soma = parseInt(digitos[0]) + parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + soma);
          limpar();
        }
        break;
      case "-":
        {
          var soma = parseInt(digitos[0]) - parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + soma);
          limpar();
        }
        break;
      case "/":
        {
          var soma = parseInt(digitos[0]) / parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + soma);
          limpar();
        }
        break;
      case "x":
        {
          var soma = parseInt(digitos[0]) * parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + soma);
          limpar();
        }
        break;
    }
  };
  return (
    <View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText} onPress={()=> limpar()}>CE</Text>
        </TouchableHighlight>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>C</Text>
        </TouchableHighlight>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Image
            source={require("../assets/backspace.png")}
            style={keysStyles.backspace}
          ></Image>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            onChangeExpressao("/");
          }}
        >
          <Text style={keysStyles.keyText}>/</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(7);
          }}
        >
          <Text style={keysStyles.keyText}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(8);
          }}
        >
          <Text style={keysStyles.keyText}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(9);
          }}
        >
          <Text style={keysStyles.keyText}>9</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            onChangeExpressao("x");
          }}
        >
          <Text style={keysStyles.keyText}>X</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(4);
          }}
        >
          <Text style={keysStyles.keyText}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(5);
          }}
        >
          <Text style={keysStyles.keyText}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(6);
          }}
        >
          <Text style={keysStyles.keyText}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            onChangeExpressao("-");
          }}
        >
          <Text style={keysStyles.keyText}>-</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(1);
          }}
        >
          <Text style={keysStyles.keyText}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(2);
          }}
        >
          <Text style={keysStyles.keyText}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(3);
          }}
        >
          <Text style={keysStyles.keyText}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            onChangeExpressao("+");
          }}
        >
          <Text style={keysStyles.keyText}>+</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>+/-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => {
            digito(0);
          }}
        >
          <Text style={keysStyles.keyText}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>,</Text>
        </TouchableHighlight>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText} onPress={() => calcular()}>
            =
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

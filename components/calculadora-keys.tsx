import { console } from "globl";
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
    console.log(digitos);
  };

  const apagar = () => {
    if (!expressao) {
      digitos[0] = digitos[0].substring(0, digitos[0].length - 1);
    } else {
      digitos[1] = digitos[1].substring(0, digitos[1].length - 1);
    }
    onChangeDigitos(digitos);
    console.log(digitos);
  };
  const ce = () => {
    if (!expressao) {
      digitos[0] = digitos[0].substring(
        0,
        digitos[0].length - digitos[0].length
      );
    } else {
      digitos[1] = digitos[1].substring(
        0,
        digitos[1].length - digitos[1].length
      );
    }
    onChangeDigitos(digitos);
    console.log(digitos);
  };

  const AlterarSinal = () => {
    if (!expressao) {
      const NovoValor = String(Number(digitos[0]) *-1)      
    onChangeDigitos([NovoValor]);
  } else {
    const NovoValor = String(Number(digitos[1]) *-1) 
    onChangeDigitos([NovoValor])
  }
  }
  const calcular = () => {
    switch (expressao) {
      case "+":
        {
          var resultado = parseInt(digitos[0]) + parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + resultado);

          //limpar();
        }
        break;
      case "-":
        {
          var resultado = parseInt(digitos[0]) - parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + resultado);
          limpar();
        }
        break;
      case "/":
        {
          var resultado = parseInt(digitos[0]) / parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + resultado);
          limpar();
        }
        break;
      case "x":
        {
          var resultado = parseInt(digitos[0]) * parseInt(digitos[1]);
          console.log("digitos", digitos);
          console.log("resultado: " + resultado);
          limpar();
        }
        break;
    }
  };
  return (
    <View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText} onPress={() => ce()}>
            CE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => limpar()}
        >
          <Text style={keysStyles.keyText}>C</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => apagar()}
        >
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
        <TouchableHighlight style={keysStyles.columnKey} onPress={() => AlterarSinal()}>
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

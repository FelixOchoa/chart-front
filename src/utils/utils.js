export const obtenerConteoPorPregunta = (dataChart) => {
  const conteoPorPregunta = {};

  dataChart.forEach((respuesta) => {
    const { numeroPregunta, pregunta, opcionRespuesta, conteo } = respuesta;

    if (conteoPorPregunta.hasOwnProperty(numeroPregunta)) {
      conteoPorPregunta[numeroPregunta].push({
        numeroPregunta,
        pregunta,
        opcionRespuesta,
        conteo,
      });
    } else {
      conteoPorPregunta[numeroPregunta] = [
        {
          numeroPregunta,
          pregunta,
          opcionRespuesta,
          conteo,
        },
      ];
    }
  });

  const resultado = Object.values(conteoPorPregunta);

  return resultado;
};

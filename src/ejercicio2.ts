import { Pacientes } from "./ejercicio.tools";

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  pacientes.forEach((paciente) => {
    if (paciente.temperatura > 39 || paciente.frecuenciaCardiaca > 100) {
      activarProctolo = true;
    }
  });

  return activarProctolo;
};
import { Pacientes } from "./ejercicio.tools";

export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return true;
    }
    return false;
  });
}; 